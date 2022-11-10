import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../UserContext/AuthProvider/AuthProvider';

const DetailsWithReviews = () => {

    const { _id, serviceName, description, img } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const [reviews, setReviews] = useState([]);

    // console.log(service);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)///
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [loading]) //


    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        // console.log(review, _id, user.photoURL);

        const addedReview = {
            service: _id,
            service_Name: serviceName,
            usersName: user.displayName,
            usersPhoto: user.photoURL,
            email: user.email,
            review
        }
        console.log(addedReview)

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addedReview)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId)
                if (data.acknowledged) {
                    form.reset();
                    setLoading(true);
                    window.confirm('Thanks for your review')
                }
            })
            .catch(err => console.error(err))

    }


    return (
        <div className='lg:flex'>
            <div className='lg:w-2/4'>
                <div className="hero min-h-screen">
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
                <p className='text-blue-600 text-xl my-5 text-center font-bold'>Here are are reviews of my work regarding <span className='text-blue-600'>{serviceName}</span></p>
                <div>
                    {/* Other's review */}
                    {
                        reviews.length === 0 ? 'No review added' : reviews.map(rev =>
                            <div className='grid text-center justify-center my-11 mx-8 border-2 border-primary rounded-lg p-4'>
                                <div className='flex items-center gap-2 my-4'>
                                    <img src={rev?.usersPhoto} className='h-11 rounded-2xl' alt="" />
                                    <h1 className='text-xl font-bold'>{rev?.usersName}</h1>
                                </div>
                                <div>
                                    <p>{rev?.review}</p>
                                </div>
                            </div>)
                    }
                    {/* display user's review */}
                    {/* User review */}
                    <form onSubmit={handlePlaceReview} className='lg:mx-24 my-11'>
                        <h2>Please add your review</h2>
                        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <textarea name='review' className="textarea textarea-secondary w-full my-5" placeholder="Your message" required></textarea>
                        </div>
                        <input className='btn' type="submit" value="Add your review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DetailsWithReviews;