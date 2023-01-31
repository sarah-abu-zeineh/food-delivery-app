import React from 'react'
import Delivery from '../assets/delivery.png'
import HomeContainer from '../components/home/HomeContainer'

function MainContainer() {
    return (
        <div className='flex w-full h-auto flex-col items-center justify-center'>
        <HomeContainer/>
        <section className='w-full p-4 '></section>
        </div>
    )
}

export default MainContainer
