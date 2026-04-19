
import React from 'react';
import logo from '../../../public/images/logo2.png';
import { router } from '@inertiajs/react';

const Footer = () => {
  return (
    <footer className='bg-[#0e0e0e] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 text-white'>
      {/* Top Section */}
      <div className='flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 lg:gap-0 w-full'>
        <div className='text-center lg:text-left'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-tight mb-6'>
            Strategic partnerships today shape tomorrow's Nepal.
          </p>
          <button 
            onClick={()=>router.visit('/career')}
          className="
            group relative
            h-11 sm:h-12 md:h-14
            px-6 sm:px-8 md:px-10
            overflow-hidden
            rounded-full
            bg-gray-700
            text-neutral-50
            text-sm sm:text-base md:text-lg
            font-medium
            transition-all duration-300
            hover:shadow-lg
          ">
            <span className="relative z-10">
              Join the Mission
            </span>
            <span className="absolute inset-0 overflow-hidden rounded-full">
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
      
      {/* Main Footer Content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mt-12 md:mt-16 lg:mt-20'>
        {/* Left Side - Navigation Links */}
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-8'>
          <div>
            <p className='text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-4 font-semibold'>Company</p>
            <ul className='space-y-2 md:space-y-2.5'>
              <li onClick={()=>router.visit('/about')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>About</li>
              <li onClick={()=>router.visit('/organization-history')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Organization History</li>
              <li onClick={()=>router.visit('/message-from-chairman')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Chairman's Message</li>
              <li onClick={()=>router.visit('/corporate-profile')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Corporate Profile</li>
            </ul>
          </div>
          
          <div>
            <p className='text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-4 font-semibold'>Business Sector</p>
            <ul className='space-y-2 md:space-y-2.5'>
              <li onClick={()=>router.visit('/automobile')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Automobile</li>
              <li onClick={()=>router.visit('/realestate')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Real Estate Housing</li>
              <li onClick={()=>router.visit('/hospitality')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Hospitality</li>
              <li onClick={()=>router.visit('/banking')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Banking</li>
              <li onClick={()=>router.visit('/agriculture')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Agriculture</li>
              <li onClick={()=>router.visit('/engineering')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Engineering</li>
            </ul>
          </div>
          
          <div>
            <p className='text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-4 font-semibold'>Quick Links</p>
            <ul className='space-y-2 md:space-y-2.5'>
              <li onClick={()=>router.visit('/')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Home</li>
              <li onClick={()=>router.visit('/corporate-profile')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Blog</li>
              <li onClick={()=>router.visit('/contact')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Contact</li>
              <li onClick={()=>router.visit('/career')} className='text-sm md:text-base cursor-pointer hover:text-amber-600 transition-colors duration-200'>Career</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Contact Information */}
        <div className='flex flex-col gap-6 md:gap-8 lg:max-w-md xl:max-w-lg lg:ml-auto'>
          <div>
            <p className='text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-2 font-semibold'>Contact Us</p>
            <p className='text-base md:text-lg font-medium'>(+977 061 523848)</p>
          </div>  
          
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
            <div>
              <p className='text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-2 font-semibold'>Location</p>
              <p className='text-sm md:text-base leading-relaxed'>
                Nayabazar - 11,<br/> Pokhara
              </p>
            </div>
            <div>
              <p className='text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-2 font-semibold'>Email</p>
              <p className='text-sm md:text-base break-all'>info@grouphimalaya.com</p>
            </div>
          </div>
          
          <div>
            <p className='text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-2 font-semibold'>Business Hours</p>
            <p className='text-sm md:text-base'>Sun - Fri: 10am - 6pm</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-12 md:mt-16 lg:mt-20'>
        <div className='w-full bg-[#191919] rounded-2xl md:rounded-3xl py-4 px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8'>
          <img src={logo} alt="Logo" className='w-36 sm:w-40 md:w-44 lg:w-52 object-contain'/>
          
          <div className='flex gap-4 md:gap-6'>
            <a href="https://www.facebook.com/himalayaorg/" target='__blank' className='hover:text-amber-600 transition-colors duration-200' aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            <a href="https://www.instagram.com/accounts/login/?next=%2Fhimalayaorg%2F&source=omni_redirect&hl=en" target='__blank' className='hover:text-amber-600 transition-colors duration-200' aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M16.5 7.5v.01" />
              </svg>
            </a>
            <a href="https://np.linkedin.com/company/himalayaorg" target='__blank' className='hover:text-amber-600 transition-colors duration-200' aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left'>
          <p className='text-xs sm:text-sm text-gray-400 cursor-pointer hover:text-amber-600 transition-colors duration-200'>
            Privacy Policy
          </p>

          <p className="text-xs sm:text-sm text-gray-500">
            © Copyright {new Date().getFullYear()} | Crafted by{' '}
            <a 
              href="https://sait.com.np" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-600 transition-colors duration-200"
            >
              S.A.I.T Solution Nepal
            </a>
          </p>

          <p className='text-xs sm:text-sm text-gray-400 cursor-pointer hover:text-amber-600 transition-colors duration-200'>
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;