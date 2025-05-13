'use client'
import Link from 'next/link'
import { useBlogContext } from '../blog-context'
import { BlogSubDirectories } from '../page'

export default function BlogFooter({
  slug,
  subDirectory,
}: {
  slug: string
  subDirectory: BlogSubDirectories
}) {
  const { posts } = useBlogContext()
  const sectionPosts = posts[subDirectory]
  const currentIndex = sectionPosts.findIndex((p) => p.slug === slug)
  const previousPost = sectionPosts[currentIndex - 1] || null
  const nextPost = sectionPosts[currentIndex + 1] || null

  return (
    <div className="border-t-1 border-b-1 border-cyan-500">
      <div className="grid grid-cols-3 gap-4 h-20 items-center text-cyan-700">
        {previousPost && (
          <div className="hover:underline ">
            <Link href={`/blog/${subDirectory}/${previousPost.slug}`}>
              <p>{'<--'} Previous Post</p>
              <p>{previousPost.metadata.title}</p>
            </Link>
          </div>
        )}
        <div className="col-start-2 place-self-center hover:underline ">
          <Link href="/blog">Blog Home</Link>
        </div>
        {nextPost && (
          <div className="col-start-3 text-cyan-700 hover:underline ">
            <Link href={`/blog/${subDirectory}/${nextPost.slug}`}>
              <p className="place-self-end">Next Post {'-->'}</p>
              <p className="place-self-end">{nextPost.metadata.title}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
