'use client'
import Link from 'next/link'
import { useBlogContext } from '../blog-context'

export default function BlogFooter({ slug }: { slug: string }) {
  const { posts } = useBlogContext()
  const currentIndex = posts.findIndex((p) => p.slug === slug)
  const previousPost = posts[currentIndex - 1] || null
  const nextPost = posts[currentIndex + 1] || null

  return (
    <div className="border-t-1 border-b-1 border-cyan-500">
      <div className="grid grid-cols-3 gap-4 h-20 items-center">
        {previousPost && (
          <div className="">
            <Link href={`/blog/${previousPost.slug}`}>
              <p className="text-cyan-700 hover:underline ">
                {'<--'} Previous Post {previousPost.metadata.title}
              </p>
            </Link>
          </div>
        )}
        <div className="col-start-2 place-self-center">
          <Link href="/blog">Blog</Link>
        </div>
        {nextPost && (
          <div className="col-start-3">
            <Link href={`/blog/${nextPost.slug}`}>
              <p className="text-cyan-700 hover:underline place-self-end">
                Next Post {'-->'} {nextPost.metadata.title}
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
