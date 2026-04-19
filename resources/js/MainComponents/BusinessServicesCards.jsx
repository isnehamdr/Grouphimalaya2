
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     id: "01",
//     title: "Authorized Vehicle Sales",
//     description:
//       "We offer a curated selection of world-class brands, ensuring every vehicle meets our rigorous standards for performance, safety, and durability tailored for Nepal's roads.",
//     accent: "#995a37",
//     textcolor: "#000000",
//   },
//   {
//     id: "02",
//     title: "Reconditioned Exchange",
//     description:
//       "Upgrade your journey with our seamless trade-in process, providing fair valuations and high-quality, certified pre-owned vehicles that look and drive like new.",
//     accent: "#000000",
//     textcolor: "#ffffff",
//   },
//   {
//     id: "03",
//     title: "Fleet Rentals & Leasing",
//     description:
//       "Empower your business with flexible, cost-effective transportation solutions, ranging from executive sedans to rugged commercial fleets, all backed by comprehensive support.",
//     accent: "#866828",
//     textcolor: "#000000",
//   },
//   {
//     id: "04",
//     title: "After-Sales Service",
//     description:
//       "Our state-of-the-art service centers utilize advanced diagnostics and expert technicians to provide precision maintenance, ensuring your vehicle remains in peak condition.",
//     accent: "#4b4640",
//     textcolor: "#ffffff",
//   },
//   {
//     id: "05",
//     title: "Genuine Parts Supply",
//     description:
//       "We guarantee the longevity of your investment by providing an extensive inventory of authentic, manufacturer-approved spare parts designed for a perfect fit and optimal performance.",
//     accent: "#995a37",
//     textcolor: "#000000",
//   },
//   {
//     id: "06",
//     title: "Vehicle Financing",
//     description:
//       "Drive home sooner with our tailored financing packages, offering competitive interest rates and flexible repayment terms designed to suit both individual and corporate budgets.",
//     accent: "#1a1a1a",
//     textcolor: "#ffffff",
//   },
// ];



export default function BusinessServicesCards({services}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const cards = cardsRef.current;

    // Set initial tilt on cards
    cards.forEach((card, i) => {
      gsap.set(card, {
        rotation: i % 2 === 0 ? -8 : 8,
        transformOrigin: "bottom center",
      });
    });

    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      const sectionWidth = section.getBoundingClientRect().width;
      return -(trackWidth - sectionWidth);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        start: "top top",
        anticipatePin: 1,
        refreshPriority: -1,
        end: () => `+=${Math.abs(getScrollAmount())}`,
        invalidateOnRefresh: true,
      },
    });

    // Horizontal scroll animation
    tl.to(track, { x: getScrollAmount, ease: "none", duration: 10 }, 0);

    // Staggered un-tilt for each card
    cards.forEach((card, i) => {
      tl.to(
        card,
        { rotation: 0, ease: "power2.out", duration: 1.2 },
        i * 0.6
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      <style>{`
        .services-section {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          position: relative;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .services-track-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .services-track {
          display: flex;
          gap: 28px;
          padding: 20px 80px;
          align-items: center;
          will-change: transform;
          flex-shrink: 0;
        }

        .service-card {
          flex-shrink: 0;
          width: 320px;
          height: 440px;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: #ffffff;
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px 24px;
          cursor: default;
          overflow: hidden;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .services-track {
            padding: 20px;
            gap: 16px;
          }

          .service-card {
            width: 280px;
            height: 400px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="services-section">
        <p className="text-3xl lg:text-5xl text-center">
          Our Core <br /> Services
        </p>
        <div className="section-gradient-line" />

        {/* Wrapper div with overflow hidden prevents pre-pin horizontal bleed */}
        <div className="services-track-wrapper">
          <div ref={trackRef} className="services-track">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="service-card rounded-xl"
                style={{ backgroundColor: s.accent, color: s.textcolor }}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <div className="flex flex-col justify-between h-full">
                  <h3 className="text-3xl">{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}