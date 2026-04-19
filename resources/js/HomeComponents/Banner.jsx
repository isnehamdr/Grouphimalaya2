
import React from 'react'
import bannerimage from '../../../public/images/hero1.jpg'
import handholds from '../../../public/images/handholds.webp'
import { router } from '@inertiajs/react'

export const Banner = () => {
  return (
    <div className='px-4 sm:px-8 bg-[#f6f3ec] pb-20'>
      <div className='relative rounded-2xl lg:h-[100vh] h-[60vh] overflow-hidden'>
        
        {/* Background Image */}
        <img 
          src={bannerimage} 
          className='absolute inset-0 w-full h-full lg:object-cover object-fit' 
          alt="banner"
        />
        
        {/* Overlay */}
        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/70'></div>
        
        {/* Content - Bottom Center */}
        <div className='absolute bottom-6 left-0 right-0 flex justify-center px-4'>
          <div className='bg-white flex flex-wrap items-center justify-center gap-3 lg:gap-8 px-4 py-3 rounded-2xl lg:rounded-full shadow-lg max-w-full'>
            
            <div className='bg-[#a08959] rounded-full p-1.5 shrink-0'>
              <img src={handholds} className='w-8' alt="handholds icon" />
            </div>

            <p className='text-gray-800 text-sm sm:text-base text-center'>
              Join us in our vision to build Nepal's future.
            </p>

            <button onClick={()=>router.visit('/contact')} className="
              group relative
              h-10 sm:h-12
              px-5 sm:px-8
              overflow-hidden
              rounded-full
              bg-gray-700
              text-neutral-50
              text-sm sm:text-base
              cursor-pointer
              shrink-0
            ">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="
                  absolute left-0
                  aspect-square w-full
                  origin-center
                  -translate-x-full
                  rounded-full
                  bg-amber-800
                  transition-all duration-500
                  group-hover:-translate-x-0
                  group-hover:scale-150
                " />
              </span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}