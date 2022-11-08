import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='lg:ml-24 grid lg:grid-cols-3 sm:grid-cols-1 my-11'>
            {
                services.map(service => <ServicesCard
                    service={service}
                ></ServicesCard>)
            }
        </div>
    );
};

export default Services;