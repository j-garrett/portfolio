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
            h1: ({ children, ...props }) => (
              <h1 className="text-4xl" {...props}>
                {children}
              </h1>
            ),
            h2: ({ children, ...props }) => (
              <h2 className="text-3xl" {...props}>
                {children}
              </h2>
            ),
            h3: ({ children, ...props }) => (
              <h3 className="text-2xl" {...props}>
                {children}
              </h3>
            ),
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
            p: ({ children, ...props }) => (
              <p className="indent-8 pt-5" {...props}>
                {children}
              </p>
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
