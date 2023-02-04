import React, {useState} from 'react'

import EmptyCart from '../../assets/emptyCart.PNG'

import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {RiRefreshFill} from 'react-icons/ri'

import {motion} from 'framer-motion'
import {useStateValue} from '../../context/stateProvider'
import {actionType} from '../../context/reducer'
import CartItem from '../cartItem/cartItem.component'
import {useEffect} from 'react'
import { json } from 'react-router-dom'

const CartContainer = () => {
    const [
        {
            cartShow,
            user,
            cartItems,
            totalFlag
        }, dispatch
    ] = useStateValue();

    const [total, setTotal] = useState(0);

    useEffect(() => {
        updateTotal()
    }, [total, totalFlag])

    const updateTotal = () => {
        const totalPrice = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.qty * currentItem.price, 0);
        setTotal(totalPrice);
        console.log(totalPrice);
        return totalPrice
    }

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow
        })
    }
    const clearOrder = () => {
        localStorage.setItem('cartItems',JSON.stringify([]));
        dispatch({type: actionType.SET_CART_ITEMS, cartItems: []});
    }

    return (
        <motion.div initial={
                {
                    opacity: 0,
                    x: 200
                }
            }
            animate={
                {
                    opacity: 1,
                    x: 0
                }
            }
            exit={
                {
                    opacity: 0,
                    x: 200
                }
            }
            className='w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col
                                                                                                                                                                        fixed top-0 right-0 z-[101]'>
            <div className='w-full flex items-center cursor-pointer justify-between p-4'>
                <motion.div whileTap={
                        {scale: .75}
                    }
                    onClick={showCart}>
                    <MdOutlineKeyboardBackspace className='text-textColor text-3xl cursor-pointer'/>
                </motion.div>

                <p className='text-textColor text-lg cursor-pointer'>Cart</p>
                <motion.p whileTap={
                        {scale: 0.75}
                    }
                    onClick={clearOrder}
                    className='flex items-center justify-between gap-2 p-1 px-2 my-2 bg-gray-100
                                                                                                                                                                                                                                                                    rounded-md hover:shadow-md cursor-pointer text-textColor text-base'>
                    Clear<RiRefreshFill/>{" "}</motion.p>
            </div>
            {
            cartItems && cartItems.length > 0 ? <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col justify-between'>
                {/* Cart Item's Section  */}
                <div className='w-full h-490 mb-3 md:h-340 px-6 py-6 flex flex-col gap-3 overflow-y-scroll scrollbar-none '>
                    {/* Cart Item  */}
                    {
                    cartItems && cartItems.map(item => <CartItem key={
                            item.id
                        }
                        item={item}/>)
                } </div>
                {/* Cart Total Section  */}
                <div className='w-full flex flex-1 bg-cartTotal rounded-t-[2rem] flex-col items-center justify-evenly px-8 py-2'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Sub Total</p>
                        <p className='text-gray-400 text-lg'>$ {total}</p>
                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Delivery</p>
                        <p className='text-gray-400 text-lg'>$ 2.25</p>
                    </div>
                    <div className='w-full border-b border-gray-600 my-2'></div>

                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-200 text-xl font-semibold'>Total</p>
                        <p className='text-gray-200 text-xl font-semibold'>${
                            total + 2.25
                        }</p>
                    </div>
                    {
                    user ? <motion.button whileTap={
                            {scale: 0.8}
                        }
                        type='button'
                        className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                                                                                                                            hover:shadow-lg '>Check Out</motion.button> : <motion.button whileTap={
                            {scale: 0.8}
                        }
                        type='button'
                        className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                                                                                                                             hover:shadow-lg '>Login Check Out</motion.button>
                } </div>
            </div> : <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                <img src={EmptyCart}
                    className='w-300'
                    alt='empty cart'/>
                <p className='text-xl text-textColor font-semibold'>
                    Add some items to your cart</p>
            </div>
        } </motion.div>
    )
}

export default CartContainer
