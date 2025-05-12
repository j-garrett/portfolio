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
    <html className="min-h-full bg-cyan-200" lang="en">
      <body className="min-h-full text-cyan-900">
        <div className="grid grid-cols-12 min-h-full">
          <div className="col-span-3 flex">
            <Sidebar />
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-7 bg-white p-3">
            <div className="pl-10">
              <Header />
            </div>
            <div className="border-t-1 border-t-cyan-500">{children}</div>
          </div>
          {/* <div className="col-span-1">watercolors found: 0/1</div> */}
        </div>
      </body>
    </html>
  )
}
