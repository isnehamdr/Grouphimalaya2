
import MainWrapper from '@/MainComponents/MainWrapper'
import React, { useEffect, useRef } from 'react'
import blogimage from '../../../public/images/blog_image.avif'
import blogitemimage from '../../../public/images/blog_image.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Head } from '@inertiajs/react'


gsap.registerPlugin(ScrollTrigger)

const Blog = () => {
  const heroTextRef = useRef(null)
  const heroSubtextRef = useRef(null)
  const sectionTitleRef = useRef(null)
  const cardRef = useRef(null)
  const cardImageRef = useRef(null)
  const cardContentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      
      

      // Section title
      gsap.fromTo(
        sectionTitleRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionTitleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Card image — slight scale + fade
      gsap.fromTo(
        cardImageRef.current,
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Card content — slides up after image
      gsap.fromTo(
        cardContentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <MainWrapper>
      <Head>
        <title>Blog | Himalaya Organization</title>
      </Head>
      <div className='w-full min-h-screen p-2 sm:p-4 text-white'>

        {/* Hero Section */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end  p-6 sm:p-8 lg:p-10 '
          style={{ backgroundImage: `url(${blogimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/80' />
          <div className='z-10 flex flex-col items-center pb-2 sm:pb-0'>
            <p
              ref={heroTextRef}
              className='text-white text-2xl sm:text-5xl lg:text-7xl max-w-[280px] sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold'
            >
              Insights & Stories
            </p>
            <p
              ref={heroSubtextRef}
              className='text-white text-sm sm:text-base max-w-[260px] sm:max-w-lg lg:max-w-4xl text-center leading-snug sm:leading-tight font-semibold mt-3 sm:mt-6'
            >
              Explore real stories, updates, and impact reports from our work
            </p>
          </div>
        </div>

        {/* Articles Section */}
        <div className='mt-8 sm:mt-12 lg:mt-20 px-2 sm:px-6 lg:px-20 py-14'>
          <p
            ref={sectionTitleRef}
            className='text-2xl sm:text-4xl lg:text-5xl font-medium'
          >
            Latest Articles
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 sm:mt-8'>
            <div ref={cardRef} className='lg:min-h-[70vh]'>
              <img
              alt='blog_image'
                ref={cardImageRef}
                src={blogitemimage}
                className='w-full h-[220px] sm:h-[400px] lg:h-[70vh] object-cover rounded-2xl'
              />
              <div
                ref={cardContentRef}
                className='py-3 sm:py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4'
              >
                <p className='text-lg sm:text-2xl lg:text-3xl font-medium lg:max-w-lg leading-snug'>
                  Himalaya Organization Expands Electric Vehicle Portfolio in Nepal
                </p>
                <button className='bg-[#4b4640] self-start sm:self-auto px-4 py-1.5 sm:px-3 sm:py-1 rounded-full text-sm sm:text-lg text-white whitespace-nowrap'>
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </MainWrapper>
  )
}

export default Blog