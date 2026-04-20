import MainWrapper from '@/MainComponents/MainWrapper'
import React, { useEffect, useRef } from 'react'
import communityimage from '../../../public/images/community.avif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Head } from '@inertiajs/react'

import csrLionsClub   from '../../../public/images/csr1.jpg'
import csrJci         from '../../../public/images/csr3.jpg'
import csrCovid       from '../../../public/images/csr2.jpg'
import csrKeyHandover from '../../../public/images/csr4.jpg'
import csrAmbulance   from '../../../public/images/csr5.jpg'

gsap.registerPlugin(ScrollTrigger)

const csrInitiatives = [
  {
    id: 1,
    label: 'Emergency Response',
    title: 'Three Units Force Ambulance Donation to Lions Club of Pokhara & Beni',
    description:
      'Himalaya Organization donated three Force ambulance units to the Lions Club of Pokhara and Beni, reinforcing emergency healthcare access across Western Nepal and strengthening the life-saving network in remote communities.',
    images: [csrLionsClub, csrKeyHandover],
  },
  {
    id: 2,
    label: 'Covid-19 Relief',
    title: 'Three Units Force Ambulance Donation to Pokhara Metropolitan City',
    description:
      "During the height of the Covid-19 pandemic, Himalaya Organization provided three Force ambulance units to Pokhara Metropolitan City, directly supporting the city's emergency health infrastructure at a time of critical national need.",
    images: [csrCovid, csrAmbulance],
  },
  {
    id: 3,
    label: 'Community Partnership',
    title: 'One Unit Force Ambulance Donation to JCI Pokhara',
    description:
      'In partnership with JCI Pokhara, Himalaya Organization donated a Force ambulance unit to bolster community-led health initiatives, enabling faster emergency response and expanding healthcare reach for underserved populations.',
    images: [csrJci],
  },
]

const impactStats = [
  { value: '7+',  label: 'Ambulances Donated'   },
  { value: '3+',  label: 'Partner Organizations' },
  { value: '30+', label: 'Years of Giving Back'  },
]

const Community = () => {
  const heroTextRef         = useRef(null)
  const heroSubRef          = useRef(null)
  const textRef             = useRef(null)
  const statsRef            = useRef([])
  const sectionTitleDesktop = useRef(null)
  const sectionTitleMobile  = useRef(null)
  const cardRefs            = useRef([])
  const quoteRef            = useRef(null)
  const csrSectionRef       = useRef(null)

  // ── Char-by-char scroll animation ─────────────────────────────────────
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

    const anim = gsap.to(chars, {
      color: 'rgb(235, 235, 235)',
      stagger: 0.012,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 30%',
        scrub: 1,
      },
    })

    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [])

  // ── All GSAP animations ────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const defaults = { toggleActions: 'play none none reverse', start: 'top 82%' }

      gsap.fromTo(heroTextRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo(heroSubRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.55 }
      )

      if (statsRef.current[0]) {
        gsap.fromTo(statsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: { trigger: statsRef.current[0], ...defaults },
          }
        )
      }

      const titleEls = [sectionTitleDesktop.current, sectionTitleMobile.current].filter(Boolean)
      if (titleEls.length) {
        gsap.fromTo(titleEls,
          { opacity: 0, x: -35 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: 'power2.out',
            scrollTrigger: { trigger: titleEls[0], ...defaults },
          }
        )
      }

      if (cardRefs.current[0]) {
        gsap.fromTo(cardRefs.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0, duration: 0.75, ease: 'power2.out', stagger: 0.15,
            scrollTrigger: { trigger: cardRefs.current[0], ...defaults },
          }
        )
      }

      gsap.fromTo(quoteRef.current,
        { opacity: 0, scale: 0.94, y: 25 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'power2.out',
          scrollTrigger: { trigger: quoteRef.current, ...defaults },
        }
      )

      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: csrSectionRef.current,
          start: 'top 112px',
          end: 'bottom bottom',
          pin: sectionTitleDesktop.current,
          pinSpacing: false,
        })
      })

      return () => mm.revert()
    })

    return () => ctx.revert()
  }, [])

  return (
    <MainWrapper>
      <Head>
        <title>Community | Himalaya Organization</title>
      </Head>

      <div className='w-full min-h-screen p-2 sm:p-4 text-white'>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${communityimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/80' />
          <div className='z-10 flex flex-col items-center pb-2 sm:pb-0'>
            <p
              ref={heroTextRef}
              className='text-white text-2xl sm:text-5xl lg:text-7xl max-w-[280px] sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold opacity-0'
            >
              Committed to Giving Back
            </p>
            <p
              ref={heroSubRef}
              className='text-white text-sm sm:text-base max-w-[260px] sm:max-w-lg lg:max-w-4xl text-center leading-snug sm:leading-tight font-semibold mt-3 sm:mt-6 opacity-0'
            >
              Himalaya Organization actively engages in community development and social responsibility initiatives that create a meaningful and lasting impact.
            </p>
          </div>
        </div>

        {/* ── Intro ─────────────────────────────────────────────────── */}
        <div className='my-8 sm:my-12 lg:my-24 px-4 sm:px-10 lg:px-20'>
          <p
            ref={textRef}
            className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
          >
            At Himalaya Organization, corporate social responsibility is not a programme — it is a principle. For over three decades, we have reinvested in the communities that have shaped our growth, channelling resources toward emergency healthcare, disaster relief, and local capacity building across Nepal.
          </p>
        </div>

        {/* ── Impact Stats ──────────────────────────────────────────── */}
        <div className='grid grid-cols-3 gap-2 sm:gap-6 px-4 sm:px-10 lg:px-20 mb-10 sm:mb-20'>
          {impactStats.map((stat, i) => (
            <div
              key={i}
              ref={el => (statsRef.current[i] = el)}
              className='rounded-2xl bg-[#121318] p-4 sm:p-8 flex flex-col items-center justify-center text-center opacity-0'
            >
              <p className='text-xl sm:text-4xl lg:text-6xl font-semibold text-amber-700'>{stat.value}</p>
              <p className='text-[10px] sm:text-sm lg:text-base text-gray-500 mt-1 sm:mt-2 leading-tight'>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── CSR Initiatives ───────────────────────────────────────── */}
        <section className='px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pb-10 sm:pb-20 md:pb-24 lg:pb-28'>
          <div className='flex flex-col lg:flex-row lg:gap-12 xl:gap-16 items-start'>

            {/* Desktop pinned heading */}
            <div
              ref={sectionTitleDesktop}
              className='hidden lg:block flex-shrink-0 lg:w-[28%] xl:w-[26%] opacity-0'
            >
              <h2 className='text-5xl xl:text-6xl leading-tight font-medium text-[#ae8755]'>
                Our CSR<br />Initiatives
              </h2>
              <p className='mt-4 text-lg text-gray-500'>
                Real actions. Real impact. Communities uplifted across Nepal.
              </p>
            </div>

            {/* Cards column */}
            <div
              ref={csrSectionRef}
              className='w-full lg:flex-1 flex flex-col gap-6 sm:gap-8'
            >
              {/* Mobile heading */}
              <div
                ref={sectionTitleMobile}
                className='lg:hidden mb-2 sm:mb-4 opacity-0'
              >
                <h2 className='text-2xl sm:text-4xl font-medium text-[#ae8755]'>
                  Our CSR Initiatives
                </h2>
                <p className='mt-2 text-sm sm:text-base text-gray-500'>
                  Real actions. Real impact. Communities uplifted across Nepal.
                </p>
              </div>

              {csrInitiatives.map((item, i) => (
                <div
                  key={item.id}
                  ref={el => (cardRefs.current[i] = el)}
                  className='flex flex-col bg-[#121318] rounded-2xl opacity-0'
                  // ── REMOVED overflow-hidden from the card ──
                  // overflow-hidden was clipping the images.
                  // We apply rounded corners + overflow only to the image wrapper below.
                >

                  {/* ── Photo gallery ── */}
                  <div
                    className={`grid gap-2 sm:gap-3 rounded-t-2xl overflow-hidden ${
                      item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                    }`}
                  >
                    {item.images.map((img, idx) => (
                      <div
                        key={idx}
                        className='h-[220px] sm:h-[320px] lg:h-[420px] xl:h-[500px] overflow-hidden bg-[#1a1a22]'
                        // Each image cell has a fixed explicit height at every breakpoint.
                        // All cells in the same card share the same height class so they
                        // are always perfectly equal. bg-[#1a1a22] shows while image loads.
                      >
                        <img
                          src={img}
                          alt={`${item.title} — photo ${idx + 1}`}
                          className='w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105'
                        />
                      </div>
                    ))}
                  </div>

                  {/* ── Text content ── */}
                  <div className='flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 lg:p-8 rounded-b-2xl'>
                    <p className='text-sm sm:text-lg font-medium text-amber-700'>{item.label}</p>
                    <p className='text-lg sm:text-2xl lg:text-3xl font-medium leading-snug'>{item.title}</p>
                    <p className='text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed'>{item.description}</p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Pull Quote ────────────────────────────────────────────── */}
        <div className='px-4 sm:px-10 lg:px-20 pb-10 sm:pb-20'>
          <div
            ref={quoteRef}
            className='bg-amber-700 px-6 sm:px-10 pt-4 pb-8 rounded-2xl relative w-full opacity-0'
          >
            <span
              className='block text-white/25 leading-none select-none'
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(5rem, 14vw, 9rem)', lineHeight: '0.85', marginBottom: '-0.2em' }}
            >
              &ldquo;
            </span>
            <p className='text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-snug max-w-4xl'>
              Committed to giving back, Himalaya Organization actively engages in community development and social responsibility initiatives that create a meaningful and lasting impact.
            </p>
            <span
              className='block text-white/25 leading-none text-right select-none'
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(5rem, 14vw, 9rem)', lineHeight: '0.5', marginTop: '0.1em' }}
            >
              &rdquo;
            </span>
            <div className='flex items-center gap-3 mt-6 sm:mt-8'>
              <div className='w-8 h-[2px] bg-white/50 rounded-full' />
              <div>
                <p className='text-white font-semibold text-base sm:text-lg tracking-wide'>Dr. Dhruba Bahadur Thapa</p>
                <p className='text-white/70 text-xs sm:text-sm tracking-widest uppercase'>Founder & Chairman, Himalaya Organization</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </MainWrapper>
  )
}

export default Community