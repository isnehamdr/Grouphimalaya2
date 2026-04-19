import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import realestateimage from '../../../public/images/realestate.avif'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BusinessServicesCards from '@/MainComponents/BusinessServicesCards'
import BusinessFeatures from '@/MainComponents/BusinessFeatures'
import Faq from '@/HomeComponents/Faq'
import businessimage from "../../../public/images/realestate.webp";
import { Head } from '@inertiajs/react'


const services = [
  {
    id: "01",
    title: "Residential Apartment & Villas",
    description:
      "We design and develop premium living spaces that blend modern luxury with functional elegance, offering a curated selection of homes tailored to your lifestyle and comfort.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "02",
    title: "Commercial Complexes",
    description:
      "Empower your business with strategically located commercial hubs, featuring world-class infrastructure and high-visibility spaces designed to foster growth and professional excellence.",
    accent: "#000000",
    textcolor: "#ffffff",
  },
  {
    id: "03",
    title: "Gated Communities",
    description:
      "Experience the perfect balance of privacy and connection within our secure, master-planned communities that offer shared amenities, green landscapes, and a safe environment for families.",
    accent: "#866828",
    textcolor: "#000000",
  },
  {
    id: "04",
    title: "Affordable Housing",
    description:
      "Making quality living accessible, our affordable housing initiatives focus on smart design and structural integrity, ensuring every family can own a home without compromising on safety.",
    accent: "#4b4640",
    textcolor: "#ffffff",
  },
  {
    id: "05",
    title: "Land Development & Plot Sales",
    description:
      "Invest in the future with our expertly curated land parcels, featuring clear legal titles, strategic locations, and the essential infrastructure needed to build your dream project.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "06",
    title: "Property Management",
    description:
      "Protect and enhance the value of your real estate assets through our comprehensive management services, covering everything from facility maintenance to tenant relations and financial reporting.",
    accent: "#1a1a1a",
    textcolor: "#ffffff",
  },
];

const featuresData = [
  {
    title: "Residential Projects",
    description:
      "Apartments, villas, and gated communities designed for modern Nepali living.",
  },
  {
    title: "Commercial Spaces",
    description:
      "Complexes, offices, and retail spaces in strategic city-center locations.",
  },
  {
    title: "Affordable Housing",
    description:
      "Eco-friendly, affordable housing initiatives making quality living accessible.",
  },
  {
    title: "Land & Property",
    description:
      "Land development, plot sales, and professional property management services.",
  },
];


gsap.registerPlugin(ScrollTrigger)
const RealEstate = () => {
    

    const textRef = useRef(null)


// useEffect(() => {
//   const el = textRef.current
//   if (!el) return

//   const text = el.innerText
//   el.innerHTML = ''

//   el.style.display = 'block'
//   el.style.whiteSpace = 'normal'
//   el.style.wordBreak = 'break-word'
//   el.style.overflowWrap = 'break-word'

//   const chars = text.split('').map((char) => {
//     const span = document.createElement('span')
//     span.textContent = char === ' ' ? '\u00A0' : char
//     span.style.color = 'rgb(180, 180, 180)'
//     span.style.display = 'inline'
//     span.style.whiteSpace = 'pre-wrap'
//     el.appendChild(span)
//     return span
//   })

//   const anim = gsap.to(chars, {        
//     color: 'rgb(15, 15, 15)',
//     stagger: 0.015,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: el,
//       start: 'top 85%',
//       end: 'bottom 30%',
//       scrub: 1,
//     },
//   })

//   return () => {
//     anim.scrollTrigger?.kill()          
//     anim.kill()                         
//   }
// }, [])

useEffect(() => {
  const el = textRef.current
  if (!el) return

  const text = el.innerText
  el.innerHTML = ''

  el.style.display = 'block'
  el.style.whiteSpace = 'normal'
  el.style.wordBreak = 'break-word'
  el.style.overflowWrap = 'break-word'

  // Split into tokens, preserving spaces as separate tokens
  const tokens = text.split(/(\s+)/)

  const chars = []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      // Render whitespace as a plain text node so it stays a real word boundary
      el.appendChild(document.createTextNode(token))
    } else {
      // Wrap the word in an inline-block so it never breaks mid-word
      const wordSpan = document.createElement('span')
      wordSpan.style.display = 'inline-block'
      wordSpan.style.whiteSpace = 'nowrap'

      token.split('').forEach((char) => {
        const span = document.createElement('span')
        span.textContent = char
        span.style.color = 'rgb(75, 75, 75)'
        span.style.display = 'inline'
        wordSpan.appendChild(span)
        chars.push(span)
      })

      el.appendChild(wordSpan)
    }
  })

  gsap.to(chars, {
    color: 'rgb(235, 235, 235)',
    stagger: 0.015,
    ease: 'none',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      end: 'bottom 30%',
      scrub: 1,
    },
  })

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill())
  }
}, [])

  return (
    <MainWrapper>
      <Head>
        <title>Real Estate | Himalaya Organization</title>
      </Head>
       <div className='w-full min-h-screen p-2 sm:p-4 text-white'>

        {/* Hero Section */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end  p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${realestateimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90' />
          <div className='z-10'>
          <p className='text-white  text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold' 
       
          >
            Building Nepal's Dreams
          </p>
          <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-6'>From modern residences to thriving commercial spaces, Himalaya Organization delivers quality real estate solutions crafted for today's Nepal.</p>
        </div>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          <p
            ref={textRef}
            className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
          >
         At Himalaya Organizations, our Real Estate Division is dedicated to shaping the landscapes where people live, work, and thrive. We believe that property is more than just square footage; it is the foundation of legacy, security, and community growth. From developing modern residential spaces to managing high impact commercial hubs, we blend architectural innovation with a deep respect for Nepal’s local heritage. By integrating sustainable building practices with strategic urban planning, we ensure that every project we touch delivers long term value and structural integrity. Whether you are seeking a first home or looking to scale a commercial portfolio, our team provides the market insight and unwavering commitment necessary to build a more inspired future.
          </p>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          
            <BusinessServicesCards services={services}/>


        </div>

            <BusinessFeatures features={featuresData} businessimage={businessimage} maintext={"Long-Term Value, Transparent Dealings"} subtext={"Strategic locations, transparent dealings, and post-sale support ensure long-term value for homeowners and investors alike. Our reputation, built over 30+ years, is your guarantee of quality and integrity."}/>

        <Faq/>  

        </div>
    </MainWrapper>
  )
}

export default RealEstate