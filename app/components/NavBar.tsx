import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav className='bg-black p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between items-center'>
        <Link href="/" className='text-white no-underline hover:text-gray-300'>
          Daniel Thi Graviet
        </Link>
        <div className='flex flex-row gap-4 text-white text-4xl lg:text-5xl'>
          <Link className='text-white hover:text-gray-300' href="https://www.linkedin.com/in/danielthigraviet/">
            <FaLinkedin />
          </Link>
          <Link className='text-white hover:text-gray-300' href="https://github.com/danielgraviet">
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  )
}
