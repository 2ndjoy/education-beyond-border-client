import React from 'react';
import { Link } from 'react-router-dom';
import img from './education.png';




const Header = () => {

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/myreviews'>My Reviews</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/login'>Log in</Link></li>

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src={img} className="w-9 items-center mr-2" alt="" />
                        Education Beyond Border</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/myreviews'>My Reviews</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/login'>Log in</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <li><Link className="btn">Profile</Link></li>
                </div>
            </div>
        </div>
    );
};

export default Header;