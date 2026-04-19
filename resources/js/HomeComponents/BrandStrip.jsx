// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import forcelogo from '../../../public/images/force_motors_logo.png'
// import maxuslogo from '../../../public/images/maxus_logo.png'
// import fordlogo from '../../../public/images/ford_logo.png'
// import mountainglorylogo from '../../../public/images/mountain_glory_logo.png'
// import nmbbanklogo from '../../../public/images/nmb_bank_logo.png'

// const brands = [forcelogo, maxuslogo, fordlogo, mountainglorylogo, nmbbanklogo]

// const BrandStrip = () => {
//   const sectionRef = useRef(null)
//   const headingRef = useRef(null)
//   const cardsRef = useRef([])

//   useEffect(() => {
//     const heading = headingRef.current
//     const cards = cardsRef.current
//     if (!heading || !cards.length) return

//     // Set initial hidden state
//     gsap.set(heading, { opacity: 0, y: 24 })
//     gsap.set(cards, { opacity: 0, y: 40, scale: 0.94 })

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Heading animates in first, then cards stagger in
//             gsap.to(heading, {
//               opacity: 1,
//               y: 0,
//               duration: 0.6,
//               ease: 'power3.out',
//             })
//             gsap.to(cards, {
//               opacity: 1,
//               y: 0,
//               scale: 1,
//               duration: 0.6,
//               ease: 'power3.out',
//               stagger: 0.1,
//               delay: 0.2,
//             })
//           } else {
//             // Reset for next scroll-in
//             gsap.set(heading, { opacity: 0, y: 24 })
//             gsap.set(cards, { opacity: 0, y: 40, scale: 0.94 })
//           }
//         })
//       },
//       { threshold: 0.15 }
//     )

//     if (sectionRef.current) observer.observe(sectionRef.current)

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-16 py-8 overflow-x-hidden"
//     >
//       <div className="mx-auto">
//         <div ref={headingRef} className="flex items-end justify-between gap-6 mb-6">
//           <div>
//             <p className="text-xs uppercase tracking-[0.3em] text-white/50">Brands and Partners</p>
//             <h2 className="text-2xl sm:text-3xl text-white mt-2">Trusted by leading partners</h2>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
//           {brands.map((brand, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className="py-4 lg:py-6 rounded-xl border border-white/10 bg-[#101217] flex items-center justify-center text-xs sm:text-sm text-white/70"
//             >
//               <img src={brand} className="w-32" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BrandStrip


import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import forcelogo from '../../../public/images/force_motors_logo.png'
import maxuslogo from '../../../public/images/maxus_logo.png'
import fordlogo from '../../../public/images/ford_logo.png'
import mountainglorylogo from '../../../public/images/mountain_glory_logo.png'
import nmbbanklogo from '../../../public/images/nmb_bank_logo.png'
import logo1 from '../../../public/images/2logo.png'
import kal from '../../../public/images/kal.png'

const brands = [
  forcelogo,
  maxuslogo,
  fordlogo,
  mountainglorylogo,
  nmbbanklogo,
  logo1,
  kal,
]

const BrandStrip = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const marqueeRef = useRef(null)
  const tweenRef = useRef(null)

  // Duplicate for seamless loop
  const loopedBrands = [...brands, ...brands, ...brands]

  useEffect(() => {
    const heading = headingRef.current
    if (!heading) return

    gsap.set(heading, { opacity: 0, y: 24 })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(heading, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
          } else {
            gsap.set(heading, { opacity: 0, y: 24 })
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    // Width of one set of brands (1/3 of total since we tripled)
    const totalWidth = marquee.scrollWidth / 3

    tweenRef.current = gsap.to(marquee, {
      x: -totalWidth,
      duration: 22,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    })

    // Pause on hover
    const pause = () => tweenRef.current?.pause()
    const resume = () => tweenRef.current?.resume()

    marquee.addEventListener('mouseenter', pause)
    marquee.addEventListener('mouseleave', resume)

    return () => {
      tweenRef.current?.kill()
      marquee.removeEventListener('mouseenter', pause)
      marquee.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-16 py-8 overflow-hidden"
    >
      <div className="mx-auto">

        {/* Heading */}
        <div
          ref={headingRef}
          className="flex items-end justify-between gap-6 mb-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Brands and Partners
            </p>
            <h2 className="text-2xl sm:text-3xl text-white mt-2">
              Trusted by leading partners
            </h2>
          </div>
        </div>

        {/* Marquee Track */}
        <div className="relative">

          {/* Fade edges */}
          {/* <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-[#0b0c0f] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-[#0b0c0f] to-transparent" /> */}

          {/* Scrolling strip */}
          <div
            ref={marqueeRef}
            className="flex gap-3 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {loopedBrands.map((brand, index) => (
              <div
                key={index}
                className="
                  relative
                  h-28
                  w-36 sm:w-44 lg:w-52
                  flex-shrink-0
                  rounded-xl
                  flex items-center justify-center
                  bg-white/5
                  backdrop-blur-lg
                  border border-white/10
                  shadow-[0_6px_24px_rgba(0,0,0,0.35)]
                  transition-all duration-300
                  hover:bg-white/10
                  hover:border-white/20
                  hover:-translate-y-1
                  hover:shadow-[0_10px_32px_rgba(0,0,0,0.55)]
                  cursor-pointer
                "
              >
                {/* Glass reflection */}
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent opacity-40" />

                {/* Logo */}
                <img
                  src={brand}
                  className="w-24 sm:w-28 object-contain relative z-10 transition duration-300 brightness-90 hover:brightness-110"
                  alt="brand logo"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default BrandStrip