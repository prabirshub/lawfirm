'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Nav from './Nav'
import NavMobile from './NavMobile'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    console.log(bg)
  })

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setBg(true)
    } else {
      setBg(false)
    }
  }
  return (
    <header
      className={`${
        bg && 'bg-white shadow-md py-4 w-full'
      } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <Link href='#'>
          <Image src='/assets/img/logo.png' width={160} height={39} alt='' />
        </Link>

        {/* nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  )
}
export default Header
