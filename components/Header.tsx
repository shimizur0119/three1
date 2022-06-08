import type { NextPage } from 'next'
import Link from 'next/link'


const Header: NextPage = () => {
  return (
    <header>
      <Link href="/">header</Link>
      <nav>
        <ul>
          <li>
            <Link href="/page1">page1</Link>
          </li>
          <li>
            <Link href="/page1">page1</Link>
          </li>
          <li>
            <Link href="/page1">page1</Link>
          </li>
          <li>
            <Link href="/page1">page1</Link>
          </li>
          <li>
            <Link href="/page1">page1</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header