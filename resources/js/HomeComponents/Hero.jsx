

import React, { useEffect, useRef, useState } from 'react'
import imageone from '../../../public/images/h5.webp'
import imagetwo from '../../../public/images/h2.webp'
import imagefour from '../../../public/images/hospitality.webp'
import imagefive from '../../../public/images/realestate.webp'
import imagesix from '../../../public/images/vision.jpeg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { router } from '@inertiajs/react'
import himalayalogo from '../../../public/images/logo2.png'

gsap.registerPlugin(ScrollTrigger, SplitText)

const images = [
  imageone,
  imagetwo,
  imagefour,
  imagefive,
  imagesix
]

const Hero = () => {
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 640) return 2
      return 1
    }
    return 3
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount())

  // Refs for animated elements
  const sectionRef     = useRef(null)
  const headingRef     = useRef(null)
  const subTextRef     = useRef(null)
  const buttonsRef     = useRef(null)
  const carouselRef    = useRef(null)
  const bottomTextRef  = useRef(null)

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ─── 1. HEADING — SplitText word-by-word reveal ─── */
      const headingEl = headingRef.current
      if (headingEl) {
        // const split = new SplitText(headingEl, { type: 'words,chars' })


        const split = new SplitText(headingEl, { type: 'words' })

// Apply shimmer ONLY to first words (not 1991)
split.words.forEach((word) => {
  if (!word.textContent.includes('1991')) {
    word.classList.add('shimmer-word')
  }
})


        // Set initial state
        gsap.set(split.words, {
          opacity: 0,
          y: 60,
          rotationX: -45,
          transformOrigin: '50% 100%',
          transformPerspective: 800,
           display: 'inline-block',
  paddingBottom: '0.1em' 
        })

        ScrollTrigger.create({
          trigger: headingEl,
          start: 'top 85%',
          // Re-animate every time it enters viewport
          onEnter: () => {
            gsap.to(split.words, {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.08,
            })
          },
          onLeaveBack: () => {
            // Reset when scrolled back above so it re-animates on next enter
            gsap.set(split.words, {
              opacity: 0,
              y: 60,
              rotationX: -45,
              duration: 0.5,
    ease: 'power2.in',
    stagger: 0.04,
            })
          },
        })
      }

      /* ─── 2. SUBTEXT — line mask reveal (clip-path) ─── */
      const subEl = subTextRef.current
      if (subEl) {
        gsap.set(subEl, {
          opacity: 0,
          y: 30,
          clipPath: 'inset(0 100% 0 0)',
        })

        ScrollTrigger.create({
          trigger: subEl,
          start: 'top 88%',
          onEnter: () => {
            gsap.to(subEl, {
              opacity: 1,
              y: 0,
              clipPath: 'inset(0 0% 0 0)',
              duration: 1,
              ease: 'power3.out',
              delay: 0.15,
            })
          },
          onLeaveBack: () => {
            gsap.set(subEl, {
              opacity: 0,
              y: 30,
              clipPath: 'inset(0 100% 0 0)',
               duration: 0.7,
    ease: 'power2.in',
            })
          },
        })
      }

      /* ─── 3. BUTTONS — staggered scale + fade pop ─── */
      const buttonsEl = buttonsRef.current
      if (buttonsEl) {
        const btns = buttonsEl.querySelectorAll('button')
        gsap.set(btns, { opacity: 0, scale: 0.8, y: 20 })

        ScrollTrigger.create({
          trigger: buttonsEl,
          start: 'top 90%',
          onEnter: () => {
            gsap.to(btns, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              ease: 'back.out(1.7)',
              stagger: 0.12,
              delay: 0.3,
            })
          },
          onLeaveBack: () => {
            gsap.set(btns, {     opacity: 0,
    scale: 0.8,
    y: 20,
    duration: 0.4,
    ease: 'power2.in',
    stagger: 0.08,
 })
          },
        })
      }

      /* ─── 4. CAROUSEL — fade + slide up ─── */
    //   const carouselEl = carouselRef.current
    //   if (carouselEl) {
    //     gsap.set(carouselEl, { opacity: 0, y: 60 })

    //     ScrollTrigger.create({
    //       trigger: carouselEl,
    //       start: 'top 92%',
    //       onEnter: () => {
    //         gsap.to(carouselEl, {
    //           opacity: 1,
    //           y: 0,
    //           duration: 1,
    //           ease: 'power3.out',
    //           delay: 0.1,
    //         })
    //       },
    //       onLeaveBack: () => {
    //         gsap.set(carouselEl, { opacity: 0,
    // y: 60,
    // duration: 0.7,
    // ease: 'power2.in', })
    //       },
    //     })
    //   }

      /* ─── 5. BOTTOM TEXT — SplitText char-by-char shimmer ─── */
      const bottomEl = bottomTextRef.current
      if (bottomEl) {
        const splitBottom = new SplitText(bottomEl, { type: 'words' })

        gsap.set(splitBottom.words, {
          opacity: 0,
          y: 40,
          filter: 'blur(8px)',
        })

        ScrollTrigger.create({
          trigger: bottomEl,
          start: 'top 90%',
          onEnter: () => {
            gsap.to(splitBottom.words, {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.7,
              ease: 'power2.out',
              stagger: 0.04,
            })
          },
          onLeaveBack: () => {
            gsap.set(splitBottom.words, {
              opacity: 0,
    y: 40,
    filter: 'blur(8px)',
    duration: 0.5,
    ease: 'power2.in',
    stagger: 0.03,
            })
          },
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])


//  bg-gradient-to-b
//         from-[#0b0c0f]
//         via-[#0f1116]
//         to-[#151822]

  return (
    <div
      ref={sectionRef}
      className='
        w-full
        min-h-screen
        pt-28 sm:pt-32 lg:pt-44
        flex flex-col
        items-center
       
      '
    >

      {/* TEXT SECTION */}
      <div className='max-w-6xl px-4 text-center'>

        {/* Main Heading */}
        {/* <h1
          ref={headingRef}
          className='
            text-4xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            font-semibold
            text-white
          '
        >
          Driving Nepal Forward
          <br />
          Since <span className='text-[#b08d57]'>1991</span>
        </h1> */}



        <h1
  ref={headingRef}
  className='
    text-4xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    xl:text-7xl
    font-semibold
    text-white
     leading-[1.2]   /* ADD THIS */
    overflow-visible /* ADD THIS */
    pb-3
  '
>
  <span className="shimmer-text">
    Driving Nepal Forward
    <br />
    Since
  </span>{' '}
  <span className='text-[#b08d57]'>
    1991
  </span>
</h1>

          <div>
            <img src={himalayalogo} className='w-64 mx-auto'/>
          </div>


        {/* Subtext */}
        <p
          ref={subTextRef}
          className='
            text-white/70
            mx-auto
            mt-5
            sm:mt-6
            max-w-xl
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
          '
        >
          A legacy-driven multi-sector business group powering Nepal’s mobility,
          infrastructure, and growth since 1991.
        </p>

        {/* BUTTONS */}
        <div
          ref={buttonsRef}
          className='
            flex
            flex-wrap
            justify-center
            gap-3
            sm:gap-4
            mt-6
          '
        >

          {/* Button 1 */}
          <button onClick={()=>router.visit('/automobile')} className="
            group relative
            h-11 sm:h-12
            px-6 sm:px-8
            overflow-hidden
            rounded-full
            bg-[#b08d57]
            text-black
            text-sm sm:text-base
          ">
            <span className="relative z-10 font-medium">
              Explore Automotive
            </span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="
                absolute left-0
                aspect-square w-full
                origin-center
                -translate-x-full
                rounded-full
                bg-white/30
                transition-all duration-500
                group-hover:-translate-x-0
                group-hover:scale-150
              " />
            </span>
          </button>

          {/* Button 2 */}
          <button onClick={()=>router.visit('/organization-history')} className="
            group relative
            h-11 sm:h-12
            px-6 sm:px-8
            overflow-hidden
            rounded-full
            bg-white/10
            text-white
            text-sm sm:text-base
            transition-all duration-500
          ">
            <span className="relative z-10 font-medium">
              Our Legacy
            </span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="
                absolute left-0
                aspect-square w-full
                origin-center
                -translate-x-full
                rounded-full
                bg-white/25
                transition-all duration-500
                group-hover:-translate-x-0
                group-hover:scale-150
              " />
            </span>
          </button>

        </div>

      </div>

      {/* CONTINUOUS CAROUSEL */}
      {/* <div
        ref={carouselRef}
        className='
          w-full
          overflow-hidden
          px-4
          mt-10
          lg:mt-20
        '
      >
        <div
          className="flex gap-4 sm:gap-6 animate-scroll"
          style={{ width: 'max-content' }}
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className='
                relative
                h-[220px]
                sm:h-[240px]
                lg:h-[300px]
                w-[85vw]
                sm:w-[45vw]
                lg:w-[30vw]
                flex-shrink-0
                rounded-3xl
                overflow-hidden
                border border-white/10
              '
            >
              <img
                src={img}
                alt={`slide-${i}`}
                className='w-full h-full object-cover'
              />
              <div className='
                absolute inset-0
                bg-gradient-to-t
                from-black/60
                via-black/20
                to-transparent
              ' />
            </div>
          ))}
        </div>
      </div> */}

      {/* BOTTOM TEXT */}
      <p
        ref={bottomTextRef}
        className='
          text-white/90
          text-center
          px-4
          mt-8 lg:mt-20
          max-w-5xl
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-5xl
        '
      >
        Nepal’s trusted automotive leader and multi-sector group
        delivering premium service, scale, and long-term impact.
      </p>

    </div>
  )
}

export default Hero


