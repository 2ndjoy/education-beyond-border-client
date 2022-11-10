import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className='flex items-center justify-center lg:my-40'>
            <div className="card card-side shadow-xl">
                <figure><img src={user.photoURL} alt="Movie" /></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">{user.displayName}</h2>
                    <h2 className="card-title">{user.email}</h2>
                    <div className="card-actions justify-end">

                        <Link to='/'><button className='btn btn-warning'>Go Back to Home</button></Link>
                        <button onClick={handleLogOut} className='btn btn-error'>Log out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;