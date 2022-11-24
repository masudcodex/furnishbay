import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../Assets/Images/avatar.png';
import logo from '../../Assets/Images/logo.png';

const Header = () => {
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-10 mr-3' src={logo} alt="Furnishbay logo" />
                <Link className="normal-case text-2xl font-bold">Furnishbay</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login"><button className='btn btn-sm btn-primary'>Login</button></Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 rounded-full">
                        <img src={avatar} alt="user"/>
                        </div>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;