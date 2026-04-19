
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import secondhimalimage from '../../../public/images/himal-Photoroom.png';

gsap.registerPlugin(ScrollTrigger);

const Subhero = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const section = sectionRef.current;

    // Set initial state (hidden/transformed before it enters)
    gsap.set(img, {
      opacity: 0,
      scale: 0.85,
      y: 60,
      filter: "invert(1) blur(8px)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",   // animation plays when section top hits 80% of viewport
        end: "bottom 20%",  // reverse plays when section bottom hits 20% of viewport
        toggleActions: "play reverse play reverse",
        // toggleActions: onEnter onLeave onEnterBack onLeaveBack
      },
    });

    tl.to(img, {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "invert(1) blur(0px)",
      duration: 1.1,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full pt-10"
    >
      <div className="flex flex-col justify-center items-center">
        <img
          ref={imgRef}
          src={secondhimalimage}
          className=""
          alt="himal"
        />
      </div>
    </div>
  );
};

export default Subhero;