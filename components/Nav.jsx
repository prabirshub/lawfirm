//import navigation data
import { navigation } from '@/constants'

// import link
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='lg: flex space-x-6 font-body font-semibold text-sm text-primary'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-120}
                className='cursor-pointer hover:text-accent-hover transition-all duration-300'
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
export default Nav
