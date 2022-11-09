import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'

const Menu = () => {
const {open} = useGlobalContext()

  return (
    <div>
        <nav className='md:hidden relative'>
                    <ul className={`transition-all duration-500 ease-in-out flex flex-col absolute text-center space-y-8 bg-secColor text-white overflow-hidden w-full ${open?'h-80 py-8 border-b-4':'h-0'}`}>
                        <li>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/shop'>SHOP</Link>
                        </li>
                        <li>
                            <Link to='/author'>AUTHORS</Link>
                        </li>
                        <li>
                            <Link to='/contact'>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
    </div>
  )
}

export default Menu