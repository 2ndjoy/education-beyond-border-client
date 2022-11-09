import React from 'react';

const Myreviews = () => {
    return (
        <div className='my-11 p-4'>
            <h2 className='text-2xl text-center'>This is your review regarding</h2>
            <div className='grid text-center justify-center my-11 mx-8 border-2 border-success rounded-lg p-4'>
                <div className='flex items-center gap-2 my-4'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg" className='h-11 rounded-2xl' alt="" />
                    <h1 className='text-xl font-bold'>Rahul Joy</h1>
                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error itaque ipsa suscipit aspernatur est sit minus pariatur. Hic illum exercitationem neque saepe vel ipsam. Quod, ipsum adipisci, maxime, provident laborum sed aspernatur sint facere ex numquam recusandae? Unde numquam earum quasi quibusdam, cumque molestias deserunt! Corrupti quasi ipsum quae.</p>
                </div>
            </div>

        </div>
    );
};

export default Myreviews;