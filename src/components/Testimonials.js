import React from 'react'
import firstTestimonial from "../assets/images/image-emily.jpg"
import secondTestimonial from "../assets/images/image-thomas.jpg"
import thirdTestimonial from "../assets/images/image-jennie.jpg"

function Testimonials() {
  return (
    <section id='testimonials' className='flex flex-col justify-center text-center px-4 py-20 gap-y-10'>
        <h2 className='font-fraunces text-darkGrayBlue text-xl pb-6 lg:text-4xl uppercase tracking-[6px] pb-10'>Client Testimonials</h2>
        <div className='flex flex-col gap-24 md:flex-row'>
            <div className='flex-1 flex flex-col items-center gap-y-6'>
                <img src={firstTestimonial} alt="headshot of a woman with long hair" className='w-24 rounded-full' />
                <div>We put  our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</div>
                <div>
                    <div className='font-fraunces font-black text-xl'>Emily R.</div>
                    <div className='text-darkGrayBlue'>Marketing Director</div>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center gap-y-6'>
                <img src={secondTestimonial} alt="headshot of a man" className='w-24 rounded-full' />
                <div>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</div>
                <div>
                    <div className='font-fraunces font-black text-xl'>Thomas S.</div>
                    <div className='text-darkGrayBlue'>Chief Operating Officer</div>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center gap-y-6'>
                <img src={thirdTestimonial} alt="headshot of a woman with short hair"  className='w-24 rounded-full'/>
                <div>Incredible end result! Our sales increased over 400% when we worked with SunnySide. Highly recommended!</div>
                <div>
                    <div className='font-fraunces font-black text-xl'>Jennie F.</div>
                    <div className='text-darkGrayBlue'>Business Owner</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials