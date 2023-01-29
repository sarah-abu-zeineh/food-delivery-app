import React from 'react'
import Delivery from '../assets/delivery.png'

function MainContainer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  '>
            <div className='py-2 flex-1 flex  flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center  bg-orange-100 px-2 py-1 rounded-full '>
                    <p className='text-base text-orange-500 font-bold'>
                        Bike Delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery}
                            className='w-full h-full object-contain'
                            alt='delivery'/></div>
                </div>
                <p className='text-[2.5rem] lg:text-[3.6rem] font-extrabold spacing tracking-wide text-headingColor'>
                The Fastest Delivery in{" "}
                <span className=' text-orange-600 text-[3rem] md:text-[3.5rem]'>Your City</span>
            </p>
            <p className='md:w-[80%] text-base text-textColor text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <button type='button' className='md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full 
            px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
            </div>
         
            <div className='py-2 flex-1 bg-blue-200 '></div>
        </div>
    )
}

export default MainContainer
