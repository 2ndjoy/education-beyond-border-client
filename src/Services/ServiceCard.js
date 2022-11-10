import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery';

const ServiceCard = ({ servic }) => {
    const { serviceName, details, img, _id, price } = servic;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-4">
            <figure><Gallery
                img={img}
            ></Gallery></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <p className='text-primary font-bold'>Price: ${price}</p>

                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;