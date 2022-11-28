import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../Assets/Images/avatar.png';
import logo from '../../Assets/Images/logo.png';
import { AuthContext } from '../../Context/AuthProvider';
import { AiOutlineMenuFold } from "react-icons/ai";

const Header = () => {
    const {user, logOutUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {user?.uid && <li><Link to="/dashboard">Dashboard</Link></li>}
    </React.Fragment>

    const handleLogOut = () => {
        logOutUser()
        .then(()=>{
            navigate('/');
        })
        .catch(error=> console.error(error))
    }

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
                {
                    user?.uid ? 
                    <div className="dropdown dropdown-end">
                        <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                                {
                                    user?.photoURL ? <img src={user?.photoURL} alt="user"/> : <img src={avatar} alt="user"/>
                                }
                            </div>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-sm font-semibold'><Link>Welcome {user?.displayName}</Link></li>
                            <li onClick={handleLogOut}><Link>Logout</Link></li>
                        </ul>
                    </div> :
                    <Link to="/login"><button className='btn btn-sm btn-primary'>Login</button></Link>
                }
                <label htmlFor="furnishbay-drawer" className="drawer-button mr-2 lg:hidden"><AiOutlineMenuFold className='text-3xl font-extrabold'/></label>   
            </div>
        </div>
    );
};

export default Header;