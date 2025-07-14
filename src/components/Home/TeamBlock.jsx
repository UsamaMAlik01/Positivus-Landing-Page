import React from "react";
import { Linkedin } from "lucide-react";

const TeamBlock = ({ name, title, image, description }) => {
  return (
    <div className="w-[90vw] max-w-[340px] md:w-[340px] lg:w-[387px] h-[331px] bg-white rounded-[45px] border border-[#191A23] shadow-[0px_5px_0px_0px_#191A23] px-[35px] py-[40px] flex flex-col gap-2 relative mx-auto">
      {/* LinkedIn icon - top right */}
      <div className="absolute top-7 right-7 w-9 h-9 bg-[#B9FF66] rounded-full flex items-center justify-center z-10">
        <Linkedin size={22} className="text-black" />
      </div>
      {/* Image and Name/Title - left side */}
      <div className="flex items-center gap-3 mb-2">
        <img src={image} alt={name} className="w-[70px] h-[70px] object-cover" />
        <div className="flex flex-col items-start">
          <span className="font-space-grotesk font-bold text-lg text-black leading-tight">{name}</span>
          <span className="font-space-grotesk text-base text-black leading-tight">{title}</span>
        </div>
      </div>
      {/* Divider */}
      <hr className="w-[90%] mx-auto border-t border-black/20 my-2" />
      {/* Description */}
      <div className="text-black font-space-grotesk text-[1rem] leading-snug mt-2">
        {description}
      </div>
    </div>
  );
};

export default TeamBlock;
