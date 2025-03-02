import React from 'react';
import BannerPic from "../../../public/BannerPic.jpeg"
import Avatar from '../../ReuseableComponent/Avatar';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row bg-transparent lg:mt-[-16px] w-full h-screen gap-6'>
            <div className='w-full lg:w-1/2 flex flex-col text-start justify-center space-y-4'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white'>
                    All the Notes You Need in One Place
                </h1>
                <p className='text-sm md:text-md text-slate-800 dark:text-white'>
                    No more last-minute stress — access well-organized notes, past papers, and study resources for free!!!
                </p>
                <div>
                    <Avatar></Avatar>
                    <p className='text-sm md:text-[12px]'>Best Scribe from our Community</p>
                </div>

                <div className='space-x-2 rounded-2xl'>
                    <button className='btn p-6 bg-red-600 rounded-lg text-white '>Explore Notes</button>
                    <button className='btn p-6 bg-transparent rounded-lg text-black border-red-500 dark:text-white'>Contact Us</button>
                </div>
            </div>
            <div className='w-fi\ull lg:w-1/2 flex items-center'>
                <img className='rounded-lg' src={BannerPic} alt="" />
            </div>
        </div>
    );
};

export default Banner;