// import MainWrapper from '@/MainComponents/MainWrapper'
// import React, { useEffect, useRef } from 'react'
// import corporateimage from '../../../public/images/about1.jpg'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import imageone from '../../../public/images/network.png'
// import imagetwo from '../../../public/images/construction.png'
// import imagethree from '../../../public/images/farm.png'
// import teamimage from '../../../public/images/vision.jpeg'
// import Faq from '@/HomeComponents/Faq'
// import { Head } from '@inertiajs/react'


// gsap.registerPlugin(ScrollTrigger)

// // ── helpers ──────────────────────────────────────────────────────────────────


// // ── scrambleText fix: always emit exactly finalText.length characters ──
// function scrambleText(el, finalText, duration = 1.2) {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'
//   let frame = 0
//   const totalFrames = Math.round(duration * 60)
//   const id = setInterval(() => {
//     const progress = frame / totalFrames
//     el.textContent = finalText
//       .split('')
//       .map((char, i) => {
//         if (char === ' ') return ' '                          
//         if (i / finalText.length < progress) return char     // revealed chars
//         return chars[Math.floor(Math.random() * chars.length)] // scramble
//       })
//       .join('')                                              // ← length is always finalText.length
//     frame++
//     if (frame > totalFrames) {
//       el.textContent = finalText
//       clearInterval(id)
//     }
//   }, 1000 / 60)
// }


// /** Count-up animation for numeric strings like "200+", "$100M", "22+" */
// function countUp(el, rawValue, duration = 1.4) {
//   // Split into: prefix ($), numeric part, suffix (+, M, etc.)
//   const match = rawValue.match(/^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/)
//   if (!match) {
//     scrambleText(el, rawValue, duration)
//     return
//   }
//   const [, prefix, numStr, suffix] = match
//   const target = parseFloat(numStr)
//   const isFloat = numStr.includes('.')
//   const start = performance.now()

//   function tick(now) {
//     const elapsed = (now - start) / 1000
//     const progress = Math.min(elapsed / duration, 1)
//     // ease-out-expo
//     const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
//     const current = eased * target
//     el.textContent =
//       prefix +
//       (isFloat ? current.toFixed(1) : Math.floor(current)) +
//       suffix
//     if (progress < 1) requestAnimationFrame(tick)
//     else el.textContent = rawValue
//   }
//   requestAnimationFrame(tick)
// }

// // ── component ─────────────────────────────────────────────────────────────────

// const CorporateProfile = () => {
//   const snapshotData = [
//     { id: 1, title: 'founded',         maindata: '1991 A.D',       subdata: 'Western Nepal' },
//     { id: 2, title: 'employees',       maindata: '200+',           subdata: 'Nationwide' },
//     { id: 3, title: 'branches',        maindata: '22+',            subdata: 'Kathmandu, Pokhara, Itahari & more' },
//     { id: 4, title: 'annual turnover', maindata: '$100M',          subdata: 'And growing' },
//     { id: 5, title: 'business sectors',maindata: '7+',             subdata: 'Diverse industries' },
//     { id: 6, title: 'social arm',      maindata: 'Himalaya Trust', subdata: 'Education, Healthcare, Environment' },
//   ]

//   const gridRef       = useRef(null)
//   const headingRef    = useRef(null)
//   const mainDataRefs  = useRef([])
//   const cardRefs      = useRef([])


//   const legacyHeadingRef   = useRef(null)
// const legacyTextRefs     = useRef([])   // 3 paragraphs
// const legacyCardRefs     = useRef([])   // 3 feature cards
// const impactHeadingRef   = useRef(null)
// const impactImageRef     = useRef(null)
// const impactItemRefs     = useRef([])   // 5 impact rows

//   useEffect(() => {
//     const cards     = cardRefs.current
//     const mainEls   = mainDataRefs.current

//     // Determine which items are numeric
//     const isNumeric = (str) => /^[^0-9]*\d+/.test(str)

//     // ── heading scramble ────────────────────────────────────────────────────
//     const headingFinal = 'Company Snapshot'
//     ScrollTrigger.create({
//       trigger: headingRef.current,
//       start: 'top 85%',
//       once:true,
//       onEnter: () => scrambleText(headingRef.current, headingFinal, 1.0),
//       // onEnterBack: () => scrambleText(headingRef.current, headingFinal, 1.0),
//     })

//     // ── cards: staggered fade + slide up ───────────────────────────────────
//     // We use a single ScrollTrigger for the whole grid so all cards animate together on enter/re-enter
//     const cardTl = gsap.timeline({ paused: true })
//     cardTl.fromTo(
//       cards,
//       { opacity: 0, y: 48 },
//       { opacity: 1, y: 0, duration: 0.55, stagger: 0.09, ease: 'power3.out' }
//     )

//     ScrollTrigger.create({
//       trigger: gridRef.current,
//       start: 'top 80%',
//       onEnter: () => {
//         // reset then play
//         gsap.set(cards, { opacity: 0, y: 48 })
//         cardTl.restart()
//         // fire maindata animations staggered
//         mainEls.forEach((el, i) => {
//           if (!el) return
//           const value = snapshotData[i].maindata
//           setTimeout(() => {
//             if (isNumeric(value)) countUp(el, value, 1.3)
//             else scrambleText(el, value, 1.2)
//           }, i * 90) // slight stagger matching card stagger
//         })
//       },
//       onEnterBack: () => {
//         gsap.set(cards, { opacity: 0, y: 48 })
//         cardTl.restart()
//         mainEls.forEach((el, i) => {
//           if (!el) return
//           const value = snapshotData[i].maindata
//           setTimeout(() => {
//             if (isNumeric(value)) countUp(el, value, 1.3)
//             else scrambleText(el, value, 1.2)
//           }, i * 90)
//         })
//       },
//     })



// // ── Legacy body paragraphs fade up ─────────────────────────────────────
// gsap.fromTo(
//   legacyTextRefs.current,
//   { opacity: 0, y: 32 },
//   {
//     opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
//     scrollTrigger: { trigger: legacyTextRefs.current[0], start: 'top 82%', once: true },
//   }
// )

// // ── Legacy feature cards slide in from right ────────────────────────────
// gsap.fromTo(
//   legacyCardRefs.current,
//   { opacity: 0, x: 56 },
//   {
//     opacity: 1, x: 0, duration: 0.55, stagger: 0.13, ease: 'power3.out',
//     scrollTrigger: { trigger: legacyCardRefs.current[0], start: 'top 82%', once: true },
//   }
// )

// // ── Impact heading scramble ─────────────────────────────────────────────
// // ScrollTrigger.create({
// //   trigger: impactHeadingRef.current,
// //   start: 'top 85%',
// //   once: true,
// //   onEnter: () => scrambleText(impactHeadingRef.current, 'Achievements & Impact', 1.0),
// // })

// // ── Impact image slide in from left ────────────────────────────────────
// gsap.fromTo(
//   impactImageRef.current,
//   { opacity: 0, x: -48 },
//   {
//     opacity: 1, x: 0, duration: 0.75, ease: 'power3.out',
//     scrollTrigger: { trigger: impactImageRef.current, start: 'top 80%', once: true },
//   }
// )

// // ── Impact list rows stagger from right ─────────────────────────────────
// gsap.fromTo(
//   impactItemRefs.current,
//   { opacity: 0, x: 48 },
//   {
//     opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
//     scrollTrigger: { trigger: impactItemRefs.current[0], start: 'top 82%', once: true },
//   }
// )

//     return () => ScrollTrigger.getAll().forEach(t => t.kill())
//   }, [])


  


//   const impacts = [
//     'Expanded from autos to 7+ sectors without major setbacks over 30+ years',
//     'Nationwide presence fueling jobs and economic diversification across Nepal',
//     'Himalaya Trust initiatives supporting education, healthcare, and sustainability',
//     'Authorized importer and distributor for Force Motors, Maxus, and Deepal brands', 
//     'Approaching $100 million annual turnover — a landmark for a Nepali private enterprise'
//   ]

//   return (
//     <MainWrapper>
//       <Head>
//         <title>Corporate Profile | Himalaya Organization</title>
//       </Head>
//       <div className='w-full min-h-screen p-2 sm:p-4 overflow-x-hidden text-white'>

//         {/* ── Hero Section ── */}
//         <div
//           className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-4 sm:p-8 lg:p-10'
//           style={{ backgroundImage: `url(${corporateimage.src ?? corporateimage})` }}
//         >
//           <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/95' />
//           <div className='z-10 text-center'>
//             <p className='text-white text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl mx-auto leading-tight font-semibold'>
//               Nepal's Trusted Business Powerhouse
//             </p>
//             {/* <p className='text-white max-w-xs sm:max-w-lg lg:max-w-4xl mx-auto leading-tight font-semibold mt-6'>
//                Driving economic growth with integrity,
//               innovation, and excellence across key sectors of Nepal's economy.
//             </p> */}
//           </div>
//         </div>

//         {/* ── Snapshot Section ── */}
//         <div className='py-8 sm:py-14 lg:py-20 px-2 sm:px-8 lg:px-20'>

//           {/* Heading */}
//           <p
//             ref={headingRef}
//             className='text-2xl sm:text-3xl lg:text-5xl font-medium text-center mb-6 sm:mb-8 lg:mb-10 tracking-tight'
//           >
//             Company Snapshot
//           </p>

           
// <div
//   ref={gridRef}
//   className='grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6'
// >
//   {snapshotData.map((item, i) => (
//     <div
//       key={item.id}
//       ref={el => (cardRefs.current[i] = el)}
//       className='p-4 sm:p-6 lg:p-8 bg-[#121318] rounded-2xl flex flex-col gap-2 shadow-sm min-w-0'
//       style={{ opacity: 0 }}
//     >
//       <p className='text-[10px] sm:text-sm uppercase tracking-widest text-[#ae8755] font-semibold'>
//         {item.title}
//       </p>
//       <p
//         ref={el => (mainDataRefs.current[i] = el)}
//         className='text-2xl sm:text-4xl lg:text-5xl font-semibold leading-none my-1 tabular-nums whitespace-nowrap overflow-hidden'
//       >
//         {item.maindata}
//       </p>
//       <p className='text-xs sm:text-base text-gray-500 leading-snug'>
//         {item.subdata}
//       </p>
//     </div>
//   ))}
// </div>



//   </div>


 


// {/* ── A Legacy Built on Diverse Strengths ── */}
// <div className='flex flex-col items-center  my-4 mt-8 px-2 sm:px-8 lg:px-20'>
//   <p
//     ref={legacyHeadingRef}
//     className='text-center capitalize text-2xl lg:text-5xl font-medium lg:mb-4 mb-2'
//   >
//     A Legacy Built on Diverse Strengths
//   </p>
//   <p className='lg:max-w-xl text-base sm:text-lg font-medium text-gray-600 text-center'>
//     From understanding challenges to delivering sustainable solutions, every step matters.
//   </p>

//   <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 lg:mt-12 gap-6 lg:gap-8 items-start w-full'>

//     {/* Left — body text */}
//     <div className='flex flex-col gap-4 sm:gap-5 text-base sm:text-lg'>
//       <p
//         ref={el => (legacyTextRefs.current[0] = el)}
//         className='lg:text-4xl text-2xl font-medium text-[#ae8755]'
//         style={{ opacity: 0 }}
//       >
//         Business Overview
//       </p>
//       <p
//         ref={el => (legacyTextRefs.current[1] = el)}
//         style={{ opacity: 0 }}
//       >
//         Himalaya Organization is a leading Nepali conglomerate, starting with Nepal's first
//         reconditioned vehicle house and bike rentals, now authorized importer/distributor for
//         Force Motors and regional dealer for Maxus, Deepal, and more.
//       </p>
//       <p
//         ref={el => (legacyTextRefs.current[2] = el)}
//         style={{ opacity: 0 }}
//       >
//         We diversify Nepal's economy by integrating global trends with local needs, employing
//         expert teams and modern infrastructure across automobiles, real estate, hospitality,
//         financial solutions, sustainable agriculture, educational institutions, and affordable housing.
//       </p>
//       <p
//         ref={el => (legacyTextRefs.current[3] = el)}
//         style={{ opacity: 0 }}
//       >
//         Our four pillars — hard work, integrity, adaptability, and excellence — ensure
//         setback-free growth over 30+ years, contributing significantly to national markets.
//       </p>
//     </div>

//     {/* Right — feature cards */}
//     <div className='flex flex-col gap-4'>
//       {[
//         {
//           img: imageone, alt: 'auto',
//           title: 'Pioneer in Automobiles',
//           desc: "Leading Nepal's auto industry with global brands — Force Motors, Maxus, and Deepal.",
//         },
//         {
//           img: imagetwo, alt: 'construction',
//           title: 'Real Estate & Housing',
//           desc: 'Expanding modern residential and commercial developments for contemporary Nepal.',
//         },
//         {
//           img: imagethree, alt: 'farm',
//           title: 'Hospitality & Agriculture',
//           desc: 'Enhancing community impact through hotels, sustainable farming, and financial services.',
//         },
//       ].map((card, i) => (
//         <div
//           key={i}
//           ref={el => (legacyCardRefs.current[i] = el)}
//           className='bg-[#121318] p-5 sm:p-6 rounded-2xl flex gap-4 sm:gap-6 items-start shadow-sm'
//           style={{ opacity: 0 }}
//         >
//           <img src={card.img} alt={card.alt} className='w-9 sm:w-10 shrink-0 mt-1 invert' />
//           <div>
//             <p className='text-lg sm:text-2xl font-medium'>{card.title}</p>
//             <p className='text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base'>{card.desc}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

// {/* ── Achievements & Impact ── */}
// <div className='flex flex-col items-center lg:px-20 px-2 sm:px-8 mt-10 lg:mt-20'>
//   <p
//     ref={impactHeadingRef}
//     className='text-2xl lg:text-5xl mb-3 lg:mb-4 font-medium text-center'
//   >
//     Achievements &amp; Impact
//   </p>
//   <p className='lg:max-w-xl text-base sm:text-lg font-medium text-gray-600 text-center'>
//     Key professional milestones and their measurable contributions to organizational success
//   </p>

//   <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 lg:mt-12 w-full items-start'>

//     {/* Image */}
//     <div
//       ref={impactImageRef}
//       className='w-full rounded-2xl overflow-hidden'
//       style={{ opacity: 0 }}
//     >
//       <img
//         src={teamimage}
//         alt='Team vision'
//         className='w-full h-64 sm:h-80 lg:h-full object-cover rounded-2xl'
//       />
//     </div>

//     {/* Impact rows */}
//     <div className='flex flex-col gap-4 sm:gap-6'>
//       {impacts.map((item, index) => (
//         <div
//           key={index}
//           ref={el => (impactItemRefs.current[index] = el)}
//           className='flex items-center gap-4 sm:gap-6 bg-[#121318] px-2 sm:px-6 py-5 sm:py-7 rounded-2xl shadow-sm'
//           style={{ opacity: 0 }}
//         >
//           <div className='bg-[#ae8755] text-white p-1 rounded-full shrink-0'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='24'
//               height='24'
//               viewBox='0 0 24 24'
//               fill='currentColor'
//               className='icon icon-tabler icons-tabler-filled icon-tabler-check'
//             >
//               <path stroke='none' d='M0 0h24v24H0z' fill='none' />
//               <path d='M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1 -1.414 0l-5 -5a1 1 0 0 1 1.414 -1.414l4.293 4.293l9.293 -9.293a1 1 0 0 1 1.414 0' />
//             </svg>
//           </div>
//           <p className='text-base sm:text-lg'>{item}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

//     <Faq/>

//       </div>
//     </MainWrapper>
//   )
// }

// export default CorporateProfile

import MainWrapper from '@/MainComponents/MainWrapper'
import React, { useEffect, useRef } from 'react'
import corporateimage from '../../../public/images/about1.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imageone from '../../../public/images/network.png'
import imagetwo from '../../../public/images/construction.png'
import imagethree from '../../../public/images/farm.png'
import teamimage from '../../../public/images/vision.jpeg'
import Faq from '@/HomeComponents/Faq'
import SEO from '@/Components/SEO'

gsap.registerPlugin(ScrollTrigger)

// ── helpers ──────────────────────────────────────────────────────────────────

// ── scrambleText fix: always emit exactly finalText.length characters ──
function scrambleText(el, finalText, duration = 1.2) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'
  let frame = 0
  const totalFrames = Math.round(duration * 60)
  const id = setInterval(() => {
    const progress = frame / totalFrames
    el.textContent = finalText
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' '                          
        if (i / finalText.length < progress) return char     // revealed chars
        return chars[Math.floor(Math.random() * chars.length)] // scramble
      })
      .join('')                                              // ← length is always finalText.length
    frame++
    if (frame > totalFrames) {
      el.textContent = finalText
      clearInterval(id)
    }
  }, 1000 / 60)
}

/** Count-up animation for numeric strings like "200+", "$100M", "22+" */
function countUp(el, rawValue, duration = 1.4) {
  const match = rawValue.match(/^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/)
  if (!match) {
    scrambleText(el, rawValue, duration)
    return
  }
  const [, prefix, numStr, suffix] = match
  const target = parseFloat(numStr)
  const isFloat = numStr.includes('.')
  const start = performance.now()

  function tick(now) {
    const elapsed = (now - start) / 1000
    const progress = Math.min(elapsed / duration, 1)
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
    const current = eased * target
    el.textContent =
      prefix +
      (isFloat ? current.toFixed(1) : Math.floor(current)) +
      suffix
    if (progress < 1) requestAnimationFrame(tick)
    else el.textContent = rawValue
  }
  requestAnimationFrame(tick)
}

const CorporateProfile = () => {
  const snapshotData = [
    { id: 1, title: 'founded',         maindata: '1991 A.D',       subdata: 'Western Nepal' },
    { id: 2, title: 'employees',       maindata: '200+',           subdata: 'Nationwide' },
    { id: 3, title: 'branches',        maindata: '22+',            subdata: 'Kathmandu, Pokhara, Itahari & more' },
    { id: 4, title: 'annual turnover', maindata: '$100M',          subdata: 'And growing' },
    { id: 5, title: 'business sectors',maindata: '7+',             subdata: 'Diverse industries' },
    { id: 6, title: 'social arm',      maindata: 'Himalaya Trust', subdata: 'Education, Healthcare, Environment' },
  ]

  const gridRef       = useRef(null)
  const headingRef    = useRef(null)
  const mainDataRefs  = useRef([])
  const cardRefs      = useRef([])

  const legacyHeadingRef   = useRef(null)
  const legacyTextRefs     = useRef([])
  const legacyCardRefs     = useRef([])
  const impactHeadingRef   = useRef(null)
  const impactImageRef     = useRef(null)
  const impactItemRefs     = useRef([])

  // SEO data with consistent corporate keywords
  const seoData = {
    title: "Corporate Profile | Nepal's Leading Business Conglomerate | Himalaya Organization",
    description: "Discover Himalaya Organization's corporate profile - Nepal's trusted business powerhouse since 1991. Explore our diverse sectors including automobiles, real estate, hospitality, agriculture, and financial services. 200+ employees, 22+ branches, $100M+ annual turnover.",
    url: "https://www.himalayaorganization.com/corporate-profile",
    image: "/images/about1.jpg",
  }

  useEffect(() => {
    const cards     = cardRefs.current
    const mainEls   = mainDataRefs.current

    const isNumeric = (str) => /^[^0-9]*\d+/.test(str)

    // ── heading scramble ────────────────────────────────────────────────────
    const headingFinal = 'Company Snapshot'
    ScrollTrigger.create({
      trigger: headingRef.current,
      start: 'top 85%',
      once: true,
      onEnter: () => scrambleText(headingRef.current, headingFinal, 1.0),
    })

    // ── cards: staggered fade + slide up ───────────────────────────────────
    const cardTl = gsap.timeline({ paused: true })
    cardTl.fromTo(
      cards,
      { opacity: 0, y: 48 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.09, ease: 'power3.out' }
    )

    ScrollTrigger.create({
      trigger: gridRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.set(cards, { opacity: 0, y: 48 })
        cardTl.restart()
        mainEls.forEach((el, i) => {
          if (!el) return
          const value = snapshotData[i].maindata
          setTimeout(() => {
            if (isNumeric(value)) countUp(el, value, 1.3)
            else scrambleText(el, value, 1.2)
          }, i * 90)
        })
      },
      onEnterBack: () => {
        gsap.set(cards, { opacity: 0, y: 48 })
        cardTl.restart()
        mainEls.forEach((el, i) => {
          if (!el) return
          const value = snapshotData[i].maindata
          setTimeout(() => {
            if (isNumeric(value)) countUp(el, value, 1.3)
            else scrambleText(el, value, 1.2)
          }, i * 90)
        })
      },
    })

    // ── Legacy body paragraphs fade up ─────────────────────────────────────
    gsap.fromTo(
      legacyTextRefs.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: legacyTextRefs.current[0], start: 'top 82%', once: true },
      }
    )

    // ── Legacy feature cards slide in from right ────────────────────────────
    gsap.fromTo(
      legacyCardRefs.current,
      { opacity: 0, x: 56 },
      {
        opacity: 1, x: 0, duration: 0.55, stagger: 0.13, ease: 'power3.out',
        scrollTrigger: { trigger: legacyCardRefs.current[0], start: 'top 82%', once: true },
      }
    )

    // ── Impact image slide in from left ────────────────────────────────────
    gsap.fromTo(
      impactImageRef.current,
      { opacity: 0, x: -48 },
      {
        opacity: 1, x: 0, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: impactImageRef.current, start: 'top 80%', once: true },
      }
    )

    // ── Impact list rows stagger from right ─────────────────────────────────
    gsap.fromTo(
      impactItemRefs.current,
      { opacity: 0, x: 48 },
      {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: impactItemRefs.current[0], start: 'top 82%', once: true },
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const impacts = [
    'Expanded from autos to 7+ sectors without major setbacks over 30+ years',
    'Nationwide presence fueling jobs and economic diversification across Nepal',
    'Himalaya Trust initiatives supporting education, healthcare, and sustainability',
    'Authorized importer and distributor for Force Motors, Maxus, and Deepal brands', 
    'Approaching $100 million annual turnover — a landmark for a Nepali private enterprise'
  ]

  return (
    <MainWrapper>
      <SEO {...seoData} />
      
      <div className='w-full min-h-screen p-2 sm:p-4 overflow-x-hidden text-white'>

        {/* ── Hero Section ── */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-4 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${corporateimage.src ?? corporateimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/95' />
          <div className='z-10 text-center'>
            <h1 className='text-white text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl mx-auto leading-tight font-semibold'>
              Nepal's Trusted Business Powerhouse
            </h1>
          </div>
        </div>

        {/* ── Snapshot Section ── */}
        <div className='py-8 sm:py-14 lg:py-20 px-2 sm:px-8 lg:px-20'>
          <h2
            ref={headingRef}
            className='text-2xl sm:text-3xl lg:text-5xl font-medium text-center mb-6 sm:mb-8 lg:mb-10 tracking-tight'
          >
            Company Snapshot
          </h2>
          
          <div
            ref={gridRef}
            className='grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6'
          >
            {snapshotData.map((item, i) => (
              <div
                key={item.id}
                ref={el => (cardRefs.current[i] = el)}
                className='p-4 sm:p-6 lg:p-8 bg-[#121318] rounded-2xl flex flex-col gap-2 shadow-sm min-w-0'
                style={{ opacity: 0 }}
              >
                <p className='text-[10px] sm:text-sm uppercase tracking-widest text-[#ae8755] font-semibold'>
                  {item.title}
                </p>
                <p
                  ref={el => (mainDataRefs.current[i] = el)}
                  className='text-2xl sm:text-4xl lg:text-5xl font-semibold leading-none my-1 tabular-nums whitespace-nowrap overflow-hidden'
                >
                  {item.maindata}
                </p>
                <p className='text-xs sm:text-base text-gray-500 leading-snug'>
                  {item.subdata}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── A Legacy Built on Diverse Strengths ── */}
        <div className='flex flex-col items-center my-4 mt-8 px-2 sm:px-8 lg:px-20'>
          <h2
            ref={legacyHeadingRef}
            className='text-center capitalize text-2xl lg:text-5xl font-medium lg:mb-4 mb-2'
          >
            A Legacy Built on Diverse Strengths
          </h2>
          <p className='lg:max-w-xl text-base sm:text-lg font-medium text-gray-600 text-center'>
            From understanding challenges to delivering sustainable solutions, every step matters.
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 lg:mt-12 gap-6 lg:gap-8 items-start w-full'>
            {/* Left — body text */}
            <div className='flex flex-col gap-4 sm:gap-5 text-base sm:text-lg'>
              <p
                ref={el => (legacyTextRefs.current[0] = el)}
                className='lg:text-4xl text-2xl font-medium text-[#ae8755]'
                style={{ opacity: 0 }}
              >
                Business Overview
              </p>
              <p
                ref={el => (legacyTextRefs.current[1] = el)}
                style={{ opacity: 0 }}
              >
                Himalaya Organization is a leading Nepali conglomerate, starting with Nepal's first
                reconditioned vehicle house and bike rentals, now authorized importer/distributor for
                Force Motors and regional dealer for Maxus, Deepal, and more.
              </p>
              <p
                ref={el => (legacyTextRefs.current[2] = el)}
                style={{ opacity: 0 }}
              >
                We diversify Nepal's economy by integrating global trends with local needs, employing
                expert teams and modern infrastructure across automobiles, real estate, hospitality,
                financial solutions, sustainable agriculture, educational institutions, and affordable housing.
              </p>
              <p
                ref={el => (legacyTextRefs.current[3] = el)}
                style={{ opacity: 0 }}
              >
                Our four pillars — hard work, integrity, adaptability, and excellence — ensure
                setback-free growth over 30+ years, contributing significantly to national markets.
              </p>
            </div>

            {/* Right — feature cards */}
            <div className='flex flex-col gap-4'>
              {[
                {
                  img: imageone, alt: 'automobile industry',
                  title: 'Pioneer in Automobiles',
                  desc: "Leading Nepal's auto industry with global brands — Force Motors, Maxus, and Deepal.",
                },
                {
                  img: imagetwo, alt: 'real estate construction',
                  title: 'Real Estate & Housing',
                  desc: 'Expanding modern residential and commercial developments for contemporary Nepal.',
                },
                {
                  img: imagethree, alt: 'agriculture and hospitality',
                  title: 'Hospitality & Agriculture',
                  desc: 'Enhancing community impact through hotels, sustainable farming, and financial services.',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  ref={el => (legacyCardRefs.current[i] = el)}
                  className='bg-[#121318] p-5 sm:p-6 rounded-2xl flex gap-4 sm:gap-6 items-start shadow-sm'
                  style={{ opacity: 0 }}
                >
                  <img src={card.img} alt={card.alt} className='w-9 sm:w-10 shrink-0 mt-1 invert' />
                  <div>
                    <p className='text-lg sm:text-2xl font-medium'>{card.title}</p>
                    <p className='text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base'>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Achievements & Impact ── */}
        <div className='flex flex-col items-center lg:px-20 px-2 sm:px-8 mt-10 lg:mt-20'>
          <h2
            ref={impactHeadingRef}
            className='text-2xl lg:text-5xl mb-3 lg:mb-4 font-medium text-center'
          >
            Achievements &amp; Impact
          </h2>
          <p className='lg:max-w-xl text-base sm:text-lg font-medium text-gray-600 text-center'>
            Key professional milestones and their measurable contributions to organizational success
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 lg:mt-12 w-full items-start'>
            {/* Image */}
            <div
              ref={impactImageRef}
              className='w-full rounded-2xl overflow-hidden'
              style={{ opacity: 0 }}
            >
              <img
                src={teamimage}
                alt='Himalaya Organization leadership and team vision'
                className='w-full h-64 sm:h-80 lg:h-full object-cover rounded-2xl'
              />
            </div>

            {/* Impact rows */}
            <div className='flex flex-col gap-4 sm:gap-6'>
              {impacts.map((item, index) => (
                <div
                  key={index}
                  ref={el => (impactItemRefs.current[index] = el)}
                  className='flex items-center gap-4 sm:gap-6 bg-[#121318] px-2 sm:px-6 py-5 sm:py-7 rounded-2xl shadow-sm'
                  style={{ opacity: 0 }}
                >
                  <div className='bg-[#ae8755] text-white p-1 rounded-full shrink-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='icon icon-tabler icons-tabler-filled icon-tabler-check'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1 -1.414 0l-5 -5a1 1 0 0 1 1.414 -1.414l4.293 4.293l9.293 -9.293a1 1 0 0 1 1.414 0' />
                    </svg>
                  </div>
                  <p className='text-base sm:text-lg'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Faq/>
      </div>
    </MainWrapper>
  )
}

export default CorporateProfile