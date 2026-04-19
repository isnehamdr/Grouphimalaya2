import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logoimage from '../../../public/images/logo2.png'
import { router } from '@inertiajs/react'

gsap.registerPlugin(ScrollTrigger)

const sectors = [
  {name:'Automotive', link:'/automobile'},
  {name:'Real Estate & Housing', link:'/realestate'},
  {name:'Hospitality', link:'/hospitality'},
  {name:'Engineering', link:'/engineering'},
  {name:'Banking', link:'/banking'},
  {name:'Agriculture', link:'/agriculture'},
]

const OrganizationDesc = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const logoRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      // Description text slides in from left
      tl.fromTo(
        textRef.current,
        { opacity: 0, x: -50, y: 20 },
        { opacity: 1, x: 0, y: 0, duration: 0.9, ease: 'power3.out' }
      )

      // Logo fades + scales in
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )

      // List items stagger in from right
      tl.fromTo(
        listRef.current.querySelectorAll('li'),
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.4'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className='py-14 px-6 sm:px-10 lg:pt-16 lg:px-16'>
      {/* <p className='text-white mb-4 lg:mb-8 text-2xl lg:text-4xl'>Driving Success with Expert Auto Solutions</p> */}
    <div
      ref={sectionRef}
      className='bg-[#0b0c0f]  
                 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center'
    >
      {/* Description */}
      <p
        ref={textRef}
        className='text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl lg:max-w-none'
      >
        Established in 1991, Himalaya Organization is a legacy-driven, multi-sector
        business group anchored by automotive leadership. We build long-term trust
        by delivering premium service, responsible growth, and measurable impact
        across Nepal.
      </p>

      {/* Logo — hidden on mobile to keep layout clean, shown from md up */}
      <div
        ref={logoRef}
        className='hidden md:flex justify-center items-center'
      >
        <img src={logoimage} className='w-48 lg:w-full max-w-xs' alt='Himalaya Organization' />
      </div>

      
      <div ref={listRef} className='flex flex-col'>
  <p className='text-white/60 text-sm uppercase tracking-widest font-medium mb-5 lg:text-right'>
    Business Divisions
  </p>

  <ul className='flex flex-col gap-4 lg:items-end'>
  
    {sectors.map((sector, i) => (
  <li
    key={i}
    onClick={()=>router.visit(sector.link)}
    className='relative w-fit cursor-pointer group flex items-center gap-3 lg:flex-row-reverse'
  >
    <span className='text-sm text-white/30 font-mono tabular-nums
                     group-hover:text-white/60 transition-colors duration-300'>
      {String(i + 1).padStart(2, '0')}
    </span>

    <span className='text-2xl sm:text-3xl uppercase text-white/80
                     transition-colors duration-300 group-hover:text-[#d6c3a0] relative'>
      {sector.name}
      <span className='absolute left-0 -bottom-1 h-[1.5px] w-full bg-current
                       scale-x-0 origin-right transition-transform duration-300
                       group-hover:scale-x-100 group-hover:origin-left' />
    </span>
  </li>
))}
  </ul>
</div>
    </div>
</div>
  )
}

export default OrganizationDesc
