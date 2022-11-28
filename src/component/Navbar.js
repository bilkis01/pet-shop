import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/image/logo.png'
import './Navbar.css';

const Navbar = () => {

    let menuItems = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>

    return (
        <div>
            <div class="navbar  bg-primary">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-white text-xl"><img src={logo} alt="" /></a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-white p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;