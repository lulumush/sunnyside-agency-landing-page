import React from 'react'

function Services() {
  return (
    <section id="services" className='grid grid-cols-1 auto-rows-fr md:grid-cols-2'>
        <div className='bg-servicesDesignMobile bg-cover bg-no-repeat bg-top text-center text-darkCyan pt-[380px] pb-10 px-4 smd:bg-servicesDesignDesktop lg:pt-[450px]'>
            <h2 className='font-fraunces font-black text-3xl pb-6 lg:text-4xl'>Graphic Design</h2>
            <p className='text-sm'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</p>
        </div>
        <div className='bg-servicesPhotographyMobile bg-cover bg-no-repeat bg-top text-center text-darkBlue pt-[380px] pb-10 px-4 smd:bg-servicesPhotographyDesktop lg:pt-[450px]'>
            <h2 className='font-fraunces font-black text-3xl pb-6 lg:text-4xl'>Photography</h2>
            <p className='text-sm'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
    </section>
  )
}

export default Services