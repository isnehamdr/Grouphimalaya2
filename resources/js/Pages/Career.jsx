import React, { useEffect, useRef, useState } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import careerimage from '../../../public/images/vision.jpeg'
import iconone from '../../../public/images/small_icon_one.webp'
import icontwo from '../../../public/images/small_icon_two.webp'
import iconthree from '../../../public/images/small_icon_three.webp'
import iconfour from '../../../public/images/small_icon_four.webp'
import iconfive from '../../../public/images/small_icon_five.webp'
import iconsix from '../../../public/images/small_icon_six.webp'
import { Head, Link } from '@inertiajs/react'
import axios from 'axios'
import parse from 'html-react-parser'

const careerContents = [
  { id: 1, icon: iconone, title: 'Meaningful Work', description: 'Help children learn through tutoring, workshops, and after-school activities.' },
  { id: 2, icon: icontwo, title: 'Supportive Culture', description: 'We value empathy, teamwork, and open communication in everything we do.' },
  { id: 3, icon: iconthree, title: 'Growth Opportunities', description: 'Training, mentorship, and a learning-focused environment help you grow.' },
  { id: 4, icon: iconfour, title: 'Work-Life Balance', description: 'Flexible schedules and wellness-focused policies ensure a healthy balance.' },
  { id: 5, icon: iconfive, title: 'Inclusive Environment', description: 'We welcome diverse backgrounds, experiences, and perspectives.' },
  { id: 6, icon: iconsix, title: 'Global Exposure', description: 'Work with international teams, field experts, and community leaders.' },
]

const Career = () => {
  const [jobOpenings, setJobOpenings] = useState([])
  const heroTextRef = useRef(null)
  const heroSubRef = useRef(null)
  const whySectionRef = useRef(null)
  const whyTitleRef = useRef(null)
  const whySubRef = useRef(null)
  const cardsRef = useRef([])
  const jobStickyRef = useRef(null)
  const jobCardsRef = useRef([])

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get(route('career.index', { status: 'published' }))
        setJobOpenings(response.data)
      } catch (error) {
        console.log('Error fetching careers', error)
      }
    }
    fetchCareers()
  }, [])

  useEffect(() => {
    let ctx

    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.fromTo(heroTextRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.2 }
        )
        gsap.fromTo(heroSubRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.55 }
        )
        gsap.fromTo(whyTitleRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
            scrollTrigger: { trigger: whySectionRef.current, start: 'top 78%', toggleActions: 'play reverse play reverse' },
          }
        )
        gsap.fromTo(whySubRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.15,
            scrollTrigger: { trigger: whySectionRef.current, start: 'top 78%', toggleActions: 'play reverse play reverse' },
          }
        )

        if (cardsRef.current[0]) {
          gsap.fromTo(cardsRef.current,
            { opacity: 0, y: 45 },
            {
              opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1,
              scrollTrigger: { trigger: cardsRef.current[0], start: 'top 82%', toggleActions: 'play none none reverse' },
            }
          )
        }

        if (jobStickyRef.current) {
          gsap.fromTo(jobStickyRef.current,
            { opacity: 0, x: -35 },
            {
              opacity: 1, x: 0, duration: 0.9, ease: 'power2.out',
              scrollTrigger: { trigger: jobStickyRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
            }
          )
        }

        if (jobCardsRef.current[0]) {
          gsap.fromTo(jobCardsRef.current,
            { opacity: 0, x: 40 },
            {
              opacity: 1, x: 0, duration: 0.75, ease: 'power2.out', stagger: 0.15,
              scrollTrigger: { trigger: jobCardsRef.current[0], start: 'top 84%', toggleActions: 'play none none reverse' },
            }
          )
        }
      })
    }

    initGSAP()
    return () => ctx && ctx.revert()
  }, [jobOpenings])

  return (
    <MainWrapper>
      <Head>
        <title>Career | Himalaya Organization</title>
      </Head>
      <div className='w-full min-h-screen p-2 sm:p-4 overflow-x-hidden text-white'>
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-4 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${careerimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/80' />
          <div className='z-10'>
            <p
              ref={heroTextRef}
              className='text-white text-2xl sm:text-5xl lg:text-7xl max-w-[16rem] sm:max-w-lg lg:max-w-4xl text-center leading-tight font-medium opacity-0'
            >
              Join the Mission. Create Real Change.
            </p>
            <p
              ref={heroSubRef}
              className='text-white max-w-[15rem] sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold mt-4 sm:mt-6 text-xs sm:text-lg opacity-0'
            >
              Be part of a team dedicated to empowering communities, uplifting country and building a better future for those who need it most.
            </p>
          </div>
        </div>

        <div ref={whySectionRef} className='py-12 sm:py-20 flex flex-col items-center gap-3 px-4'>
          <p ref={whyTitleRef} className='text-2xl sm:text-4xl lg:text-6xl text-center font-medium opacity-0'>
            Why Build Your Career With Us?
          </p>
          <p ref={whySubRef} className='text-center text-sm sm:text-base lg:text-xl max-w-xs sm:max-w-lg lg:max-w-2xl text-gray-600 opacity-0'>
            A purpose-driven workplace where your work creates hope, opportunity, and long term impact
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 lg:px-20'>
          {careerContents.map((item, i) => (
            <div key={item.id} ref={el => { cardsRef.current[i] = el }} className='rounded-2xl p-5 sm:p-4 lg:p-8 bg-[#121318] opacity-0'>
              <img src={item.icon} className='w-8' alt={item.title} />
              <p className='text-xl lg:text-2xl mt-3 mb-6 sm:mb-10 font-medium'>{item.title}</p>
              <p className='pt-4 sm:pt-6 text-sm sm:text-base text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>

        <section className='min-h-screen px-2 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 py-14 sm:py-20 md:py-24 lg:pt-24'>
          <div className='mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 sm:gap-12 md:gap-16 items-start'>
              <div ref={jobStickyRef} className='lg:sticky lg:top-20 opacity-0'>
                <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium text-[#ae8755]'>
                  Current Job<br className='hidden lg:block' /> Openings
                </h2>
                <p className='mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-500'>
                  Explore opportunities to join our mission driven team
                </p>
              </div>

              <div className='flex flex-col gap-4 sm:gap-5 md:gap-6'>
                {jobOpenings.length > 0 ? jobOpenings.map((item, i) => (
                  <div
                    key={item.id}
                    ref={el => { jobCardsRef.current[i] = el }}
                    className='flex flex-col sm:flex-row sm:justify-between sm:items-end bg-[#121318] p-4 rounded-2xl gap-4 opacity-0'
                  >
                    <div className='flex flex-col gap-3 sm:gap-4'>
                      <p className='text-base sm:text-lg font-medium text-amber-700'>{item.work_mode}</p>
                      <p className='text-2xl sm:text-3xl lg:text-4xl'>{item.title}</p>
                      <div className='text-sm sm:text-base lg:max-w-lg lg:text-lg text-gray-600 line-clamp-4'>
                        {parse(item.description || '')}
                      </div>
                      <p className='text-sm sm:text-lg'>{item.employment_type}</p>
                    </div>
                    <div className='flex-shrink-0'>
                      {/* Fixed: use direct path instead of non-existent route('career.detail') */}
                      <Link
                        href={`/careers/${item.slug}`}
                        className='bg-[#4b4640] px-4 py-2 rounded-full text-white text-sm sm:text-base inline-block transition hover:bg-[#61594f]'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                )) : (
                  <div className='bg-[#121318] p-6 rounded-2xl text-gray-400'>
                    No openings are published right now.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainWrapper>
  )
}

export default Career