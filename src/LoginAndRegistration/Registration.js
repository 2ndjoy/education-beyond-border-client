import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/AuthProvider/AuthProvider';

const Registration = () => {

    const { createUser, updateProfileUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // console.log(name)
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(email, name, password, photoURL);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateUserProfile(name, photoURL)
                console.log(user);
            })
            .catch(err => console.error(err));
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileUser(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold align-bottom">Register to Education Beyond Border</h1>
                        <img className='lg:flex hidden w-3/4 rounded my-9' src="https://storytale-public2.b-cdn.net/2021/08/16/70ca297b-bbfb-4c1c-bb9f-aac40e7fd75c-SignUp.png?height=600" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="photoUrl" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account? <Link to='/login'>Log in</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;