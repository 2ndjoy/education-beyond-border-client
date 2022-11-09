import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/AuthProvider/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {/* Other's review */}
            <div className='grid text-center justify-center my-11 mx-8 border-2 border-primary rounded-lg p-4'>
                <div className='flex items-center gap-2 my-4'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg" className='h-11 rounded-2xl' alt="" />
                    <h1 className='text-xl font-bold'>Rahul Joy</h1>
                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error itaque ipsa suscipit aspernatur est sit minus pariatur. Hic illum exercitationem neque saepe vel ipsam. Quod, ipsum adipisci, maxime, provident laborum sed aspernatur sint facere ex numquam recusandae? Unde numquam earum quasi quibusdam, cumque molestias deserunt! Corrupti quasi ipsum quae.</p>
                </div>
            </div>
            {/* display user's review */}
            {/* User review */}
            <div className='lg:mx-24 my-11'>
                <h2>Please add your review</h2>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <textarea name='message' className="textarea textarea-secondary w-full my-5" placeholder="Your message"></textarea>
                </div>
                <input className='btn' type="submit" value="Add your review" />
            </div>
        </div>
    );
};

export default Reviews;