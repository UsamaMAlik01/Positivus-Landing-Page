import React, { useState, useRef, useEffect } from "react";
import caseStudiesData from "../data/caseStudiesData";
import { ArrowUpRight } from "lucide-react";

const CaseStudiesBlock = () => {
  // For mobile carousel
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  // Update active dot on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstChild?.firstChild?.offsetWidth || 1;
      const idx = Math.round(scrollLeft / (cardWidth + 16)); // 16px gap
      setActive(idx);
    };
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to card when dot is clicked
  const scrollToCard = (idx) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstChild?.firstChild?.offsetWidth || 1;
    scrollRef.current.scrollTo({
      left: idx * (cardWidth + 16),
      behavior: "smooth",
    });
    setActive(idx);
  };

  return (
    <div className="w-full flex justify-center items-center mb-10">
      {/* Desktop/LG: 3 columns in one box */}
      <div className="hidden lg:flex bg-[#191A23] rounded-[45px] w-[96vw] max-w-[1240px] lg:h-[250px] h-[320px] px-4 md:px-10 md:py-8 items-stretch mt-10">
        {caseStudiesData.map((item, idx) => (
          <div key={item.id} className={`flex flex-col justify-between flex-1 px-6 py-10 ${idx !== 2 ? 'border-r border-white' : ''}`}>
            <p className="text-white font-space-grotesk text-base font-normal mb-8">
              {item.description}
            </p>
            <a href={item.link} className="flex items-center gap-2 text-[#B9FF66] font-space-grotesk font-medium text-lg hover:underline">
              Learn more <ArrowUpRight size={22} color="#B9FF66" />
            </a>
          </div>
        ))}
      </div>
      {/* Tablet: visually balanced, stacked or grid */}
      <div className="hidden md:flex lg:hidden bg-[#191A23] rounded-[45px] w-[96vw] max-w-[1240px] flex-col gap-0 px-4 md:px-10 md:py-8 mt-5">
        <div className="flex flex-col md:flex-row md:divide-x md:divide-white">
          {caseStudiesData.map((item) => (
            <div key={item.id} className="flex-1 px-6 py-8 flex flex-col justify-between">
              <p className="text-white font-space-grotesk text-base font-normal mb-8">
                {item.description}
              </p>
              <a href={item.link} className="flex items-center gap-2 text-[#B9FF66] font-space-grotesk font-medium text-lg hover:underline">
                Learn more <ArrowUpRight size={22} color="#B9FF66" />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile: horizontal scroll carousel */}
      <div className="lg:hidden md:hidden w-full">
        <div ref={scrollRef} className="w-[90vw] max-w-[1240px] mx-auto overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory mt-5 " style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex flex-row gap-4" style={{ scrollSnapType: 'x mandatory' }}>
            {caseStudiesData.map((item, idx) => (
              <div
                key={item.id}
                className={`bg-[#191A23] rounded-[45px] min-w-[90vw] max-w-[90vw] h-[240px] flex flex-col justify-between px-6 py-10 mr-2 snap-center ${active === idx ? 'ring-2 ring-[#B9FF66]' : ''}`}
                style={{ scrollSnapAlign: 'center' }}
              >
                <p className="text-white font-space-grotesk text-base font-normal mb-8">
                  {item.description}
                </p>
                <a href={item.link} className="flex items-center gap-2 text-[#B9FF66] font-space-grotesk font-medium text-lg hover:underline">
                  Learn more <ArrowUpRight size={22} color="#B9FF66" />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {caseStudiesData.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full ${active === idx ? 'bg-[#B9FF66]' : 'bg-gray-400'}`}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to case ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesBlock;
