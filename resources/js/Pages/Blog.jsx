// import MainWrapper from '@/MainComponents/MainWrapper'
// import React, { useEffect, useRef, useState } from 'react'
// import blogimage from '../../../public/images/blog_image.avif'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { Head, Link } from '@inertiajs/react'
// import axios from 'axios'
// import parse from 'html-react-parser'

// gsap.registerPlugin(ScrollTrigger)

// // Converts stored path "blogs/abc.jpg" → "/storage/blogs/abc.jpg"
// const storageUrl = (path) => `${import.meta.env.VITE_IMAGE_PATH}/${path}`

// const Blog = () => {
//   const [blogs, setBlogs] = useState([])
//   const heroTextRef = useRef(null)
//   const heroSubtextRef = useRef(null)
//   const sectionTitleRef = useRef(null)
//   const cardRefs = useRef([])
//   const cardImageRefs = useRef([])
//   const cardContentRefs = useRef([])

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(route('blog.index', { status: 'published' }))
//         setBlogs(response.data)
//       } catch (error) {
//         console.log('Error fetching blogs', error)
//       }
//     }
//     fetchBlogs()
//   }, [])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         sectionTitleRef.current,
//         { x: -40, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.9,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionTitleRef.current,
//             start: 'top 85%',
//             toggleActions: 'play none none none',
//           },
//         }
//       )

//       cardRefs.current.forEach((card, index) => {
//         if (!card) return

//         gsap.fromTo(
//           cardImageRefs.current[index],
//           { scale: 1.05, opacity: 0 },
//           {
//             scale: 1,
//             opacity: 1,
//             duration: 1.1,
//             ease: 'power2.out',
//             scrollTrigger: {
//               trigger: card,
//               start: 'top 80%',
//               toggleActions: 'play none none none',
//             },
//           }
//         )

//         gsap.fromTo(
//           cardContentRefs.current[index],
//           { y: 30, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.85,
//             delay: 0.2,
//             ease: 'power3.out',
//             scrollTrigger: {
//               trigger: card,
//               start: 'top 80%',
//               toggleActions: 'play none none none',
//             },
//           }
//         )
//       })
//     })

//     return () => ctx.revert()
//   }, [blogs])

//   return (
//     <MainWrapper>
//       <Head>
//         <title>Blog | Himalaya Organization</title>
//       </Head>
//       <div className='w-full min-h-screen p-2 sm:p-4 text-white'>
//         <div
//           className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10'
//           style={{ backgroundImage: `url(${blogimage})` }}
//         >
//           <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/80' />
//           <div className='z-10 flex flex-col items-center pb-2 sm:pb-0'>
//             <p
//               ref={heroTextRef}
//               className='text-white text-2xl sm:text-5xl lg:text-7xl max-w-[280px] sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold'
//             >
//               Insights & Stories
//             </p>
//             <p
//               ref={heroSubtextRef}
//               className='text-white text-sm sm:text-base max-w-[260px] sm:max-w-lg lg:max-w-4xl text-center leading-snug sm:leading-tight font-semibold mt-3 sm:mt-6'
//             >
//               Explore real stories, updates, and impact reports from our work
//             </p>
//           </div>
//         </div>

//         <div className='mt-8 sm:mt-12 lg:mt-20 px-2 sm:px-6 lg:px-20 py-14'>
//           <p
//             ref={sectionTitleRef}
//             className='text-2xl sm:text-4xl lg:text-5xl font-medium'
//           >
//             Latest Articles
//           </p>

//           <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 sm:mt-8'>
//             {blogs.length > 0 ? blogs.map((item, index) => (
//               <div
//                 key={item.id}
//                 ref={(el) => { cardRefs.current[index] = el }}
//                 className='lg:min-h-[70vh]'
//               >
//                 <img
//                   alt={item.title}
//                   ref={(el) => { cardImageRefs.current[index] = el }}
//                   src={item.image ? storageUrl(item.image) : blogimage}
//                   className='w-full h-[220px] sm:h-[400px] lg:h-[70vh] object-cover rounded-2xl'
//                 />
//                 <div
//                   ref={(el) => { cardContentRefs.current[index] = el }}
//                   className='py-3 sm:py-4 flex flex-col gap-3 sm:gap-4'
//                 >
//                   <p className='text-lg sm:text-2xl lg:text-3xl font-medium lg:max-w-lg leading-snug'>
//                     {item.title}
//                   </p>
//                   <div className='text-sm sm:text-base text-gray-300 line-clamp-3'>
//                     {parse(item.content || '')}
//                   </div>
//                   <div>
//                     {/* Use route('blog.show') which maps to GET /blogs/{blog} with slug */}
//                     <Link
//                       href={`/blogs/${item.slug}`}
//                       className='inline-flex rounded-full bg-[#4b4640] px-4 py-2 text-sm text-white transition hover:bg-[#61594f] sm:text-base'
//                     >
//                       Read Article
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             )) : (
//               <p className='text-white/70 text-lg'>No published blogs available right now.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </MainWrapper>
//   )
// }

// export default Blog


import MainWrapper from '@/MainComponents/MainWrapper'
import React, { useEffect, useRef, useState } from 'react'
import blogimage from '../../../public/images/blog_image.avif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Head, Link } from '@inertiajs/react'
import axios from 'axios'
import parse from 'html-react-parser'
import SEO from '@/Components/SEO' // Import the SEO component

gsap.registerPlugin(ScrollTrigger)

// Converts stored path "blogs/abc.jpg" → "/storage/blogs/abc.jpg"
const storageUrl = (path) => `${import.meta.env.VITE_IMAGE_PATH}/${path}`

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const heroTextRef = useRef(null)
  const heroSubtextRef = useRef(null)
  const sectionTitleRef = useRef(null)
  const cardRefs = useRef([])
  const cardImageRefs = useRef([])
  const cardContentRefs = useRef([])

  // SEO data with consistent blog keywords
  const seoData = {
    title: "Blog | Insights & Stories from Himalaya Organization Nepal",
    description: "Explore real stories, updates, industry insights, and impact reports from Himalaya Organization. Discover Nepal's leading auto solutions, agriculture innovations, banking services, and real estate developments since 1991.",
    url: "https://www.himalayaorganization.com/blog",
    image: "/images/blog_image.avif",
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(route('blog.index', { status: 'published' }))
        setBlogs(response.data)
      } catch (error) {
        console.log('Error fetching blogs', error)
      }
    }
    fetchBlogs()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      cardRefs.current.forEach((card, index) => {
        if (!card) return

        gsap.fromTo(
          cardImageRefs.current[index],
          { scale: 1.05, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )

        gsap.fromTo(
          cardContentRefs.current[index],
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [blogs])

  // Generate dynamic meta tags for blog posts if needed
  const getBlogSeo = () => {
    if (blogs.length > 0) {
      return {
        ...seoData,
        description: `Latest articles from Himalaya Organization: ${blogs.slice(0, 3).map(b => b.title).join(' | ')}. Explore insights on Nepal's automotive, agriculture, banking, and real estate sectors.`,
      }
    }
    return seoData
  }

  const currentSeo = getBlogSeo()

  return (
    <MainWrapper>
      <SEO {...currentSeo} />
      
      <div className='w-full min-h-screen p-2 sm:p-4 text-white'>
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10'
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

        <div className='mt-8 sm:mt-12 lg:mt-20 px-2 sm:px-6 lg:px-20 py-14'>
          <p
            ref={sectionTitleRef}
            className='text-2xl sm:text-4xl lg:text-5xl font-medium'
          >
            Latest Articles
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 sm:mt-8'>
            {blogs.length > 0 ? blogs.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => { cardRefs.current[index] = el }}
                className='lg:min-h-[70vh]'
              >
                <img
                  alt={item.title}
                  ref={(el) => { cardImageRefs.current[index] = el }}
                  src={item.image ? storageUrl(item.image) : blogimage}
                  className='w-full h-[220px] sm:h-[400px] lg:h-[70vh] object-cover rounded-2xl'
                />
                <div
                  ref={(el) => { cardContentRefs.current[index] = el }}
                  className='py-3 sm:py-4 flex flex-col gap-3 sm:gap-4'
                >
                  <p className='text-lg sm:text-2xl lg:text-3xl font-medium lg:max-w-lg leading-snug'>
                    {item.title}
                  </p>
                  <div className='text-sm sm:text-base text-gray-300 line-clamp-3'>
                    {parse(item.content || '')}
                  </div>
                  <div>
                    {/* Use route('blog.show') which maps to GET /blogs/{blog} with slug */}
                    <Link
                      href={`/blogs/${item.slug}`}
                      className='inline-flex rounded-full bg-[#4b4640] px-4 py-2 text-sm text-white transition hover:bg-[#61594f] sm:text-base'
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            )) : (
              <p className='text-white/70 text-lg'>No published blogs available right now.</p>
            )}
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Blog