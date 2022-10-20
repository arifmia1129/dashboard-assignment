import React from 'react';
import img from "../Assets/fluoride.png";
import Card from './Card';

const Cards = () => {
    const cards = [
        { id: 1, name: "Revenue", img, percent: "+2.65%", value: "positive" },
        { id: 2, name: "Orders", img, percent: "-0.82%", value: "negative" },
        { id: 2, name: "Customers", img, percent: "-1.82%", value: "negative" },
    ]
    return (
        <div className='flex justify-center'>
            <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    cards?.map(card => <Card
                        key={card.id}
                        card={card}
                    />)
                }
            </div>
        </div>
    );
};

export default Cards;