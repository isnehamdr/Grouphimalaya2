
import React, { useEffect, useRef } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import aboutimage from '../../../public/images/about_main.avif'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AboutGrid from '@/AboutComponents.jsx/AboutGrid'
import HowItStarted from '@/AboutComponents.jsx/HowItStarted'
import Faq from '@/HomeComponents/Faq'
import { Head } from '@inertiajs/react'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
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

  // Split into tokens, preserving spaces as separate tokens
  const tokens = text.split(/(\s+)/)

  const chars = []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      // Render whitespace as a plain text node so it stays a real word boundary
      el.appendChild(document.createTextNode(token))
    } else {
      // Wrap the word in an inline-block so it never breaks mid-word
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
        <title>About | Himalaya Organization</title>
      </Head>
      <div className='w-full min-h-screen p-3 sm:p-2 text-white'>

        {/* Hero Section */}
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${aboutimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90' />
          <p className='text-white z-10 text-3xl sm:text-5xl lg:text-7xl max-w-xs sm:max-w-lg lg:max-w-3xl text-center leading-tight font-semibold' 
        //    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Driving Success with Expert Auto Solutions
          </p>
        </div>

        {/* Scroll-reveal Text Section */}
        <div className='my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20'>
          <p
            ref={textRef}
            className='w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words'
          >
            At the heart of Nepal's economic transformation lies the Himalaya
            Organization. Since our inception in 1991, we have evolved from a
            specialized recondition center into a multi sector powerhouse,
            leading with a legacy of integrity and a relentless dedication to
            purpose. Based in the vibrant city of Pokhara, we serve as a vital
            link between global innovation and local necessity, driving progress
            across the Western region and beyond.
          </p>
        </div>


        <AboutGrid/>

        <HowItStarted/>

        <Faq/>
        
      </div>
    </MainWrapper>
  )
}

export default About