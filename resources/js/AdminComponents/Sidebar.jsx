import React, { useContext, useEffect, useState } from 'react'
import { MainDataContext } from '@/Context/MainContext'
import { usePage } from '@inertiajs/react'
import {Link} from '@inertiajs/react'
import { RxDashboard } from 'react-icons/rx'
import { BiMenu } from 'react-icons/bi'
import himalayalogo from '../../../public/images/logo.png'
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { LuLogs } from "react-icons/lu";



const Sidebar = () => {
    const {props} = usePage();

    const {showResponsiveSidebar, toggleSidebar, setToggleSidebar, setShowResponsiveSidebar} = useContext(MainDataContext)


    const [pageLocation, setPageLocation] = useState(window.location.pathname)

    useEffect(() => {
        setShowResponsiveSidebar(false)
    }, [pageLocation])


    const isDashboardActive = ['/admin'].includes(pageLocation)

    const isBlogsActive = ['/admin/blog'].includes(pageLocation)

    const isCareerActive = ['/admin/career'].includes(pageLocation)

    const isLogsActive = ['/admin/logs'].includes(pageLocation)


  return (
    <div className={`fixed inset-y-0 left-0 transition-all duration-300 ease-in-out
      ${showResponsiveSidebar ? 'translate-x-0 z-[9999]' : '-translate-x-full z-[9999]'} 
      sm:translate-x-0 sm:z-[370]
      ${toggleSidebar ? 'w-[4%] px-1' : 'md:w-[30%] lg:w-[17%] 2xl:px-3 px-2'}
      bg-white  backdrop-blur-sm backdrop-saturate-150 border-r border-gray-300
      overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent  
    `}>

        <div className={`  mb-4 z-10  px-4 border-b border-base-300 
  ${toggleSidebar ? 'px-2 py-4 -mx-1' : 'px-4 py-1.5 -mx-3'}`}>
  
  <div className={`flex items-center  ${toggleSidebar ? 'justify-center' : 'justify-between'}`}>
    
    {/* Logo - only shown when sidebar is expanded */}
    {!toggleSidebar && (
      <div className="flex items-center gap-3">
        
        <Link href="/" className="group">
          <div className="relative overflow-hidden rounded-xl bg-base-200 
              transition-all duration-300
            w-12 h-12 group-hover:shadow-md">
            <img 
              src={himalayalogo} 
              className="w-full h-full object-contain transition-all duration-500
                group-hover:scale-105" 
              alt="Logo"
            />
          </div>
        </Link>
        
        
      </div>
    )}
    
    {/* Toggle buttons */}
    <div className="flex items-center">
      {/* Desktop toggle button - hidden on mobile */}
      <button 
        className={`hidden sm:flex items-center justify-center w-7 h-7 
          bg-base-200 border border-base-300 rounded-full shadow-md hover:shadow-lg 
          hover:scale-110 hover:border-blue-400 transition-all duration-200 ml-1
          ${toggleSidebar ? '' : '-mr-1'}`}
        onClick={() => setToggleSidebar(prev => !prev)}
      >
        <BiMenu className={`text-neutral text-sm transition-transform duration-200
          ${toggleSidebar ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Mobile toggle button - hidden on desktop */}
      <button 
        className="flex sm:hidden items-center justify-center w-7 h-7 
          bg-base-200 border border-base-300 rounded-full shadow-md hover:shadow-lg 
          hover:scale-110 hover:border-blue-400 transition-all duration-200 ml-1"
        onClick={() => setShowResponsiveSidebar(prev => !prev)}
      >
        <BiMenu className="text-neutral text-sm" />
      </button>
    </div>
  </div>
</div>


    <div className='space-y-1.5 px-1 pb-8'>

             <Link 
        href="/admin" 
        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group
          ${isDashboardActive 
            ? 'bg-gray-200 border border-base-300 text-blue-700 ' 
            : 'hover:bg-gray-100/80 text-neutral hover:text-gray-600 hover:border-gray-200 hover:shadow-sm'
          }`}
      >
        <div className={`relative ${toggleSidebar ? 'mx-auto' : ''}`}>
          <RxDashboard className={`text-lg ${isDashboardActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-600'}`} />
          {isDashboardActive && (
            <span className="absolute -right-1 -top-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          )}
        </div>
        <p className={`${toggleSidebar ? 'hidden' : ''} text-sm font-medium`}>Dashboard</p>
      </Link>


           <Link 
        href="/admin/blog" 
        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group
          ${isBlogsActive 
            ? 'bg-gray-200 border border-base-300 text-blue-700 ' 
            : 'hover:bg-gray-100/80 text-neutral hover:text-gray-600 hover:border-gray-200 hover:shadow-sm'
          }`}
      >
        <div className={`relative ${toggleSidebar ? 'mx-auto' : ''}`}>
          <IoNewspaperOutline className={`text-lg ${isBlogsActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-600'}`} />
          {isBlogsActive && (
            <span className="absolute -right-1 -top-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          )}
        </div>
        <p className={`${toggleSidebar ? 'hidden' : ''} text-sm font-medium`}>Blogs</p>
      </Link>


           <Link 
        href="/admin/career" 
        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group
          ${isCareerActive 
            ? 'bg-gray-200 border border-base-300 text-blue-700 ' 
            : 'hover:bg-gray-100/80 text-neutral hover:text-gray-600 hover:border-gray-200 hover:shadow-sm'
          }`}
      >
        <div className={`relative ${toggleSidebar ? 'mx-auto' : ''}`}>
          <FaUserGraduate className={`text-lg ${isCareerActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-600'}`} />
          {isCareerActive && (
            <span className="absolute -right-1 -top-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          )}
        </div>
        <p className={`${toggleSidebar ? 'hidden' : ''} text-sm font-medium`}>Career</p>
      </Link>

           <Link 
        href="/admin/logs" 
        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group
          ${isLogsActive 
            ? 'bg-gray-200 border border-base-300 text-blue-700 ' 
            : 'hover:bg-gray-100/80 text-neutral hover:text-gray-600 hover:border-gray-200 hover:shadow-sm'
          }`}
      >
        <div className={`relative ${toggleSidebar ? 'mx-auto' : ''}`}>
          <LuLogs className={`text-lg ${isLogsActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-600'}`} />
          {isLogsActive && (
            <span className="absolute -right-1 -top-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          )}
        </div>
        <p className={`${toggleSidebar ? 'hidden' : ''} text-sm font-medium`}>Logs</p>
      </Link>

    </div>

    </div>
  )
}

export default Sidebar