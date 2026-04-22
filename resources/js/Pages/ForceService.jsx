import MainWrapper from '@/MainComponents/MainWrapper'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '@/Components/SEO'

// ── Replace with your actual image imports ──────────────────────────────────
import service1 from '../../../public/images/Forceservice1.jpeg'
import service2 from '../../../public/images/Forceservice2.jpeg'
import service3 from '../../../public/images/Forceservice3.jpeg'
// ────────────────────────────────────────────────────────────────────────────

gsap.registerPlugin(ScrollTrigger)

// ── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: '5',       label: 'Service Bays'        },
  { value: '2-Post',  label: 'Hydraulic Lifts'     },
  { value: '30+',     label: 'Years of Expertise'  },
  { value: 'Pokhara', label: 'Location'            },
]

const services = [
  {
    title: 'Scheduled Maintenance',
    desc:  'Oil changes, filter replacements, fluid top-ups, and full periodic servicing for all Force Motors vehicles keeping them running at peak performance.',
  },
  {
    title: 'Mechanical & Engine Repair',
    desc:  'Comprehensive diagnostics and engine overhaul by Force-certified technicians using genuine spare parts and manufacturer-approved procedures.',
  },
  {
    title: 'Brake & Suspension',
    desc:  'Full brake inspection, pad and disc replacement, shock absorber servicing, and wheel alignment for safe, confident driving on every terrain.',
  },
  {
    title: 'Body & Underbody Work',
    desc:  'Our 2-post hydraulic lifts enable complete underbody inspection, rust treatment, and structural repairs with full vehicle access.',
  },
  {
    title: 'Electrical Diagnostics',
    desc:  'Advanced ECU scanning and wiring diagnostics to identify faults quickly — minimising downtime and getting your vehicle road-ready faster.',
  },
  {
    title: 'Genuine Spare Parts',
    desc:  'Authorised Force Motors spare parts stocked on-site. Every replacement uses OEM-spec components to maintain your vehicle warranty.',
  },
]

// ── Component ────────────────────────────────────────────────────────────────
const ForceService = () => {
  const heroTextRef    = useRef(null)
  const heroSubRef     = useRef(null)
  const textRef        = useRef(null)
  const statsRef       = useRef([])
  const galleryRef     = useRef(null)
  const servicesTitleRef = useRef(null)
  const serviceCardsRef  = useRef([])
  const ctaRef         = useRef(null)

  // SEO data with consistent Force Motors service keywords
  const seoData = {
    title: "Force Motors Authorised Service Centre in Pokhara | Vehicle Maintenance & Repair | Himalaya Organization",
    description: "Visit Himalaya Organization's authorised Force Motors Service Centre in Pokhara. 5 service bays, 2-post hydraulic lifts, certified technicians, genuine spare parts, and comprehensive vehicle maintenance services. Book your service today.",
    url: "https://www.himalayaorganization.com/force-service",
    image: "/images/Forceservice2.jpeg",
  }

  // ── Char-by-char scroll colour reveal (same as Community) ─────────────────
  useEffect(() => {
    const el = textRef.current
    if (!el) return

    const text = el.innerText
    el.innerHTML = ''
    el.style.display = 'block'
    el.style.whiteSpace = 'normal'
    el.style.wordBreak = 'break-word'
    el.style.overflowWrap = 'break-word'

    const tokens = text.split(/(\s+)/)
    const chars  = []

    tokens.forEach((token) => {
      if (/^\s+$/.test(token)) {
        el.appendChild(document.createTextNode(token))
      } else {
        const wordSpan = document.createElement('span')
        wordSpan.style.display   = 'inline-block'
        wordSpan.style.whiteSpace = 'nowrap'
        token.split('').forEach((char) => {
          const span = document.createElement('span')
          span.textContent  = char
          span.style.color  = 'rgb(75, 75, 75)'
          span.style.display = 'inline'
          wordSpan.appendChild(span)
          chars.push(span)
        })
        el.appendChild(wordSpan)
      }
    })

    const anim = gsap.to(chars, {
      color: 'rgb(235, 235, 235)',
      stagger: 0.012,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end:   'bottom 30%',
        scrub:  1,
      },
    })

    return () => { anim.scrollTrigger?.kill(); anim.kill() }
  }, [])

  // ── All GSAP scroll animations ────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const defaults = { toggleActions: 'play none none reverse', start: 'top 82%' }

      // Hero on load
      gsap.fromTo(heroTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo(heroSubRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      )

      // Stats
      if (statsRef.current[0]) {
        gsap.fromTo(statsRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1,
            scrollTrigger: { trigger: statsRef.current[0], ...defaults } }
        )
      }

      // Gallery
      if (galleryRef.current) {
        const imgs = galleryRef.current.querySelectorAll('.gallery-item')
        gsap.fromTo(imgs,
          { opacity: 0, y: 50, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.85, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: galleryRef.current, ...defaults } }
        )
      }

      // Services title
      if (servicesTitleRef.current) {
        gsap.fromTo(servicesTitleRef.current,
          { opacity: 0, x: -35 },
          { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out',
            scrollTrigger: { trigger: servicesTitleRef.current, ...defaults } }
        )
      }

      // Service cards staggered
      if (serviceCardsRef.current[0]) {
        gsap.fromTo(serviceCardsRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: serviceCardsRef.current[0], ...defaults } }
        )
      }

      // CTA
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, scale: 0.96, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'power2.out',
            scrollTrigger: { trigger: ctaRef.current, ...defaults } }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <MainWrapper>
      <SEO {...seoData} />
      
      <div className="w-full min-h-screen bg-black text-white">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div
          className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: `url(${service2})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85" />

          {/* Hero text */}
          <div className="relative z-10 flex flex-col items-center mt-auto pb-12 sm:pb-16 lg:pb-24 px-6 sm:px-8 text-center">
            <h1
              ref={heroTextRef}
              className="text-white text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-xl lg:max-w-4xl leading-tight font-semibold opacity-0"
            >
              Force Motors<br />
              <span className="text-[#b08d57]">Service Centre</span>
            </h1>
            <p
              ref={heroSubRef}
              className="text-white/75 text-sm sm:text-base max-w-xs sm:max-w-lg lg:max-w-2xl leading-relaxed mt-4 sm:mt-6 opacity-0"
            >
              Nepal's authorised Force Motors service facility in Pokhara —
              5 bays, hydraulic lifts, and a team of certified technicians
              dedicated to keeping your vehicle at its best.
            </p>
          </div>
        </div>

        {/* ── Intro Text (char reveal) ──────────────────────────────────── */}
        <div className="my-12 sm:my-16 lg:my-24 px-6 sm:px-10 lg:px-20">
          <p
            ref={textRef}
            className="w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed"
          >
            Himalaya Organization operates the authorised Force Motors Service Centre in Pokhara — a purpose-built facility equipped with industry-grade hydraulic lifts, five service bays, and a team of factory-trained technicians committed to delivering genuine Force Motors care at every visit.
          </p>
        </div>

        {/* ── Stats ─────────────────────────────────────────────────────── */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 px-6 sm:px-10 lg:px-20 mb-12 sm:mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={el => (statsRef.current[i] = el)}
              className="rounded-2xl bg-[#111] border border-white/10 p-4 sm:p-8 flex flex-col items-center justify-center text-center opacity-0 transition-all hover:border-amber-600/30 hover:bg-[#1a1a1a]"
            >
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-amber-600">{stat.value}</p>
              <p className="text-[10px] sm:text-sm lg:text-base text-gray-400 mt-1 sm:mt-2 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div> */}

        {/* ── Photo Gallery ─────────────────────────────────────────────── */}
        <div
          ref={galleryRef}
          className="px-6 sm:px-10 lg:px-20 mb-12 sm:mb-20"
        >
          {/* Top: wide facility shot */}
          <div className="gallery-item relative w-full overflow-hidden rounded-2xl bg-[#0a0a0a] mb-3 sm:mb-4 opacity-0" style={{ aspectRatio: '21/9' }}>
            <img
              src={service3}
              alt="Force Motors Service Centre — Himalaya Organization Pokhara"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <span className="text-white/80 text-xs sm:text-sm tracking-widest uppercase bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                5-Bay Service Floor — Pokhara
              </span>
            </div>
          </div>

          {/* Bottom: two portrait shots side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="gallery-item relative overflow-hidden rounded-2xl bg-[#0a0a0a] opacity-0" style={{ aspectRatio: '4/3' }}>
              <img
                src={service1}
                alt="Hydraulic lift service — Force Motors vehicle at Himalaya Organization service centre"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/80 text-xs tracking-widest uppercase bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  Hydraulic Lift Bay
                </span>
              </div>
            </div>
            <div className="gallery-item relative overflow-hidden rounded-2xl bg-[#0a0a0a] opacity-0" style={{ aspectRatio: '4/3' }}>
              <img
                src={service2}
                alt="Himalaya Organization Force Service Centre grand opening in Pokhara"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/80 text-xs tracking-widest uppercase bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  Service Centre Launch
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Services Section ──────────────────────────────────────────── */}
        <section className="px-6 sm:px-10 lg:px-20 pb-12 sm:pb-20 lg:pb-28">

          {/* Section heading */}
          <div ref={servicesTitleRef} className="mb-8 sm:mb-12 opacity-0">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-amber-600 leading-tight">
              Our Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl">
              Comprehensive care for every Force Motors vehicle — from routine maintenance to advanced diagnostics.
            </p>
            <div className="mt-4 w-12 h-[2px] bg-amber-700 rounded-full" />
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                ref={el => (serviceCardsRef.current[i] = el)}
                className="opacity-0 flex flex-col gap-3 bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-amber-600/30 hover:bg-[#1a1a1a] hover:-translate-y-1"
              >
                {/* Index number */}
                <p className="text-amber-600/40 text-4xl font-bold leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Strip ─────────────────────────────────────────────────── */}
        {/* <div className="px-6 sm:px-10 lg:px-20 pb-14 sm:pb-20">
          <div
            ref={ctaRef}
            className="opacity-0 bg-gradient-to-br from-[#111] to-[#0d0d0d] border border-white/10 rounded-2xl px-6 sm:px-10 py-8 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-600/70">Book a Service</p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-snug">
                Ready to service your <br className="hidden sm:block" />Force Motors vehicle?
              </p>
              <p className="text-sm text-gray-400 max-w-md mt-1">
                Visit our Pokhara service centre or call to schedule an appointment.
                Our team is available 6 days a week.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0">
              <a
                href="tel:+977061523848"
                className="group relative h-11 sm:h-12 px-6 sm:px-8 overflow-hidden rounded-full bg-[#b08d57] text-black text-sm font-semibold inline-flex items-center justify-center"
              >
                <span className="relative z-10">Call Now</span>
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white/30 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
                </span>
              </a>
              <a
                href="/contact"
                className="group relative h-11 sm:h-12 px-6 sm:px-8 overflow-hidden rounded-full bg-white/10 text-white text-sm font-medium inline-flex items-center justify-center transition-all duration-300 hover:bg-white/15"
              >
                <span className="relative z-10">Get Directions</span>
              </a>
            </div>
          </div>
        </div> */}

      </div>
    </MainWrapper>
  )
}

export default ForceService