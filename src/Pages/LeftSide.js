import React from 'react';

const LeftSide = () => {
    return (
        <div className='bg-[#0F3460] text-white p-5 h-screen'>
            <div>
                <p className='font-bold'>Dashboard</p>
                <div className="pl-5">
                    <p className='font-bold'>E-commerce</p>
                    <p className='font-bold'>Saas</p>
                    <p className='font-bold'>Crypto</p>
                </div>
            </div>
            <div className='mt-10'>
                <small className='font-bold'>Application</small>
                <div>
                    <p className='font-bold'>Calender</p>
                    <p className='font-bold'>Chat</p>
                    <p className='font-bold'>File Manager</p>
                    <p className='font-bold'>E-commerce</p>
                    <p className='font-bold'>Email</p>
                    <p className='font-bold'>Invoices</p>
                    <p className='font-bold'>Projects</p>
                    <p className='font-bold'>Contacts</p>
                </div>
            </div>
            <p className='my-10'><small className='font-bold'>Layouts</small></p>
            <div className='mt-10'>
                <small className='font-bold'>Pages</small>
                <div>
                    <p className='font-bold'>Authentication</p>
                    <p className='font-bold'>Utility</p>
                </div>
            </div>
            <div className='mt-10'>
                <small className='font-bold'>Components</small>
                <div>
                    <p className='font-bold'>UI Elements</p>
                    <p className='font-bold'>Forms</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;