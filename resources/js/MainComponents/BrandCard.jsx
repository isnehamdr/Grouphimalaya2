// BrandCard.jsx
// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const autoBrands = [
//   {
//     id: 'force',
//     tag: 'National Distribution',
//     name: 'Force Motors',
//     entity: 'Aayam Intercontinental Pvt. Ltd.',
//     website: 'www.aayamforce.com',
//     description: 'Aayam Intercontinental Pvt. Ltd, under Himalaya Organization, has been the authorized importer and distributor of Force Motors in Nepal since 2014. With four self-outlets and twelve dealer networks, Force now holds the third position in market share for the commercial segment in Nepal.',
//     accent: '#1a4fd6',
//     tag_color: '#dbeafe',
//     tag_bg: '#1e3a8a',
//     isService: false
//   },
//   {
//     id: 'force-service',
//     tag: 'Force Services',
//     name: 'Force Services',
//     entity: 'Force Service Pvt. Ltd.',
//     description: 'Force Service Ltd. serves as the authorized service provider for Force Motors in Nepal, offering comprehensive maintenance, genuine parts, and expert technical support across the nationwide dealer network.',
//     accent: '#0ea5e9',
//     tag_color: '#e0f2fe',
//     tag_bg: '#0c4a6e',
//     isService: true
//   },
//   {
//     id: 'maxus',
//     tag: 'National Distribution',
//     name: 'SAIC Maxus',
//     entity: 'Himalaya Motrox Pvt. Ltd.',
//     website: 'www.maxusnepal.com',
//     description: 'Himalaya Motrox Ltd. serves as the authorized importer and distributor of Maxus in Nepal, focused on advanced mobility solutions with a strong emphasis on innovation, performance, and sustainability — particularly in the electric and premium vehicle segments.',
//     accent: '#0ea5e9',
//     tag_color: '#e0f2fe',
//     tag_bg: '#0c4a6e',
//     isService: false
//   },
//   {
//     id: 'deepal',
//     tag: 'Regional Distribution',
//     name: 'Changan Deepal',
//     entity: 'Himalaya Motrox Pvt. Ltd.',
//     website: '',
//     description: 'As the regional dealership for Changan Deepal, Himalaya Motrox Ltd. presents a modern showroom experience that reflects advanced EV technology, innovation, and the future of smart mobility in Nepal.',
//     accent: '#7c3aed',
//     tag_color: '#ede9fe',
//     tag_bg: '#4c1d95',
//     isService: false
//   },
//   {
//     id: 'ford',
//     tag: 'Regional Distribution',
//     name: 'Ford Motors',
//     entity: 'Himalaya Organization',
//     website: '',
//     description: "As an authorized regional dealership, the Ford showroom showcases global automotive excellence, combining durability, performance, and a premium customer experience — backed by Himalaya Organization's decades of industry leadership.",
//     accent: '#1d4ed8',
//     tag_color: '#dbeafe',
//     tag_bg: '#1e3a8a',
//     isService:false
//   },
// ]

// function BrandSection({ brand, index, imageMap }) {
//   const sectionRef = useRef(null)
//   const imageRef = useRef(null)
//   const contentRef = useRef(null)

//   const reversed = index % 2 !== 0

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const isMobile = window.innerWidth < 1024

//       gsap.fromTo(
//         imageRef.current,
//         {
//           opacity: 0,
//           x: isMobile ? 0 : reversed ? 60 : -60,
//           y: isMobile ? 30 : 0,
//           scale: 0.97,
//         },
//         {
//           opacity: 1, x: 0, y: 0, scale: 1,
//           duration: 1, ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 82%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       )

//       gsap.fromTo(
//         contentRef.current,
//         {
//           opacity: 0,
//           x: isMobile ? 0 : reversed ? -60 : 60,
//           y: isMobile ? 30 : 20,
//         },
//         {
//           opacity: 1, x: 0, y: 0,
//           duration: 1, delay: 0.15, ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 82%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       )

//       gsap.fromTo(
//         contentRef.current.querySelectorAll('.animate-child'),
//         { opacity: 0, y: 24 },
//         {
//           opacity: 1, y: 0,
//           duration: 0.7, stagger: 0.12, delay: 0.3, ease: 'power2.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 82%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [reversed])

//   const imgSrc = imageMap?.[brand.id]

//   const imageEl = (
//     <div ref={imageRef} className="w-full">
//       {imgSrc ? (
//         <img
//           src={imgSrc}
//           alt={brand.name}
//           className="w-full h-64 sm:h-80 lg:h-[88vh] rounded-2xl lg:rounded-3xl object-cover"
//         />
//       ) : (
//         <div
//           className="w-full h-64 sm:h-80 lg:h-[82vh] rounded-2xl lg:rounded-3xl flex items-center justify-center text-white/20 text-sm"
//           style={{ background: `${brand.accent}22`, border: `1px solid ${brand.accent}33` }}
//         >
//           {brand.name} Showroom Image
//         </div>
//       )}
//     </div>
//   )

//   const contentEl = (
//     <div ref={contentRef} className="py-4 lg:py-6 flex flex-col justify-between gap-8 lg:gap-0">
//       <div className="flex flex-col gap-5">
//         <span
//           className="animate-child inline-block self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
//           style={{ color: brand.tag_color, backgroundColor: brand.tag_bg }}
//         >
//           {brand.tag}
//         </span>

//         <p className="animate-child text-3xl sm:text-4xl leading-snug text-white">
//           {brand.name}
//         </p>

//         <div className="animate-child">
//           <p className="text-xs uppercase tracking-widest text-white/40 mb-0.5">
//             Operated by
//           </p>
//           <p className="text-sm sm:text-base font-medium text-white/80">
//             {brand.entity}
//           </p>
//         </div>

//         <div
//           className="animate-child w-12 h-0.5 rounded-full"
//           style={{ backgroundColor: brand.accent }}
//         />

//         <p className="animate-child text-base lg:text-lg text-white/70 leading-relaxed">
//           {brand.description}
//         </p>
//       </div>
//     </div>
//   )

//   return (
//     <div ref={sectionRef} className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
//       {reversed ? (
//         <>
//           <div className="lg:hidden">{imageEl}</div>
//           <div className="hidden lg:block">{contentEl}</div>
//           <div className="hidden lg:block">{imageEl}</div>
//           <div className="lg:hidden">{contentEl}</div>
//         </>
//       ) : (
//         <>
//           {imageEl}
//           {contentEl}
//         </>
//       )}
//     </div>
//   )
// }

// function SectionHeader() {
//   const ref = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ref.current.children,
//         { opacity: 0, y: 28 },
//         {
//           opacity: 1, y: 0,
//           duration: 0.7, ease: 'power3.out', stagger: 0.12,
//           scrollTrigger: {
//             trigger: ref.current,
//             start: 'top 88%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       )
//     }, ref)
//     return () => ctx.revert()
//   }, [])

//   return (
//     <div ref={ref} className="mb-10 sm:mb-14 lg:mb-16">
//       <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
//         Automotive Partners
//       </p>
//       <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-lg">
//           Our Brand <br className="hidden sm:block" /> Portfolio
//         </h2>
//         <p className="text-sm sm:text-base text-white/50 max-w-sm leading-relaxed">
//           Authorized dealers and national distributors for world-class automotive brands across Nepal.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default function AutomotiveBrands({ imageMap }) {
//   return (
//     <div className="w-full overflow-x-hidden px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-16 flex flex-col gap-16 sm:gap-20 lg:gap-24">
//       <SectionHeader />
//       {autoBrands.map((brand, i) => (
//         <BrandSection key={brand.id} brand={brand} index={i} imageMap={imageMap} />
//       ))}
//     </div>
//   )
// }




// BrandCard.jsx
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const autoBrands = [
  {
    id: 'force',
    tag: 'National Distribution',
    name: 'Force Motors',
    entity: 'Aayam Intercontinental Pvt. Ltd.',
    website: 'www.aayamforce.com',
    description: 'Aayam Intercontinental Pvt. Ltd, under Himalaya Organization, has been the authorized importer and distributor of Force Motors in Nepal since 2014. With four self-outlets and twelve dealer networks, Force now holds the third position in market share for the commercial segment in Nepal.',
    accent: '#1a4fd6',
    tag_color: '#dbeafe',
    tag_bg: '#1e3a8a',
    isService: false
  },
  {
    id: 'force-service',
    tag: 'Force Services',
    name: 'Force Services',
    entity: 'Force Service Pvt. Ltd.',
    description: 'Force Service Ltd. serves as the authorized service provider for Force Motors in Nepal, offering comprehensive maintenance, genuine parts, and expert technical support across the nationwide dealer network.',
    accent: '#0ea5e9',
    tag_color: '#e0f2fe',
    tag_bg: '#0c4a6e',
    isService: true
  },
  {
    id: 'maxus',
    tag: 'National Distribution',
    name: 'SAIC Maxus',
    entity: 'Himalaya Motrox Pvt. Ltd.',
    website: 'www.maxusnepal.com',
    description: 'Himalaya Motrox Ltd. serves as the authorized importer and distributor of Maxus in Nepal, focused on advanced mobility solutions with a strong emphasis on innovation, performance, and sustainability — particularly in the electric and premium vehicle segments.',
    accent: '#0ea5e9',
    tag_color: '#e0f2fe',
    tag_bg: '#0c4a6e',
    isService: false
  },
  {
    id: 'deepal',
    tag: 'Regional Distribution',
    name: 'Changan Deepal',
    entity: 'Himalaya Motrox Pvt. Ltd.',
    website: '',
    description: 'As the regional dealership for Changan Deepal, Himalaya Motrox Ltd. presents a modern showroom experience that reflects advanced EV technology, innovation, and the future of smart mobility in Nepal.',
    accent: '#7c3aed',
    tag_color: '#ede9fe',
    tag_bg: '#4c1d95',
    isService: false
  },
  {
    id: 'ford',
    tag: 'Regional Distribution',
    name: 'Ford Motors',
    entity: 'Himalaya Organization',
    website: '',
    description: "As an authorized regional dealership, the Ford showroom showcases global automotive excellence, combining durability, performance, and a premium customer experience — backed by Himalaya Organization's decades of industry leadership.",
    accent: '#1d4ed8',
    tag_color: '#dbeafe',
    tag_bg: '#1e3a8a',
    isService: false
  },
]

// ─── Service Brand (isService: true) ───────────────────────────────────────────
// Full-width layout: top info row + horizontal scrolling image strip below

function ServiceBrandSection({ brand, imageMap }) {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const stripRef = useRef(null)
  const trackRef = useRef(null)

  const images = imageMap?.[brand.id]
  const imageArray = Array.isArray(images) ? images : images ? [images] : []

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header row fades up
      gsap.fromTo(
        headerRef.current.querySelectorAll('.animate-child'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.75, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 84%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Strip slides in from right
      gsap.fromTo(
        stripRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1, x: 0,
          duration: 1, delay: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 84%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Individual image cards stagger in
      const cards = trackRef.current?.querySelectorAll('.img-card')
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, scale: 0.94, y: 20 },
          {
            opacity: 1, scale: 1, y: 0,
            duration: 0.7, stagger: 0.12, delay: 0.35, ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 84%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="overflow-hidden w-full">
      {/* Divider line */}
      {/* <div
        className="w-full h-px mb-10 sm:mb-14"
        style={{ background: `linear-gradient(to right, ${brand.accent}55, transparent)` }}
      /> */}

      {/* Top info row */}
      <div
        ref={headerRef}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-8 sm:mb-10"
      >
        {/* Left: tag + name + entity */}
        <div className="flex flex-col gap-4">
          <span
            className="animate-child inline-block self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ color: brand.tag_color, backgroundColor: brand.tag_bg }}
          >
            {brand.tag}
          </span>
          <h3 className="animate-child text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            {brand.name}
          </h3>
          <div className="animate-child flex items-center gap-3">
            <div
              className="w-6 h-0.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: brand.accent }}
            />
            <p className="text-sm font-medium text-white/60">{brand.entity}</p>
          </div>
        </div>

        {/* Right: description */}
        <p className="animate-child text-sm sm:text-base text-white/55 leading-relaxed max-w-md lg:max-w-sm xl:max-w-md lg:text-right">
          {brand.description}
        </p>
      </div>

      {/* Horizontally scrollable image strip */}
      <div ref={stripRef} className="w-full">
        {imageArray.length > 0 ? (
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {imageArray.map((src, i) => (
              <div
                key={i}
                className="img-card flex-shrink-0 overflow-hidden rounded-2xl"
                style={{
                  width: imageArray.length === 1 ? '100%' : imageArray.length === 2 ? 'calc(50% - 10px)' : 'clamp(260px, 36vw, 480px)',
                  height: 'clamp(200px, 28vw, 380px)',
                }}
              >
                <img
                  src={src}
                  alt={`${brand.name} ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{ transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-5"
          >
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="img-card flex-shrink-0 rounded-2xl flex items-center justify-center text-white/20 text-xs"
                style={{
                  width: 'clamp(260px, 36vw, 480px)',
                  height: 'clamp(200px, 28vw, 380px)',
                  background: `${brand.accent}18`,
                  border: `1px solid ${brand.accent}33`,
                }}
              >
                {brand.name} Image {i}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Regular Brand Section ──────────────────────────────────────────────────────

function BrandSection({ brand, index, imageMap }) {
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

  const imgSrc = imageMap?.[brand.id]

  const imageEl = (
    <div ref={imageRef} className="w-full">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={brand.name}
          className="w-full h-64 sm:h-80 lg:h-[88vh] rounded-2xl lg:rounded-3xl object-cover"
        />
      ) : (
        <div
          className="w-full h-64 sm:h-80 lg:h-[82vh] rounded-2xl lg:rounded-3xl flex items-center justify-center text-white/20 text-sm"
          style={{ background: `${brand.accent}22`, border: `1px solid ${brand.accent}33` }}
        >
          {brand.name} Showroom Image
        </div>
      )}
    </div>
  )

  const contentEl = (
    <div ref={contentRef} className="py-4 lg:py-6 flex flex-col justify-between gap-8 lg:gap-0">
      <div className="flex flex-col gap-5">
        <span
          className="animate-child inline-block self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ color: brand.tag_color, backgroundColor: brand.tag_bg }}
        >
          {brand.tag}
        </span>

        <p className="animate-child text-3xl sm:text-4xl leading-snug text-white">
          {brand.name}
        </p>

        <div className="animate-child">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-0.5">
            Operated by
          </p>
          <p className="text-sm sm:text-base font-medium text-white/80">
            {brand.entity}
          </p>
        </div>

        <div
          className="animate-child w-12 h-0.5 rounded-full"
          style={{ backgroundColor: brand.accent }}
        />

        <p className="animate-child text-base lg:text-lg text-white/70 leading-relaxed">
          {brand.description}
        </p>
      </div>
    </div>
  )

  return (
    <div ref={sectionRef} className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
      {reversed ? (
        <>
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

// ─── Section Header ─────────────────────────────────────────────────────────────

function SectionHeader() {
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
    <div ref={ref} className="mb-10 sm:mb-14 lg:mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
        Automotive Partners
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-lg">
          Our Brand <br className="hidden sm:block" /> Portfolio
        </h2>
        <p className="text-sm sm:text-base text-white/50 max-w-sm leading-relaxed">
          Authorized dealers and national distributors for world-class automotive brands across Nepal.
        </p>
      </div>
    </div>
  )
}

// ─── Root Export ────────────────────────────────────────────────────────────────

export default function AutomotiveBrands({ imageMap }) {
  return (
    <div className="w-full overflow-x-hidden px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-16 flex flex-col gap-16 sm:gap-20 lg:gap-24">
      <SectionHeader />
      {autoBrands.map((brand, i) =>
        brand.isService ? (
          <ServiceBrandSection
            key={brand.id}
            brand={brand}
            imageMap={imageMap}
          />
        ) : (
          <BrandSection
            key={brand.id}
            brand={brand}
            index={i}
            imageMap={imageMap}
          />
        )
      )}
    </div>
  )
}