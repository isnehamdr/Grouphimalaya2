// import React, { useState, useEffect, useRef } from 'react'
// import logo from '../../../public/images/logo2.png'
// import { Link } from '@inertiajs/react'
// import { router } from '@inertiajs/react'
// import {usePage} from '@inertiajs/react'


// const Navbar = () => {
//   const [visible, setVisible] = useState(true)
//   const [scrolled, setScrolled] = useState(false)
//   const [aboutOpen, setAboutOpen] = useState(false)
//   const [businessOpen, setBusinessOpen] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
//   const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false)
//   const lastScrollY = useRef(0)
//   const aboutRef = useRef(null)
//   const businessRef = useRef(null)

// const {url} = usePage()

//   const aboutItems = [
//     {name:'About Organization', link:'/about'},
//     {name:'Organization History', link:'/organization-history'},
//     {name:'Corporate Profile', link:'/corporate-profile'},
//     {name:"Chairman's Message", link:'/message-from-chairman'},
//   ]

//   const businessItems = [
//     {name:'Automobile', link:'/automobile'},
//     {name:'Real Estate & Housing', link:'/realestate'},
//     {name:'Hospitality', link:'/hospitality'},
//     {name:'Banking', link:'/banking'},
//     {name:'Agriculture', link:'/agriculture'},
//     {name:'Engineering', link:'/engineering'},
//   ]


//   const isAboutActive = ['/about', '/organization-history', '/corporate-profile', '/message-from-chairman'].includes(url)

//   const isBusinessActive = ['/automobile', '/realestate', '/hospitality', '/banking', '/agriculture', '/engineering'].includes(url)



//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY
//       const isScrollingUp = currentY < lastScrollY.current
//       setVisible(isScrollingUp || currentY < 10)
//       setScrolled(currentY > 10)
//       lastScrollY.current = currentY
//       if (currentY > 10) setMobileOpen(false)
//     }
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])


//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false)
//       if (businessRef.current && !businessRef.current.contains(e.target)) setBusinessOpen(false)
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])


//   const isPill = !scrolled

//   return (
//     <>
     
//       <nav
//         className={`
//           fixed top-0 left-0 right-0 z-50
//           transition-all duration-500 ease-in-out
//           ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}
//         `}
//         style={{ willChange: 'transform, opacity' }}
//       > 
//         <div
//   className={`
//     transition-all duration-200 ease-out
//     ${isPill
//       ? 'mx-4 sm:mx-8 md:mx-16 lg:mx-72 2xl:mx-[360px] mt-4 rounded-full bg-[#0e1116]/90 backdrop-blur-md border border-white/10 shadow-sm px-2'
//       : 'mx-0 mt-0 rounded-none bg-[#0e1116] border-b border-white/10 px-6 lg:px-8'
//     }
//   `}
//   style={{ willChange: 'margin, border-radius' }}
// >
//           <div className={`flex items-center py-2 gap-4 ${!isPill ? 'max-w-7xl mx-auto justify-between' : 'justify-between'}`}>
//             {/* Logo */}
//             <Link href='/' className="shrink-0">
//               <img src={logo} className="w-32 lg:w-40" alt="Logo" />
//             </Link>

//             {/* Desktop Nav Links */}
//             <div className="hidden md:flex items-center gap-1 lg:gap-2">
//               <Link href="/" className={`px-3 py-2 text-base font-medium ${url === '/' ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}>
//                 Home
//               </Link>

//               {/* About Dropdown */}
//               <div className="relative" ref={aboutRef}>
//                 <button
//                   onClick={() => { setAboutOpen(p => !p); setBusinessOpen(false) }}
//                   className={`flex items-center gap-1 px-3 py-2 text-base font-medium ${isAboutActive ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150 `}
//                 >
//                   About
//                   <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>
//                 <DropdownMenu open={aboutOpen} items={aboutItems} onClose={() => setAboutOpen(false)} />
//               </div>

//               {/* Business Dropdown */}
//               <div className="relative" ref={businessRef}>
//                 <button
//                   onClick={() => { setBusinessOpen(p => !p); setAboutOpen(false) }}
//                   className={`flex items-center gap-1 px-3 py-2 text-base font-medium ${isBusinessActive ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}
//                 >
//                   Business
//                   <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${businessOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>
//                 <DropdownMenu open={businessOpen} items={businessItems} onClose={() => setBusinessOpen(false)} />
//               </div>

//               <Link href="/blog" className={`px-3 py-2 text-base font-medium ${url==='/blog' ? 'text-[#d6c3a0]': 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}>Blog</Link>
//               <Link href="/career" className={`px-3 py-2 text-base font-medium ${url === '/career' ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}>Career</Link>
//             </div>

//             {/* Desktop Contact + Mobile Hamburger */}
//             <div className="flex items-center gap-2">
//                 <button 
//                 onClick={()=>router.visit('/contact')}
//                 className="
//             group relative
//             h-11 sm:h-12
//             px-6 sm:px-8
//             overflow-hidden
//             rounded-full
//                 bg-[#b08d57]
//                 text-black
//                 text-sm sm:text-base
//                 font-medium
//               ">
//             <span className="relative z-10">
//               Contact Us
//             </span>

//             <span className="absolute inset-0 overflow-hidden rounded-md">
//               <span className="
//                 absolute left-0
//                 aspect-square w-full
//                 origin-center
//                 -translate-x-full
//                 rounded-full
//                 bg-white/30
//                 transition-all duration-500
//                 group-hover:-translate-x-0
//                 group-hover:scale-150
//               " />
//             </span>
//           </button>

//               {/* Hamburger */}
//               <button
//                 onClick={() => setMobileOpen(p => !p)}
//                 className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full hover:bg-white/5 transition-colors gap-1.5"
//                 aria-label="Toggle menu"
//               >
//                 <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
//                 <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
//                 <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Overlay */}
//       <div
//         className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
//         onClick={() => setMobileOpen(false)}
//         style={{ background: 'rgba(0,0,0,0.5)' }}
//       />

//       {/* Mobile Drawer */}
//       <div
//         className={`
//           fixed top-0 right-0 h-full w-72 z-50 md:hidden
//           bg-[#0e1116] shadow-2xl flex flex-col
//           transition-transform duration-300 ease-in-out
//           ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
//         `}
//       >
//         <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
//           <img src={logo} className="w-28" alt="Logo" />
//           <button
//             onClick={() => setMobileOpen(false)}
//             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 text-white/70 transition-colors"
//           >
//             <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
//               <path d="M1 1l12 12M13 1L1 13" strokeLinecap="round" />
//             </svg>
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
//           <Link href="/" className="px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
//             Home
//           </Link>

//           {/* Mobile About Accordion */}
//           <div>
//             <button
//               onClick={() => setMobileAboutOpen(p => !p)}
//               className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors"
//             >
//               About
//               <svg className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//             <div className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? 'max-h-60' : 'max-h-0'}`}>
//               <div className="pl-4 pb-1 flex flex-col gap-0.5">
//                 {aboutItems.map(item => (
//                   <Link key={item.name} href={item.link} className="px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Mobile Business Accordion */}
//           <div>
//             <button
//               onClick={() => setMobileBusinessOpen(p => !p)}
//               className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors"
//             >
//               Business
//               <svg className={`w-4 h-4 transition-transform duration-200 ${mobileBusinessOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//             <div className={`overflow-hidden transition-all duration-300 ${mobileBusinessOpen ? 'max-h-72' : 'max-h-0'}`}>
//               <div className="pl-4 pb-1 flex flex-col gap-0.5">
//                 {businessItems.map(item => (
//                   <Link key={item.name} href={item.link} className="px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <Link href="/blog" className="px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>
//           <Link href="/career" className="px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Career</Link>
//         </div>

//         <div className="px-4 pb-6 pt-3 border-t border-white/10">
//           <button onClick={()=>router.visit('/contact')} className="group relative w-full h-11 overflow-hidden rounded-full bg-[#b08d57] text-black text-sm font-medium">
//             <span className="relative z-10">Contact Us</span>
//             <span className="absolute inset-0 overflow-hidden rounded-full">
//               <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white/30 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
//             </span>
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// const DropdownMenu = ({ open, items, onClose }) => (
//   <div
//     className={`
//       absolute top-full mt-2 left-1/2 -translate-x-1/2 w-52
//       bg-[#0e1116] rounded-2xl shadow-xl border border-white/10 overflow-hidden
//       transition-all duration-200 origin-top
//       ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
//     `}
//   >
//     <div className="p-1.5">
//       {items.map(item => (
//         <Link
//           key={item.name}
//           href={item.link}
//           className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-100"
//           onClick={onClose}
//         >
//           {item.name}
//         </Link>
//       ))}
//     </div>
//   </div>
// )

// export default Navbar





import React, { useState, useEffect, useRef } from 'react'
import { Link } from '@inertiajs/react'
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [businessOpen, setBusinessOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false)
  const aboutRef = useRef(null)
  const businessRef = useRef(null)

  const { url } = usePage()

  const aboutItems = [
    { name: 'About Organization', link: '/about' },
    { name: 'Organization History', link: '/organization-history' },
    { name: 'Corporate Profile', link: '/corporate-profile' },
    { name: "Chairman's Message", link: '/message-from-chairman' },
  ]

  const businessItems = [
    { name: 'Automobile', link: '/automobile' },
    { name: 'Real Estate & Housing', link: '/realestate' },
    { name: 'Hospitality', link: '/hospitality' },
    { name: 'Banking', link: '/banking' },
    { name: 'Agriculture', link: '/agriculture' },
    { name: 'Engineering', link: '/engineering' },
  ]

  const isAboutActive = ['/about', '/organization-history', '/corporate-profile', '/message-from-chairman'].includes(url)
  const isBusinessActive = ['/automobile', '/realestate', '/hospitality', '/banking', '/agriculture', '/engineering'].includes(url)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      if (window.scrollY > 10) setMobileOpen(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false)
      if (businessRef.current && !businessRef.current.contains(e.target)) setBusinessOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isPill = !scrolled

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`
            transition-all duration-200 ease-out
            ${isPill
              ? 'mx-4 sm:mx-8 md:mx-16 lg:mx-72 2xl:mx-[360px] mt-4 rounded-full bg-[#0e1116]/90 backdrop-blur-md border border-white/10 shadow-sm px-2'
              : 'mx-0 mt-0 rounded-none bg-[#0e1116] border-b border-white/10 px-2 lg:px-8'
            }
          `}
        >
          <div className={`flex items-center py-2 gap-4 ${!isPill ? 'max-w-7xl mx-auto justify-between' : 'justify-between'}`}>

            {/* CRS Text Logo */}
            {/* <Link href="/" className="shrink-0 text-[#b08c57] text-base uppercase font-extrabold tracking-widest text-center lg:pl-4">
              Himalaya 
              <br/>
              Organization
            </Link> */}

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              <Link href="/" className={`px-3 py-2 text-base font-medium ${url === '/' ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}>
                Home
              </Link>

              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => { setAboutOpen(p => !p); setBusinessOpen(false) }}
                  className={`flex items-center gap-1 px-3 py-2 text-base font-medium ${isAboutActive ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}
                >
                  About
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <DropdownMenu open={aboutOpen} items={aboutItems} onClose={() => setAboutOpen(false)} />
              </div>

              <div className="relative" ref={businessRef}>
                <button
                  onClick={() => { setBusinessOpen(p => !p); setAboutOpen(false) }}
                  className={`flex items-center gap-1 px-3 py-2 text-base font-medium ${isBusinessActive ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}
                >
                  Business
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${businessOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <DropdownMenu open={businessOpen} items={businessItems} onClose={() => setBusinessOpen(false)} />
              </div>
<Link href="/community" className={`px-3 py-2 text-base font-medium ${url === '/' ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}>
                Community
              </Link>
              <Link href="/blog" className={`px-3 py-2 text-base font-medium ${url === '/blog' ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}>Blog</Link>
              <Link href="/career" className={`px-3 py-2 text-base font-medium ${url === '/career' ? 'text-[#d6c3a0]' : 'text-white/80'} hover:text-white rounded-full hover:bg-white/5 transition-all duration-150`}>Career</Link>
            </div>

              <div>
                <button
                onClick={() => setMobileOpen(p => !p)}
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full hover:bg-white/5 transition-colors gap-1.5"
                aria-label="Toggle menu"
              >
                <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
              </div>
            {/* Contact + Hamburger */}
            <div className="flex items-center  gap-2">
              <button
                onClick={() => router.visit('/contact')}
                className="group relative h-11 sm:h-12 px-6 sm:px-8 overflow-hidden rounded-full bg-[#b08d57] text-black text-sm sm:text-base font-medium"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white/30 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
                </span>
              </button>

              
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        style={{ background: 'rgba(0,0,0,0.5)' }}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden bg-[#0e1116] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
          {/* CRS Text Logo in drawer */}
          {/* <span className="text-[#d6c3a0] text-xl font-bold tracking-widest">CRS</span> */}
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 text-white/70 transition-colors ml-auto"
          >
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M1 1l12 12M13 1L1 13" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
          <Link href="/" className="px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>

          <div>
            <button onClick={() => setMobileAboutOpen(p => !p)} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors">
              About
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? 'max-h-60' : 'max-h-0'}`}>
              <div className="pl-4 pb-1 flex flex-col gap-0.5">
                {aboutItems.map(item => (
                  <Link key={item.name} href={item.link} className="px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <button onClick={() => setMobileBusinessOpen(p => !p)} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors">
              Business
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileBusinessOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileBusinessOpen ? 'max-h-72' : 'max-h-0'}`}>
              <div className="pl-4 pb-1 flex flex-col gap-0.5">
                {businessItems.map(item => (
                  <Link key={item.name} href={item.link} className="px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/community" className="px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Community</Link>
          <Link href="/blog" className="px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/career" className="px-4 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Career</Link>
        </div>

        <div className="px-4 pb-6 pt-3 border-t border-white/10">
          <button onClick={() => router.visit('/contact')} className="group relative w-full h-11 overflow-hidden rounded-full bg-[#b08d57] text-black text-sm font-medium">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white/30 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

const DropdownMenu = ({ open, items, onClose }) => (
  <div
    className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 w-52 bg-[#0e1116] rounded-2xl shadow-xl border border-white/10 overflow-hidden transition-all duration-200 origin-top ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
  >
    <div className="p-1.5">
      {items.map(item => (
        <Link key={item.name} href={item.link} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-100" onClick={onClose}>
          {item.name}
        </Link>
      ))}
    </div>
  </div>
)

export default Navbar