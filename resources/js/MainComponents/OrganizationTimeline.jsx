import { useEffect, useRef, useState, forwardRef } from "react";

const events = [
  {
    year: "Early 1990s",
    title: "The Entrepreneurial Spark",
    desc: "The Himalaya Organization's foundation is laid when founding chairman Mr. Dhruba Thapa initiates a two-wheeler rental business, marking the entrepreneurial beginnings of the group.",
  },
  {
    year: "Mid 1990s",
    title: "Nepal's First Pre-Owned Dealer",
    desc: "Establishment of Gandaki Recondition Centre — Nepal's first registered pre-owned two-wheeler business venture — providing purchase, sale, and exchange services.",
  },
  {
    year: "Late 1990s",
    title: "Automotive Dealerships",
    desc: "Expansion into automotive dealerships, representing global brands such as Suzuki, Daelim, Hulas Motors, and Daihatsu at a regional level.",
  },
  {
    year: "2001",
    title: "Himalaya Organization Founded",
    desc: "Formation of Himalaya Organization as a cohesive group, consolidating various businesses and setting the groundwork for multi-sector business growth.",
  },
  {
    year: "Early 2000s",
    title: "Finance & Real Estate Entry",
    desc: "Launch of Himalaya Invest & Development Company, entering the financial sector with investment, asset management, and project financing services, alongside multiple real estate project expansions.",
  },
  {
    year: "Late 2000s",
    title: "Urban Real Estate Growth",
    desc: "Strategic entry into real estate, developing premium residential and commercial projects to meet the needs of Nepal's growing urban population through Himalaya Invest & Development Company.",
  },
  {
    year: "Early 2010s",
    title: "Heavy Equipment Dealerships",
    desc: "Diversification into heavy equipment with dealerships for CASE Construction Equipment and Hyundai Heavy Equipment.",
  },
  {
    year: "Late 2010s",
    title: "Ford Motors Partnership",
    desc: "Strengthening automotive leadership through the acquisition of the regional dealership for Ford Motors during a period of significant industry growth in Nepal.",
  },
  {
    year: "2014",
    title: "Nationwide Distribution & Agriculture",
    desc: "Expansion towards nationwide distribution and supply chain via Aayam Intercontinental Pvt. Ltd., obtaining the official distributorship of Force Motors (India) for Nepal, and entry into the agriculture sector with Himalaya Agro Farms.",
  },
  {
    year: "2020",
    title: "Three-Wheelers & Hospitality",
    desc: "Entry into the three-wheeler market with the distributorship of Kerala Automobiles Limited (India) for Nepal, and establishment of one of Nepal's largest forest resorts — Mountain Glory Forest Resort.",
  },
  {
    year: "2024",
    title: "EV Sector Milestone",
    desc: "A significant milestone achieved by acquiring the official distributorship of SAIC Maxus, solidifying Himalaya Organization's position within Nepal's evolving automotive and EV landscape.",
  },
];

const Card = forwardRef(({ event, side }, ref) => (
  <div
    ref={ref}
    className="bg-[#121318] border border-gray-700/60 rounded-xl p-4 sm:p-5 lg:p-6 xl:p-7 w-full max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg shadow-md"
    style={{
      opacity: 0,
      transform: `translateX(${side === "left" ? "-20px" : "20px"})`,
    }}
  >
    <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#ae8755] mb-1.5 sm:mb-2">
      {event.year}
    </p>
    <p className="text-base sm:text-lg font-semibold text-gray-400 mb-2 sm:mb-3 leading-snug">
      {event.title}
    </p>
    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
      {event.desc}
    </p>
  </div>
));

function TimelineItem({ event, index, isMobile }) {
  const itemRef = useRef(null);
  const cardRef = useRef(null);
  const dotRef = useRef(null);

  const isLeft = index % 2 === 0;
  const xDir = isMobile ? -16 : isLeft ? -20 : 20;

  useEffect(() => {
    const item = itemRef.current;
    const card = cardRef.current;
    const dot = dotRef.current;
    if (!item || !card || !dot) return;

    const reset = () => {
      item.style.transition = "none";
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      card.style.transition = "none";
      card.style.opacity = "0";
      card.style.transform = `translateX(${xDir}px)`;
      dot.style.transition = "none";
      dot.style.transform = "scale(1)";
      dot.style.boxShadow = "0 0 0 2px #9a6539";
    };

    const animate = () => {
      item.style.transition =
        "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";

      setTimeout(() => {
        card.style.transition =
          "opacity 0.5s 0.08s cubic-bezier(0.22,1,0.36,1), transform 0.5s 0.08s cubic-bezier(0.22,1,0.36,1)";
        card.style.opacity = "1";
        card.style.transform = "translateX(0)";
      }, 50);

      setTimeout(() => {
        dot.style.transition =
          "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease";
        dot.style.transform = "scale(1.5)";
        dot.style.boxShadow = "0 0 0 6px rgba(217,119,6,0.18)";
      }, 180);
    };

    reset();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
        else reset();
      },
      { threshold: 0.12 }
    );

    observer.observe(item);
    return () => observer.disconnect();
  }, [xDir]);

  const Dot = (
    <div className="flex-shrink-0 flex justify-center pt-5 sm:pt-6 z-10 relative w-4">
      <div
        ref={dotRef}
        className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-amber-600 border-2 border-white flex-shrink-0"
        style={{ boxShadow: "0 0 0 2px #f6f3ec" }}
      />
    </div>
  );

  if (isMobile) {
    return (
      <div
        ref={itemRef}
        className="flex items-start mb-6 sm:mb-8"
        style={{ opacity: 0, transform: "translateY(24px)" }}
      >
        {Dot}
        <div className="flex-1 pl-4 sm:pl-5 min-w-0">
          <Card ref={cardRef} event={event} side="right" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={itemRef}
      className="flex items-start mb-8 md:mb-10 lg:mb-14 xl:mb-16"
      style={{ opacity: 0, transform: "translateY(24px)" }}
    >
      {/* Left */}
      <div className="flex-1 pr-5 md:pr-8 lg:pr-12 xl:pr-16 flex justify-end min-w-0">
        {isLeft && <Card ref={cardRef} event={event} side="left" />}
      </div>

      {Dot}

      {/* Right */}
      <div className="flex-1 pl-5 md:pl-8 lg:pl-12 xl:pl-16 flex justify-start min-w-0">
        {!isLeft && <Card ref={cardRef} event={event} side="right" />}
      </div>
    </div>
  );
}

export default function OrganizationTimeline() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="min-h-screen px-3 sm:px-5 pb-12 sm:pb-16 font-sans">
      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-amber-900 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
            Est. Early 1990s
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-semibold text-gray-400">
            Timeline of Growth
          </h2>
          <p className="text-xs sm:text-sm lg:text-lg text-gray-500 mt-2 sm:mt-3">
            From a single rental venture to a national conglomerate
          </p>
        </div>

        {/* Track */}
        <div className="relative">
          {/* Spine */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-gray-700 rounded-full"
            style={{
              left: isMobile ? "7px" : "calc(50% - 1px)",
            }}
          />

          {events.map((event, i) => (
            <TimelineItem
              key={i}
              event={event}
              index={i}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}