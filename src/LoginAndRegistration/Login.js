import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/AuthProvider/AuthProvider';
import { BsFacebook, BsGoogle } from 'react-icons/bs'



const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext);


    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });

            })
            .then(err => console.error(err))
    }

    const handleFaceBookSignIn = () => {

    }



    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold align-bottom">Login to Education Beyond Border</h1>
                        <img className='lg:flex hidden w-3/4 rounded my-9' src="https://storytale-public2.b-cdn.net/2021/08/16/34fe7f92-8594-40be-b689-a0c3ea8af779-Security.png?height=410" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>

                            <label className="label">
                                <p>
                                    New to EBB? <Link to="/register" className="link link-hover text-orange-400">Please Register</Link>

                                </p>
                            </label>
                        </form>
                        <p className='text-center my-5 items-center align-center'>Sign in with <button className='mx-2' onClick={handleGoogleSignIn}><BsGoogle></BsGoogle></button> or <button className='mx-2' onClick={handleFaceBookSignIn}><BsFacebook></BsFacebook></button></p>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;