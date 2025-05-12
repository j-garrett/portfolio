import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-100 bg-cyan-200 pl-3">
      <nav className="pt-20">
        <ul className="space-y-4 rotated-text">
          <li>
            <Link
              className="text-cyan-900 hover:underline text-9xl uppercase"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-cyan-900 hover:underline text-9xl uppercase"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-cyan-900 hover:underline text-9xl uppercase"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="text-cyan-900 hover:underline text-9xl uppercase"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
