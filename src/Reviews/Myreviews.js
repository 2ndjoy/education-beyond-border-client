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


    const handleUpdate = (_id, event) => {
        event.preventDefault();
        const form = event.target;
        console.log(_id, form);
        // fetch(`http://localhost:5000/userreviews/${_id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json',

        //     },
        //     body: JSON.stringify(myreviews)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.modifiedCount > 0) {
        //             const remaining = myreviews.filter(odr => odr._id !== _id);
        //             const approving = myreviews.find(odr => odr._id === _id)
        //             approving.status = 'Approved';
        //             const newMyreviews = [...remaining, approving];
        //             setMyReviews(newMyreviews);
        //         }
        //     })

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
                myreviews.map(myOrder => <div className='my-11 '>
                    <h2 className='text-2xl text-center'>This is your review {myOrder.service_Name}</h2>
                    <div className='grid text-center justify-center my-11 mx-8 border-2 border-success rounded-lg p-4'>
                        <div className='flex items-center gap-2 my-4'>
                            <img src={myOrder.usersPhoto} className='h-11 rounded-2xl' alt="" />
                            <h1 className='text-xl font-bold'>{myOrder.usersName}</h1>
                        </div>
                        <form>
                            <input type="text" name='review' className="input input-bordered input-primary w-full max-w-xs" value={myOrder.review} />
                        </form>
                        <div className='my-2'>
                            <button onClick={() => handleUpdate(myOrder._id)} className='btn btn-success mx-2'>Edit</button>
                            <button onClick={() => handleDelete(myOrder._id)} className='btn btn-error mx-2'>Delete</button>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Myreviews;