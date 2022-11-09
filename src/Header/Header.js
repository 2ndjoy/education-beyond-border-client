import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/AuthProvider/AuthProvider';
import img from './education.png';
import { FaMoon, FaSun } from 'react-icons/fa';




const Header = () => {
    // const [theme, setTheme] = useState(true);

    const { user, logOut, theme, setTheme } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }



    const handleNight = () => {
        const newTheme = false;
        setTheme(newTheme);
    }
    const handleDay = () => {
        const newTheme = true;
        setTheme(newTheme);

    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user?.email && <li><Link to='/myreviews'>My Reviews</Link></li>
                            }
                            {
                                user?.email && <li><Link to='/addService'>Add Service</Link></li>
                            }
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li tabIndex={0}>
                                <Link className="btn btn-ghost">
                                    {user?.photoURL ? <>
                                        <img className='h-9 rounded mr-2' src={user.photoURL} />{user?.displayName}
                                    </> : <Link to='/login'> Log in </Link>}
                                </Link>

                                <ul className="p-2 bg-base-100">
                                    <li>{
                                        user?.email ? <button onClick={handleLogOut} className='btn-outline'>Log out</button> : <Link to='/login'>Log in</Link>
                                    }</li>
                                    {
                                        user?.email && <li><Link to='/profile'>Profile</Link></li>
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src={img} className="w-9 items-center mr-2" alt="" />
                        Education Beyond Border</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.email && <li><Link to='/myreviews'>My Reviews</Link></li>
                        }
                        {
                            user?.email && <li><Link to='/addService'>Add Service</Link></li>
                        }
                        <li><Link to='/blogs'>Blogs</Link></li>

                        <li className='ml-9' tabIndex={0}>
                            <Link className="btn btn-ghost">
                                {user?.photoURL ? <>
                                    <img className='h-9 rounded mr-2' src={user.photoURL} />{user?.displayName}
                                </> : <Link to='/login'> Log in </Link>}
                            </Link>

                            <ul className="p-2 bg-base-100">
                                <li>{
                                    user?.email ? <button onClick={handleLogOut} className='btn-outline'>Log out</button> : <Link to='/login'>Log in</Link>
                                }</li>
                                {
                                    user?.email && <li><Link to='/profile'>Profile</Link></li>
                                }
                            </ul>
                        </li>



                    </ul>
                </div>
                <div className="navbar-end">
                    {theme ? <button className='btn btn-ghost' onClick={handleNight}>
                        <FaMoon />
                    </button> : <button className='btn btn-ghost' onClick={handleDay}><FaSun /></button>}
                </div>
            </div>
        </div>
    );
};

export default Header;