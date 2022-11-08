import React from 'react';
import img1 from './img1.avif';
import img2 from './img2.avif';
import img3 from './img3.avif';
import './Banner.css';
import BannerItem from './BannerItem';


const bannerData = [
    {
        sliderImg: img1,
        prev: 3,
        id: 1,
        next: 2

    },
    {
        sliderImg: img2,
        prev: 1,
        id: 2,
        next: 3

    },
    {
        sliderImg: img3,
        prev: 2,
        id: 3,
        next: 1

    }
]


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full py-10">

                {
                    bannerData.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }


            </div>
        </div>
    );
};

export default Banner;