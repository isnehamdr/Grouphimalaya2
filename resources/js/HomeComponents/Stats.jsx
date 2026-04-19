
// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'

// const stats = [
//   { value: '200+', label: 'Employees', note: 'Across Nepal' },
//   { value: '30+', label: 'Years of Experience', note: 'Established 1991' },
//   { value: '22+', label: 'Dealer Network', note: 'Nationwide coverage' },
// ]

// const Stats = () => {
//   const sectionRef = useRef(null)
//   const cardsRef = useRef([])

//   useEffect(() => {
//     const cards = cardsRef.current
//     if (!cards.length) return

//     gsap.set(cards, { opacity: 0, y: 50, scale: 0.92 })

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Animate in
//             gsap.to(cards, {
//               opacity: 1,
//               y: 0,
//               scale: 1,
//               duration: 0.7,
//               ease: 'power3.out',
//               stagger: 0.15,
//             })
//           } else {
//             // Reset so it re-animates next time
//             gsap.set(cards, { opacity: 0, y: 50, scale: 0.92 })
//           }
//         })
//       },
//       { threshold: 0.2 }
//     )

//     if (sectionRef.current) observer.observe(sectionRef.current)

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-16 py-12 sm:py-16 overflow-x-hidden"
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {stats.map((s, i) => (
//           <div
//             key={s.label}
//             ref={(el) => (cardsRef.current[i] = el)}
//             className="rounded-2xl border border-white/10 bg-[#111318] px-6 py-8 text-center"
//           >
//             <p className="text-4xl sm:text-5xl font-semibold text-[#d6c3a0]">{s.value}</p>
//             <p className="mt-2 text-base sm:text-lg text-white">{s.label}</p>
//             <p className="mt-1 text-xs sm:text-sm text-white/60">{s.note}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Stats



import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const stats = [
  { value: '200+', label: 'Employees', note: 'Across Nepal' },
  { value: '30+', label: 'Years of Experience', note: 'Established 1991' },
  { value: '22+', label: 'Dealer Network', note: 'Nationwide coverage' },
]

const Stats = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current
    if (!cards.length) return

    gsap.set(cards, { opacity: 0, y: 50, scale: 0.92 })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: 'power3.out',
              stagger: 0.15,
            })
          } else {
            // Reset so it re-animates
            gsap.set(cards, {
              opacity: 0,
              y: 50,
              scale: 0.92,
            })
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
      className="relative  px-4 sm:px-8 lg:px-16 py-12 sm:py-16 overflow-hidden"
    >
     

      {/* Cards Grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">

        {stats.map((s, i) => (
          <div
            key={s.label}
            ref={(el) => (cardsRef.current[i] = el)}
            className="
              relative
              rounded-2xl
              px-6 py-8
              text-center

              bg-white/5
              backdrop-blur-xl

              border border-white/10

              shadow-[0_8px_32px_rgba(0,0,0,0.4)]

              transition-all duration-300

              hover:bg-white/10
              hover:border-white/20
              hover:-translate-y-1
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]
            "
          >

            {/* Glass reflection highlight */}
            <div className="
              pointer-events-none 
              absolute 
              inset-0 
              rounded-2xl 
              bg-gradient-to-b 
              from-white/10 
              to-transparent 
              opacity-40
            "></div>

            {/* Content */}
            <p className="text-4xl sm:text-5xl font-semibold text-[#d6c3a0] relative z-10">
              {s.value}
            </p>

            <p className="mt-2 text-base sm:text-lg text-white relative z-10">
              {s.label}
            </p>

            <p className="mt-1 text-xs sm:text-sm text-white/60 relative z-10">
              {s.note}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Stats