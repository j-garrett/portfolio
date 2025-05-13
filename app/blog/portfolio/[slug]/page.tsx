import BlogPostPage from '../../components/blog-post-page'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return <BlogPostPage slug={slug} subDirectory="portfolio" />
}
