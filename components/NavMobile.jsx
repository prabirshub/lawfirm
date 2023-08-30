// import icons
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

// import navigation data
import { navigation } from '@/constants'

// import link  from scrollbar
import { Link } from 'react-scroll'
import { useState } from 'react'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='lg:hidden relative z-20'>
      {/* menu icon */}
      <button onClick={() => setIsOpen(true)}>
        <AiOutlineMenu className='cursor-pointer' size={26} />
      </button>
      {/* nav list */}
      <ul
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } bg-primary fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-6 left-6 w-full cursor-pointer'
        >
          <AiOutlineClose size={26} />
        </button>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                onClick={() => setIsOpen(false)}
                to={item.href}
                activeClass='active'
                spy={true}
                offset={-200}
                className='hover:text-accent-hover transition-all duration-300 cursor-pointer'
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default NavMobile
