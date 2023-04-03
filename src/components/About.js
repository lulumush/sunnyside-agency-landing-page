import React from 'react'
import transformDesktop from "../assets/images/desktop/image-transform.jpg"
import transformMobile from "../assets/images/mobile/image-transform.jpg"
import standOutDesktop from "../assets/images/desktop/image-stand-out.jpg"
import standOutMobile from "../assets/images/mobile/image-stand-out.jpg"

function About() {
    return (
        <section id="about">
            <div className='grid grid-cols-1 auto-rows-fr md:grid-cols-2'>
                <div className='order-1 md:order-2'>
                    <img src={transformMobile} alt="egg on a yellow background" className='h-full w-full object-cover lg:hidden'/>
                    <img src={transformDesktop} alt="egg on a yellow background" className='hidden lg:block lg:object-cover lg:w-full'/>
                </div>
                <div className='order-2 md:order-1 flex flex-col justify-center text-center px-4 py-10 gap-y-10'>
                    <h2 className='font-fraunces text-3xl font-black lg:text-4xl'>Transform your brand</h2>
                    <p className='text-darkGrayBlue'>We are a full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <div>
                        <a href="/" className='uppercase font-fraunces font-black relative px-2 after:absolute after:w-full after:h-2 after:bg-yellow/30 after:left-0 after:bottom-0 after:rounded after:-z-10 hover:after:bg-yellow'>Learn more</a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 auto-rows-fr md:grid-cols-2'>
                <div className='order-1'>
                    <img src={standOutMobile} alt="glass painted in pink" className='h-full w-full object-cover lg:hidden'/>
                    <img src={standOutDesktop} alt="glass painted in pink" className='hidden lg:block lg:object-cover lg:w-full'/>
                </div>
                <div className='order-2 flex flex-col justify-center text-center px-4 py-10 gap-y-10'>
                    <h2 className='font-fraunces text-3xl font-black lg:text-4xl'>Stand out to the right audience</h2>
                    <p className='text-darkGrayBlue'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <div>
                        <a href="/" className='uppercase font-fraunces font-black relative px-2 after:absolute after:w-full after:h-2 after:bg-softRed/30 after:left-0 after:bottom-0 after:rounded after:-z-10 hover:after:bg-softRed'>Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About