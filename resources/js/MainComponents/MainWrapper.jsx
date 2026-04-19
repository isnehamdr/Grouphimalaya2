import React from 'react'
import Navbar from './Navbar'
import FloatingButtons from './FloatingButtons'
import Footer from './Footer'
const MainWrapper = ({children}) => {
  //bg-[#f6f3ec]
  return (
    <div className='bg-[#0b0c10]'>
       <Navbar/>
       {children}
       <Footer/>
       <FloatingButtons/> 
    </div>
  )
}

export default MainWrapper