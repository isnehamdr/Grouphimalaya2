


import React, { useState, useRef, useEffect } from 'react'

const faqs = [
  {
    id: 1,
    question: "What is Himalaya Organization?",
    answer:
      "Himalaya Organization is one of Nepal's most respected conglomerates, founded in 1991 with a bold vision that began as a single bike rental service. Over three decades, we've grown into a multi-sector powerhouse spanning automobiles, real estate, hospitality, banking, agriculture, education, and housing — with 22+ branches and 200+ dedicated employees serving clients across the nation.",
  },
  {
    id: 2,
    question: "Where are we located?",
    answer:
      "Our headquarters are nestled in the heart of Pokhara, Nepal's tourism capital. We maintain a strong nationwide presence with key branches in Kathmandu, Itahari, and several other major cities — ensuring that wherever you are in Nepal, Himalaya Organization is never far away.",
  },
  {
    id: 3,
    question: "Who leads Himalaya Organization?",
    answer:
      "Himalaya Organization is helmed by its Founder and Chairman, Mr. Dhruba Thapa, whose visionary leadership since 1991 has been the compass guiding our growth. His philosophy of resilience, integrity, and relentless pursuit of excellence has transformed a modest bike rental into Nepal's leading multi-sector conglomerate.",
  },
  {
    id: 4,
    question: "What automobile services do we offer?",
    answer:
      "Our automotive division is a full-spectrum experience. We are the authorized dealer for premium brands including Force Motors, Maxus, and Deepal — offering new vehicle sales, rentals, and quality reconditioned options. Beyond the sale, we provide comprehensive after-sales support, genuine spare parts, and flexible financing partnerships to keep you moving.",
  },
  {
    id: 5,
    question: "What are our core values?",
    answer:
      "Four pillars define the Himalaya ethos: Hard Work — every achievement is earned through dedication. Integrity — trust is the foundation of every relationship we build. Adaptability — we evolve with Nepal's changing landscape. Excellence — we set the bar high and clear it, in every sector, at every level, every single day.",
  },
]

const FaqItem = ({ faq, index, isOpen, onToggle }) => {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="bg-[#111318] border border-white/10 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl">
      <button
        onClick={() => onToggle(faq.id)}
        className="w-full flex items-start sm:items-center justify-between gap-3 sm:gap-6 py-3 sm:py-4 text-left group"
      >
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
          <span className="text-lg sm:text-xl md:text-2xl text-white font-medium group-hover:text-[#d6c3a0] transition-colors duration-200 pr-2 sm:pr-0">
            {faq.question}
          </span>
        </div>

        <div
          className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-[#b08d57] border-[#b08d57]'
              : 'bg-transparent border-white/20 group-hover:border-[#b08d57]'
          }`}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
            }}
            className="sm:w-[12px] sm:h-[12px]"
          >
            <line x1="6" y1="1" x2="6" y2="11" stroke={isOpen ? '#0b0c0f' : '#d6c3a0'} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="6" x2="11" y2="6" stroke={isOpen ? '#0b0c0f' : '#d6c3a0'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      <div
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.45s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div ref={contentRef} className="pb-4 sm:pb-5 md:pb-6 pr-2 sm:pr-4">
          <p
            className="text-white/60 leading-relaxed text-sm sm:text-base"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
              transition: 'opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s',
            }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

const Faq = () => {
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="bg-[#0b0c0f] min-h-screen px-2 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 py-16 sm:py-20 md:py-24 lg:pt-24">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 sm:gap-12 md:gap-16 items-start">
          
          {/* LEFT — sticky */}
          <div className="lg:sticky lg:top-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium text-white hidden lg:block">
              Frequently
              <br/>
              Asked
              <br />
              Questions
            </h2>

            <h2 className='text-3xl lg:hidden text-white'>FAQs</h2>
          </div>

          {/* RIGHT — FAQ list */}
          <div>
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  index={index}
                  isOpen={openId === faq.id}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
