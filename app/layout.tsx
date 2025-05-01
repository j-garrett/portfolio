import type { Metadata } from 'next'
// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  description:
    "Jon Garrett's work history and some various projects with maybe a few blog posts sprinkled in.",
  title: "Jon Garrett's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
