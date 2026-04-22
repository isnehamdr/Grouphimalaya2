// import React, { useRef, useEffect } from 'react'
// import MainWrapper from '@/MainComponents/MainWrapper'
// import bankingimage from '../../../public/images/banking.avif'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import BusinessServicesCards from '@/MainComponents/BusinessServicesCards'
// import BusinessFeatures from '@/MainComponents/BusinessFeatures'
// import Faq from '@/HomeComponents/Faq'
// import businessimage from "../../../public/images/h2.webp";
// import { Head } from '@inertiajs/react'


// const services = [
//   {
//     id: "01",
//     title: "Personal & Business Loans",
//     description:
//       "We design and develop premium living spaces that blend modern luxury with functional elegance, offering a curated selection of homes tailored to your lifestyle and comfort.",
//     accent: "#995a37",
//     textcolor: "#000000",
//   },
//   {
//     id: "02",
//     title: "Investment Advisory",
//     description:
//       "Empower your business with strategically located commercial hubs, featuring world-class infrastructure and high-visibility spaces designed to foster growth and professional excellence.",
//     accent: "#000000",
//     textcolor: "#ffffff",
//   },
  
//   {
//     id: "03",
//     title: "Savings & Deposit Schemes",
//     description:
//       "Making quality living accessible, our affordable housing initiatives focus on smart design and structural integrity, ensuring every family can own a home without compromising on safety.",
//     accent: "#4b4640",
//     textcolor: "#ffffff",
//   },
//   {
//     id: "04",
//     title: "Vehicle & Property Financing",
//     description:
//       "Invest in the future with our expertly curated land parcels, featuring clear legal titles, strategic locations, and the essential infrastructure needed to build your dream project.",
//     accent: "#995a37",
//     textcolor: "#000000",
//   },
//   {
//     id: "05",
//     title: "Digital Banking Tools",
//     description:
//       "Protect and enhance the value of your real estate assets through our comprehensive management services, covering everything from facility maintenance to tenant relations and financial reporting.",
//     accent: "#1a1a1a",
//     textcolor: "#ffffff",
//   },
//   {
//     id: "06",
//     title: "SME & Entrepreneur Support",
//     description:
//       "Experience the perfect balance of privacy and connection within our secure, master-planned communities that offer shared amenities, green landscapes, and a safe environment for families.",
//     accent: "#866828",
//     textcolor: "#000000",
//   },
// ];

// const featuresData = [
//   {
//     title: "Personal & Business Loans",
//     description:
//       "Competitive interest rates with flexible terms tailored to your financial situation and goals.",
//   },
//   {
//     title: "Investement Advisory",
//     description:
//       "Expert guidance on savings schemes, deposits, and strategic investment opportunities.",
//   },
//   {
//     title: "Property & Vehicle Finance",
//     description:
//       "Integrated financing tied to our auto and real estate arms for seamless transactions.",
//   },
//   {
//     title: "Digital Banking",
//     description:
//       "Secure, quick digital tools for modern banking needs — accessible anytime, anywhere.",
//   },
// ];


// gsap.registerPlugin(ScrollTrigger)
// const RealEstate = () => {
    

//     const textRef = useRef(null)


// // useEffect(() => {
// //   const el = textRef.current
// //   if (!el) return

// //   const text = el.innerText
// //   el.innerHTML = ''

// //   el.style.display = 'block'
// //   el.style.whiteSpace = 'normal'
// //   el.style.wordBreak = 'break-word'
// //   el.style.overflowWrap = 'break-word'

// //   const chars = text.split('').map((char) => {
// //     const span = document.createElement('span')
// //     span.textContent = char === ' ' ? '\u00A0' : char
// //     span.style.color = 'rgb(180, 180, 180)'
// //     span.style.display = 'inline'
// //     span.style.whiteSpace = 'pre-wrap'
// //     el.appendChild(span)
// //     return span
// //   })

// //   const anim = gsap.to(chars, {        
// //     color: 'rgb(15, 15, 15)',
// //     stagger: 0.015,
// //     ease: 'none',
// //     scrollTrigger: {
// //       trigger: el,
// //       start: 'top 85%',
// //       end: 'bottom 30%',
// //       scrub: 1,
// //     },
// //   })

// //   return () => {
// //     anim.scrollTrigger?.kill()          
// //     anim.kill()                         
// //   }
// // }, [])

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
//         <title>Banking | Himalaya Organization</title>
//       </Head>
//        <div className='w-full min-h-screen p-2 sm:p-4 text-white'>

//         {/* Hero Section */}
//         <div
//           className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end  p-6 sm:p-8 lg:p-10'
//           style={{ backgroundImage: `url(${bankingimage})` }}
//         >
//           <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/80' />
//           <div className='z-10'>
//           <p className='text-white  text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold' 
       
//           >
//             Financial Solutions for Growth
//           </p>
//           <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-6'>Himalaya Organization provides reliable banking and finance services, empowering individuals and businesses across Nepal with integrity at the core.</p>
//         </div>
//         </div>

//         <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
//           <p
//             ref={textRef}
//             className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
//           >
//         At Himalaya Organizations, our Banking & Financial Services Division acts as a vital catalyst for Nepal’s economic growth, blending modern digital convenience with steadfast stability. We believe that capital is more than just a resource; it is the fuel for entrepreneurship, family security, and national development. By integrating robust risk management with deep market insight, we ensure every financial solution is built on a foundation of transparency and trust. Whether you are an individual securing your future or an enterprise scaling to new heights, our team provides the strategic expertise and integrity necessary to empower your financial journey.
//           </p>
//         </div>

//         <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          
//             <BusinessServicesCards services={services}/>


//         </div>

//             <BusinessFeatures features={featuresData} businessimage={businessimage} maintext={"Banking Rooted in Trust"} subtext={"Complementing our core sectors, our banking division offers accessible financing rooted in integrity and customer trust — with expert advisors, flexible terms, and nationwide accessibility to fuel your success."}/>

//         <Faq/>  

//         </div>
//     </MainWrapper>
//   )
// }

// export default RealEstate

import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import bankingimage from '../../../public/images/banking.avif'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BusinessServicesCards from '@/MainComponents/BusinessServicesCards'
import BusinessFeatures from '@/MainComponents/BusinessFeatures'
import Faq from '@/HomeComponents/Faq'
import businessimage from "../../../public/images/banking.avif";
import SEO from '@/Components/SEO' // Import the SEO component

const services = [
  {
    id: "01",
    title: "Personal & Business Loans",
    description:
      "We offer customized loan solutions for personal needs and business expansion, with competitive interest rates and flexible repayment terms designed to fuel your financial growth.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "02",
    title: "Investment Advisory",
    description:
      "Expert guidance on wealth management, portfolio diversification, and strategic investment opportunities tailored to your risk profile and long-term financial objectives.",
    accent: "#000000",
    textcolor: "#ffffff",
  },
  {
    id: "03",
    title: "Savings & Deposit Schemes",
    description:
      "Secure savings accounts and high-yield deposit schemes that help you build wealth systematically while enjoying competitive returns and complete peace of mind.",
    accent: "#4b4640",
    textcolor: "#ffffff",
  },
  {
    id: "04",
    title: "Vehicle & Property Financing",
    description:
      "Specialized financing solutions for vehicle purchases and real estate investments, integrated with our automobile and real estate divisions for seamless transactions.",
    accent: "#995a37",
    textcolor: "#000000",
  },
  {
    id: "05",
    title: "Digital Banking Tools",
    description:
      "Modern digital banking platforms offering secure online transactions, mobile banking, real-time account management, and paperless financial services.",
    accent: "#1a1a1a",
    textcolor: "#ffffff",
  },
  {
    id: "06",
    title: "SME & Entrepreneur Support",
    description:
      "Dedicated financial solutions for small businesses and entrepreneurs, including working capital, equipment financing, and business expansion loans.",
    accent: "#866828",
    textcolor: "#000000",
  },
];

const featuresData = [
  {
    title: "Personal & Business Loans",
    description:
      "Competitive interest rates with flexible terms tailored to your financial situation and goals.",
  },
  {
    title: "Investment Advisory",
    description:
      "Expert guidance on savings schemes, deposits, and strategic investment opportunities.",
  },
  {
    title: "Property & Vehicle Finance",
    description:
      "Integrated financing tied to our auto and real estate arms for seamless transactions.",
  },
  {
    title: "Digital Banking",
    description:
      "Secure, quick digital tools for modern banking needs — accessible anytime, anywhere.",
  },
];

gsap.registerPlugin(ScrollTrigger)

const Banking = () => { // Fixed component name from RealEstate to Banking
  const textRef = useRef(null)

  // SEO data with consistent banking and finance keywords
  const seoData = {
    title: "Banking & Financial Services | Business Loans & Investment Advisory in Nepal | Himalaya Organization",
    description: "Himalaya Organization's Banking & Financial Services Division offers personal & business loans, investment advisory, savings schemes, vehicle & property financing, digital banking tools, and SME support. Empowering Nepal's financial growth with integrity since 1991.",
    url: "https://www.himalayaorganization.com/banking",
    image: "/images/banking.avif",
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
      
      <div className='w-full min-h-screen p-2 sm:p-4 text-white'>

        {/* Hero Section */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${bankingimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/80' />
          <div className='z-10'>
            <p className='text-white text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold'>
              Financial Solutions for Growth
            </p>
            <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-6'>
              Himalaya Organization provides reliable banking and finance services, empowering individuals and businesses across Nepal with integrity at the core.
            </p>
          </div>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          <p
            ref={textRef}
            className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
          >
            At Himalaya Organizations, our Banking & Financial Services Division acts as a vital catalyst for Nepal's economic growth, blending modern digital convenience with steadfast stability. We believe that capital is more than just a resource; it is the fuel for entrepreneurship, family security, and national development. By integrating robust risk management with deep market insight, we ensure every financial solution is built on a foundation of transparency and trust. Whether you are an individual securing your future or an enterprise scaling to new heights, our team provides the strategic expertise and integrity necessary to empower your financial journey.
          </p>
        </div>

        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          <BusinessServicesCards services={services}/>
        </div>

        <BusinessFeatures 
          features={featuresData} 
          businessimage={businessimage} 
          maintext={"Banking Rooted in Trust"} 
          subtext={"Complementing our core sectors, our banking division offers accessible financing rooted in integrity and customer trust — with expert advisors, flexible terms, and nationwide accessibility to fuel your success."}
        />

        <Faq/>  
      </div>
    </MainWrapper>
  )
}

export default Banking