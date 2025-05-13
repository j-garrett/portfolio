import { getPostBySlug } from '../../lib/posts'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PageHeader from '../../components/page-header'
import BlogFooter from './blog-footer'
import Image from 'next/image'
import { BlogSubDirectories } from '../page'

export default async function BlogPostPage({
  subDirectory,
  slug,
}: {
  slug: string
  subDirectory: BlogSubDirectories
}) {
  const post = getPostBySlug(subDirectory, slug)
  return (
    <div className="pt-5">
      <PageHeader header={post.metadata.title} />
      <div className="pt-5">
        <Markdown
          // map custom components to tailwind classes
          components={{
            img: ({ src, alt, ...props }) => {
              console.log('src', src)
              console.log('alt', alt)
              return (
                <Image
                  {...props}
                  alt={alt}
                  className="m-auto pt-5"
                  height={500}
                  src={`/${src}`}
                  width={500}
                />
              )
            },
            li: ({ children, ...props }) => (
              <li className="" {...props}>
                {children}
              </li>
            ),
            ol: ({ children, ...props }) => (
              <ol className="list-disc pl-5" {...props}>
                {children}
              </ol>
            ),
            ul: ({ children, ...props }) => (
              <ul className="list-disc pl-5" {...props}>
                {children}
              </ul>
            ),
          }}
          remarkPlugins={[remarkGfm]}
        >
          {post.content}
        </Markdown>
        <BlogFooter slug={slug} subDirectory={subDirectory} />
      </div>
    </div>
  )
}
