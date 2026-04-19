
// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import automobile from '../../../public/images/automobile.avif'
// import realestate from '../../../public/images/realestate.avif'
// import hospitality from '../../../public/images/hospitality.avif'
// import engineering from '../../../public/images/engineering.avif'
// import banking from '../../../public/images/banking.avif'
// import agriculture from '../../../public/images/agriculture.avif'
// import { router } from '@inertiajs/react'

// gsap.registerPlugin(ScrollTrigger)

// const cards = [
//   { src: automobile,  label: 'Automotive',  col: 0, row: 0, dir: 'up', link: '/automobile'   },
//   { src: realestate,  label: 'Real Estate',  col: 0, row: 1, dir: 'left', link: '/realestate' },
//   { src: hospitality, label: 'Hospitality',  col: 1, row: 0, dir: 'down', link: '/hospitality' },
//   { src: engineering, label: 'Engineering',  col: 1, row: 1, dir: 'up', link: '/engineering'   },
//   { src: banking,     label: 'Finance',      col: 2, row: 0, dir: 'right', link: '/banking' },
//   { src: agriculture, label: 'Agriculture',  col: 2, row: 1, dir: 'left', link: '/agriculture' },
// ]

// const getTranslate = (dir) => {
//   switch (dir) {
//     case 'up':    return { x: 0,   y: 60  }
//     case 'down':  return { x: 0,   y: -60 }
//     case 'left':  return { x: 60,  y: 0   }
//     case 'right': return { x: -60, y: 0   }
//     default:      return { x: 0,   y: 40  }
//   }
// }

// const BusinessGrid = () => {
//   const cardRefs = useRef([])

//   useEffect(() => {
//     const triggers = []

//     cardRefs.current.forEach((card, i) => {
//       if (!card) return

//       const { x, y } = getTranslate(cards[i].dir)

//       // Set initial hidden state
//       gsap.set(card, { opacity: 0, x, y, scale: 0.96 })

//       const st = ScrollTrigger.create({
//         trigger: card,
//         start: 'top 88%',
//         end: 'bottom 10%',
//         // toggleActions: onEnter onLeave onEnterBack onLeaveBack
//         // 'play reverse play reverse' — animates in AND out both directions
//         onEnter: () => {
//           gsap.to(card, {
//             opacity: 1,
//             x: 0,
//             y: 0,
//             scale: 1,
//             duration: 0.75,
//             ease: 'power3.out',
//             delay: (i % 3) * 0.1, // subtle stagger per column
//           })
//         },
//         onLeave: () => {
//           const { x, y } = getTranslate(cards[i].dir)
//           gsap.to(card, {
//             opacity: 0,
//             x: x * -0.5,
//             y: y * -0.5,
//             scale: 0.96,
//             duration: 0.5,
//             ease: 'power2.in',
//           })
//         },
//         onEnterBack: () => {
//           gsap.to(card, {
//             opacity: 1,
//             x: 0,
//             y: 0,
//             scale: 1,
//             duration: 0.65,
//             ease: 'power3.out',
//           })
//         },
//         onLeaveBack: () => {
//           const { x, y } = getTranslate(cards[i].dir)
//           gsap.to(card, {
//             opacity: 0,
//             x,
//             y,
//             scale: 0.96,
//             duration: 0.5,
//             ease: 'power2.in',
//           })
//         },
//       })

//       triggers.push(st)
//     })

//     return () => triggers.forEach((t) => t.kill())
//   }, [])

//   return (
//     <div className="pt-14 sm:pt-20 bg-[#0b0c0f] lg:px-8 overflow-hidden">
//       <div className="mx-auto px-4 sm:px-8 mb-8">
//         {/* <p className="text-xs uppercase tracking-[0.3em] text-white/50">Business Divisions</p> */}
//         <h2 className="text-3xl sm:text-4xl text-white mt-2">Multi-sector presence</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[700px] px-4 sm:px-8">

//         {/* Column 1 — 2/3 top */}
//         <div className="grid grid-rows-[2fr_1fr] gap-4 h-full min-h-0">
//           {[0, 1].map((idx) => (
//             <div
//               key={idx}
//               ref={(el) => (cardRefs.current[idx] = el)}
//               className="min-h-0 relative cursor-pointer"
//               onClick={() => router.visit(cards[idx].link)}
//             >
//               <img
//                 src={cards[idx].src}
//                 className="w-full h-full object-cover rounded-2xl"
//                 alt={cards[idx].label}
//               />
//               <div className="absolute inset-0 rounded-2xl bg-black/50 flex justify-center items-end p-6">
//                 <p className="text-white text-3xl sm:text-4xl">{cards[idx].label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Column 2 — reversed */}
//         <div className="grid grid-rows-[1fr_2fr] gap-4 h-full min-h-0">
//           {[2, 3].map((idx) => (
//             <div
//               key={idx}
//               ref={(el) => (cardRefs.current[idx] = el)}
//               className="min-h-0 relative cursor-pointer"
//               onClick={() => router.visit(cards[idx].link)}
//             >
//               <img
//                 src={cards[idx].src}
//                 className="w-full h-full object-cover rounded-2xl"
//                 alt={cards[idx].label}
//               />
//               <div className="absolute inset-0 rounded-2xl bg-black/50 flex justify-center items-end p-6">
//                 <p className="text-white text-3xl sm:text-4xl">{cards[idx].label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Column 3 */}
//         <div className="grid grid-rows-[2fr_1fr] gap-4 h-full min-h-0">
//           {[4, 5].map((idx) => (
//             <div
//               key={idx}
//               ref={(el) => (cardRefs.current[idx] = el)}
//               className="min-h-0 relative cursor-pointer"
//               onClick={() => router.visit(cards[idx].link)}
//             >
//               <img
//                 src={cards[idx].src}
//                 className="w-full h-full object-cover rounded-2xl"
//                 alt={cards[idx].label}
//               />
//               <div className="absolute inset-0 rounded-2xl bg-black/50 flex justify-center items-end p-6">
//                 <p className="text-white text-3xl sm:text-4xl">{cards[idx].label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default BusinessGrid



// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import automobile from '../../../public/images/automobile_banner.jpg'
// import realestate from '../../../public/images/realestate.avif'
// import banking from '../../../public/images/banking.avif'
// import agriculture from '../../../public/images/agriculture.avif'
// import { router } from '@inertiajs/react'

// gsap.registerPlugin(ScrollTrigger)

// const cards = [
//   { src: automobile,  label: 'Automotive',  dir: 'up',    link: '/automobile'  },
//   { src: realestate,  label: 'Real Estate',  dir: 'left',  link: '/realestate'  },
//   { src: banking,     label: 'Finance',      dir: 'right', link: '/banking'     },
//   { src: agriculture, label: 'Agriculture',  dir: 'left',  link: '/agriculture' },
// ]

// const getTranslate = (dir) => {
//   switch (dir) {
//     case 'up':    return { x: 0,   y: 60  }
//     case 'down':  return { x: 0,   y: -60 }
//     case 'left':  return { x: 60,  y: 0   }
//     case 'right': return { x: -60, y: 0   }
//     default:      return { x: 0,   y: 40  }
//   }
// }

// const BusinessGrid = () => {
//   const cardRefs = useRef([])

//   useEffect(() => {
//     const triggers = []

//     cardRefs.current.forEach((card, i) => {
//       if (!card) return

//       const { x, y } = getTranslate(cards[i].dir)
//       gsap.set(card, { opacity: 0, x, y, scale: 0.96 })

//       const st = ScrollTrigger.create({
//         trigger: card,
//         start: 'top 88%',
//         end: 'bottom 10%',
//         onEnter: () => {
//           gsap.to(card, {
//             opacity: 1, x: 0, y: 0, scale: 1,
//             duration: 0.75, ease: 'power3.out',
//             delay: (i % 2) * 0.1,
//           })
//         },
//         onLeave: () => {
//           const { x, y } = getTranslate(cards[i].dir)
//           gsap.to(card, { opacity: 0, x: x * -0.5, y: y * -0.5, scale: 0.96, duration: 0.5, ease: 'power2.in' })
//         },
//         onEnterBack: () => {
//           gsap.to(card, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.65, ease: 'power3.out' })
//         },
//         onLeaveBack: () => {
//           const { x, y } = getTranslate(cards[i].dir)
//           gsap.to(card, { opacity: 0, x, y, scale: 0.96, duration: 0.5, ease: 'power2.in' })
//         },
//       })

//       triggers.push(st)
//     })

//     return () => triggers.forEach((t) => t.kill())
//   }, [])

//   const CardItem = ({ idx }) => (
//     <div
//       ref={(el) => (cardRefs.current[idx] = el)}
//       className="min-h-0 relative cursor-pointer"
//       onClick={() => router.visit(cards[idx].link)}
//     >
//       <img
//         src={cards[idx].src}
//         className="w-full h-full object-cover rounded-2xl"
//         alt={cards[idx].label}
//       />
//       <div className="absolute inset-0 rounded-2xl bg-black/50 flex justify-center items-end p-6">
//         <p className="text-white text-3xl sm:text-4xl">{cards[idx].label}</p>
//       </div>
//     </div>
//   )

//   return (
//     <div className="pt-14 sm:pt-20 bg-[#0b0c0f] lg:px-8 overflow-hidden">
//       <div className="mx-auto px-4 sm:px-8 mb-8">
//         <h2 className="text-3xl sm:text-4xl text-white mt-2">Multi-sector presence</h2>
//       </div>

//       {/* Desktop: 2-column asymmetric grid */}
//       <div className="hidden md:grid md:grid-cols-2 gap-4 h-[600px] px-4 sm:px-8">
//         {/* Left col — tall top, short bottom */}
//         <div className="grid grid-rows-[2fr_1fr] gap-4 h-full min-h-0">
//           <CardItem idx={0} />
//           <CardItem idx={1} />
//         </div>
//         {/* Right col — short top, tall bottom */}
//         <div className="grid grid-rows-[1fr_2fr] gap-4 h-full min-h-0">
//           <CardItem idx={2} />
//           <CardItem idx={3} />
//         </div>
//       </div>

//       {/* Mobile: single column stack */}
//       <div className="md:hidden flex flex-col gap-3 px-4">
//         {cards.map((_, idx) => (
//           <div key={idx} className="h-48">
//             <CardItem idx={idx} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default BusinessGrid



import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import automobile from '../../../public/images/automobile_banner.jpg'
import realestate from '../../../public/images/realestate.avif'
import banking from '../../../public/images/banking.avif'
import agriculture from '../../../public/images/agriculture.avif'
import { router } from '@inertiajs/react'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  { src: automobile,  label: 'Automotive',  dir: 'up',    link: '/automobile'  },
  { src: realestate,  label: 'Real Estate', dir: 'left',  link: '/realestate'  },
  { src: banking,     label: 'Finance',     dir: 'right', link: '/banking'     },
  { src: agriculture, label: 'Agriculture', dir: 'left',  link: '/agriculture' },
]

const getTranslate = (dir) => {
  switch (dir) {
    case 'up':    return { x: 0,   y: 60  }
    case 'down':  return { x: 0,   y: -60 }
    case 'left':  return { x: 60,  y: 0   }
    case 'right': return { x: -60, y: 0   }
    default:      return { x: 0,   y: 40  }
  }
}

const BusinessGrid = () => {
  const cardRefs = useRef([])

  useEffect(() => {
    const triggers = []

    cardRefs.current.forEach((card, i) => {
      if (!card) return

      const { x, y } = getTranslate(cards[i].dir)

      gsap.set(card, {
        opacity: 0,
        x,
        y,
        scale: 0.96,
        transformOrigin: "center center"
      })

      const st = ScrollTrigger.create({
        trigger: card,
        start: 'top 88%',
        end: 'bottom 10%',

        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power3.out',
            delay: (i % 2) * 0.1,
            clearProps: "transform"
          })
        },

        onLeave: () => {
          const { x, y } = getTranslate(cards[i].dir)

          gsap.to(card, {
            opacity: 0,
            x: x * -0.5,
            y: y * -0.5,
            scale: 0.96,
            duration: 0.5,
            ease: 'power2.in'
          })
        },

        onEnterBack: () => {
          gsap.to(card, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: 'power3.out'
          })
        },

        onLeaveBack: () => {
          const { x, y } = getTranslate(cards[i].dir)

          gsap.to(card, {
            opacity: 0,
            x,
            y,
            scale: 0.96,
            duration: 0.5,
            ease: 'power2.in'
          })
        },
      })

      triggers.push(st)
    })

    return () => triggers.forEach((t) => t.kill())
  }, [])

  const CardItem = ({ idx }) => (
    <div
      ref={(el) => (cardRefs.current[idx] = el)}
      className="relative cursor-pointer h-full w-full overflow-hidden rounded-2xl"
      onClick={() => router.visit(cards[idx].link)}
    >
      {/* Image */}
      <img
        src={cards[idx].src}
        className="w-full h-full object-cover"
        alt={cards[idx].label}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-end justify-center p-4 sm:p-6">
        <p className="text-white text-xl sm:text-3xl lg:text-4xl text-center">
          {cards[idx].label}
        </p>
      </div>
    </div>
  )

  return (
    <div className="pt-14 sm:pt-20 bg-[#0b0c0f] lg:px-8 overflow-hidden">

      {/* Heading */}
      <div className="mx-auto px-4 sm:px-8 mb-8">
        <h2 className="text-3xl sm:text-4xl text-white mt-2">
          Multi-sector presence
        </h2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-4 h-[600px] px-4 sm:px-8">

        {/* Left Column */}
        <div className="grid grid-rows-[2fr_1fr] gap-4 h-full min-h-0">
          <CardItem idx={0} />
          <CardItem idx={1} />
        </div>

        {/* Right Column */}
        <div className="grid grid-rows-[1fr_2fr] gap-4 h-full min-h-0">
          <CardItem idx={2} />
          <CardItem idx={3} />
        </div>

      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-4 px-4 pb-6">

        {cards.map((_, idx) => (
          <div
            key={idx}
            className="h-52 sm:h-56"
          >
            <CardItem idx={idx} />
          </div>
        ))}

      </div>

    </div>
  )
}

export default BusinessGrid