// import React, { useRef, useEffect } from 'react'
// import MainWrapper from '@/MainComponents/MainWrapper'
// import automobileimage from '../../../public/images/automobile_banner.jpg'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import BusinessServicesCards from '@/MainComponents/BusinessServicesCards'
// import BusinessFeatures from '@/MainComponents/BusinessFeatures'
// import Faq from '@/HomeComponents/Faq'
// import businessimage from "../../../public/images/h5.webp";
// import { Head } from '@inertiajs/react'
// import vehicleImg from '../../../public/images/automobile.avif'
// import dealerImg from '../../../public/images/h2.webp'
// import serviceImg from '../../../public/images/realestate.webp'
// import automotiveImg from '../../../public/images/automotive1.jpg'
// import AutomotiveBrands from '@/MainComponents/BrandCard'
// import forceShowroomImg from '../../../public/images/automotive1.jpg'   // your actual paths
// import maxusShowroomImg from '../../../public/images/maxusshowroom.jpg'
// import deepalShowroomImg from '../../../public/images/deepalshowroom.jpg'
// import fordShowroomImg from '../../../public/images/fordshowroom.jpg'


// const services = [
//   {
//     id: "01",
//     title: "Authorized Vehicle Sales",
//     description:
//       "We offer a curated selection of world-class brands, ensuring every vehicle meets our rigorous standards for performance, safety, and durability tailored for Nepal's roads.",
//     accent: "#995a37",
//     textcolor: "#000000",
//   },
//   {
//     id: "02",
//     title: "Reconditioned Exchange",
//     description:
//       "Upgrade your journey with our seamless trade-in process, providing fair valuations and high-quality, certified pre-owned vehicles that look and drive like new.",
//     accent: "#000000",
//     textcolor: "#ffffff",
//   },
//   {
//     id: "03",
//     title: "Fleet Rentals & Leasing",
//     description:
//       "Empower your business with flexible, cost-effective transportation solutions, ranging from executive sedans to rugged commercial fleets, all backed by comprehensive support.",
//     accent: "#866828",
//     textcolor: "#000000",
//   },
//   {
//     id: "04",
//     title: "After-Sales Service",
//     description:
//       "Our state-of-the-art service centers utilize advanced diagnostics and expert technicians to provide precision maintenance, ensuring your vehicle remains in peak condition.",
//     accent: "#4b4640",
//     textcolor: "#ffffff",
//   },
//   {
//     id: "05",
//     title: "Genuine Parts Supply",
//     description:
//       "We guarantee the longevity of your investment by providing an extensive inventory of authentic, manufacturer-approved spare parts designed for a perfect fit and optimal performance.",
//     accent: "#995a37",
//     textcolor: "#000000",
//   },
//   {
//     id: "06",
//     title: "Vehicle Financing",
//     description:
//       "Drive home sooner with our tailored financing packages, offering competitive interest rates and flexible repayment terms designed to suit both individual and corporate budgets.",
//     accent: "#1a1a1a",
//     textcolor: "#ffffff",
//   },
// ];

// const featuresData = [
//   {
//     title: "Authorized Dealerships",
//     description:
//       "Authorized sales and service for Force Motors, Maxus, and Deepal with full manufacturer support and warranty.",
//   },
//   {
//     title: "Reconditioned Vehicles",
//     description:
//       "Quality pre-owned vehicle sales with buy/sell/exchange programs — Nepal's original reconditioned vehicle house since 1991.",
//   },
//   {
//     title: "Rentals & Fleet",
//     description:
//       "Short and long-term rentals for bikes, cars, and commercial fleets with comprehensive after-sales support.",
//   },
//   {
//     title: "Financing",
//     description:
//       "Integrated financing partnerships for seamless vehicle purchases with competitive interest rates.",
//   },
// ];

// const highlightCards = [
//   {
//     title: "Vehicles and Fleet",
//     body: "New, reconditioned, and commercial vehicles curated for Nepal's terrain and commercial needs.",
//     image: automobileimage,
//   },
//   {
//     title: "Dealership Network",
//     body: "22+ nationwide dealer touchpoints delivering consistent sales and service standards.",
//     image: automotiveImg,
//   },
//   {
//     title: "Service and Parts",
//     body: "Certified technicians, diagnostics, and genuine parts across the network.",
//     image: businessimage,
//   },
// ];


// gsap.registerPlugin(ScrollTrigger)
// const Automobile = () => {
    

//     const textRef = useRef(null)



// useEffect(() => {
//   const el = textRef.current
//   if (!el) return

//   const text = el.innerText
//   el.innerHTML = ''

//   el.style.display = 'block'
//   el.style.whiteSpace = 'normal'
//   el.style.wordBreak = 'break-word'
//   el.style.overflowWrap = 'break-word'

//   // Split into tokens, preserving spaces as separate tokens
//   const tokens = text.split(/(\s+)/)

//   const chars = []

//   tokens.forEach((token) => {
//     if (/^\s+$/.test(token)) {
//       // Render whitespace as a plain text node so it stays a real word boundary
//       el.appendChild(document.createTextNode(token))
//     } else {
//       // Wrap the word in an inline-block so it never breaks mid-word
//       const wordSpan = document.createElement('span')
//       wordSpan.style.display = 'inline-block'
//       wordSpan.style.whiteSpace = 'nowrap'

//       token.split('').forEach((char) => {
//         const span = document.createElement('span')
//         span.textContent = char
//         span.style.color = 'rgb(75, 75, 75)'
//         span.style.display = 'inline'
//         wordSpan.appendChild(span)
//         chars.push(span)
//       })

//       el.appendChild(wordSpan)
//     }
//   })

//   gsap.to(chars, {
//     color: 'rgb(235, 235, 235)',
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
//     ScrollTrigger.getAll().forEach((t) => t.kill())
//   }
// }, [])

//   return (
//     <MainWrapper>
//       <Head>
//         <title>Automobile | Himalaya Organization</title>
//       </Head>
//        <div className='w-full min-h-screen p-2 sm:p-4 bg-[#0b0c0f] text-white'>

//         {/* Hero Section */}
//         <div
//           className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end  p-6 sm:p-8 lg:p-10'
//           style={{ backgroundImage: `url(${automobileimage})` }}
//         >
//           <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90' />
//           <div className='z-10'>
//           <p className='text-white  text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold' 
//           >
//             Driving Nepal Forward
//           </p>
//           <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-6'>Himalaya Organization leads Nepal's auto industry as authorized dealers for Force Motors, Maxus, and Deepal — offering sales, rentals, and service excellence since 1991.</p>
//         </div>
//         </div>

//         <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
//           <p
//             ref={textRef}
//             className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words text-white/80'
//           >
//           At Himalaya Organizations, our Automobile Division serves as a vital engine for Nepal’s personal and commercial mobility, blending rugged durability with modern service standards. We recognize that a vehicle is more than just a machine; it is a critical asset for business continuity and personal freedom, which is why we offer comprehensive support from the initial acquisition of high performance fleets to precision maintenance programs. By integrating expert diagnostics with a deep understanding of our country's unique terrain, we ensure that every vehicle under our care operates with peak efficiency and unwavering reliability. Whether you are a first time owner or a large scale enterprise, our team provides the technical roadmap and dedicated support necessary to keep you moving forward.
//           </p>
//         </div>

//         <div className='my-10 sm:my-12 lg:my-20 px-2 sm:px-10 lg:px-20'>
//           <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8'>
//             <div>
//               <p className='text-xs uppercase tracking-[0.3em] text-white/50'>Automotive Strength</p>
//               <h2 className='text-3xl sm:text-4xl text-white mt-2'>Vehicles, dealerships, service</h2>
//             </div>
//           </div>
//           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//             {highlightCards.map((card) => (
//               <div key={card.title} className='rounded-2xl overflow-hidden border border-white/10 bg-[#111318]'>
//                 <div className='h-44 sm:h-52 w-full'>
//                   <img src={card.image} alt={card.title} className='w-full h-full object-cover' />
//                 </div>
//                 <div className='p-5'>
//                   <p className='text-lg text-white'>{card.title}</p>
//                   <p className='mt-2 text-sm text-white/70'>{card.body}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <AutomotiveBrands
//   imageMap={{
//     force: forceShowroomImg,
//     maxus: maxusShowroomImg,
//     deepal: deepalShowroomImg,
//     ford: fordShowroomImg,
//   }}
// />

//         <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          
//             <BusinessServicesCards services={services}/>


//         </div>

//             <BusinessFeatures features={featuresData} businessimage={businessimage} maintext={"Pioneering Auto Excellence Since 1991"} subtext={"Pioneering since 1991 with Nepal's first reconditioned vehicle house, our automobile division has grown into a trusted name for two-wheelers, cars, and commercial vehicles."}/>


//         <Faq/>  

//         </div>
//     </MainWrapper>
//   )
// }

// export default Automobile


import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import automobileimage from '../../../public/images/automobile_banner.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BusinessServicesCards from '@/MainComponents/BusinessServicesCards'
import BusinessFeatures from '@/MainComponents/BusinessFeatures'
import Faq from '@/HomeComponents/Faq'
import businessimage from "../../../public/images/h5.webp"
import vehicleImg from '../../../public/images/automobile.avif'
import dealerImg from '../../../public/images/h2.webp'
import serviceImg from '../../../public/images/realestate.webp'
import automotiveImg from '../../../public/images/automotive1.jpg'
import AutomotiveBrands from '@/MainComponents/BrandCard'
import forceShowroomImg from '../../../public/images/automotive1.jpg'
import maxusShowroomImg from '../../../public/images/maxusshowroom.jpg'
import deepalShowroomImg from '../../../public/images/deepalshowroom.jpg'
import fordShowroomImg from '../../../public/images/fordshowroom.jpg'
import SEO from '@/Components/SEO' // Import the SEO component

const services = [
  {
    id: "01",
    title: "Authorized Vehicle Sales",
    description:
      "We offer a curated selection of world-class brands, ensuring every vehicle meets our rigorous standards for performance, safety, and durability tailored for Nepal's roads.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "02",
    title: "Reconditioned Exchange",
    description:
      "Upgrade your journey with our seamless trade-in process, providing fair valuations and high-quality, certified pre-owned vehicles that look and drive like new.",
    accent: "#000000",
    textcolor: "#ffffff",
  },
  {
    id: "03",
    title: "Fleet Rentals & Leasing",
    description:
      "Empower your business with flexible, cost-effective transportation solutions, ranging from executive sedans to rugged commercial fleets, all backed by comprehensive support.",
    accent: "#866828",
    textcolor: "#000000",
  },
  {
    id: "04",
    title: "After-Sales Service",
    description:
      "Our state-of-the-art service centers utilize advanced diagnostics and expert technicians to provide precision maintenance, ensuring your vehicle remains in peak condition.",
    accent: "#4b4640",
    textcolor: "#ffffff",
  },
  {
    id: "05",
    title: "Genuine Parts Supply",
    description:
      "We guarantee the longevity of your investment by providing an extensive inventory of authentic, manufacturer-approved spare parts designed for a perfect fit and optimal performance.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "06",
    title: "Vehicle Financing",
    description:
      "Drive home sooner with our tailored financing packages, offering competitive interest rates and flexible repayment terms designed to suit both individual and corporate budgets.",
    accent: "#1a1a1a",
    textcolor: "#ffffff",
  },
];

const featuresData = [
  {
    title: "Authorized Dealerships",
    description:
      "Authorized sales and service for Force Motors, Maxus, and Deepal with full manufacturer support and warranty.",
  },
  {
    title: "Reconditioned Vehicles",
    description:
      "Quality pre-owned vehicle sales with buy/sell/exchange programs — Nepal's original reconditioned vehicle house since 1991.",
  },
  {
    title: "Rentals & Fleet",
    description:
      "Short and long-term rentals for bikes, cars, and commercial fleets with comprehensive after-sales support.",
  },
  {
    title: "Financing",
    description:
      "Integrated financing partnerships for seamless vehicle purchases with competitive interest rates.",
  },
];

const highlightCards = [
  {
    title: "Vehicles and Fleet",
    body: "New, reconditioned, and commercial vehicles curated for Nepal's terrain and commercial needs.",
    image: automobileimage,
  },
  {
    title: "Dealership Network",
    body: "22+ nationwide dealer touchpoints delivering consistent sales and service standards.",
    image: automotiveImg,
  },
  {
    title: "Service and Parts",
    body: "Certified technicians, diagnostics, and genuine parts across the network.",
    image: businessimage,
  },
];

gsap.registerPlugin(ScrollTrigger)

const Automobile = () => {
  const textRef = useRef(null)

  // SEO data with consistent automobile keywords
  const seoData = {
    title: "Automobile Division | Authorized Vehicle Dealership in Nepal | Force Motors, Maxus & Deepal",
    description: "Himalaya Organization's Automobile Division - Authorized dealers for Force Motors, Maxus, and Deepal in Nepal. New & reconditioned vehicle sales, fleet rentals, after-sales service, genuine parts, and vehicle financing. Nepal's trusted auto experts since 1991.",
    url: "https://www.himalayaorganization.com/automobile",
    image: "/images/automobile_banner.jpg",
  }

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
      <SEO {...seoData} />
      
      <div className='w-full min-h-screen p-2 sm:p-4 bg-[#0b0c0f] text-white'>

        {/* Hero Section */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${automobileimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90' />
          <div className='z-10'>
            <p className='text-white text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold'>
              Driving Nepal Forward
            </p>
            <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-6'>
              Himalaya Organization leads Nepal's auto industry as authorized dealers for Force Motors, Maxus, and Deepal — offering sales, rentals, and service excellence since 1991.
            </p>
          </div>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          <p
            ref={textRef}
            className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words text-white/80'
          >
            At Himalaya Organizations, our Automobile Division serves as a vital engine for Nepal's personal and commercial mobility, blending rugged durability with modern service standards. We recognize that a vehicle is more than just a machine; it is a critical asset for business continuity and personal freedom, which is why we offer comprehensive support from the initial acquisition of high performance fleets to precision maintenance programs. By integrating expert diagnostics with a deep understanding of our country's unique terrain, we ensure that every vehicle under our care operates with peak efficiency and unwavering reliability. Whether you are a first time owner or a large scale enterprise, our team provides the technical roadmap and dedicated support necessary to keep you moving forward.
          </p>
        </div>

        <div className='my-10 sm:my-12 lg:my-20 px-2 sm:px-10 lg:px-20'>
          <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8'>
            <div>
              <p className='text-xs uppercase tracking-[0.3em] text-white/50'>Automotive Strength</p>
              <h2 className='text-3xl sm:text-4xl text-white mt-2'>Vehicles, dealerships, service</h2>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {highlightCards.map((card) => (
              <div key={card.title} className='rounded-2xl overflow-hidden border border-white/10 bg-[#111318]'>
                <div className='h-44 sm:h-52 w-full'>
                  <img src={card.image} alt={card.title} className='w-full h-full object-cover' />
                </div>
                <div className='p-5'>
                  <p className='text-lg text-white'>{card.title}</p>
                  <p className='mt-2 text-sm text-white/70'>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AutomotiveBrands
          imageMap={{
            force: forceShowroomImg,
            maxus: maxusShowroomImg,
            deepal: deepalShowroomImg,
            ford: fordShowroomImg,
          }}
        />

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          <BusinessServicesCards services={services}/>
        </div>

        <BusinessFeatures 
          features={featuresData} 
          businessimage={businessimage} 
          maintext={"Pioneering Auto Excellence Since 1991"} 
          subtext={"Pioneering since 1991 with Nepal's first reconditioned vehicle house, our automobile division has grown into a trusted name for two-wheelers, cars, and commercial vehicles."}
        />

        <Faq/>  
      </div>
    </MainWrapper>
  )
}

export default Automobile