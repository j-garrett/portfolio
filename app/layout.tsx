import type { Metadata } from 'next'
// These styles apply to every route in the application
import './globals.css'
import Sidebar from './components/sidebar'
import Header from './components/header'

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
      <body className="flex text-cyan-900">
        <Sidebar />
        <div className="grid grid-cols-9 gap-6">
          <div className="col-span-1 bg-cyan-200"></div>
          <div className="col-span-7">
            <div className="pl-10">
              <Header />
            </div>
            {children}
          </div>
          <div className="col-span-1 bg-cyan-200"></div>
        </div>
      </body>
    </html>
  )
}
