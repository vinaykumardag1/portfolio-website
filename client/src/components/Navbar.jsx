import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNavigation = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className="bg-gray-800 md:bg-inherit text-white">
            <div className="px-6 py-4 flex justify-between items-center transition-all duration-300 ease-in-out">
                {/* Logo / Title */}
                <h1 className="text-lg md:text-3xl transition-colors duration-300 ease-in-out">DAGGUPATI VINAY</h1>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    {navOpen ? (
                        <IoClose onClick={toggleNavigation} className="w-8 h-8 cursor-pointer transition-transform duration-300 ease-in-out" />
                    ) : (
                        <IoMenu onClick={toggleNavigation} className="w-8 h-8 cursor-pointer transition-transform duration-300 ease-in-out" />
                    )}
                </div>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex md:gap-10`}>
                    <NavItem link="/" text="Home" />
                    <NavItem link="/skills" text="Skills" />
                    <NavItem link="/project" text="Project" />
                    <NavItem link="/contact" text="Contact" />
                </ul>
            </div>

            {/* Mobile Menu */}
            <ul className={`flex-col items-center gap-4 md:hidden bg-gray-700 py-4 transition-all duration-300 ease-in-out ${navOpen ? 'flex' : 'hidden'}`}>
                <NavItem link="/" text="Home" onClick={toggleNavigation} />
                <NavItem link="/skills" text="Skills" onClick={toggleNavigation} />
                <NavItem link="/project" text="Project" onClick={toggleNavigation} />
                <NavItem link="/contact" text="Contact" onClick={toggleNavigation} />
            </ul>
        </div>
    );
};

const NavItem = ({ link, text, onClick }) => (
    <li className="text-lg">
        <Link
            to={link}
            onClick={onClick}
            className="text-gray-300 hover:text-white transition-colors duration-300 ease-in-out"
        >
            {text}
        </Link>
    </li>
);

export default Navbar;
