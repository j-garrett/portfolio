import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogSubDirectories } from '../blog/page'

export interface IMetaData {
  title: string
  date: string
}

export interface IPost {
  metadata: IMetaData
  content: string
  slug: string
}

export const sortPostsByAscendingDate = (posts: IPost[]) =>
  posts.sort(
    (a, b) =>
      new Date(a.metadata.date).getTime() - new Date(b.metadata.date).getTime()
  )

export function getAllPosts(directory: BlogSubDirectories): Array<IPost> {
  const postsDirectory = path.join(
    process.cwd(),
    `public/content/blog`,
    directory
  )
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    if (!data.title) {
      throw new Error(`Title is missing from metadata of file ${fileName}`)
    }
    if (!data.date) {
      throw new Error(`Date is missing from metadata of file ${fileName}`)
    }
    return {
      content,
      metadata: data as IMetaData,
      slug,
    }
  })
}

export function getPostBySlug(subDirectory: BlogSubDirectories, slug: string) {
  const postsDirectory = path.join(
    process.cwd(),
    `public/content/blog`,
    subDirectory,
    `${slug}.md`
  )
  const fullPath = path.join(postsDirectory)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    content,
    metadata: data,
    slug,
  }
}
