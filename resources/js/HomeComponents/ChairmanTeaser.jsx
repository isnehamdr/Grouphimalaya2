

import React, { useEffect, useRef } from 'react'
import chairmanImg from '../../../public/images/chairman.jpeg'
import { router } from '@inertiajs/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const ChairmanTeaser = () => {
  const sectionRef = useRef(null)
  const imageWrapRef = useRef(null)
  const overlayRef = useRef(null)
  const labelRef = useRef(null)
  const dividerRef = useRef(null)
  const quoteRef = useRef(null)
  const attributionRef = useRef(null)
  const bodyRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)
  const bottomLineRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    const ctx = gsap.context(() => {
      // ── Set initial states ──────────────────────────────────────────
      gsap.set(labelRef.current, { opacity: 0, y: -20 })
      gsap.set(dividerRef.current, { opacity: 0, scaleX: 0 })
      gsap.set(imageWrapRef.current, { opacity: 0, x: -60, scale: 0.96 })
      gsap.set(overlayRef.current, { opacity: 0, y: 10 })
      gsap.set(quoteRef.current, { opacity: 0, y: 40 })
      gsap.set(attributionRef.current, { opacity: 0, x: -20 })
      gsap.set(bodyRef.current, { opacity: 0, y: 24 })
      gsap.set(statsRef.current.children, { opacity: 0, y: 30 })
      gsap.set(ctaRef.current, { opacity: 0, y: 20 })
      gsap.set(bottomLineRef.current, { opacity: 0, scaleX: 0 })

      // ── Build timeline ──────────────────────────────────────────────
      const tl = gsap.timeline({ paused: true })

      tl
        .to(labelRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .to(dividerRef.current, { opacity: 1, scaleX: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2')
        .to(imageWrapRef.current, { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' }, '-=0.1')
        .to(overlayRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
        .to(quoteRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .to(attributionRef.current, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .to(bodyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .to(statsRef.current.children, {
          opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)', stagger: 0.12
        }, '-=0.3')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
        .to(bottomLineRef.current, { opacity: 1, scaleX: 1, duration: 0.6, ease: 'power2.inOut' }, '-=0.2')

      // ── ScrollTrigger — replay on every enter ───────────────────────
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave: () => tl.pause(0),        // reset when scrolled past
        onLeaveBack: () => tl.pause(0),    // reset when scrolled above
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-x-hidden px-4 sm:px-8 lg:px-16 py-8 sm:pt-20 sm:pb-20 lg:pt-12 lg:pb-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="text-center mb-10 lg:mb-14">
          <p ref={labelRef} className="text-xs uppercase tracking-[0.3em] text-[#ae8755] font-medium">
            Leadership
          </p>
          <div ref={dividerRef} className="w-12 h-[2px] bg-amber-600/50 mx-auto mt-3 origin-center" />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">

          {/* Left: Image */}
          <div ref={imageWrapRef} className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-700/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative border-[6px] lg:border-[8px] border-[#f6f3ec]/90 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={chairmanImg}
                alt="Dhruba Thapa - Chairman"
                className="w-full h-72 sm:h-80 lg:h-[420px] object-cover object-top transition duration-700 group-hover:scale-105"
              />
            </div>
            <div ref={overlayRef} className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full">
              <p className="text-white/90 text-xs tracking-wide">Dhruba Thapa</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-5">

            {/* Quote */}
            <div ref={quoteRef} className="relative">
              <span
                className="absolute -top-6 -left-2 text-amber-700/20 select-none"
                style={{ fontFamily: 'Georgia, serif', fontSize: '5rem', lineHeight: '1' }}
              >
                &ldquo;
              </span>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-snug pl-6">
                Hard work, integrity, and an unwavering commitment to our people would build something lasting.
              </p>
            </div>

            {/* Attribution */}
            <div ref={attributionRef} className="flex items-center gap-3 pl-6">
              <div className="w-10 h-[2px] bg-[#ae8755] rounded-full" />
              <p className="text-[#ae8755] text-sm uppercase tracking-wide font-medium">Chairman's Voice</p>
            </div>

            {/* Body text */}
            <p ref={bodyRef} className="text-white/70 leading-relaxed text-base sm:text-lg border-l-2 border-amber-700/30 pl-6">
              From operating Nepal's first reconditioned vehicle house in Western Nepal to a
              <span className="text-white font-medium"> $100M conglomerate</span> — a journey built on
              resilience, integrity, and impact.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-2 pl-6">
              <div>
                <p className="text-[#ae8755] text-xl font-bold">30+</p>
                <p className="text-white/40 text-xs uppercase tracking-wide">Years</p>
              </div>
              <div>
                <p className="text-[#ae8755] text-xl font-bold">200+</p>
                <p className="text-white/40 text-xs uppercase tracking-wide">Professionals</p>
              </div>
              <div>
                <p className="text-[#ae8755] text-xl font-bold">22+</p>
                <p className="text-white/40 text-xs uppercase tracking-wide">Branches</p>
              </div>
            </div>

            {/* CTA */}
            <div ref={ctaRef} className="pt-4 pl-6">
              <button
                onClick={() => router.visit('/message-from-chairman')}
                className="group relative h-12 px-8 rounded-full bg-[#ae8755] hover:bg-[#a17132] text-white text-sm font-medium transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-98"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Read full message
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <div ref={bottomLineRef} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-700/30 to-transparent origin-center" />
        </div>
      </div>
    </section>
  )
}

export default ChairmanTeaser