import React from 'react';
import img from "../Assets/fluoride.png"

const RightSide = () => {
    return (
        <div className='bg-base-100 shadow-xl border-2 w-full'>
            <div className='h-32 bg-blue-400'>
            </div>
            <div className='flex justify-center mt-[-70px]'>
                <img className='border-4 border-white rounded-[100%] p-2 mb-10' src={img} alt="" />

            </div>
            <div className='text-center'>
                <p className='text-xl'>Arif Mia</p>
                <p className='text-gray-500'>Web Developer</p>
            </div>
            <div className='flex justify-around items-center my-5'>
                <div>
                    <p>1263</p>
                    <p>Products</p>
                </div>
                <div>
                    <p>5.2k</p>
                    <p>Flowers</p>
                </div>
            </div>
            <div className='bg-base-100 shadow-xl border-2 p-2 m-2 rounded-xl'>
                <p>Earning</p>
                <p className='text-center text-2xl font-bold'>$26,056</p>
                <p className='text-center'>this month</p>
            </div>
            <div className='bg-base-100 shadow-xl border-2 p-2 m-2 rounded-xl my-10'>
                <p className='mb-5'>Recently Activity</p>
                <li>Responded to need "Volunteer Activities"</li>
                <li>Everyone realizes would be desirable</li>
                <li>Joined the group of "Friendship 99"</li>
            </div>
        </div>
    );
};

export default RightSide;