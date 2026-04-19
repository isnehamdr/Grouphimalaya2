
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { router } from '@inertiajs/react'

const ContactStrip = () => {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    gsap.set(card, { opacity: 0, y: 40 })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(card, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
          } else {
            gsap.set(card, { opacity: 0, y: 40 })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-16  sm:pb-18 overflow-x-hidden"
    >
      <div
        ref={cardRef}
        className="max-w-6xl mx-auto rounded-2xl border border-white/10  px-6 sm:px-8 py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 
         relative
                

                

                bg-white/5
                backdrop-blur-lg

                

                shadow-[0_6px_24px_rgba(0,0,0,0.35)]

                transition-all duration-300

                hover:bg-white/10
                hover:border-white/20
                hover:-translate-y-1
                hover:shadow-[0_10px_32px_rgba(0,0,0,0.55)]
        "
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
          <h3 className="text-2xl sm:text-3xl text-white mt-2">Let's build with clarity and trust</h3>
          <p className="mt-2 text-white/60 text-sm sm:text-base">
            Phone: (+977 061 523848) • Email: info@grouphimalaya.com
          </p>
        </div>
        <button
          onClick={() => router.visit('/contact')}
          className="group relative h-11 px-6 rounded-full bg-[#b08d57] text-black text-sm font-medium overflow-hidden"
        >
          <span className="relative z-10">Contact us</span>
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  )
}

export default ContactStrip