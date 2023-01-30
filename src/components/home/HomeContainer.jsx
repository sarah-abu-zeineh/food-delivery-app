import React from 'react';
import Delivery from '../../assets/delivery.png'
import HeroBg from '../../assets/heroBg.png'
import IceCream from '../../assets/i1.png';
import heroData from '../../utils/data/data.utils';
// import IceCream  from '../../assets/i1.png';


const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className='py-2 flex-1 flex  flex-col items-start  gap-6'>
                <div className='flex items-center gap-2 justify-center  bg-orange-100 px-2 py-1 rounded-full '>
                    <p className='text-base text-orange-500 font-bold'>
                        Bike Delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery}
                            className='w-full h-full object-contain'
                            alt='delivery'/></div>
                </div>
                <p className='text-[2.5rem] lg:text-[3.5rem] font-extrabold spacing tracking-wide text-headingColor'>
                    The Fastest Delivery in{" "}
                    <span className=' text-orange-600 text-[3rem] lg:text-[4rem] md:text-[3.5rem]'>Your City</span>
                </p>
                <p className='md:w-[80%] text-base text-textColor text-center md:text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <button type='button' className='md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full
                                                                                                                                                                                                                                                            px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
            </div>

            <div className='py-2 flex-1 flex items-center relative'>
                <img src={HeroBg}
                    className='lg:h-490 h-420 w-full lg:w-340  ml-auto'/>
                <div className='w-full h-full absolute top-0 left-0 flex items-center px-8 gap-2 flex-wrap py-4'>
                    {
                    heroData && heroData.map(plate => <div key={
                            plate.id
                        }
                        className='w-190 min-w-[190px] p-4
                                                 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col '>
                        <img src={
                                plate.imgSrc
                            }
                            alt={
                                plate.name
                            }
                            className='w-22 -mt-20'/>
                        <p className='text-xl font-semibold text-textColor mt-3'>
                            {
                            plate.name
                        }</p>
                        <p className=' text-sm text-lightTextGray font-semibold my-2 '>
                            {
                            plate.desc
                        }</p>
                        <p className='text-sm  font-semibold text-headingColor'>
                            <span className='text-xs text-red-500'>$
                            </span>
                            {
                            plate.price
                        }</p>
                    </div>)
                } </div>
            </div>
        </section>
    )
}

export default HomeContainer
