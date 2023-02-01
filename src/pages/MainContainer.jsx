import React, {useState} from 'react'

import HomeContainer from '../components/home/HomeContainer'

import {motion} from 'framer-motion'

import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import RowContainer from '../components/row/rowContainer.component'
import {useStateValue} from '../context/stateProvider'
import Menu from '../components/menu/menuComponent.component'
import CartContainer from '../components/cart/cartContainer.component'
import {useEffect} from 'react'

function MainContainer() {
    const [
        {
            foodItems,
            cartShow,
            
        },dispatch
    ] = useStateValue();

    const [scrollValue, setScrollValue] = useState(0);
    const [value, setValue] = useState(0);

    const setScrollingValue = (offsetScrollValue) => {
        setValue(value + 1);
        setScrollValue(offsetScrollValue);
    }
    useEffect(() => {}, [cartShow]);
    return (
        <div className='flex w-full h-auto flex-col '>
            <HomeContainer/>
            <section className='w-ful my-6'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-2xl font-semibold capitalize relative text-headingColor before:absolute
                                                                                                before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0
                                                                                                before:bg-gradient-to-tr from-orange-400 to-orange-600  transition ease-in-out
                                                                                                duration-200'>Our Fresh & healthy fruits</p>
                    <div className='hidden md:flex gap-3  items-center'>
                        <motion.div whileTap={
                                {scale: 0.75}
                            }
                            onClick={
                                () => setScrollingValue(-200)
                            }
                            className='w-8 h-8 rounded-lg bg-orange-300 flex hover:bg-orange-500 cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out items-center justify-center'><MdChevronLeft className='text-lg text-white'/></motion.div>
                        <motion.div whileTap={
                                {scale: 0.75}
                            }
                            onClick={
                                () => setScrollingValue(200)
                            }
                            className='w-8 h-8 rounded-lg bg-orange-300 flex hover:bg-orange-500 cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out items-center justify-center'><MdChevronRight className='text-lg text-white'/></motion.div>
                    </div>
                </div>
                <RowContainer scrollValue={scrollValue}
                    value={value}
                    flag={true}
                    data={
                        foodItems ?. filter(item => item.category === 'fruits')
                    }/>
            </section>
            <Menu/> {
            cartShow && <CartContainer/>
        } </div>
    )
}

export default MainContainer
