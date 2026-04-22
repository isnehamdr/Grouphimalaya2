import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import officeImage from '../../../public/images/office.jpeg'
import showroomImage from '../../../public/images/showroom.jpeg'

gsap.registerPlugin(ScrollTrigger)

const LaunchingSoon = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const q = (sel) => section.querySelector(sel)
    const qa = (sel) => section.querySelectorAll(sel)

    const ctx = gsap.context(() => {
      // Badge fade-in
      gsap.from(q('.ls-badge'), {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Heading lines - elegant fade up
      gsap.from(qa('.ls-heading-line'), {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Subtext
      gsap.from(q('.ls-subtext'), {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Divider line
      gsap.from(q('.ls-divider'), {
        width: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Cards stagger
      gsap.from(qa('.ls-card'), {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.ls-cards-grid'),
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Stats animation
      gsap.from(qa('.ls-stat'), {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: q('.ls-stats-container'),
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0b0c0f] px-4 sm:px-10 md:px-16 lg:px-24 py-14"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-14 md:mb-20">
          {/* Badge */}
          <div className="ls-badge inline-flex items-center mb-6">
            
            <span className="text-xs sm:text-lg font-bold text-[#b08d57] tracking-wider uppercase">
              Launching Soon
            </span>
          </div>

          {/* Headings */}
          <div className="space-y-1 md:space-y-2">
            <h2 className="ls-heading-line text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
              New Himalaya
            </h2>
            <h2 className="ls-heading-line text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
              Corporate Office
            </h2>
            <h2 className="ls-heading-line text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
              & Maxus Showroom
            </h2>
          </div>

          {/* Divider */}
          <div className="ls-divider w-12 h-px bg-amber-500 my-6 md:my-8" />

          {/* Description */}
          <p className="ls-subtext text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
            Two landmark spaces that define the next chapter of Himalaya
            Organization — a world-class headquarters and Nepal's premier
            Maxus vehicle experience centre.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="ls-cards-grid grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20">
          {/* Corporate Office Card */}
          <div className="ls-card group">
            <div className="overflow-hidden rounded-2xl mb-6">
              <img
                src={showroomImage}
                alt="Himalaya Corporate Office"
                className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="px-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">Corporate Office</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
            
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
                Himalaya Organization
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5 line-clamp-2">
                A landmark four-storey corporate campus designed for the next
                generation of Himalaya's leadership — combining executive suites,
                collaborative workspaces, and client-facing floors.
              </p>
              {/* <div className="ls-stats-container flex flex-wrap gap-6 pt-4 border-t border-gray-100">
                <div className="ls-stat">
                  <div className="text-2xl md:text-3xl font-light text-white">4</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Floors</div>
                </div>
                <div className="ls-stat">
                  <div className="text-2xl md:text-3xl font-light text-white">2025</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Est. Launch</div>
                </div>
                <div className="ls-stat">
                  <div className="text-2xl md:text-3xl font-light text-white">Pokhara</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Location</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Maxus Showroom Card */}
          <div className="ls-card group">
            <div className="overflow-hidden rounded-2xl mb-6">
              <img
                
                src={officeImage}
                alt="Maxus Showroom"
                className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="px-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">Maxus Showroom</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
                Maxus Vehicle
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5 line-clamp-2">
                Nepal's most advanced Maxus dealership — a full-service experience
                centre featuring live vehicle displays, test-drive bays, and a
                dedicated after-sales and service wing.
              </p>
              {/* <div className="ls-stats-container flex flex-wrap gap-6 pt-4 border-t border-gray-100">
                <div className="ls-stat">
                  <div className="text-2xl md:text-3xl font-light text-white">3+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Display Bays</div>
                </div>
                <div className="ls-stat">
                  <div className="text-2xl md:text-3xl font-light text-white">2025</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Est. Launch</div>
                </div>
                <div className="ls-stat">
                  <div className="text-2xl md:text-3xl font-light text-white">Pokhara</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Location</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-gray-400 text-sm max-w-md">
            Both facilities are under active development and will open to the
            public in 2025 — marking a bold new era for Himalaya Organization.
          </p>
          <div className="flex items-center gap-2">
           
            <span className="text-[#b08d57] text-xs tracking-wider uppercase">
              Development in Progress
            </span>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default LaunchingSoon