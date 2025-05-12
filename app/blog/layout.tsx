import { getAllPosts, sortPostsByDate } from '../lib/posts'
import { BlogProvider } from './blog-context'

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = sortPostsByDate(getAllPosts('portfolio'))

  return <BlogProvider posts={posts}>{children}</BlogProvider>
}
