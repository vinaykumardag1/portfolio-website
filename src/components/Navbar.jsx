import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNavigation = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <div className='px-10 py-5 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    
                    <h1 className='text-lg md:text-3xl'>DAGGUPATI VINAY</h1>
                </div>
                <div className='md:hidden'>
                    {navOpen ? (
                        <IoClose onClick={toggleNavigation} className='w-7 h-7' />
                    ) : (
                        <IoMenu onClick={toggleNavigation} className='fill-transparent w-7 h-7' />
                    )}
                </div>
                <ul className={`md:flex md:gap-10 ${navOpen ? 'flex flex-col' : 'hidden'}`}>
                    <NavItem link='/' text='Home'  />
                    <NavItem link='/skills' text='Skills'  />
                    <NavItem link='/project' text='Project'  />
                    <NavItem link='/contact' text='Contact'  />
                </ul>
            </div>
        
        </>
    );
};

const NavItem = ({ link, text, onClick }) => (
    <li className='mt-3 md:mt-0'>
        <Link to={link} onClick={onClick} className='block text-lg md:text-base text-white-70'>
            {text}
        </Link>
    </li>
);

export default Navbar;
