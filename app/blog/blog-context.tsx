'use client'
import React, { createContext, useContext } from 'react'
import { IPost } from '../lib/posts'
import { BlogSubDirectories } from './page'

interface BlogContextProps {
  posts: {
    [key in BlogSubDirectories]: IPost[]
  }
}

const BlogContext = createContext<BlogContextProps | undefined>(undefined)

export const BlogProvider = ({
  children,
  posts,
}: {
  children: React.ReactNode
  posts: BlogContextProps['posts']
}) => {
  return (
    <BlogContext.Provider value={{ posts }}>{children}</BlogContext.Provider>
  )
}

export const useBlogContext = () => {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider')
  }
  return context
}
