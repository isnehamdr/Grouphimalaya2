import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MainWrapper from '@/MainComponents/MainWrapper'
import pokharaimage from '../../../public/images/pokhara_image.jpg'
import founderimage from '../../../public/images/chairman.jpeg'
import { Head } from '@inertiajs/react'


gsap.registerPlugin(ScrollTrigger)

const ChairmanMessage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Shared ScrollTrigger defaults ──────────────────────────────
      const defaults = {
        toggleActions: 'play none none reverse',
        start: 'top 82%',
      }

      // ── Hero banner: subtle scale-in on load ───────────────────────
      gsap.from('.hero-banner', {
        scale: 1.06,
        autoAlpha: 0,
        duration: 1.2,
        ease: 'power2.out',
      })

      // ── Large screen: heading lines (staggered) ────────────────────
      gsap.from('.heading-line', {
        autoAlpha: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.heading-block', ...defaults },
      })

      // ── Large screen: portrait slides in from right ────────────────
      gsap.from('.portrait-img', {
        autoAlpha: 0,
        x: 70,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.heading-block', ...defaults, start: 'top 78%' },
      })

      // ── Small screen: card row fades up ────────────────────────────
      gsap.from('.mobile-card-row', {
        autoAlpha: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.mobile-card-row', ...defaults },
      })

      // ── Small screen: amber divider ────────────────────────────────
      gsap.from('.mobile-divider', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.mobile-divider', ...defaults },
      })

      // ── Body paragraphs: staggered slide-up ───────────────────────
      gsap.from('.para-item', {
        autoAlpha: 0,
        y: 35,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.body-paragraphs', ...defaults },
      })

      // ── Pull-quote card: scale + fade ──────────────────────────────
      gsap.from('.quote-card', {
        autoAlpha: 0,
        scale: 0.94,
        y: 25,
        duration: 0.85,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.quote-card', ...defaults },
      })

      // ── Attribution: line draws, then name fades ───────────────────
      gsap.from('.attr-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.45,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.attribution', ...defaults },
      })
      gsap.from('.attr-name', {
        autoAlpha: 0,
        x: 10,
        duration: 0.5,
        delay: 0.25,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.attribution', ...defaults },
      })

    }, containerRef) // scoped to component

    return () => ctx.revert() // cleanup on unmount
  }, [])

  return (
    <MainWrapper>
      <Head>
        <title>Chairman's Message | Himalaya Organization</title>
      </Head>
      <div className='w-full min-h-screen p-2 sm:p-4 text-white' ref={containerRef}>

        {/* Hero image */}
        <div
          className='hero-banner rounded-2xl h-[30vh] sm:h-[35vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat relative overflow-visible'
          style={{ backgroundImage: `url(${pokharaimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-black/60' />
        </div>

        {/* Small screen layout */}
        <div className='lg:hidden flex flex-col items-center mt-6 px-4 gap-5'>
          <div className='mobile-card-row flex flex-row items-center gap-5 w-full'>
            <div className='border-[6px] border-[#f6f3ec] shadow-md flex-shrink-0'>
              <img src={founderimage} className='w-28 sm:w-36 object-cover' alt="Chairman" />
            </div>
            <div>
              <p className='uppercase text-xl sm:text-2xl text-gray-800 font-semibold leading-tight'>Message</p>
              <p className='text-amber-700 text-xl sm:text-2xl font-semibold leading-tight my-1'>from</p>
              <p className='text-xl sm:text-2xl text-gray-400 font-semibold uppercase leading-tight'>The Chairman</p>
            </div>
          </div>
          <div className='mobile-divider w-16 h-[3px] bg-amber-800 rounded-full' />
        </div>

        {/* Large screen layout */}
        <div className='heading-block hidden lg:flex justify-between items-end lg:px-20 lg:-mt-[46vh] 2xl:-mt-[50vh] relative z-10'>
          <div>
            <p className='heading-line uppercase text-2xl lg:text-7xl 2xl:text-8xl text-white text-center font-semibold'>Message</p>
            <p className='heading-line text-amber-700 text-2xl lg:text-7xl 2xl:text-8xl text-center my-4 font-semibold'>from</p>
            <p className='heading-line text-2xl lg:text-7xl 2xl:text-8xl text-gray-400 text-center uppercase font-semibold'>The Chairman</p>
          </div>
          <div className='portrait-img border-[10px] border-[#f6f3ec]'>
            <img src={founderimage} className='lg:max-w-2xl' alt='founder' />
          </div>
        </div>

        {/* Bottom content */}
        <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20'>

          {/* Left: paragraphs */}
          <div className='body-paragraphs flex flex-col gap-5 text-gray-400 text-base sm:text-lg lg:text-lg leading-relaxed lg:max-w-3xl'>
            <p className='para-item'>
              At Himalaya Organization, our journey has always been guided by a clear vision — to build businesses that create lasting value, uphold trust, and contribute meaningfully to Nepal's economic growth.
            </p>
            <p className='para-item'>
              From our early beginnings in the automobile sector to our expansion across real estate, hospitality, and diversified investments, we have remained committed to excellence, integrity, and long-term sustainability. The automobile sector continues to be at the heart of our operations, where we strive to deliver global standards in products, services, and customer experience.
            </p>
            <p className='para-item'>
              Our growth has been driven not only by business ambition but also by a deep sense of responsibility towards our customers, partners, and the communities we serve. We continuously adapt to changing market dynamics, embrace innovation, and explore new opportunities that align with the future of Nepal's economy.
            </p>
            <p className='para-item'>
              I firmly believe that strong values, dedicated teamwork, and a forward-looking approach are the foundations of any successful organization. As we move ahead, Himalaya Organization remains committed to strengthening its legacy while contributing to the nation's progress through responsible and sustainable business practices.
            </p>
            <p className='para-item'>
              Thank you for your continued trust and support.
            </p>
          </div>

          {/* Right: quote + attribution */}
          <div className='flex flex-col items-start lg:items-end gap-6 lg:gap-8 shrink-0 lg:max-w-lg w-full'>
            <div className='quote-card bg-amber-700 px-6 sm:px-8 pt-4 pb-8 rounded-2xl relative w-full'>
              <span className='block text-white/25 leading-none select-none'
                style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(5rem, 14vw, 9rem)', lineHeight: '0.85', marginBottom: '-0.2em' }}>
                &ldquo;
              </span>
              <p className='text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-snug'>
                When I started Himalaya Organization, I had a simple belief: that hard work, integrity, and an unwavering commitment to our people would build something lasting.
              </p>
              <span className='block text-white/25 leading-none text-right select-none'
                style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(5rem, 14vw, 9rem)', lineHeight: '0.5', marginTop: '0.1em' }}>
                &rdquo;
              </span>
            </div>

            <div className='attribution flex items-center gap-3 px-1'>
              <div className='attr-line w-8 h-[2px] bg-amber-600 rounded-full' />
              <div className='attr-name flex flex-col'>
                <p className='text-xl sm:text-2xl font-semibold text-gray-400 tracking-wide'>Mr. Dhurba Bahadur Thapa</p>
                <p className='text-sm sm:text-base text-gray-500 tracking-widest uppercase'>Chairman, Himalaya Organization</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MainWrapper>
  )
}

export default ChairmanMessage