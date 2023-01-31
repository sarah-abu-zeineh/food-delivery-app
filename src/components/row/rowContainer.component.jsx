import React from 'react'
import {MdShoppingBasket} from 'react-icons/md';
import {motion} from 'framer-motion'

const RowContainer = ({flag}) => {
    console.log(flag);
    return (
        <div className={
            `w-full my-12  ${
                flag ? 'overflow-x-scroll' : 'overflow-x-hidden'
            }`
        }>
            <div className='w-300 bg-cardOverlay rounded-lg p-2 md:w-340 my-12 h-auto backdrop-blur-lg hover:drop-shadow-lg'>
                <div className='w-full flex items-center justify-between '>
                    <motion.img whileHover={
                            {scale: 1.2}
                        }
                        className='w-40 -mt-8 drop-shadow-2xl'
                        src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-b2584.appspot.com/o/Images%2F1675204854448-i6.png?alt=media&token=827a4b9e-a66a-4d44-a9df-cc37d10e0565'/>
                    <motion.div whileTap={
                            {scale: 0.75}
                        }
                        className='w-8 h-8 rounded-full bg-red-700 flex items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white'/>
                    </motion.div>
                </div>
                <div className='w-full flex items-end flex-col justify-end'>
                    <p className='text-textColor font-semibold text-base md:text-lg'>Chocolate & Vanilla</p>
                    <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
                    <div className='flex items-center gap-8'>
                        <p className='text-lg text-headingColor font-semibold'>
                            <span className='text-sm text-red-500'>$</span>
                        </p>2.25</div>
                </div>
            </div>
        </div>
    )
}

export default RowContainer
