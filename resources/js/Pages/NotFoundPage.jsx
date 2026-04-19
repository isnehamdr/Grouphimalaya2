import React from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import notfoundimage from '../../../public/images/forofor.png'
import { Head } from '@inertiajs/react'

const NotFoundPage = () => {
  return (
    <MainWrapper>
      <Head>
        <title>404 | Himalaya Organization</title>
      </Head>
      <div className='w-full pt-20 lg:pt-24 lg:pb-16 flex flex-col justify-center items-center'>
        <img src={notfoundimage} alt='not found'/>
      </div>
   </MainWrapper> 
  )
}

export default NotFoundPage