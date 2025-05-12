import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

let postsDirectory

export interface IMetaData {
  title: string
  date: string
}

export interface IPost {
  metadata: IMetaData
  content: string
  slug: string
}

export const sortPostsByDate = (posts: IPost[]) =>
  posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )

export function getAllPosts(directory: string): Array<IPost> {
  postsDirectory = path.join(process.cwd(), `public/content/blog`, directory)
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

export function getPostBySlug(slug: string) {
  if (!postsDirectory) {
    throw new Error('postsDirectory is not set. Call getAllPosts first.')
  }
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    content,
    metadata: data,
    slug,
  }
}
