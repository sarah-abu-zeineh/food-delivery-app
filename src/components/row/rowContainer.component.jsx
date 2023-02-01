import React from 'react'
import {MdShoppingBasket} from 'react-icons/md';
import {motion} from 'framer-motion'
import {useEffect} from 'react';
import {useRef} from 'react';

const RowContainer = ({flag, data, scrollValue, value}) => {
        const rowContainer = useRef(null);

        useEffect(() => {
            rowContainer.current.scrollLeft += scrollValue;
            console.log(rowContainer.current.scrollLeft += scrollValue);
        }, [value])

        return (<div ref={rowContainer}
            className={
                `w-full my-12 flex gap-3 items-center scroll-smooth ${
                    flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'
                }`
        }>
            {
            data && data.map(item =>< div key = {
                    item.id
                }
                className = 'min-w-[300px] h-[225px] md:min-w-340 bg-cardOverlay rounded-lg p-2 flex flex-col items-center justify-between md:w-340 my-12 backdrop-blur-lg hover:drop-shadow-lg' > <div className='w-full flex items-center justify-between '>
                    <motion.div whileHover={
                            {scale: 1.2}
                        }
                        className='w-40 h-40 -mt-8 drop-shadow-2xl'>
                        <img className='w-full h-full object-contain'
                            src={
                                item ?. imageUrl
                            }/></motion.div>

                    <motion.div whileTap={
                            {scale: 0.75}
                        }
                        className='w-8 h-8 rounded-full bg-red-700 flex items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white'/>
                    </motion.div>
                </div>
                <div className='w-full flex items-end flex-col justify-end'>
                    <p className='text-textColor font-semibold text-base md:text-lg'>
                        {
                        item ?. title
                    }</p>
                    <p className='mt-1 text-sm text-gray-500'>
                        {
                        item ?. calories
                    }
                        Calory</p>
                    <div className='flex items-center gap-1'>
                        <p className='text-lg text-headingColor font-semibold'>
                            <span className='text-sm text-red-500'>$</span>
                        </p>
                        {
                        item ?. price
                    }</div>
                </div>
            </div>
            )
        } </div>
    )
}

export default RowContainer
