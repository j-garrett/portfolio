import Link from 'next/link'
import { Children } from 'react'

const LargeNavUL = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="perspective-[1000px]">
      <ul
        className="
          inline-block
          skew-y-12
          antialiased
          rotate-y-45
          translate-z-0
          -translate-x-7
          translate-y-20
          text-9xl
          font-black
          uppercase
          text-shadow-cyan-600/30
          text-shadow-lg
          text-cyan-700
        "
      >
        {Children.toArray(children).map((child, index) => {
          return (
            <li
              className="
                transition
                delay-150
                duration-300
                ease-in-out
                hover:translate-x-10
                hover:scale-110
                hover:text-cyan-950
              "
              key={index}
            >
              {child}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-full pl-3">
      <nav className="pt-30">
        <LargeNavUL>
          <Link className="no-underline" href="/">
            Home
          </Link>
          <Link className="no-underline" href="/resume">
            Resume
          </Link>
          <Link className="no-underline" href="/projects">
            Projects
          </Link>
          <Link className="no-underline" href="/contact">
            Contact
          </Link>
          <Link className="no-underline" href="/blog">
            Blog
          </Link>
        </LargeNavUL>
      </nav>
    </aside>
  )
}
