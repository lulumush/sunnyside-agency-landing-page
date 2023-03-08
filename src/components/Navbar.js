import React, { useState } from 'react'
//import mobile menu icon
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
//import logo
import logo from '../assets/images/logo.svg'


function Navbar() {
    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

  
    return (

        <div className='absolute top-0 left-0 w-full p-8 z-10 transition-all duration-500 lg:p-10'>
            <div className='flex justify-between items-center relative'>
                <img src={logo} alt='logo' />
                {/* Nav button - show by default - hidden on desktop */}
                <div className='cursor-pointer lg:hidden' onClick={() => setClick(!click)}>
                    <img src={hamburgerIcon} alt='mobile menu icon' />
                </div>
                {/* Nav mobile - show by default - hidden on desktop */}
                <div className={`${click ? "right-8" : "-right-full"} fixed top-[100px] bg-white transition-all duration-500 w-[256px] md:w-[350px] lg:hidden`}>
                    <div className='absolute border-b-[20px] border-l-[20px] border-l-transparent -top-[20px] right-0 border-white'></div>
                    <nav className='py-10'>
                        <ul className='flex flex-col justify-center items-center gap-y-8 text-darkGrayBlue font-bold'>
                            <li className='hover:text-black'><a href='#about' onClick={closeMenu}>About</a></li>
                            <li className='hover:text-black'><a href='#services' onClick={closeMenu}>Services</a></li>
                            <li className='hover:text-black'><a href='#projects' onClick={closeMenu}>Projects</a></li>
                            <li className='font-fraunces bg-yellow py-4 px-6 text-black rounded-full hover:bg-yellow/40'><a href='#contact' onClick={closeMenu}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                {/* Nav Desktop - hidden by default - show on desktop */}
                <div className='hidden lg:flex'>
                    <nav>
                        <ul className='flex gap-x-10 items-center text-white'>
                            <li className='hover:text-black'><a href='#about'>About</a></li>
                            <li className='hover:text-black'><a href='#services'>Services</a></li>
                            <li className='hover:text-black'><a href='#projects'>Projects</a></li>
                            <li className='font-fraunces uppercase bg-white py-4 px-6 text-black rounded-full hover:bg-white/40 hover:text-white'><a href='#contact'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar