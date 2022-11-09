import React, {useState, useEffect, useRef} from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from './Logo';
import SignInSignUp from './SignInSignUp';
import { useGlobalContext } from './Context'

const Layout = () => {
    const {open, setOpen} = useGlobalContext()
    const toggleMenu = () => {
        setOpen(!open)
    }

    const menuRef = useRef();

    useEffect(()=> {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

  return (
    <div className=''>
        <header>
            <div className="container flex justify-between items-center px-2 md:px-2 border py-2 bg-secColor text-white shadow">
                <Logo />
                <nav className='hidden md:block'>
                    <ul className='flex md:space-x-6'>
                        <li className='cursor-pointer'>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link to='/shop'>SHOP</Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link to='/author'>AUTHORS</Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link to='/contact'>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
                <SignInSignUp />
                <div className="menu md:hidden text-2xl" onClick={()=>toggleMenu()} ref={menuRef}>
                    <i class={open?'fa-solid fa-xmark':'fa-solid fa-bars'}></i>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Layout