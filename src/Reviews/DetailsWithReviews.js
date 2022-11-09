import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews';

const DetailsWithReviews = () => {
    const { _id, serviceName, description, img } = useLoaderData();
    console.log(serviceName, description)
    return (
        <div className='lg:flex'>
            <div className='lg:w-2/4'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{serviceName}</h1>
                            <p className="py-6">{description}</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-2/4'>
                <p className='text-primary text-xl my-5 text-center font-bold'>Here are are reviews of my work regarding <span className='text-blue-400'>{serviceName}</span></p>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default DetailsWithReviews;