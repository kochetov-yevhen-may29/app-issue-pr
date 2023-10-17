import Link from 'next/link'
import React from 'react'
import { BsBugFill } from 'react-icons/bs';

const Navbar = () => {
  const links = [
    { label: 'Dashboard', href: '/'},
    { label: 'Issues', href: '/issues'},
  ]
  return (
    <nav className='flex space-x-6 items-center h-14 mb-5 px-5 border-b'>
      <Link href="/">
        <BsBugFill />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='text-zinc-500 hover:text-zinc-800 transition-colors'
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar