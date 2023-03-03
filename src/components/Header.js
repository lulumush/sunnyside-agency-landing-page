import React from 'react'
// import arrow down icon
import arrowDown from '../assets/images/icon-arrow-down.svg'
//import framer motion
import { motion } from 'framer-motion'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='bg-headerMobile h-[100vh] bg-cover bg-no-repeat bg-center  md:bg-headerDesktop'>
        <div className='flex flex-col justify-center items-center h-full gap-16'>
            <Navbar />
            <h1 className='text-white text-center font-fraunces text-4xl tracking-[6px] md:text-6xl'>WE ARE CREATIVES</h1>
            <a href="#about">
                <motion.img 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                    duration: 2,
                    repeat: Infinity,
                    }}
                    src={arrowDown} 
                    alt='arrow down icon'/>
            </a>
        </div>
    </header>
  )
}

export default Header