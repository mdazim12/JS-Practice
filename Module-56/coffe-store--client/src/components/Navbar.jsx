import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo1 1 (1).png'
import se_logo from '../assets/Espresso Emporium.png'
import navBG from '../assets/Rectangle 1.png'

const Navbar = () => {


    const links = <>

        <NavLink className= 'mx-4 text-lg text-white' to = '/'>Home</NavLink>
        <NavLink  className= 'mx-4 text-lg text-white' to = '/addCoffe'>Add Coffe</NavLink>
        <NavLink  className= 'mx-4 text-lg text-white' to = '/UpdateCoffe'>Update Coffe</NavLink>
        
    </>

    return (
        <div className="navbar" style={{ backgroundImage: `url(${navBG})` }}>

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#372727] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="">
                    <Link to = '/'>
                       <div className='flex items-center'>
                       <img className='w-12' src={logo} alt="" />
                       <img className='w-[60%]' src={se_logo} alt="" />
                       </div>
                        
                    </Link>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;