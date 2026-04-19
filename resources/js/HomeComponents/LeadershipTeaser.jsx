// import React from 'react'
// import leaderImg from '../../../public/images/realestate.webp'
// import { router } from '@inertiajs/react'

// const leaders = [
//   { name: 'Leadership Name', role: 'Chairman' },
//   { name: 'Leadership Name', role: 'Managing Director' },
//   { name: 'Leadership Name', role: 'Executive Director' },
// ]

// const LeadershipTeaser = () => {
//   return (
//     <section className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-20 py-14 sm:py-18">
//       <div className=" mx-auto">
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
//           <div>
//             <p className="text-xs uppercase tracking-[0.3em] text-white/50">Leadership</p>
//             <h2 className="text-3xl sm:text-4xl text-white mt-2">Stewards of the legacy</h2>
//           </div>
//           <button
//             onClick={() => router.visit('/corporate-profile')}
//             className="group relative h-11 px-6 rounded-full bg-[#b08d57] text-black text-sm font-medium overflow-hidden"
//           >
//             <span className="relative z-10">Meet the team</span>
//             <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {leaders.map((l, i) => (
//             <div key={`${l.role}-${i}`} className="rounded-2xl overflow-hidden border border-white/10 bg-[#111318]">
//               <div className="h-64 w-full">
//                 <img src={leaderImg} alt={l.name} className="w-full h-full object-cover" />
//               </div>
//               <div className="p-5">
//                 <p className="text-base text-white">{l.name}</p>
//                 <p className="mt-1 text-sm text-white/60">{l.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default LeadershipTeaser


import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import leaderImg from '../../../public/images/realestate.webp'
import { router } from '@inertiajs/react'

const leaders = [
  { name: 'Leadership Name', role: 'Chairman' },
  { name: 'Leadership Name', role: 'Managing Director' },
  { name: 'Leadership Name', role: 'Executive Director' },
]

const LeadershipTeaser = () => {
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
      className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-20 py-0 sm:py-18 overflow-x-hidden"
    >
      <div className="mx-auto">
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Leadership</p>
            <h2 className="text-3xl sm:text-4xl text-white mt-2">Stewards of the legacy</h2>
          </div>
          <button
            onClick={() => router.visit('/corporate-profile')}
            className="group relative h-11 px-6 rounded-full bg-[#b08d57] text-black text-sm font-medium overflow-hidden"
          >
            <span className="relative z-10">Meet the team</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {leaders.map((l, i) => (
            <div
              key={`${l.role}-${i}`}
              ref={(el) => (cardsRef.current[i] = el)}
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#111318]"
            >
              <div className="h-64 w-full">
                <img src={leaderImg} alt={l.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-base text-white">{l.name}</p>
                <p className="mt-1 text-sm text-white/60">{l.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipTeaser