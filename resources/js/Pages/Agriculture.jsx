import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import agricultureimage from '../../../public/images/agriculture.avif'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BusinessServicesCards from '@/MainComponents/BusinessServicesCards'
import BusinessFeatures from '@/MainComponents/BusinessFeatures'
import Faq from '@/HomeComponents/Faq'
import businessimage from "../../../public/images/new_agro.avif";
import { Head } from '@inertiajs/react'



const services = [
  {
    id: "01",
    title: "High-Yield Seeds & Fertilizers",
    description:
      "We provide premium-grade seeds and balanced nutrients specifically selected for Nepal’s diverse agro-climatic zones, ensuring maximum productivity and crop resilience.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "02",
    title: "Modern Irrigation Systems",
    description:
      "Optimize water usage with our smart irrigation solutions, featuring precision drip and sprinkler technologies designed to sustain healthy crops throughout the year.",
    accent: "#000000",
    textcolor: "#ffffff",
  },
  {
    id: "03",
    title: "Greenhouse & Farm Mechanization",
    description:
      "Modernize your operations with climate-controlled greenhouses and specialized machinery that reduce manual labor and protect high-value crops from unpredictable weather.",
    accent: "#866828",
    textcolor: "#000000",
  },
  {
    id: "04",
    title: "Organic Farming Training",
    description:
      "Empower your agricultural journey through expert-led workshops on sustainable practices, soil health management, and chemical-free pest control techniques.",
    accent: "#4b4640",
    textcolor: "#ffffff",
  },
  {
    id: "05",
    title: "Market Linkage Programs",
    description:
      "We bridge the gap between farm and market, providing farmers with stable distribution channels and logistics support to ensure fair pricing and minimal post-harvest loss.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "06",
    title: "Agri-Finance & Export Support",
    description:
      "Access specialized credit facilities and international trade guidance to scale your production and meet global quality standards for the export of Nepalese produce.",
    accent: "#1a1a1a",
    textcolor: "#ffffff",
  },
];


const featuresData = [
  {
    title: "Seeds & Equipment",
    description:
      "High-yield seeds, premium fertilizers, and modern farming equipment supply.",
  },
  {
    title: "Modern Farm Systems",
    description:
      "Irrigation systems, greenhouses, and farm mechanization for improved yields.",
  },
  {
    title: "Organic Training",
    description:
      "Organic farming training programs and direct market linkages for farmers."
  },
  {
    title: "Agri-Finance & Export",
    description:
      "Dedicated agri-business financing and export facilitation support.",
  },
];


gsap.registerPlugin(ScrollTrigger)
const Agriculture = () => {
    

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
        <title>Agriculture | Himalaya Organization</title>
      </Head>
       <div className='w-full min-h-screen p-2 sm:p-4 text-white'>

        {/* Hero Section */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end  p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${agricultureimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90' />
          <div className='z-10'>
          <p className='text-white  text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold' 
       
          >
            Sustainable Farming
for Tomorrow
          </p>
          <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-6'>Himalaya Organization advances Nepal's agriculture with innovative, eco-friendly solutions for food security and rural prosperity.</p>
        </div>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          <p
            ref={textRef}
            className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
          >
          At Himalaya Organizations, our Agriculture Division serves as a vital catalyst for Nepal’s food security and rural prosperity, blending traditional wisdom with modern scientific standards. We recognize that a farm is more than just land; it is a critical asset for community livelihood and national self reliance, which is why we offer comprehensive support from the distribution of high yield inputs to advanced farm mechanization. By integrating sustainable practices with a deep understanding of our country's diverse agro climatic zones, we ensure that every harvest under our guidance achieves peak productivity and unwavering quality.
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

export default Agriculture