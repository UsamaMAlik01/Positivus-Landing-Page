import React, { useState, useEffect, useRef } from "react";
import testimonialData from "../../data/testimonialData.js";
import { ChevronLeft, ChevronRight, Sparkle } from "lucide-react";

const getBreakpoint = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 768) return 'sm';
  }
  return 'md';
};

const getBubbleWidth = (breakpoint) => {
  if (breakpoint === 'sm') return 'w-[90vw] max-w-[320px]';
  return 'w-[420px]';
};

const getBubbleMinHeight = (breakpoint) => {
  if (breakpoint === 'sm') return 'min-h-[320px]';
  return 'min-h-[400px]';
};

const TestimonialBlock = () => {
  const [current, setCurrent] = useState(0);
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());
  const [bubbleWidth, setBubbleWidth] = useState(getBubbleWidth(getBreakpoint()));
  const [bubbleMinHeight, setBubbleMinHeight] = useState(getBubbleMinHeight(getBreakpoint()));
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const bp = getBreakpoint();
      setBreakpoint(bp);
      setBubbleWidth(getBubbleWidth(bp));
      setBubbleMinHeight(getBubbleMinHeight(bp));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (breakpoint !== 'sm' || !scrollRef.current) return;
    const container = scrollRef.current;
    const handleScroll = () => {
      let minDist = Infinity;
      let activeIdx = 0;
      const center = window.innerWidth / 2;
      Array.from(container.children).forEach((child, idx) => {
        const rect = child.getBoundingClientRect();
        const bubbleCenter = rect.left + rect.width / 2;
        const dist = Math.abs(bubbleCenter - center);
        if (dist < minDist) {
          minDist = dist;
          activeIdx = idx;
        }
      });
      setCurrent(activeIdx);
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [breakpoint]);

  const total = testimonialData.length;
  const maxIndex = total - 1;

  const goLeft = () => setCurrent((prev) => Math.max(0, prev - 1));
  const goRight = () => setCurrent((prev) => Math.min(maxIndex, prev + 1));

  const handleSparkleClick = (i) => {
    if (breakpoint === 'sm' && scrollRef.current) {
      const el = scrollRef.current.children[i];
      if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setCurrent(i);
    } else {
      setCurrent(i);
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-8 px-2">
      <div className="bg-[#191A23] rounded-[45px] max-w-[1240px] w-full h-[500px] md:h-[625px] flex flex-col justify-between items-center mx-auto relative overflow-hidden p-0 md:p-8">
        <div className="flex-1 w-full flex items-center justify-center relative">
          {breakpoint !== 'sm' ? (
            <div className="flex w-full justify-center items-center gap-0">
              <button
                className="p-2 rounded-full hover:bg-[#23242a] transition-colors self-center"
                onClick={goLeft}
                disabled={current === 0}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={28} className={`text-white ${current === 0 ? 'opacity-30' : 'opacity-100'}`} />
              </button>
              <div className={`flex flex-col items-center mx-auto ${bubbleWidth} ${bubbleMinHeight}`}>
                <div
                  className={`relative bg-[#191A23] border rounded-[32px] px-6 py-8 md:px-10 md:py-10 flex flex-col items-center w-full h-full border-[#B9FF66] shadow-[0_5px_0_0_#B9FF66] opacity-100 z-10`}
                  style={{ transition: 'opacity 0.3s, box-shadow 0.3s' }}
                >
                  {/* If testimonialData[current].image exists, use public path */}
                  {testimonialData[current].image && (
                    <img src={testimonialData[current].image} alt={testimonialData[current].name || 'Testimonial'} className="mb-4 w-[60px] h-[60px] object-contain rounded-full" />
                  )}
                  <p className="text-white text-base md:text-lg font-space-grotesk text-center mb-8 mt-4">{testimonialData[current].Saying}</p>
                  <div className="w-full flex flex-col items-start mt-auto">
                    <span className="text-[#B9FF66] font-bold text-lg md:text-xl font-space-grotesk">{testimonialData[current].name}</span>
                    <span className="text-white text-base md:text-lg font-space-grotesk">{testimonialData[current].title}</span>
                  </div>
                </div>
              </div>
              <button
                className="p-2 rounded-full hover:bg-[#23242a] transition-colors self-center"
                onClick={goRight}
                disabled={current === maxIndex}
                aria-label="Next testimonial"
              >
                <ChevronRight size={28} className={`text-white ${current === maxIndex ? 'opacity-30' : 'opacity-100'}`} />
              </button>
            </div>
          ) : (
            <div
              className="flex w-full overflow-x-auto gap-4 scrollbar-hide scroll-smooth snap-x snap-mandatory px-2"
              ref={scrollRef}
            >
              {testimonialData.map((item, idx) => (
                <div
                  key={item.id + '-' + idx}
                  className={`relative bg-[#191A23] border rounded-[32px] px-6 py-8 flex flex-col items-center ${bubbleMinHeight} ${bubbleWidth} snap-center flex-shrink-0 mx-2 border-[#B9FF66] shadow-[0_5px_0_0_#B9FF66] opacity-100 z-10`}
                  style={{ transition: 'opacity 0.3s, box-shadow 0.3s' }}
                >
                  {/* If item.image exists, use public path */}
                  {item.image && (
                    <img src={item.image} alt={item.name || 'Testimonial'} className="mb-4 w-[60px] h-[60px] object-contain rounded-full" />
                  )}
                  <p className="text-white text-base font-space-grotesk text-center mb-8 mt-4">{item.Saying}</p>
                  <div className="w-full flex flex-col items-start mt-auto">
                    <span className="text-[#B9FF66] font-bold text-lg font-space-grotesk">{item.name}</span>
                    <span className="text-white text-base font-space-grotesk">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center gap-2 mt-6 mb-2 w-full">
          {testimonialData.map((_, i) => (
            <button
              key={i}
              className="focus:outline-none"
              onClick={() => handleSparkleClick(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <Sparkle size={28} className={i === current ? "text-[#B9FF66]" : "text-[#B9FF66]/40"} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialBlock;
