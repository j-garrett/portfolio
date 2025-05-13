'use client'
import Link from 'next/link'
import { useBlogContext } from './blog-context'
import PageHeader from '../components/page-header'
import MainContainer from '../components/main-container'

const blogSections = [
  { name: 'Portfolio', slug: 'portfolio' },
  { name: 'Scavenger Hunt', slug: 'scavenger-hunt' },
] as const

export type BlogSubDirectories = (typeof blogSections)[number]['slug']

export default function Page() {
  const { posts } = useBlogContext()
  return (
    <div>
      <PageHeader header="Blog" />
      <MainContainer>
        {blogSections.map((section) => (
          <div key={section.slug}>
            <h3 className="text-2xl">{section.name}</h3>
            <ul className="list-disc pl-5">
              {posts[section.slug].map((post) => (
                <li className="text-cyan-700 hover:underline" key={post.slug}>
                  <Link href={`/blog/${section.slug}/${post.slug}`}>
                    {post.metadata.date} - {post.metadata.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </MainContainer>
    </div>
  )
}
