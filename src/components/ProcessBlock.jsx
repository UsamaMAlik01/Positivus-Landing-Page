import React from "react";
import { Plus, Minus } from "lucide-react";

const ProcessBlock = ({ number, title, description, expanded, onClick, image }) => {
  return (
    <div
      className={`w-[96vw] max-w-[1234px] mx-auto my-4 rounded-[45px] border border-[#191A23] shadow-[0px_5px_0px_0px_#191A23] transition-all duration-500 ease-in-out overflow-hidden px-5 md:px-[60px] ${expanded ? 'bg-[#B9FF66] py-8 md:py-[41px]' : 'bg-[#F3F3F3] h-[70px] md:h-[100px] flex items-center'}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      style={{ cursor: 'pointer' }}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-space-grotesk font-medium text-[2.5rem] md:text-[60px] text-black select-none leading-[100%]" style={{ minWidth: 60 }}>
            {number.toString().padStart(2, '0')}
          </span>
          <span className="font-space-grotesk font-medium text-[1.3rem] md:text-[30px] text-black leading-[100%]">
            {title}
          </span>
        </div>
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-none outline-none shadow-sm"
          onClick={e => { e.stopPropagation(); onClick(); }}
          aria-label={expanded ? 'Collapse' : 'Expand'}
          tabIndex={-1}
        >
          {expanded ? (
            <Minus size={32} strokeWidth={3.5} className="text-black font-extrabold" />
          ) : (
            <Plus size={32} strokeWidth={3.5} className="text-black font-extrabold" />
          )}
        </button>
      </div>
      {/* If image exists, use public path */}
      {image && (
        <img src={image} alt={title || 'Process'} className="ml-6 w-[60px] h-[60px] object-contain rounded" />
      )}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}> 
        {expanded && (
          <>
            <hr className="my-6 border-t border-black/30" />
            <div className="text-black font-space-grotesk font-normal text-[1rem] md:text-[18px] leading-[100%] max-w-3xl">
              {description}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProcessBlock;
