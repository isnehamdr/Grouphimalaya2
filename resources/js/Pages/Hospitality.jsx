import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import hopitalityimage from '../../../public/images/hospitality.avif'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BusinessServicesCards from '@/MainComponents/BusinessServicesCards'
import BusinessFeatures from '@/MainComponents/BusinessFeatures'
import Faq from '@/HomeComponents/Faq'
import businessimage from '../../../public/images/hospitality.webp'
import imperial from '../../../public/images/imperial.jpg'
import { Head } from '@inertiajs/react'

gsap.registerPlugin(ScrollTrigger)

// ─── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    id: '01',
    title: 'Luxury Resort & Spa',
    description:
      'Escape to a sanctuary of peace at Mountain Glory, where modern luxury meets the raw beauty of nature, offering elegantly appointed rooms and holistic wellness treatments.',
    accent: '#995a37',
    textcolor: '#000000',
  },
  {
    id: '02',
    title: 'Conference & Corporate Retreats',
    description:
      'Transform your business meetings into inspiring experiences with our state-of-the-art conference halls and tranquil breakout spaces designed for high-level focus and team synergy.',
    accent: '#000000',
    textcolor: '#ffffff',
  },
  {
    id: '03',
    title: 'Destination Weddings & Events',
    description:
      "Celebrate life's most precious milestones against a backdrop of breathtaking landscapes, supported by our expert event planners and bespoke catering services.",
    accent: '#866828',
    textcolor: '#000000',
  },
  {
    id: '04',
    title: 'Authentic Culinary Journey',
    description:
      'Savor the flavors of the region and the world at our signature restaurants, where farm-to-table ingredients and expert craftsmanship create an unforgettable dining experience.',
    accent: '#4b4640',
    textcolor: '#ffffff',
  },
  {
    id: '05',
    title: 'Curated Tourism & Leisure Packages',
    description:
      "Explore the heart of the Himalayas through our tailored excursions, ranging from adventurous mountain treks to cultural tours, ensuring a deep connection with our local heritage.",
    accent: '#995a37',
    textcolor: '#000000',
  },
  {
    id: '06',
    title: 'Hospitality Management',
    description:
      "Rooted in the Nepalese tradition of 'Atithi Devo Bhava,' our professional management ensures world-class service standards, operational excellence, and a home-away-from-home feel.",
    accent: '#1a1a1a',
    textcolor: '#ffffff',
  },
]

const featuresData = [
  {
    title: 'Luxury Resort & Spa',
    description: 'Premium stays in scenic locations blending Himalayan hospitality with modern comforts.',
  },
  {
    title: 'Conference & Events',
    description: 'State-of-the-art conference facilities, event venues, and exceptional dining experiences.',
  },
  {
    title: 'Budget Guesthouses',
    description: 'Comfortable, affordable guesthouses with authentic Nepali cuisine and warm hospitality.',
  },
  {
    title: 'Tailored Packages',
    description: 'Custom packages for tourism, corporate retreats, weddings, and group travel.',
  },
]

const properties = [
  {
    id: 'mountain-glory',
    tag: '5-Star Luxury Resort',
    tagColor: '#d1fae5',
    tagBg: '#064e3b',
    accent: '#10b981',
    name: 'Mountain Glory Forest Resort & Spa',
    location: 'Pokhara, Nepal',
    description:
      'A 5-star luxury nature retreat located near Pokhara, Nepal, offering a serene escape surrounded by lush hills and views of the Annapurna range and Seti River valley. Designed to blend comfort with nature, the resort provides a premium hospitality experience in a peaceful forest setting.',
    highlights: [
      'Elegantly designed rooms with private balconies and scenic mountain or garden views',
      'Full-service spa and wellness center, infinity pool, and fitness facilities',
      'In-house restaurant serving Nepali and international cuisine',
      'Ideal for leisure stays, destination weddings, corporate events, and family getaways',
    ],
    image: businessimage,
    imageAlt: 'Mountain Glory Forest Resort & Spa, Pokhara',
  },
  {
    id: 'crowne-imperial',
    tag: '4-Star Urban Hotel',
    tagColor: '#fef9c3',
    tagBg: '#713f12',
    accent: '#eab308',
    name: 'Hotel Crowne Imperial',
    location: 'Ravi Bhawan, Kuleshwor, Kathmandu',
    description:
      'A 4-star luxury hotel offering a blend of modern architecture, panoramic city views, and comprehensive hospitality services. Known for its comfortable stay experience and convenient access to key attractions such as Swayambhunath Stupa and Kathmandu Durbar Square.',
    highlights: [
      '131 well-appointed rooms and suites with modern interiors and premium comfort',
      'Sky Lounge rooftop bar offering 360-degree views of the Kathmandu Valley',
      'Swimming pool, fitness center, spa, and fully equipped banquet spaces',
      'Suited for both leisure and business travelers in the heart of Kathmandu',
    ],
    image: imperial,
    imageAlt: 'Hotel Crowne Imperial, Kathmandu',
  },
]

// ─── Property Section ──────────────────────────────────────────────────────────

function PropertySection({ property, index }) {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  const reversed = index % 2 !== 0

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024

      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: isMobile ? 0 : reversed ? 60 : -60,
          y: isMobile ? 30 : 0,
          scale: 0.97,
        },
        {
          opacity: 1, x: 0, y: 0, scale: 1,
          duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: isMobile ? 0 : reversed ? -60 : 60,
          y: isMobile ? 30 : 20,
        },
        {
          opacity: 1, x: 0, y: 0,
          duration: 1, delay: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        contentRef.current.querySelectorAll('.animate-child'),
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.7, stagger: 0.12, delay: 0.3, ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [reversed])

  const imageEl = (
    <div ref={imageRef} className="w-full">
      <img
        src={property.image}
        alt={property.imageAlt}
        className="w-full h-64 sm:h-80 lg:h-[82vh] rounded-2xl lg:rounded-3xl object-cover"
      />
    </div>
  )

  const contentEl = (
    <div
      ref={contentRef}
      className="py-4 lg:py-6 flex flex-col justify-center gap-5"
    >
      {/* Tag */}
      <span
        className="animate-child inline-block self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
        style={{ color: property.tagColor, backgroundColor: property.tagBg }}
      >
        {property.tag}
      </span>

      {/* Name */}
      <p className="animate-child text-3xl sm:text-4xl leading-snug text-white">
        {property.name}
      </p>

      {/* Location */}
      <div className="animate-child flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14" height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0"
          style={{ color: property.accent }}
        >
          <path d="M12 2a7 7 0 0 1 7 7c0 4.97-7 13-7 13S5 13.97 5 9a7 7 0 0 1 7-7zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
        <p className="text-sm text-white/50">{property.location}</p>
      </div>

      {/* Divider */}
      <div
        className="animate-child w-12 h-0.5 rounded-full"
        style={{ backgroundColor: property.accent }}
      />

      {/* Description */}
      <p className="animate-child text-base lg:text-lg text-white/70 leading-relaxed">
        {property.description}
      </p>

      {/* Highlights */}
      <ul className="animate-child flex flex-col gap-2.5">
        {property.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: property.accent }}
            />
            <span className="text-sm text-white/60 leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div
      ref={sectionRef}
      className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20"
    >
      {reversed ? (
        <>
          {/* Mobile: image always on top */}
          <div className="lg:hidden">{imageEl}</div>
          <div className="hidden lg:block">{contentEl}</div>
          <div className="hidden lg:block">{imageEl}</div>
          <div className="lg:hidden">{contentEl}</div>
        </>
      ) : (
        <>
          {imageEl}
          {contentEl}
        </>
      )}
    </div>
  )
}

// ─── Properties Header ─────────────────────────────────────────────────────────

function PropertiesHeader() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.children,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref}>
      <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
        Our Properties
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-lg">
          Signature <br className="hidden sm:block" /> Destinations
        </h2>
        <p className="text-sm sm:text-base text-white/50 max-w-xs sm:max-w-sm leading-relaxed">
          Two exceptional properties — one in the hills of Pokhara, one in the heart of Kathmandu — delivering world-class hospitality across Nepal.
        </p>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

const Hospitality = () => {
  const textRef = useRef(null)

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
    const chars = []

    tokens.forEach((token) => {
      if (/^\s+$/.test(token)) {
        el.appendChild(document.createTextNode(token))
      } else {
        const wordSpan = document.createElement('span')
        wordSpan.style.display = 'inline-block'
        wordSpan.style.whiteSpace = 'nowrap'
        token.split('').forEach((char) => {
          const span = document.createElement('span')
          span.textContent = char
          span.style.color = 'rgb(75, 75, 75)'
          span.style.display = 'inline'
          wordSpan.appendChild(span)
          chars.push(span)
        })
        el.appendChild(wordSpan)
      }
    })

    gsap.to(chars, {
      color: 'rgb(235, 235, 235)',
      stagger: 0.015,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 30%',
        scrub: 1,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <MainWrapper>
      <Head>
        <title>Hospitality | Himalaya Organization</title>
      </Head>

      <div className="w-full min-h-screen p-2 sm:p-4 text-white">

        {/* Hero */}
        <div
          className="rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10"
          style={{ backgroundImage: `url(${hopitalityimage})` }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90" />
          <div className="z-10 flex flex-col items-center pb-2 sm:pb-0">
            <p className="text-white text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold">
              Nepali Warmth, World-Class Comfort
            </p>
            <p className="text-white max-w-xs sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-4 sm:mt-6 text-sm sm:text-base">
              Himalaya Organization's hospitality ventures offer exceptional stays, blending the rich traditions of Himalayan hospitality with modern luxury.
            </p>
          </div>
        </div>

        {/* Scroll-reveal text */}
        <div className="my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20">
          <p
            ref={textRef}
            className="w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words"
          >
            At Himalaya Organizations, our Hospitality Division is dedicated to the art of Nepalese service, where every guest is treated with the reverence of Atithi Devo Bhava. Through flagship properties like Mountain Glory Forest Resort & Spa, we blend world class luxury with the serene beauty of our natural landscapes. By integrating holistic wellness with authentic culinary experiences, we ensure every stay offers a profound sense of peace and belonging. Whether for a tranquil retreat or a high level corporate summit, our team provides the meticulous care necessary to elevate your journey.
          </p>
        </div>

        {/* Signature Properties */}
        <div className="w-full overflow-x-hidden px-4 sm:px-8 lg:px-20 py-10 sm:py-14 lg:py-16 flex flex-col gap-16 sm:gap-20 lg:gap-24">
          <PropertiesHeader />
          {properties.map((property, i) => (
            <PropertySection key={property.id} property={property} index={i} />
          ))}
        </div>

        {/* Services */}
        <div className="my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20">
          <BusinessServicesCards services={services} />
        </div>

        <BusinessFeatures
          features={featuresData}
          businessimage={businessimage}
          maintext="Every Stay, Unforgettable"
          subtext="Mountain Glory Forest Resort & Spa trained hospitality professionals, authentic local cuisine, and strategic property locations across Nepal's most scenic destinations — we've built our reputation one memorable stay at a time."
        />

        <Faq />

      </div>
    </MainWrapper>
  )
}

export default Hospitality