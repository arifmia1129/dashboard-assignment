import React from 'react';

const Card = ({ card }) => {
    const { name, percent, value, img } = card;
    return (
        <div class="card w-full md:w-80 bg-base-100 shadow-xl p-5 border-2 my-2">
            <div class="flex">
                <img className='w-14 mr-5' src={img} alt="" />
                <div>
                    <p>{name}</p>
                    <p>{value}</p>
                </div>
            </div>
            <div className='flex justify-end'>
                <p className={value === "negative" ? " bg-red-500 w-fit rounded-xl px-2 text-white" : " bg-green-500 w-fit rounded-xl px-2 text-white"}>{percent}</p>
            </div>
        </div>
    );
};

export default Card;