import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex space-x-6 items-center h-14 mb-5 px-5 border-b'>
      <Link href="/">Logo</Link>
      <ul className='flex space-x-6'>
        <li><Link href="/"></Link>Dashboard</li>
        <li><Link href="/issues"></Link>Issues</li>
      </ul>
    </nav>
  )
}

export default Navbar