import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import hopitalityimage from '../../../public/images/hospitality.avif'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BusinessServicesCards from '@/MainComponents/BusinessServicesCards'
import BusinessFeatures from '@/MainComponents/BusinessFeatures'
import Faq from '@/HomeComponents/Faq'
import businessimage from "../../../public/images/hospitality.webp";
import { Head } from '@inertiajs/react'


const services = [
  {
    id: "01",
    title: "Luxury Resort & Spa",
    description:
      "Escape to a sanctuary of peace at Mountain Glory, where modern luxury meets the raw beauty of nature, offering elegantly appointed rooms and holistic wellness treatments.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "02",
    title: "Conference & Corporate Retreats",
    description:
      "Transform your business meetings into inspiring experiences with our state-of-the-art conference halls and tranquil breakout spaces designed for high-level focus and team synergy.",
    accent: "#000000",
    textcolor: "#ffffff",
  },
  {
    id: "03",
    title: "Destination Weddings & Events",
    description:
      "Celebrate life’s most precious milestones against a backdrop of breathtaking landscapes, supported by our expert event planners and bespoke catering services.",
    accent: "#866828",
    textcolor: "#000000",
  },
  {
    id: "04",
    title: "Authentic Culinary Journey",
    description:
      "Savor the flavors of the region and the world at our signature restaurants, where farm-to-table ingredients and expert craftsmanship create an unforgettable dining experience.",
    accent: "#4b4640",
    textcolor: "#ffffff",
  },
  {
    id: "05",
    title: "Curated Tourism & Leisure Packages",
    description:
      "Explore the heart of the Himalayas through our tailored excursions, ranging from adventurous mountain treks to cultural tours, ensuring a deep connection with our local heritage.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "06",
    title: "Hospitality Management",
    description:
      "Rooted in the Nepalese tradition of 'Atithi Devo Bhava,' our professional management ensures world-class service standards, operational excellence, and a home-away-from-home feel.",
    accent: "#1a1a1a",
    textcolor: "#ffffff",
  },
];

const featuresData = [
  {
    title: "Luxury Resort & Spa",
    description:
      "Premium stays in scenic locations blending Himalayan hospitality with modern comforts.",
  },
  {
    title: "Conference & Events",
    description:
      "State-of-the-art conference facilities, event venues, and exceptional dining experiences.",
  },
  {
    title: "Budget Guesthouses",
    description:
      "Comfortable, affordable guesthouses with authentic Nepali cuisine and warm hospitality.",
  },
  {
    title: "Tailored Packages",
    description:
      "Custom packages for tourism, corporate retreats, weddings, and group travel.",
  },
];


gsap.registerPlugin(ScrollTrigger)
const Hospitality = () => {
    

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
        <title>Hospitality | Himalaya Organization</title>
      </Head>
       <div className='w-full min-h-screen p-2 sm:p-4 text-white'>

        {/* Hero Section */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end  p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${hopitalityimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90' />
          <div className='z-10'>
          <p className='text-white  text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold' 
          >
            Nepali Warmth,
World-Class Comfort
          </p>
          <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-6'>Himalaya Organization's hospitality ventures offer exceptional stays, blending the rich traditions of Himalayan hospitality with modern luxury.</p>
        </div>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          <p
            ref={textRef}
            className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
          >
        At Himalaya Organizations, our Hospitality Division is dedicated to the art of Nepalese service, where every guest is treated with the reverence of Atithi Devo Bhava. Through flagship properties like Mountain Glory Forest Resort & Spa, we blend world class luxury with the serene beauty of our natural landscapes. By integrating holistic wellness with authentic culinary experiences, we ensure every stay offers a profound sense of peace and belonging. Whether for a tranquil retreat or a high level corporate summit, our team provides the meticulous care necessary to elevate your journey.
          </p>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          
            <BusinessServicesCards services={services}/>


        </div>

            <BusinessFeatures features={featuresData} businessimage={businessimage} maintext={"Every Stay, Unforgettable"} subtext={"Mountain Glory Forest Resort & Spa trained hospitality professionals, authentic local cuisine, and strategic property locations across Nepal's most scenic destinations — we've built our reputation one memorable stay at a time."}/>

        <Faq/>  

        </div>
    </MainWrapper>
  )
}

export default Hospitality