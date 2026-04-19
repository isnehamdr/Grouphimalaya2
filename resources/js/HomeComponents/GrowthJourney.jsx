
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// const milestones = [
//   {
//     year: '1991',
//     title: 'The Beginning',
//     body: "Established as Nepal's first reconditioned vehicle house and bike rental service in Western Nepal under the visionary leadership of Mr. Dhruba Thapa.",
//     bg: '#E8F4E8',
//     accent: '#2D6A2D',
//     tag: 'Founded',
//   },
//   {
//     year: 'Early 1990s',
//     title: 'Auto Expansion',
//     body: 'Expanded into auto dealerships and motor showrooms across Western Nepal, building a reputation for integrity and quality in every transaction.',
//     bg: '#FEF3E2',
//     accent: '#B45309',
//     tag: 'Automotive',
//   },
//   {
//     year: '2000s',
//     title: 'Strategic Diversification',
//     body: 'Boldly diversified into real estate, hospitality, and banking sectors — transforming from an auto business into a multi-sector conglomerate.',
//     bg: '#EDE9FE',
//     accent: '#5B21B6',
//     tag: 'Diversification',
//   },
//   {
//     year: '2010s',
//     title: 'Nationwide Growth',
//     body: 'Grew to 22+ branches nationwide with 200+ employees. Added agriculture, education, and housing to the portfolio, cementing national leadership.',
//     bg: '#FCE7F3',
//     accent: '#9D174D',
//     tag: 'Expansion',
//   },
//   {
//     year: '2020s',
//     title: 'Global Partnerships',
//     body: 'Became authorized dealer for global brands — Force Motors, Maxus, Deepal. Launched Himalaya Trust for community upliftment in education, healthcare, and environment.',
//     bg: '#DBEAFE',
//     accent: '#1D4ED8',
//     tag: 'Global',
//   },
//   {
//     year: 'Today',
//     title: 'A Thriving Conglomerate',
//     body: "A thriving conglomerate approaching $100M annual turnover, contributing significantly to Nepal's economy with modern infrastructure across 7+ sectors.",
//     bg: '#D1FAE5',
//     accent: '#065F46',
//     tag: 'Present',
//   },
// ]


const milestones = [
  {
    year: "Early 1990s",
    title: "The Entrepreneurial Spark",
    body: "The Himalaya Organization's foundation is laid when founding chairman Mr. Dhruba Thapa initiates a two-wheeler rental business, marking the entrepreneurial beginnings of the group.",
    bg: "#062016",
    accent: "#22C55E",
    tag: "Founded",
  },
  {
    year: "Mid 1990s",
    title: "Nepal's First Pre-Owned Dealer",
    body: "Establishment of Gandaki Recondition Centre — Nepal's first registered pre-owned two-wheeler business venture — providing purchase, sale, and exchange services.",
    bg: "#241205",
    accent: "#F59E0B",
    tag: "Automotive",
  },
  {
    year: "Late 1990s",
    title: "Global Brand Dealerships",
    body: "Expansion into automotive dealerships, representing global brands such as Suzuki, Daelim, Hulas Motors, and Daihatsu at a regional level.",
    bg: "#1A1205",
    accent: "#FB923C",
    tag: "Dealerships",
  },
  {
    year: "2001",
    title: "Himalaya Organization Founded",
    body: "Formation of Himalaya Organization as a cohesive group, consolidating various businesses and setting the groundwork for multi-sector business growth.",
    bg: "#0A1A2F",
    accent: "#60A5FA",
    tag: "Milestone",
  },
  {
    year: "Early 2000s",
    title: "Finance & Real Estate Entry",
    body: "Launch of Himalaya Invest & Development Company, entering the financial sector with investment, asset management, and project financing services, alongside multiple real estate project expansions.",
    bg: "#1E1435",
    accent: "#8B5CF6",
    tag: "Finance",
  },
  {
    year: "Late 2000s",
    title: "Urban Real Estate Growth",
    body: "Strategic entry into real estate, developing premium residential and commercial projects to meet the needs of Nepal's growing urban population through Himalaya Invest & Development Company.",
    bg: "#310A1A",
    accent: "#EC4899",
    tag: "Real Estate",
  },
  {
    year: "Early 2010s",
    title: "Heavy Equipment Dealerships",
    body: "Diversification into heavy equipment with dealerships for CASE Construction Equipment and Hyundai Heavy Equipment.",
    bg: "#1A1005",
    accent: "#EAB308",
    tag: "Equipment",
  },
  {
    year: "Late 2010s",
    title: "Ford Motors Partnership",
    body: "Strengthening automotive leadership through the acquisition of the regional dealership for Ford Motors during a period of significant industry growth in Nepal.",
    bg: "#051A20",
    accent: "#06B6D4",
    tag: "Automotive",
  },
  {
    year: "2014",
    title: "Nationwide Distribution & Agriculture",
    body: "Expansion towards nationwide distribution and supply chain via Aayam Intercontinental Pvt. Ltd., obtaining the official distributorship of Force Motors (India) for Nepal, and entry into the agriculture sector with Himalaya Agro Farms.",
    bg: "#062016",
    accent: "#10B981",
    tag: "Distribution",
  },
  {
    year: "2020",
    title: "Three-Wheelers & Hospitality",
    body: "Entry into the three-wheeler market with the distributorship of Kerala Automobiles Limited (India) for Nepal, and establishment of one of Nepal's largest forest resorts — Mountain Glory Forest Resort.",
    bg: "#0A192F",
    accent: "#3B82F6",
    tag: "Hospitality",
  },
  {
    year: "2024",
    title: "EV Sector Milestone",
    body: "A significant milestone achieved by acquiring the official distributorship of SAIC Maxus, solidifying Himalaya Organization's position within Nepal's evolving automotive and EV landscape.",
    bg: "#04221C",
    accent: "#34D399",
    tag: "EV & Future",
  },
];



const GrowthJourney = () => {
  const wrapperRef = useRef(null)
  const stickyRef  = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const sticky  = stickyRef.current
    const cards   = cardRefs.current.filter(Boolean)
    const total   = cards.length
    const isMobile = window.innerWidth < 1024

    // Slightly shorter per-card on mobile so the section doesn't drag on forever
    const PER_CARD = window.innerHeight * (isMobile ? 0.65 : 0.8)

    const pinTrigger = ScrollTrigger.create({
      trigger: sticky,
      start: 'center center',
      end: () => `+=${(total - 1) * PER_CARD}`,
      pin: true,
      pinSpacing: false,
    })

    wrapperRef.current.style.paddingBottom = `${(total - 1) * PER_CARD}px`

    cards.forEach((card, i) => {
      if (i === total - 1) return

      gsap.to(card, {
        y: '-115%',
        scale: 0.92,
        opacity: 0,
        rotate: -2,
        ease: 'none',
        scrollTrigger: {
          trigger: sticky,
          start: () => `${pinTrigger.start + i * PER_CARD}`,
          end:   () => `${pinTrigger.start + (i + 1) * PER_CARD}`,
          scrub: 0.6,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="bg-[#0b0c0f]">
      <div ref={wrapperRef}>
        {/*
          Layout:
            Mobile  → single column: heading / cards / description (all stacked)
            Desktop → 3-column grid side by side

          Height:
            Mobile  → auto  (let content dictate, no fixed height)
            Desktop → 60vh capped at 700px
        */}
        <div
          ref={stickyRef}
          className="
            flex flex-col gap-8 px-6 py-10
            lg:grid lg:grid-cols-3 lg:gap-10 lg:px-14 lg:py-0
            lg:items-center lg:h-[60vh] lg:max-h-[740px]
            box-border
          "
        >

          {/* ── LEFT: heading ── */}
          <div>
            <h2 className="text-3xl lg:text-4xl leading-tight text-white">
              Our Journey<br />of Growth
            </h2>
            <div className="w-8 h-px bg-white/20 rounded mt-5" />
          </div>

          {/* ── CENTER: stacked cards ── */}
          {/*
            On mobile  → full width, fixed height 340px (compact but readable)
            On desktop → height 400px (original)
          */}
          <div className="relative w-full h-[340px] lg:h-[400px] text-white">
            {[...milestones].reverse().map((m, revI) => {
              const i       = milestones.length - 1 - revI
              const peekDown = (milestones.length - 1 - i) * 7

              return (
                <div
                  key={i}
                  ref={el => (cardRefs.current[i] = el)}
                  className="absolute inset-0 rounded-2xl p-5 lg:p-[22px_26px] shadow-md"
                  style={{
                    top: `${peekDown}px`,
                    backgroundColor: m.bg,
                    zIndex: milestones.length - i,
                    willChange: 'transform, opacity',
                    transformOrigin: 'bottom center',
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-4xl lg:text-5xl">{m.year}</p>
                    <div>
                      <p className="text-xl lg:text-2xl">{m.title}</p>
                      <p className="mt-2 lg:mt-3 text-sm lg:text-base">{m.body}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── RIGHT: description ── */}
          {/*
            On mobile this was clipped because the parent had a fixed height.
            Now the parent is auto-height on mobile, so this renders naturally.
          */}
          <div>
            <p className="text-white/70 text-base lg:text-xl font-medium">
              From humble beginnings in Nepal's rugged terrains, Himalaya Group has evolved into a
              cornerstone of national development over three decades. Starting with visionary auto
              ventures, we've expanded into real estate, hospitality, and beyond — delivering
              landmark initiatives that blend innovation with Himalayan resilience.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GrowthJourney



