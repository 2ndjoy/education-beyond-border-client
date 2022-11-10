import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const AddService = () => {
    const servicee = useLoaderData();
    const [service, setService] = useState(servicee);


    const addSeervice = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const details = form.serviceDetails.value;
        const description = form.serviceDescription.value;
        const price = form.servicePrice.value;
        const img = form.servicePhoto.value;
        const services = { serviceName, details, description, price, img }
        console.log(services);




        fetch('https://b6a11-service-review-server-side-roan.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newServices = [...service, data];
                setService(newServices);
                if (data.acknowledged) {
                    toast.success('Added Successfully')
                }
            })
            .catch(err => console.log(err))

        form.reset();








    }
    return (
        <form onSubmit={addSeervice} className='grid my-11 justify-center'>
            <h2 className='text-primary text-center my-5'>Please add a service if you needed. We will look forward to it.</h2>
            <input name='serviceName' type="text" placeholder="Add service name" className="input input-bordered input-primary w-full max-w-xs my-3" required />
            <input name='serviceDetails' type="text" placeholder="Add details" className="input input-bordered input-primary w-full max-w-xs my-3" required />
            <input name='serviceDescription' type="text" placeholder="Add description" className="input input-bordered input-primary w-full max-w-xs my-3" required />
            <input name='servicePhoto' type="text" placeholder="Add PhotoURL" className="input input-bordered input-primary w-full max-w-xs my-3" required />
            <input name='servicePrice' type="text" placeholder="Add a price" className="input input-bordered input-primary w-full max-w-xs my-3" required />
            <input type="submit" className='btn btn-secondary my-3 w-3/3' value="Add service" />
        </form>
    );
};

export default AddService;