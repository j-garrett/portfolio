import { getAllPosts, sortPostsByAscendingDate } from '../lib/posts'
import { BlogProvider } from './blog-context'

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: add blog topics for portfolio and scavenger-hunt
  const portfolioBlog = sortPostsByAscendingDate(getAllPosts('portfolio'))
  const scavengerHuntBlog = sortPostsByAscendingDate(
    getAllPosts('scavenger-hunt')
  )

  const posts = {
    portfolio: portfolioBlog,
    'scavenger-hunt': scavengerHuntBlog,
  }

  return (
    <div className="max-w-200 m-auto">
      <BlogProvider posts={posts}>{children}</BlogProvider>
    </div>
  )
}
