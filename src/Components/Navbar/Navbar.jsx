import React from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>

        <div className='mr-4'>
            <Link to='/'> Home</Link>
        </div>
        <div>
            <Link to='/listedBooks'>LisTed Book</Link>
        </div>
        <NavLink >  </NavLink>


    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold ">Reading Book</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#23BE0A] text-amber-50 mr-2.5   ">Sing up</a>
                <a className="btn bg-[#59C6D2] text-amber-50">Sing in</a>
            </div>
        </div>
    );
};

export default Navbar;