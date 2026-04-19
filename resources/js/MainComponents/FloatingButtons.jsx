import { useState, useEffect, useCallback, useRef } from "react";

const WHATSAPP_NUMBER = "9779800000000"; // Replace with your WhatsApp number
const WHATSAPP_MESSAGE = "Hello! I'd like to chat with you.";

export default function FloatingButtons() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [waExpanded, setWaExpanded] = useState(false);
  const waRef = useRef(null);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(Math.min(progress, 100));
    setShowBackToTop(scrollTop > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Collapse WhatsApp on outside click
  useEffect(() => {
    if (!waExpanded) return;
    const handler = (e) => {
      if (waRef.current && !waRef.current.contains(e.target)) {
        setWaExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [waExpanded]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleWaClick = () => {
    if (!waExpanded) {
      setWaExpanded(true);
    } else {
      window.open(
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  "_blank"
);
    }
  };

  // SVG ring progress
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.35); }
          60%       { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 12px rgba(37,211,102,0); }
        }
        .wa-pulse { animation: waPulse 2.6s ease-in-out infinite; }
      `}</style>

      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

        {/* ── Back To Top ── */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{ width: 52, height: 52 }}
          className={`
            relative rounded-full bg-gray-900 shadow-xl
            flex items-center justify-center group border-0 cursor-pointer
            transition-all duration-500
            hover:shadow-2xl hover:-translate-y-1 active:scale-90
            ${showBackToTop
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-4 scale-75 pointer-events-none"}
          `}
        >
          {/* Progress ring */}
          <svg
            width="52" height="52" viewBox="0 0 52 52"
            className="absolute top-0 left-0"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle cx="26" cy="26" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
            <circle
              cx="26" cy="26" r={radius}
              fill="none" stroke="#c78b60" strokeWidth="3" strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 0.18s ease" }}
            />
          </svg>

          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </button>

        {/* ── WhatsApp ── */}
        <div ref={waRef} className="flex items-center justify-end">

          {/* Sliding label */}
          <div
            onClick={handleWaClick}
            className={`
              flex items-center h-[55px] bg-[#25D366] text-white font-semibold text-sm
              rounded-l-full cursor-pointer select-none whitespace-nowrap overflow-hidden
              transition-all duration-500
              hover:bg-[#1db954]
              ${waExpanded ? "max-w-[150px] opacity-100 pl-5 pr-3" : "max-w-0 opacity-0 px-0"}
            `}
            style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
          >
            Chat with us
          </div>

          {/* Circle button */}
          <button
            onClick={handleWaClick}
            aria-label="Chat on WhatsApp"
            // style={{ width: 52, height: 52, minWidth: 52 }}
            className={`
              flex items-center justify-center bg-[#25D366] text-white
              cursor-pointer border-0
              transition-all duration-500
              hover:bg-[#1db954] active:scale-90
              ${waExpanded
                ? "rounded-r-full rounded-l-none scale-105"
                : "rounded-full wa-pulse"}
            `}
            style={{
              width: 52, height: 52, minWidth: 52,
              transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg" width="26" height="26"
              viewBox="0 0 32 32" fill="white"
              className={`transition-transform duration-300 ${waExpanded ? "scale-110" : "scale-100"}`}
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.482.682 4.803 1.865 6.793L2 30l7.418-1.836A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.893-1.607l-.422-.252-4.402 1.09 1.114-4.283-.276-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.344-8.67c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.104 1.364-.204.232-.406.26-.754.086-.348-.174-1.47-.541-2.8-1.727-1.034-.924-1.732-2.066-1.936-2.414-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.784-1.89-1.074-2.59-.282-.68-.568-.588-.784-.598l-.668-.012c-.232 0-.61.086-.928.434-.318.348-1.216 1.188-1.216 2.896s1.244 3.358 1.418 3.59c.174.232 2.448 3.736 5.93 5.238.83.358 1.478.572 1.982.732.832.264 1.59.227 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.204-1.656-.086-.144-.32-.232-.668-.406z" />
            </svg>
          </button>
        </div>

      </div>
    </>
  );
}