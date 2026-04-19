import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const VisionMission = () => {
  const sectionRef = useRef(null)
  const leftCardRef = useRef(null)
  const rightCardRef = useRef(null)

  useEffect(() => {
    const left = leftCardRef.current
    const right = rightCardRef.current

    if (!left || !right) return

    // Initial state
    gsap.set(left, { opacity: 0, x: -50 })
    gsap.set(right, { opacity: 0, x: 50 })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            gsap.to(left, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power3.out',
            })

            gsap.to(right, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power3.out',
              delay: 0.15,
            })
          } else {
            // Reset when leaving
            gsap.set(left, { opacity: 0, x: -50 })
            gsap.set(right, { opacity: 0, x: 50 })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-16 py-8 sm:py-12 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Vision Card */}
        <div
          ref={leftCardRef}
          className="
          relative
          rounded-2xl
          p-6 sm:p-8

          backdrop-blur-xl
          bg-white/[0.05]

          border border-white/10

          shadow-[0_8px_30px_rgba(0,0,0,0.6)]

          before:absolute
          before:inset-0
          before:rounded-2xl
          before:bg-gradient-to-br
          before:from-white/10
          before:to-transparent
          before:opacity-40
          before:pointer-events-none

          hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]
          hover:border-indigo-400/25

          transition-all
          duration-300
          overflow-hidden
          "
        >
          {/* Ambient Glow */}
          <div className="
            absolute
            -inset-1
            rounded-2xl
            bg-indigo-500/10
            blur-2xl
            opacity-50
            pointer-events-none
          " />

          <p className="text-xs uppercase tracking-[0.3em] text-white/50 relative">
            Vision
          </p>

          <h3 className="text-2xl sm:text-3xl text-white mt-2 relative">
            Mobility and infrastructure for every Nepali
          </h3>

          <p className="mt-3 text-white/70 relative">
            Build a resilient, connected Nepal by leading mobility,
            housing, and financial services with integrity and
            long-term value.
          </p>
        </div>

        {/* Mission Card */}
        <div
          ref={rightCardRef}
          className="
          relative
          rounded-2xl
          p-6 sm:p-8

          backdrop-blur-xl
          bg-white/[0.05]

          border border-white/10

          shadow-[0_8px_30px_rgba(0,0,0,0.6)]

          before:absolute
          before:inset-0
          before:rounded-2xl
          before:bg-gradient-to-br
          before:from-white/10
          before:to-transparent
          before:opacity-40
          before:pointer-events-none

          hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
          hover:border-cyan-400/25

          transition-all
          duration-500
          overflow-hidden
          "
        >
          {/* Ambient Glow */}
          <div className="
            absolute
            -inset-1
            rounded-2xl
            bg-cyan-500/10
            blur-2xl
            opacity-50
            pointer-events-none
          " />

          <p className="text-xs uppercase tracking-[0.3em] text-white/50 relative">
            Mission
          </p>

          <h3 className="text-2xl sm:text-3xl text-white mt-2 relative">
            Deliver trusted service at national scale
          </h3>

          <p className="mt-3 text-white/70 relative">
            Expand our dealership, service, and project footprint
            while maintaining premium standards and measurable
            impact across Nepal.
          </p>
        </div>

      </div>
    </section>
  )
}

export default VisionMission