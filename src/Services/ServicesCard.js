import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery';

const ServicesCard = ({ service }) => {
    const { serviceName, details, img } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-4">
            <figure><Gallery
                img={img}
            ></Gallery></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to='/detailsReviews'>Show Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;