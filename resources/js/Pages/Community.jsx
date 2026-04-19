import MainWrapper from '@/MainComponents/MainWrapper'
import React from 'react'
import communityimage from '../../../public/images/community.avif'
import { Head } from '@inertiajs/react'

const Community = () => {
  return (
    <MainWrapper>
      <Head>
        <title>Community | Himalaya Organization</title>
      </Head>
      <div className='w-full min-h-screen p-2 sm:p-4 text-white'>
        {/* Hero Section */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${communityimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/80' />
          <div className='z-10 flex flex-col items-center pb-2 sm:pb-0'>
            <p className='text-white text-2xl sm:text-5xl lg:text-7xl max-w-[280px] sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold'>
              Contribution to Social responsibility
            </p>
            <p className='text-white text-sm sm:text-base max-w-[260px] sm:max-w-lg lg:max-w-4xl text-center leading-snug sm:leading-tight font-semibold mt-3 sm:mt-6'>
              Explore real stories, updates, and impact reports from our work
            </p>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Community