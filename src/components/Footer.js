import React from 'react'
import milkBottleMobile from "../assets/images/mobile/image-gallery-milkbottles.jpg"
import milkBottleDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg"
import orangeMobile from "../assets/images/mobile/image-gallery-orange.jpg"
import orangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg"
import coneDesktop from "../assets/images/desktop/image-gallery-cone.jpg"
import coneMobile from "../assets/images/mobile/image-gallery-cone.jpg"
import sugarPileMobile from "../assets/images/mobile/image-gallery-sugar-cubes.jpg"
import sugarPileDesktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg"
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import facebook from "../assets/images/icon-facebook.svg"
import instagram from "../assets/images/icon-instagram.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import twitter from "../assets/images/icon-twitter.svg"

function Footer() {
  return (
    <section id='footer'>
        <div className='grid grid-cols-2 auto-rows-fr md:grid-cols-4'>
            <div>
                <img src={milkBottleMobile} alt="milk bottles" className='h-full w-full object-cover lg:hidden'/>
                <img src={milkBottleDesktop} alt="milk bottles" className='hidden lg:block lg:object-cover lg:w-full'/>
            </div>
            <div>
                <img src={orangeMobile} alt="orange on a white plate" className='h-full w-full object-cover lg:hidden'/>
                <img src={orangeDesktop} alt="orange on a white plate" className='hidden lg:block lg:object-cover lg:w-full'/>
            </div>
            <div>
                <img src={coneDesktop} alt="icecream cone" className='h-full w-full object-cover lg:hidden'/>
                <img src={coneMobile} alt="icecream cone" className='hidden lg:block lg:object-cover lg:w-full lg:h-full'/>
            </div>
            <div>
                <img src={sugarPileMobile} alt="sugar cubes pile" className='h-full w-full object-cover lg:hidden'/>
                <img src={sugarPileDesktop} alt="sugar cubes pile" className='hidden lg:block lg:object-cover lg:w-full'/>
            </div>
        </div>
        <div className='bg-darkModerateCyan/60 px-4 py-20'>
            <div className='flex justify-center'>
                <Logo className='fill-darkCyan scale-150'/>
            </div>
            <ul className='flex justify-center gap-10 md:gap-28 px-8 py-10 text-darkModerateCyan'>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#projects'>Projects</a></li>
            </ul>
            <ul className='flex justify-center gap-10 py-10 text-darkModerateCyan'>
                <li>
                    <a href="https://www.facebook.com/" target="_blank"   rel="noreferrer">
                        <img src={facebook} alt="facebook icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank"   rel="noreferrer">
                        <img src={instagram} alt="instagram icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank"   rel="noreferrer">
                        <img src={twitter} alt="twitter icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.pinterest.com/" target="_blank"   rel="noreferrer">
                    <img src={pinterest} alt="pinterest icon"/>
                    </a>
                </li>
            </ul>
        </div>
        <p className='bg-darkModerateCyan/60 text-sm text-center'>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"   rel="noreferrer" className='text-darkModerateCyan'>Frontend Mentor</a>.
                Coded by <a href="https://github.com/lulumush" target="_blank"  rel="noreferrer" className='text-darkModerateCyan'>Lucie Sundermeijer</a>.
            </p>
    </section>
  )
}

export default Footer