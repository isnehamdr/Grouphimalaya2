

import React, { useEffect, useRef } from "react";


import gsap from "gsap";




const BusinessFeatures = ({ features,businessimage, maintext, subtext }) => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);


useEffect(() => {
  const ctx = gsap.context(() => {
    
    /* Image Animation */
    gsap.fromTo(
      ".business-image",
      {
        scale: 0.95,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,

          // Trigger exactly when entering viewport
          start: "top 85%",

          // Reset when scrolling back
          toggleActions: "play none none reset",

          // Helps smooth recalculation
          invalidateOnRefresh: true,
        },
      }
    );

    /* Items Animation */
    gsap.fromTo(
      itemsRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top 80%",

          // 🔥 This is the key
          toggleActions: "play none none reset",

          invalidateOnRefresh: true,
        },
      }
    );

  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <div
      ref={sectionRef}
      className="rounded-3xl bg-[#4b4640] 
      px-3 py-10 
      lg:px-12 lg:py-16 
      text-white"
    >
      {/* Header */}
      <div
        className="
        flex flex-col gap-6
        lg:flex-row lg:justify-between lg:items-center
        mb-10 lg:mb-16
      "
      >
        <p
          className="
          text-3xl sm:text-4xl lg:text-5xl
          font-medium
          lg:max-w-lg
          leading-tight
        "
        >
          {/* Pioneering Auto Excellence Since 1991 */}
          {maintext}
        </p>

        <p
          className="
          text-sm sm:text-base
          text-white/80
          lg:max-w-xl
          leading-relaxed
        "
        >
          {/* Pioneering since 1991 with Nepal's first reconditioned vehicle house,
          our automobile division has grown into a trusted name for two-wheelers,
          cars, and commercial vehicles. */}
          {subtext}
        </p>
      </div>

      {/* Content */}
      <div
        className="
        bg-[#514c46]
        border border-white/20
        rounded-3xl
        overflow-hidden

        flex flex-col
        lg:flex-row
      "
      >
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={businessimage}
            alt="Business"
            className="
            business-image
            w-full
            h-[260px]
            sm:h-[320px]
            lg:h-full
            object-cover
            lg:rounded-l-3xl
          "
          />
        </div>

        {/* Features */}
        <div className="flex flex-col lg:w-1/2 lg:px-10">
          {features.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`
              flex gap-5
              py-6 sm:py-8
              items-start
              ${
                index !== features.length - 1
                  ? "border-b border-white/20"
                  : ""
              }
            `}
            >
              {/* Icon */}
              <div
                className="
                flex justify-center items-center
                bg-[#d9a689]
                p-2
                rounded-full
                shrink-0
              "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1 -1.414 0l-5 -5a1 1 0 0 1 1.414 -1.414l4.293 4.293l9.293 -9.293a1 1 0 0 1 1.414 0" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <p
                  className="
                  text-lg sm:text-xl lg:text-2xl
                  font-medium
                "
                >
                  {item.title}
                </p>

                <p
                  className="
                  text-sm sm:text-base
                  text-white/80
                  leading-relaxed
                "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessFeatures;