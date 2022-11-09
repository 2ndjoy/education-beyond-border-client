import React from 'react';
import About from '../About/About';
import Service from '../Services/Service';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <About></About>
            <h2 className='text-2xl font-bold text-center text-primary'>My services</h2>
            <Service></Service>

        </div>
    );
};

export default Home;