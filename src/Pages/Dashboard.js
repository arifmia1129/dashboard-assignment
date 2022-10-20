import React from 'react';
import LeftSide from './LeftSide';
import MiddlePart from './MiddlePart';
import RightSide from './RightSide';

const Dashboard = () => {
    return (
        <div className='md:flex items-start justify-start'>
            <div className="md:w-1/6">
                <LeftSide />
            </div>
            <div>
                <MiddlePart />
            </div>
            <div className="md:w-1/5">
                <RightSide />
            </div>
        </div>
    );
};

export default Dashboard;