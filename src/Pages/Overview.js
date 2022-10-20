import React from 'react';
import chart from "../Assets/graph.png"

const Overview = () => {
    return (
        <div>
            <div className='bg-base-100 shadow-xl mx-10 p-5 border-2 rounded-xl'>
                <p className='mb-2 text-xl'>Overview</p>
                <div className='md:flex justify-center '>
                    <div>
                        <small>This month</small>
                        <div className='md:flex items-center'>
                            <p className='text-2xl font-bold'>$24,568</p>
                            <small className="bg-green-500 h-fit w-fit rounded-xl px-2 text-white mt-5 ml-2">+2.65%</small>
                        </div>
                        <div class="card md:w-96 bg-base-100 shadow-xl p-5 border-2 md:h-80">
                            <div className='md:flex justify-around my-2'>
                                <div>
                                    <p>Orders</p>
                                    <p className='font-bold'>5306</p>
                                </div>
                                <div>
                                    <p>Sales</p>
                                    <p className='font-bold'>15306</p>
                                </div>
                            </div>
                            <div className='md:flex justify-around my-2'>
                                <div>
                                    <p>Order  value</p>
                                    <p className='font-bold'>12%</p>
                                </div>
                                <div>
                                    <p>Customers</p>
                                    <p className='font-bold'>153056</p>
                                </div>
                            </div>
                            <div className='md:flex justify-around my-2'>
                                <div>
                                    <p>Income</p>
                                    <p className='font-bold'>$50000</p>
                                </div>
                                <div>
                                    <p>Expenses</p>
                                    <p className='font-bold'>15305</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='h-96' src={chart} alt="" />
                    </div>
                </div>
            </div>

            <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                <div className='bg-base-100 shadow-xl mx-10 p-5 border-2 rounded-xl my-2'>
                    <p>User Activity</p>
                    <img className='h-52' src={chart} alt="" />
                </div>
                <div className='bg-base-100 shadow-xl mx-10 p-5 border-2 rounded-xl my-2'>
                    <p>Order Status</p>
                    <img className='h-52' src={chart} alt="" />
                </div>
                <div className='bg-base-100 shadow-xl mx-10 p-5 border-2 rounded-xl my-2'>
                    <div className='flex justify-between'>
                        <p>Top Product</p>
                        <small>Monthly</small>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex items-center '>
                            <p className='text-xl text-white bg-blue-400 w-fit p-2 rounded-xl mr-2'>#1</p>
                            <div>
                                <p>Polo Blue T-Shirt</p>
                                <p className='font-bold'>$25.4</p>
                            </div>
                        </div>
                        <small className='text-xl bg-gray-200 w-fit p-2 rounded-xl mr-2'>3.82k</small>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex items-center '>
                            <p className='text-xl text-white bg-blue-400 w-fit p-2 rounded-xl mr-2'>#2</p>
                            <div>
                                <p>Polo Blue T-Shirt</p>
                                <p className='font-bold'>$25.4</p>
                            </div>
                        </div>
                        <small className='text-xl bg-gray-200 w-fit p-2 rounded-xl mr-2'>3.82k</small>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex items-center '>
                            <p className='text-xl text-white bg-blue-400 w-fit p-2 rounded-xl mr-2'>#3</p>
                            <div>
                                <p>Polo Blue T-Shirt</p>
                                <p className='font-bold'>$25.4</p>
                            </div>
                        </div>
                        <small className='text-xl bg-gray-200 w-fit p-2 rounded-xl mr-2'>3.82k</small>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex items-center '>
                            <p className='text-xl text-white bg-blue-400 w-fit p-2 rounded-xl mr-2'>#4</p>
                            <div>
                                <p>Polo Blue T-Shirt</p>
                                <p className='font-bold'>$25.4</p>
                            </div>
                        </div>
                        <small className='text-xl bg-gray-200 w-fit p-2 rounded-xl mr-2'>3.82k</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;