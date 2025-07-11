import React, { useState, useEffect } from "react";
import teamData from "../data/teamData";
import TeamBlock from "./TeamBlock";

const TeamGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const [breakpoint, setBreakpoint] = useState('lg');

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) setBreakpoint('sm');
      else if (width < 1024) setBreakpoint('md');
      else setBreakpoint('lg');
    };
    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  const defaultCount = breakpoint === 'sm' ? 4 : 6;
  const visibleTeam = showAll ? teamData.slice(0, 7) : teamData.slice(0, defaultCount);

  let gridClass = 'grid-cols-1 gap-4';
  if (breakpoint === 'md') gridClass = 'md:grid-cols-2 md:grid-rows-3 gap-6';
  if (breakpoint === 'lg') gridClass = 'lg:grid-cols-3 lg:grid-rows-2 gap-6';

  const buttonAlign = breakpoint !== 'sm' ? 'md:justify-end justify-center' : 'justify-center';

  return (
    <div className="w-full flex flex-col items-center mt-5 md:mt-10">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className={`grid ${gridClass} md:mb-16 w-full place-items-center`}>
          {visibleTeam.map((member) => (
            <TeamBlock key={member.id} {...member} />
          ))}
        </div>
      </div>
      <div className={`w-full flex ${buttonAlign} lg:mt-1 md:mt-0 lg:pr-[200px] md:pb-8 md:pr-8 mt-8`}>
        <button
          className="w-[269px] h-[68px] bg-[#191A23] text-white rounded-[14px] px-[50px] py-[28px] font-space-grotesk text-lg font-semibold shadow-md hover:bg-[#B9FF66] hover:text-black transition-colors text-center flex items-center justify-center"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? 'Show Less' : 'See all Team'}
        </button>
      </div>
    </div>
  );
};

export default TeamGrid;
