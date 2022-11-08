import React from 'react';

const BannerItem = ({ slide }) => {
    const { sliderImg, id, prev, next } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>

                <img src={sliderImg} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-24 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle text-white bg-orange-700 border-none mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle text-white bg-orange-700 border-none mr-5">❯</a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-3/4 right-60 top-1/4">
                <h1 className='text-4xl font-bold text-white'>
                    Affordable  <br />
                    price for car <br />
                    servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-60 top-1/2">
                <p className='text-xl text-white'>
                    There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 right-60 top-3/4 gap-3">
                <button className="btn btn-error">Discover more</button>
                <button className="btn btn-outline btn-error">Learn More</button>
            </div>
        </div>

    );
};

export default BannerItem;