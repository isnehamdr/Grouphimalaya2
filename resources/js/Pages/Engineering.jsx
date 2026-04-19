import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import engineeringimage from '../../../public/images/engineering.avif'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BusinessServicesCards from '@/MainComponents/BusinessServicesCards'
import BusinessFeatures from '@/MainComponents/BusinessFeatures'
import Faq from '@/HomeComponents/Faq'
import businessimage from "../../../public/images/engineering.jpg";
import { Head } from '@inertiajs/react'




const services = [
  {
    id: "01",
    title: "Civil Construction",
    description:
      "From foundational earthworks to large-scale infrastructure, we deliver high-quality civil engineering projects built to withstand Nepal’s geography while meeting global safety standards.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "02",
    title: "Mechanical & Electrical Engineering",
    description:
      "We provide integrated M&E solutions, ensuring seamless power distribution and mechanical systems that drive efficiency for both commercial complexes and industrial facilities.",
    accent: "#000000",
    textcolor: "#ffffff",
  },
  {
    id: "03",
    title: "Structural Fabrication",
    description:
      "Our specialized fabrication unit produces high-precision steel structures and components, custom-engineered for durability and architectural versatility in demanding environments.",
    accent: "#866828",
    textcolor: "#000000",
  },
  {
    id: "04",
    title: "Machinery Maintenance",
    description:
      "Maximize your operational uptime with our expert maintenance programs, utilizing advanced diagnostics and certified technicians to keep heavy equipment running at peak performance.",
    accent: "#4b4640",
    textcolor: "#ffffff",
  },
  {
    id: "05",
    title: "Industrial Setup & Commissioning",
    description:
      "We provide end-to-end support for industrial plants, managing everything from site preparation and equipment installation to final testing and operational handovers.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "06",
    title: "Engineering Consulting",
    description:
      "Leverage our technical expertise for feasibility studies, project design, and structural audits, ensuring your engineering investments are safe, cost-effective, and future-proof.",
    accent: "#1a1a1a",
    textcolor: "#ffffff",
  },
];

const featuresData = [
  {
    title: "Civil Construction",
    description:
      "Roads, bridges, buildings, and infrastructure projects delivered on time and to specification.",
  },
  {
    title: "Mechanical & Electrical",
    description:
      "Comprehensive mechanical and electrical engineering services for industrial and commercial needs.",
  },
  {
    title: "Fabrication & Maintenance",
    description:
      "Precision fabrication, machinery maintenance, and complete industrial setup services."
  },
  {
    title: "Engineering Consulting",
    description:
      "Expert consulting for auto, real estate, and agricultural engineering projects.",
  },
];


gsap.registerPlugin(ScrollTrigger)
const Engineering = () => {
    

    const textRef = useRef(null)




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
        <title>Engineering | Himalaya Organization</title>
      </Head>
       <div className='w-full min-h-screen p-2 sm:p-4 text-white'>

        {/* Hero Section */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end  p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${engineeringimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90' />
          <div className='z-10'>
          <p className='text-white  text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold' 
       
          >
            Precision Engineering Excellence
          </p>
          <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-6'>Himalaya Organization's engineering division delivers robust solutions for infrastructure, manufacturing, and beyond — with skilled teams and state-of-the-art technology.</p>
        </div>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          <p
            ref={textRef}
            className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
          >
         At Himalaya Organizations, our Engineering & Construction Division serves as the backbone of Nepal’s infrastructure, blending structural integrity with modern technical precision. We recognize that a project is more than just a build; it is a critical investment in progress and safety, which is why we offer comprehensive support from initial civil works to complex industrial commissioning. By integrating advanced fabrication with a deep understanding of our country's unique geography, we ensure that every structure and system under our care is built for peak performance and unwavering durability.
          </p>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          
            <BusinessServicesCards services={services}/>


        </div>

            <BusinessFeatures features={featuresData} businessimage={businessimage} maintext={"From Seeds to Supply Chains"} subtext={"Investing in modern agrotech, we support Nepal's farmers and markets across the entire agricultural value chain. From certified seed supply to irrigation systems and export facilitation, we're with you at every step."}/>

        <Faq/>  

        </div>
    </MainWrapper>
  )
}

export default Engineering