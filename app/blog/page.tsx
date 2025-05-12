'use client'
import Link from 'next/link'
import { useBlogContext } from './blog-context'
import PageHeader from '../components/page-header'
import MainContainer from '../components/main-container'

export default function Page() {
  const { posts } = useBlogContext()

  return (
    <div>
      <PageHeader header="Blog" />
      <MainContainer>
        <ul className="list-disc pl-5">
          {posts.map((post) => (
            <li className="text-cyan-700 hover:underline" key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
            </li>
          ))}
        </ul>
      </MainContainer>
    </div>
  )
}
