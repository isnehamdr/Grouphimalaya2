import React, { useContext } from 'react'
import AppLayout from '@/Layouts/AppLayout'
import { MainDataContext } from '@/Context/MainContext'
const AdminCareer = () => {
    const {toggleSidebar}  = useContext(MainDataContext)
  return (
    <AppLayout>
        
        <div className='w-full min-h-screen flex flex-col relative text-neutral'>
        <div className={`min-h-screen max-w-full ${toggleSidebar ? 'w-[96%]' : ' lg:w-[83%] sm:w-[70%] w-full'} ml-auto flex justify-start items-start py-[74px] overflow-x-auto flex-col relative md:px-10 px-2 transition-all duration-200`}>

            
        </div>
        </div>
    </AppLayout>
  )
}

export default AdminCareer