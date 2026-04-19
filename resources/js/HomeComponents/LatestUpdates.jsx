// import React from 'react'
// import updateImg from '../../../public/images/hospitality.webp'
// import { router } from '@inertiajs/react'

// const updates = [
//   {
//     title: 'New service network expansion in Western Nepal',
//     date: 'April 2026',
//   },
//   {
//     title: 'Automotive experience center launches in Pokhara',
//     date: 'March 2026',
//   },
//   {
//     title: 'Multi-sector group milestone: 30+ years of growth',
//     date: 'January 2026',
//   },
// ]

// const LatestUpdates = () => {
//   return (
//     <section className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-20 py-14 lg:pt-16 lg:pb-24">
//       <div className="mx-auto">
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-7">
//           <div>
//             <p className="text-xs uppercase tracking-[0.3em] text-white/50">Latest Updates</p>
//             <h2 className="text-3xl sm:text-4xl text-white mt-2">News and insights</h2>
//           </div>
//           <button
//             onClick={() => router.visit('/blog')}
//             className="group relative h-11 px-6 rounded-full bg-[#b08d57] text-black text-sm font-medium overflow-hidden"
//           >
//             <span className="relative z-10">View all</span>
//             <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//           {updates.map((u) => (
//             <div key={u.title} className="rounded-2xl overflow-hidden border border-white/10 bg-[#111318]">
//               <div className="h-36 lg:h-64 w-full">
//                 <img src={updateImg} alt={u.title} className="w-full h-full object-cover" />
//               </div>
//               <div className="p-5">
//                 <p className="text-xs text-white/50 uppercase tracking-[0.2em]">{u.date}</p>
//                 <p className="mt-2 text-base text-white">{u.title}</p>
//                 <p className="mt-2 text-sm text-white/60">Placeholder content. Replace with real updates.</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default LatestUpdates



import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import updateImg from '../../../public/images/hospitality.webp'
import { router } from '@inertiajs/react'

const updates = [
  {
    title: 'New service network expansion in Western Nepal',
    date: 'April 2026',
  },
  {
    title: 'Automotive experience center launches in Pokhara',
    date: 'March 2026',
  },
  {
    title: 'Multi-sector group milestone: 30+ years of growth',
    date: 'January 2026',
  },
]

const LatestUpdates = () => {
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
      className="bg-[#0b0c0f] px-4 sm:px-8 lg:px-20 py-14 lg:pt-16 lg:pb-24 overflow-x-hidden"
    >
      <div className="mx-auto">
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-7"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Latest Updates</p>
            <h2 className="text-3xl sm:text-4xl text-white mt-2">News and insights</h2>
          </div>
          <button
            onClick={() => router.visit('/blog')}
            className="group relative h-11 px-6 rounded-full bg-[#b08d57] text-black text-sm font-medium overflow-hidden"
          >
            <span className="relative z-10">View all</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {updates.map((u, index) => (
            <div
              key={u.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#111318]"
            >
              <div className="h-36 lg:h-64 w-full">
                <img src={updateImg} alt={u.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs text-white/50 uppercase tracking-[0.2em]">{u.date}</p>
                <p className="mt-2 text-base text-white">{u.title}</p>
                <p className="mt-2 text-sm text-white/60">Placeholder content. Replace with real updates.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestUpdates