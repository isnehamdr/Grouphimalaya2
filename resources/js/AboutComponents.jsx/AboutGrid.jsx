

import React, { useEffect, useRef } from 'react'
import firstimage from '../../../public/images/vision.jpeg'
import secondimage from '../../../public/images/h5.webp'
import thirdimage from '../../../public/images/automobile.avif'
import fourthimage from '../../../public/images/banking.avif'

// npm install gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Explicit cell definitions with separate mobile and desktop order values.
//
// Mobile (1-col) desired sequence: image → stat → image → stat → image → stat → image → stat
// Desktop (4-col) desired layout:
//   Row 1: [Employees stat | vision img | Branches stat | h5 img]
//   Row 2: [automobile img | Commitment stat | banking img | Turnover stat]
//
// mobileOrder drives CSS `order` on small screens.
// desktopOrder restores the correct 4-col layout on lg screens via lg:order-N.

const cells = [
  {
    type: 'stat',
    mobileOrder: 2,
    desktopOrder: 1,
    label: 'Employees',
    value: '200+',
    desc: "A strong team of 200+ professionals driving Nepal's economy across 7+ sectors.",
    bg: 'bg-black',
  },
  {
    type: 'image',
    mobileOrder: 1,
    desktopOrder: 2,
    image: firstimage,
    alt: 'Team vision',
  },
  {
    type: 'stat',
    mobileOrder: 4,
    desktopOrder: 3,
    label: 'Branches',
    value: '22+',
    desc: 'Nationwide presence across 22+ branches from Kathmandu to Itahari and beyond.',
    bg: 'bg-black',
  },
  {
    type: 'image',
    mobileOrder: 3,
    desktopOrder: 4,
    image: secondimage,
    alt: 'Branches',
  },
  {
    type: 'image',
    mobileOrder: 5,
    desktopOrder: 5,
    image: thirdimage,
    alt: 'Automobile',
  },
  {
    type: 'stat',
    mobileOrder: 6,
    desktopOrder: 6,
    label: 'Commitment',
    value: '30+',
    desc: "Over 30 years of unwavering commitment to clients, communities, and Nepal's growth.",
    bg: 'bg-[#a08959]',
  },
  {
    type: 'image',
    mobileOrder: 7,
    desktopOrder: 7,
    image: fourthimage,
    alt: 'Banking',
  },
  {
    type: 'stat',
    mobileOrder: 8,
    desktopOrder: 8,
    label: 'Annual Turnover',
    value: '$100M',
    desc: 'Approaching $100 million — a milestone built on excellence and consistent delivery.',
    bg: 'bg-[#a08959]',
  },
]

// Tailwind JIT needs full class strings present in source to generate them.
// We map order values to their full utility class strings here.
const lgOrderMap = {
  1: 'lg:order-1',
  2: 'lg:order-2',
  3: 'lg:order-3',
  4: 'lg:order-4',
  5: 'lg:order-5',
  6: 'lg:order-6',
  7: 'lg:order-7',
  8: 'lg:order-8',
}

const AboutGrid = () => {
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const gridCells = gridRef.current.querySelectorAll('.grid-cell')

      gsap.set(gridCells, { opacity: 0, y: 40, scale: 0.97 })

      ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(gridCells, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: { amount: 0.6, from: 'start' },
            ease: 'power3.out',
          })
        },
        once: true,
      })

      // Stat value letter-spacing entrance
      const values = gridRef.current.querySelectorAll('.stat-value')
      values.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              el,
              { letterSpacing: '0.15em', opacity: 0 },
              { letterSpacing: '0em', opacity: 1, duration: 0.8, ease: 'power2.out' }
            )
          },
          once: true,
        })
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className=" sm:px-8 lg:px-20 mb-10 sm:mb-16 lg:mb-20">
      {/*
        overflow-hidden + rounded-2xl on the wrapper = outer-only rounded corners.
        The cells themselves are square; the wrapper clips them at the corners.
      */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-4 overflow-hidden rounded-2xl shadow-2xl"
      >
        {cells.map((cell, i) => {
          const lgOrderClass = lgOrderMap[cell.desktopOrder]

          if (cell.type === 'image') {
            return (
              <div
                key={i}
                style={{ order: cell.mobileOrder }}
                className={`grid-cell ${lgOrderClass} relative overflow-hidden min-h-[240px] lg:min-h-[340px]`}
              >
                <img
                  src={cell.image}
                  alt={cell.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 pointer-events-none" />
              </div>
            )
          }

          return (
            <div
              key={i}
              style={{ order: cell.mobileOrder }}
              className={`grid-cell ${lgOrderClass} ${cell.bg} text-white p-7 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[260px] lg:min-h-[340px] group`}
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium opacity-70">
                {cell.label}
              </p>

              <div className="my-4 sm:my-6">
                <p className="stat-value text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
                  {cell.value}
                </p>
                <div className="mt-3 h-[2px] w-8 bg-white/40 group-hover:w-16 transition-all duration-500 ease-out" />
              </div>

              <p className="text-sm sm:text-base leading-relaxed opacity-75 font-light max-w-xs">
                {cell.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AboutGrid