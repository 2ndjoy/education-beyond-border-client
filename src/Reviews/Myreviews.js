import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../UserContext/AuthProvider/AuthProvider';

const Myreviews = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/userreviews?email=${user.email}`;

    const [myreviews, setMyReviews] = useState([]);
    // const { usersName, service_Name, usersPhoto, review } = myorders;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user.email])
    const [revvv] = myreviews;

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        // console.log(review)
        console.log(url, review);


        fetch(`http://localhost:5000/userreviews/${revvv._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ review: review })


        })
            .then(res => res.json())
            .then(data => console.log(data))

    }






    const handleDelete = (_id) => {
        console.log(_id);
        const procced = window.confirm('Are you sure to confirm this order');
        if (procced) {
            fetch(`http://localhost:5000/userreviews/${_id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = myreviews.filter(ord => ord._id !== _id)
                        setMyReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
            {
                myreviews.length === 0 ? <p className='text-warning text-2xl font-bold text-center my-80'>You haven't given any review</p> : myreviews.map(myOrder => <div className='my-11 '>
                    <h2 className='text-2xl text-center'>This is your review regarding {myOrder.service_Name}</h2>
                    <div className='grid text-center justify-center my-11 mx-8 border-2 border-success rounded-lg p-4'>
                        <div className='flex items-center gap-2 my-4'>
                            <img src={myOrder.usersPhoto} className='h-11 rounded-2xl' alt="" />
                            <h1 className='text-xl font-bold'>{myOrder.usersName}</h1>
                        </div>

                        <form onSubmit={handleUpdate} className='lg:mx-24 my-2 lg:flex lg:justify-evenly items-center'>
                            <div className=''>
                                <textarea name='review' className="textarea textarea-secondary w-full my-5" defaultValue={myOrder.review} required></textarea>
                            </div>
                            <input className='btn btn-success mx-2' type="submit" value="Edit" />

                        </form>
                        <button onClick={() => handleDelete(myOrder._id)} className='btn btn-error mx-2'>Delete</button>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Myreviews;