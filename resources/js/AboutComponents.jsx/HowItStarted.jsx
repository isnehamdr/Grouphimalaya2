
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import founderimage from '../../../public/images/message.jpg'

gsap.registerPlugin(ScrollTrigger)

const HowItStarted = () => {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const imageRef = useRef(null)
  const imageWrapRef = useRef(null)
  const textRef = useRef(null)
  const dividerRef = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label fade + slide up
      gsap.from(labelRef.current, {
        scrollTrigger: {
          trigger: labelRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })

      // Divider line draw
      gsap.from(dividerRef.current, {
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 88%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.9,
        ease: 'power3.inOut',
      })

      // Heading reveal
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.1,
      })

      // Image wrapper — clip reveal from left
      gsap.from(imageWrapRef.current, {
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: 'top 80%',
        },
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.1,
        ease: 'power4.inOut',
      })

      // Image subtle scale
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: 'top 80%',
        },
        scale: 1.12,
        duration: 1.4,
        ease: 'power4.out',
      })

      // Text block slide up stagger
      gsap.from(textRef.current.children, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 82%',
        },
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: 'power3.out',
      })

      // Stats counter animation
      statsRef.current.forEach((el) => {
        if (!el) return
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative  px-2 sm:px-10 lg:px-20 xl:px-20 overflow-hidden "
    >
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1a1a1a 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Section label */}
      <div className="flex items-center gap-4 mb-5">
        <span
          ref={labelRef}
          className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#ae8755]"
        >
          Our Origin Story
        </span>
        <div
          ref={dividerRef}
          className="flex-1 h-px bg-gradient-to-r from-amber-400 to-transparent max-w-[200px]"
        />
      </div>

      {/* Main heading */}
      <h2
        ref={headingRef}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 leading-tight mb-14 max-w-2xl"
        // style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        From Humble Beginnings
        <br />
        <span className="text-[#ae8755]">to a National Powerhouse</span>
      </h2>

      {/* Content grid */}
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">

        {/* Image */}
        <div
          ref={imageWrapRef}
          className="w-full lg:w-[45%] xl:w-[42%] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl"
          style={{ clipPath: 'inset(0 0% 0 0)' }}
        >
          <img
            ref={imageRef}
            src={founderimage}
            alt="Founder Mr. Dhruba Thapa"
            className="w-full h-[320px] sm:h-[400px] lg:h-[500px] object-cover object-center"
          />
          {/* Caption bar */}
          <div className="bg-gray-900 px-5 py-3 flex items-center justify-between">
            <p className="text-white text-sm font-medium" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Mr. Dhruba Thapa
            </p>
            <p className="text-amber-400 text-xs tracking-widest uppercase">Founder & Chairman</p>
          </div>
        </div>

        {/* Text content */}
        <div ref={textRef} className="flex flex-col gap-6 lg:pt-2 flex-1">

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Himalaya Organization began in <strong className="text-gray-600 font-semibold">1991</strong> with a bold vision — Nepal's first reconditioned vehicle house and bike rental service.
          </p>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Under the visionary leadership of our Founder, we expanded from humble auto dealings into a nationwide powerhouse, now operating as a dynamic conglomerate — authorized dealers for brands like <em>Force Motors</em>, <em>Maxus</em>, and <em>Deepal</em>.
          </p>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Our ventures span real estate, hospitality, financial services, sustainable agriculture, educational initiatives, and modern housing — driven by an unwavering commitment to community.
          </p>

          {/* Himalaya Trust callout */}
          <div className="mt-2 border-l-4 border-amber-500 bg-amber-50 rounded-r-xl px-5 py-4">
            <p className="text-sm font-semibold text-amber-800 uppercase tracking-wider mb-1">Himalaya Trust</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              Established to uplift communities through education, healthcare, and environmental stewardship — because business growth means nothing without people.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-gray-100">
            {[
              { value: '1991', label: 'Founded' },
              { value: '30+', label: 'Years of Trust' },
              { value: '6+', label: 'Industries' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                ref={(el) => (statsRef.current[i] = el)}
                className="text-center"
              >
                <p
                  className="text-2xl sm:text-3xl font-bold text-gray-500"
                //   style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItStarted