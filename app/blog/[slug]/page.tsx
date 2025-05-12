import { getPostBySlug } from '../../lib/posts'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PageHeader from '../../components/page-header'
import BlogFooter from '../components/blog-footer'
import MainContainer from '../../components/main-container'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return (
    <div>
      <PageHeader header={post.metadata.title} />
      <MainContainer>
        <Markdown
          // custom components can be mapped here as well
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
        <BlogFooter slug={slug} />
      </MainContainer>
    </div>
  )
}
