
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import vehicleImg from '../../../public/images/automobile_banner.jpg'
import dealerImg from '../../../public/images/h5.webp'
import serviceImg from '../../../public/images/h2.webp'
import { router } from '@inertiajs/react'

const items = [
  {
    title: 'Vehicles and Fleet',
    body: 'Sales, rentals, and reconditioned units curated for Nepalese roads and commercial needs.',
    image: vehicleImg,
  },
  {
    title: 'Dealership Network',
    body: '22+ nationwide dealer touchpoints with consistent after-sales support and availability.',
    image: dealerImg,
  },
  {
    title: 'Service and Parts',
    body: 'Certified servicing, genuine parts, diagnostics, and warranty-backed maintenance.',
    image: dealerImg,
  },
]

const AutomotiveShowcase = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const header = headerRef.current
    const cards = cardsRef.current
    if (!header || !cards.length) return

    gsap.set(header, { opacity: 0, y: 28 })
    gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(header, {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: 'power3.out',
            })
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: 'power3.out',
              stagger: 0.12,
              delay: 0.25,
            })
          } else {
            gsap.set(header, { opacity: 0, y: 28 })
            gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-16 py-14 sm:pt-24 overflow-x-hidden"
    >
      <div className="mx-auto">
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Automotive First</p>
            <h2 className="text-3xl sm:text-4xl text-white mt-2">Flagship Division</h2>
            <p className="text-white/70 mt-3 max-w-xl">
              Built on mobility, strengthened by service. Automotive leads our growth and legacy.
            </p>
          </div>
          <button
            onClick={() => router.visit('/automobile')}
            className="group relative h-11 px-6 rounded-full bg-[#b08d57] text-black text-sm font-medium overflow-hidden"
          >
            <span className="relative z-10">Explore Automotive</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#111318]"
            >
              <div className="h-48 sm:h-56 w-full">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-lg text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AutomotiveShowcase