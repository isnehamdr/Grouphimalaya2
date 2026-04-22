// import React, {useRef, useEffect} from 'react'
// import MainWrapper from '@/MainComponents/MainWrapper'
// import organizationimage from '../../../public/images/about1.jpg'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import OrganizationTimeline from '@/MainComponents/OrganizationTimeline'
// import Faq from '@/HomeComponents/Faq'
// import { Head } from '@inertiajs/react'


// gsap.registerPlugin(ScrollTrigger)

// const OrganizationHistory = () => {


//     const textRef = useRef(null)

//     const headingRef = useRef(null)
//     const cardsRef = useRef([])


//       useEffect(() => {

//         const heading = headingRef.current
//         const cards = cardsRef.current

//         const headingST = ScrollTrigger.create({
//           trigger: heading, 
//           start: 'top 85%', 
//           toggleActions: 'play reverse play reverse',
//           onEnter: () => 
//             gsap.fromTo(
//               headingRef.children, 
//               {opacity:0, y:30}, 
//               {opacity:1, y:0, duration: 0.6, stagger: 0.15, ease: 'power2.out'}
//             ), 
//             onLeaveBack: () => 
//               gsap.to(headingRef.children, {
//                 opacity:0, 
//                 y:30, 
//                 duration:0.4, 
//                 stagger: 0.1
//               })
//         })

//         const cardTriggers = cards.map((card, i) => 
//           ScrollTrigger.create({
//             trigger:card, 
//             start: 'top 88%',
//             onEnter: () => 
//               gsap.fromTo(
//                 card, 
//                 {opacity: 0, y:50, scale:0.96}, 
//                 {
//                   opacity:1,
//                   y:0,
//                   scale:1, 
//                   duration:0.65,
//                   delay: i * 0.12,
//                   ease: 'power3.out'
//                 }
//               ), 
//               onLeaveBack: () => 
//                 gsap.to(card, {
//                   opacity: 0, 
//                   y: 50, 
//                   scale: 0.96, 
//                   duration: 0.4, 
//                   ease: 'power2.in'
//                 }),

//           })
//         )

//         return () => {
//           headingST.kill()
//           cardTriggers.forEach((t) => t.kill())
//         }
//       },[])




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
//         <title>Organization History | Himalaya Organization</title>
//       </Head>
//         <div className='w-full min-h-screen p-2 lg:p-4 text-white'>
//              <div
//           className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end  p-6 sm:p-8 lg:p-10'
//           style={{ backgroundImage: `url(${organizationimage})` }}
//         >
//           <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90' />
//           <div className='z-10'>
//           <p className='text-white  text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold' 
       
//           >
//            Three Decades of
// Resilience & Growth
//           </p>
//           {/* <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-6 hidden sm:block'>Since 1991, Himalaya Organization has transformed from a pioneering vehicle rental service into Nepal's leading business conglomerate.</p> */}
//         </div>
//         </div>

//         <div className='my-10 sm:my-12 lg:my-20 px-2 sm:px-10 lg:px-20'>
//             <p className='mb-1 font-medium'>Founding Story</p>
//             <p className='lg:text-6xl text-2xl mb-4 lg:mb-6 text-[#ae8755] font-medium'>1991</p>
//           <p
//             ref={textRef}
//             className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
//           >
//          In 1991, under the leadership of Founder and Chairman Mr. Dhruba Thapa, Himalaya Organization launched as Nepal's first reconditioned vehicle house and bike rental firm in Western Nepal.

// This bold entry into the auto sector — focusing on buy/sell/exchange of pre owned two wheelers — laid the foundation for expansion amid economic challenges that would have deterred lesser visionaries.

// What began as hands on transactions evolved through relentless adaptability, building a reputation for integrity and excellence that has persisted for over 30 years without major setbacks.
//           </p>
//         </div>

        
//         <OrganizationTimeline/>


        

//         <div className='text-center lg:px-20 lg:pb-16 flex flex-col lg:gap-8 gap-4'>
//   <div ref={headingRef}>
//     <p className='text-center text-[#ae8755]'>Our Evolution</p>
//     <p className='text-center text-xl lg:text-5xl font-semibold'>Key Growth Phases</p>
//   </div>

//   <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
//     <div
//       ref={(el) => (cardsRef.current[0] = el)}
//       className='bg-[#121318] p-6 flex flex-col gap-2 text-left rounded-2xl'
//     >
//       <p className='text-base lg:text-lg text-[#ae8755] font-semibold'>1991-2000</p>
//       <p className='text-lg lg:text-2xl font-medium'>Pioneering Autos</p>
//       <p className='text-base lg:text-lg text-gray-400'>From two-wheelers to full vehicle sales, Himalaya Organization set industry standards in Pokhara and across Western Nepal, establishing trust that remains the cornerstone of our identity.</p>
//     </div>

//     <div
//       ref={(el) => (cardsRef.current[1] = el)}
//       className='bg-[#121318] p-6 flex flex-col text-left gap-2 rounded-2xl'
//     >
//       <p className='text-base lg:text-lg text-[#ae8755] font-semibold'>2001-2015</p>
//       <p className='text-lg lg:text-2xl font-medium'>Diversification Era</p>
//       <p className='text-base lg:text-lg text-gray-400'>Entered real estate, hotels blending Nepali hospitality, financial services, sustainable farming, and educational institutions — always prioritizing ethical growth and long-term value.</p>
//     </div>

//     <div
//       ref={(el) => (cardsRef.current[2] = el)}
//       className='bg-[#121318] p-6 flex flex-col gap-2 rounded-2xl text-left'
//     >
//       <p className='text-base lg:text-lg text-[#ae8755] font-semibold'>2016-NOW</p>
//       <p className='text-lg lg:text-2xl font-medium'>Modern Expansion</p>
//       <p className='text-base lg:text-lg text-gray-400'>Nationwide presence in Kathmandu, Itahari, and beyond. Focus on innovation, social responsibility via Himalaya Trust, and economic empowerment for communities across Nepal.</p>
//     </div>
//   </div>
// </div>  


//     <Faq/>

//         </div>
//     </MainWrapper>
//   )
// }

// export default OrganizationHistory



import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import organizationimage from '../../../public/images/about1.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OrganizationTimeline from '@/MainComponents/OrganizationTimeline'
import Faq from '@/HomeComponents/Faq'
import SEO from '@/Components/SEO'

gsap.registerPlugin(ScrollTrigger)

const OrganizationHistory = () => {
  const textRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  // SEO data with consistent history and timeline keywords
  const seoData = {
    title: "Organization History | 30+ Years of Growth & Excellence Since 1991 | Himalaya Organization",
    description: "Explore Himalaya Organization's journey since 1991 - from Nepal's first reconditioned vehicle house to a leading business conglomerate. Discover our evolution through automobiles, real estate, hospitality, financial services, and sustainable agriculture across 30+ years of growth.",
    url: "https://www.himalayaorganization.com/organization-history",
    image: "/images/about1.jpg",
  }

  useEffect(() => {
    const heading = headingRef.current
    const cards = cardsRef.current

    const headingST = ScrollTrigger.create({
      trigger: heading,
      start: 'top 85%',
      toggleActions: 'play reverse play reverse',
      onEnter: () =>
        gsap.fromTo(
          headingRef.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }
        ),
      onLeaveBack: () =>
        gsap.to(headingRef.children, {
          opacity: 0,
          y: 30,
          duration: 0.4,
          stagger: 0.1
        })
    })

    const cardTriggers = cards.map((card, i) =>
      ScrollTrigger.create({
        trigger: card,
        start: 'top 88%',
        onEnter: () =>
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              delay: i * 0.12,
              ease: 'power3.out'
            }
          ),
        onLeaveBack: () =>
          gsap.to(card, {
            opacity: 0,
            y: 50,
            scale: 0.96,
            duration: 0.4,
            ease: 'power2.in'
          }),
      })
    )

    return () => {
      headingST.kill()
      cardTriggers.forEach((t) => t.kill())
    }
  }, [])

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
      
      <div className='w-full min-h-screen p-2 lg:p-4 text-white'>
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${organizationimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90' />
          <div className='z-10'>
            <h1 className='text-white text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold'>
              Three Decades of Resilience & Growth
            </h1>
          </div>
        </div>

        <div className='my-10 sm:my-12 lg:my-20 px-2 sm:px-10 lg:px-20'>
          <p className='mb-1 font-medium'>Founding Story</p>
          <p className='lg:text-6xl text-2xl mb-4 lg:mb-6 text-[#ae8755] font-medium'>1991</p>
          <p
            ref={textRef}
            className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
          >
            In 1991, under the leadership of Founder and Chairman Mr. Dhurba Bahadur Thapa, Himalaya Organization launched as Nepal's first reconditioned vehicle house and bike rental firm in Western Nepal.

            This bold entry into the auto sector — focusing on buy/sell/exchange of pre owned two wheelers — laid the foundation for expansion amid economic challenges that would have deterred lesser visionaries.

            What began as hands on transactions evolved through relentless adaptability, building a reputation for integrity and excellence that has persisted for over 30 years without major setbacks.
          </p>
        </div>

        <OrganizationTimeline />

        <div className='text-center lg:px-20 lg:pb-16 flex flex-col lg:gap-8 gap-4'>
          <div ref={headingRef}>
            <p className='text-center text-[#ae8755]'>Our Evolution</p>
            <h2 className='text-center text-xl lg:text-5xl font-semibold'>Key Growth Phases</h2>
          </div>

          <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className='bg-[#121318] p-6 flex flex-col gap-2 text-left rounded-2xl'
            >
              <p className='text-base lg:text-lg text-[#ae8755] font-semibold'>1991-2000</p>
              <p className='text-lg lg:text-2xl font-medium'>Pioneering Autos</p>
              <p className='text-base lg:text-lg text-gray-400'>From two-wheelers to full vehicle sales, Himalaya Organization set industry standards in Pokhara and across Western Nepal, establishing trust that remains the cornerstone of our identity.</p>
            </div>

            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className='bg-[#121318] p-6 flex flex-col text-left gap-2 rounded-2xl'
            >
              <p className='text-base lg:text-lg text-[#ae8755] font-semibold'>2001-2015</p>
              <p className='text-lg lg:text-2xl font-medium'>Diversification Era</p>
              <p className='text-base lg:text-lg text-gray-400'>Entered real estate, hotels blending Nepali hospitality, financial services, sustainable farming, and educational institutions — always prioritizing ethical growth and long-term value.</p>
            </div>

            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className='bg-[#121318] p-6 flex flex-col gap-2 rounded-2xl text-left'
            >
              <p className='text-base lg:text-lg text-[#ae8755] font-semibold'>2016-NOW</p>
              <p className='text-lg lg:text-2xl font-medium'>Modern Expansion</p>
              <p className='text-base lg:text-lg text-gray-400'>Nationwide presence in Kathmandu, Itahari, and beyond. Focus on innovation, social responsibility via Himalaya Trust, and economic empowerment for communities across Nepal.</p>
            </div>
          </div>
        </div>

        <Faq />
      </div>
    </MainWrapper>
  )
}

export default OrganizationHistory