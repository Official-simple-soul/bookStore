import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from './Logo';
import SignInSignUp from './SignInSignUp';

const Layout = () => {
  return (
    <div className=''>
        <header>
            <div className="container flex justify-between items-center px-2 md:px-2 border py-2 bg-secColor text-white shadow">
                <Logo />
                <nav className='hidden md:block'>
                    <ul className='flex space-x-6'>
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
                <Outlet />
                <SignInSignUp />
                <i class="fa-solid fa-bars md:hidden"></i>
            </div>
        </header>
    </div>
  )
}

export default Layout