
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import automobile from '../../../public/images/automotive2.jpg'
import supporticon from '../../../public/images/icon_support.webp'
import housingimage from '../../../public/images/realestate.avif'
import hospitalityimage from '../../../public/images/hospitality.webp'
import bankingimage from '../../../public/images/h2.webp'
import agricultureimage from '../../../public/images/agriculture.png'
import engineeringimage from '../../../public/images/engineering.jpg'
import boardicon from '../../../public/images/writingboard.webp'
import mapicon from '../../../public/images/mappin.webp'
import earthicon from '../../../public/images/earth.webp'
import knowledgeicon from '../../../public/images/knowledge.webp'
import network from '../../../public/images/network.png'
import expand from '../../../public/images/expansion.png'
import community from '../../../public/images/community.png'
import construction from '../../../public/images/construction.png'
import farm from '../../../public/images/farm.png'
import homes from '../../../public/images/homes.png'
import landscape from '../../../public/images/landscape.png'
import loan from '../../../public/images/loan.png'
import seed from '../../../public/images/seed.png'
import mechanical from '../../../public/images/mechanical.png'
import advisory from '../../../public/images/advisory.png'
import { router } from '@inertiajs/react'

gsap.registerPlugin(ScrollTrigger)

// Reusable animated button
const ExploreButton = ({link}) => (
  <button 
    onClick={()=>router.visit(link)}
  className="
    group relative
    h-11 sm:h-12
    px-6 sm:px-8
    overflow-hidden
    rounded-full
    bg-[#b08d57]
    text-black
    text-sm sm:text-base
  ">
    <span className="relative z-10">Explore more</span>
    <span className="absolute inset-0 overflow-hidden rounded-md">
      <span className="
        absolute left-0
        aspect-square w-full
        origin-center
        -translate-x-full
        rounded-full
        bg-white/30
        transition-all duration-500
        group-hover:-translate-x-0
        group-hover:scale-150
      " />
    </span>
  </button>
)

// Reusable feature icon block
const FeatureItem = ({ icon, title, desc }) => (
  <div className='flex flex-col items-start gap-1.5'>
    <img src={icon}  className='w-12 invert' alt="icon" />
    <p className='text-lg text-white'>{title}</p>
    <p className='text-sm text-white/65'>{desc}</p>
  </div>
)

// Section: image LEFT, content RIGHT (default)
// Section: image RIGHT, content LEFT (reversed)
const BusinessSection = ({ image, reversed, heading, body, features, link }) => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imageEl = imageRef.current
      const contentEl = contentRef.current

      // FIX: Use clipPath/opacity + Y only on mobile to avoid horizontal overflow.
      // On desktop (lg+), we keep the horizontal slide but clip it safely.
      const isMobile = window.innerWidth < 1024

      // Image animation
      gsap.fromTo(
        imageEl,
        {
          opacity: 0,
          // On mobile avoid x translation entirely — use y + scale only
          x: isMobile ? 0 : (reversed ? 60 : -60),
          y: isMobile ? 30 : 0,
          scale: 0.97,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            // FIX: 'play none none reverse' replays the animation every time
            // the section enters/leaves the viewport — no lag with ScrollTrigger.
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Content animation
      gsap.fromTo(
        contentEl,
        {
          opacity: 0,
          x: isMobile ? 0 : (reversed ? -60 : 60),
          y: isMobile ? 30 : 20,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Stagger child elements inside content
      gsap.fromTo(
        contentEl.querySelectorAll('.animate-child'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [reversed])

  const imageEl = (
    <div ref={imageRef} className={`${reversed ? 'order-1 lg:order-2' : 'order-1'}`}>
      <img
        src={image}
        className='w-full h-64 sm:h-80 lg:h-[88vh] rounded-2xl lg:rounded-3xl object-cover'
        alt="business_image"
      />
    </div>
  )

  const contentEl = (
    <div
      ref={contentRef}
      className={`py-4 lg:py-6 flex flex-col justify-between gap-8 lg:gap-0 ${reversed ? 'order-2 lg:order-1' : 'order-2'}`}
    >
      <div className='flex flex-col gap-5'>
        <p className='animate-child text-3xl sm:text-4xl leading-snug text-white'>{heading}</p>
        <p className='animate-child text-base lg:text-lg text-white/70'>{body}</p>
        <div className='animate-child'>
          <ExploreButton link={link}/>
        </div>
      </div>

      <div className='animate-child grid grid-cols-2 gap-4 pt-2'>
        {features.map((f, i) => (
          <FeatureItem key={i} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </div>
    </div>
  )

  return (
    // FIX: overflow-hidden on the section wrapper prevents any x-translate
    // from spilling outside and causing horizontal scroll on mobile.
    <div
      ref={sectionRef}
      className='overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20'
    >
      {reversed ? (
        <>
          {contentEl}
          {imageEl}
        </>
      ) : (
        <>
          {imageEl}
          {contentEl}
        </>
      )}
    </div>
  )
}

const Business = () => {
  const valuesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Values heading
      gsap.fromTo(
        '.values-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Value cards staggered
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.13,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, valuesRef)

    return () => ctx.revert()
  }, [])

  const sections = [
    {
      image: automobile,
      reversed: false,
      heading: 'Bridging Quality Brands with Expert Distribution.',
      body: "Our automobile division encompasses a wide array of services designed to support Nepal's drivers and businesses. From initial purchase to ongoing maintenance, we provide personalized solutions that keep you moving.",
      features: [
        { icon: network, title: 'Seamless Networks', desc: 'Optimized dealership mapping and regional equipment tailored to every market.' },
        { icon: expand, title: 'Scalable Expansion', desc: 'Simplified, modular models built for high-speed delivery and effortless scaling.' },
      ],
      link:'/automobile'
    },
    {
      image: housingimage,
      reversed: true,
      heading: 'Sustainable Spaces for Modern Nepal.',
      body: "Our real estate arm develops sustainable residential and commercial projects that enhance urban living and investment potential across Nepal's key cities — with transparency and long-term value at the core.",
      features: [
        { icon: community, title: 'Adaptive Living', desc: 'Planned and tested projects, tailored to local lifestyles and community needs.' },
        { icon: homes, title: 'Modular Design', desc: 'Flexible, resilient housing built in layers to last for generations.' },
      ],
      link:'/realestate'
    },
    {
      image: hospitalityimage,
      reversed: false,
      heading: 'Crafting hospitality havens at Mountain Glory Forest Resort & Spa.',
      body: "Himalaya Group doesn't just host guests—we build experiences that grow with Nepal's travelers and communities who cherish them. Just like curating serenity with care and precision, our work at Mountain Glory combines local heritage.",
      features: [
        { icon: landscape, title: 'Serene Escapes', desc: 'Every stay is mapped, refined, and attuned to natural rhythms.' },
        { icon: supporticon, title: 'Timeless Retreat', desc: 'Mountain Glory designed in modular elegance—simple, authentic, enduring for all.' },
      ],
      link:'/hospitality'
    },
    {
      image: bankingimage,
      reversed: true,
      heading: 'Elevating Your Finances with Proven Strategies.',
      body: 'Our financial services are designed to empower individuals and businesses to make informed decisions and secure their futures. Whether planning for growth, managing investments, or navigating complex financial landscapes, our advisors deliver personalized solutions.',
      features: [
        { icon: loan, title: 'Flexible Loans', desc: 'Competitive rates and terms tailored to your personal or business goals.' },
        { icon: advisory, title: 'Growth Advice', desc: 'Expert guidance on savings, deposits, and strategic investments.' },
      ],
      link:'/banking'
    },
    {
      image: agricultureimage,
      reversed: false,
      heading: 'From Seeds to Supply Chains.',
      body: "Investing in modern agrotech, we support Nepal's farmers and markets across the entire agricultural value chain. From certified seed supply to irrigation systems and export facilitation, we're with you at every step.",
      features: [
        { icon: seed, title: 'Farming Inputs', desc: 'High-yield seeds, premium fertilizers, and modern equipment for better harvests.' },
        { icon: farm, title: 'Agri-Systems', desc: 'Smart irrigation, greenhouses, and mechanization to maximize your yield.' },
      ],
      link:'/agriculture'
    },
    {
      image: engineeringimage,
      reversed: true,
      heading: 'Complex Projects, Expert Solutions.',
      body: "Leveraging our cross-sector infrastructure expertise, Himalaya Organization's engineering division tackles complex projects from inception to completion with highly skilled teams and modern equipment.",
      features: [
        { icon: construction, title: 'Civil Works', desc: 'Comprehensive construction and infrastructure solutions built to last.' },
        { icon: mechanical, title: 'Technical Services', desc: 'Expert mechanical and electrical engineering for high-demand facilities.' },
      ],
      link:'/engineering'
    },
  ]

  const values = [
    { icon: boardicon, title: 'Timeless Foundations', desc: "Engineering enduring infrastructure that honors Nepal’s heritage while braving its most challenging terrains." },
    { icon: mapicon, title: 'National Synergy', desc: 'We bridge the gap between remote peaks and urban hubs, turning local potential into nationwide prosperity.' },
    { icon: earthicon, title: 'Himalayan Stewardship', desc: 'Constructing with a conscience. Our eco-aligned practices ensure the peaks we build under remain pristine for centuries.' },
    { icon: knowledgeicon, title: 'Visionary Synergy', desc: 'We equip our partners with world-class expertise to transform ambitious blueprints into Himalayan landmarks.' },
  ]

  return (
    // FIX: overflow-x-hidden on the root prevents any residual horizontal overflow
    // from leaking out to the page level on mobile.
    <div className='w-full overflow-x-hidden bg-[#0b0c0f] px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-16 flex flex-col gap-16 sm:gap-20 lg:gap-24'>
      {sections.map((s, i) => (
        <BusinessSection key={i} {...s} />
      ))}

      {/* Values section */}
      <div ref={valuesRef}>
        <p className='values-heading text-center text-4xl sm:text-5xl capitalize mb-10 sm:mb-12 text-white'>
          What drives us forward
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {values.map((v, i) => (
            <div key={i} 
            // className='value-card w-full bg-[#111318] border border-white/10 p-6 rounded-2xl flex flex-col gap-12 sm:gap-16'

            className="
            value-card w-full bg-[#111318] border border-white/10 p-6 rounded-2xl flex flex-col gap-12 sm:gap-16
                relative
                py-4 lg:py-6
                

                bg-white/5
                backdrop-blur-lg

                

                shadow-[0_6px_24px_rgba(0,0,0,0.35)]

                transition-all duration-300

                hover:bg-white/10
                hover:border-white/20
                hover:-translate-y-1
                hover:shadow-[0_10px_32px_rgba(0,0,0,0.55)]
              "

            
            >
              <img src={v.icon} className='w-14' alt="icon" />
              <div>
                <p className='mb-3 text-xl sm:text-2xl text-white'>{v.title}</p>
                <p className='text-sm text-white/60'>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Business
