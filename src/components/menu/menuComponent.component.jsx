import React, {useState} from 'react'
import {IoFastFood} from 'react-icons/io5'
import categories from '../../utils/data/category.utils'
import {motion} from 'framer-motion'

const Menu = () => {
    const [filter, setFilter] = useState('chicken')    

    return (
        <section className='w-ful my-6' id='menu'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold capitalize relative text-headingColor before:absolute
                    before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0
                    before:bg-gradient-to-tr from-orange-400 to-orange-600  transition ease-in-out
                    duration-200 mr-auto'>Our Hot Dishes</p>
                <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll
                    scrollbar-none'>
                    {
                    categories && categories.map(category => (
                        <motion.div 
                        whileTap={{scale:0.86}} 
                        key={category.id} 
                        onClick={()=>setFilter(category.urlParamName)}
                        className={`group ${filter===category.urlParamName?'bg-red-600':'bg-card'} 
                        w-24 min-w-[94px] cursor-pointer drop-shadow-xl
                        rounded-lg flex flex-col items-center justify-center h-28 gap-3 hover:bg-red-600`}>
                            <div className={`w-10 h-10 rounded-full shadow-lg ${filter===category.urlParamName?'bg-white':'bg-red-600'}
                             group-hover:bg-white flex items-center justify-center`}>
                                <IoFastFood className={` ${filter===category.urlParamName?'text-textColor':'text-white'}
                                 group-hover:text-textColor text-lg`}/>
                            </div>
                            <p className={`text-sm ${filter===category.urlParamName?'text-white':'text-textColor'} group-hover:text-white`}>
                                {category.name}</p>
                        </motion.div>
                    ))
                } </div>
            </div>
        </section>
    )
}

export default Menu
