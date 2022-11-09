import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:ml-24 grid lg:grid-cols-3 sm:grid-cols-1 my-16'>
            {
                service.map(servic => <ServiceCard
                    key={servic._id} servic={servic}
                ></ServiceCard>)
            }
            <Link to='/services'> <button className='btn w-full'>See all</button></Link>
        </div>
    );
};

export default Service;