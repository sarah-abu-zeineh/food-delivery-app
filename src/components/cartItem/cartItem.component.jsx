import React, {useState} from 'react'

import {BiMinus, BiPlus} from 'react-icons/bi'
import {motion} from 'framer-motion'
import {useStateValue} from '../../context/stateProvider';
import {actionType} from '../../context/reducer';
import {useEffect} from 'react';


const CartItem = ({item}) => {
    const [qty, setQty] = useState(item.qty);
    const [newItem, setNewItem] = useState(item);

    const [
        {
            cartItems,
            totalFlag
        }, dispatch
    ] = useStateValue()

    const cartDispatch = () => {
        
        dispatch({type: actionType.SET_CART_ITEMS, cartItems: newItem})
        localStorage.setItem('cartItems', JSON.stringify(newItem))

        console.log(localStorage.getItem('cartItems'));
        dispatch({
            type: actionType.SET_FLAG,
            totalFlag: !totalFlag
        })
    }

    useEffect(() => {
        setNewItem(cartItems)
    }, [qty])

    const updateQty = (method, id) => {
        if (method === 'add') {
            setQty(qty + 1);
            cartItems.map(item => {
                if (item.id === id) {
                    item.qty += 1;
                }
            })

        }
        if (method === 'minus') {
            setQty(qty - 1);
            cartItems.map(item => {
                if (item.id === id) {
                    item.qty -= 1;
                }

            })
        }
        if (qty === 1) {
            setNewItem(cartItems.filter(() => item.id === id))
        }
        cartDispatch()
    }

    return (
        <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
            <img className='w-20 h-20 max-w-[60px] rounded-full object-contain'
                src={
                    item ?. imageUrl
                }
                alt={
                    item ?. title
                }/>
            <div className=' flex flex-col gap-3'>
                <p className='text-base text-gray-50'>
                    {
                    item ?. title
                } </p>
                <p className='text-sm  text-gray-300 font-semibold'>$ {
                    parseFloat(item ?. price) * qty
                }</p>
            </div>
            <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                <motion.div whileTap={
                        {scale: 0.75}
                    }
                    onClick={
                        () => updateQty('minus', item ?. id)
                }>
                    <BiMinus className='text-gray-50'/>
                </motion.div>
                <p className='w-5 h-5 rounded-sm cursor-pointer bg-cartBg text-gray-50 flex items-center justify-center'>
                    {qty}</p>
                <motion.div whileTap={
                        {scale: 0.75}
                    }
                    onClick={
                        () => updateQty('add', item ?. id)
                }>
                    <BiPlus className='text-gray-50'/>
                </motion.div>
            </div>
        </div>
    )
}

export default CartItem
