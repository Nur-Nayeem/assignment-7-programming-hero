import React from 'react'
import bannerBgImg from '../../assets/vector1.png'

const Banner = () => {
    return (
        <div className='container mx-auto grid px-2.5 grid-cols-1 sm:grid-cols-2 gap-6 my-20 text-white'>
            <div className='relative bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-lg h-44 md:h-60 flex flex-col justify-center items-center'>
                <h3 className='text-2xl'>In-Progress</h3>
                <h1 className='text-6xl font-semibold'>0</h1>
                <figure className='absolute top-0 left-0 h-full w-2/5'>
                    <img className='h-full' src={bannerBgImg} alt="banner decoration" />
                </figure>
                <figure className='absolute top-0 right-0 h-full w-2/5'>
                    <img className='h-full rotate-y-180' src={bannerBgImg} alt="banner decoration" />
                </figure>
            </div>
            <div className='relative bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-lg h-44 md:h-60 flex flex-col justify-center items-center'>
                <h3 className='text-2xl'>Resolved</h3>
                <h1 className='text-6xl font-semibold'>0</h1>
                <figure className='absolute top-0 left-0 h-full w-2/5'>
                    <img className='h-full' src={bannerBgImg} alt="banner decoration" />
                </figure>
                <figure className='absolute top-0 right-0 h-full w-2/5'>
                    <img className='h-full rotate-y-180' src={bannerBgImg} alt="banner decoration" />
                </figure>
            </div>
        </div>
    )
}

export default Banner