import React from "react";
import StarEmoji from "../assets/Star-Emoji.png";

const HomeProposalCard = () => {
  return (
    <div className="w-full flex justify-center items-center h-[394px] md:h-[394px] mb-[-30px]">
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-[#F3F3F3] rounded-[45px] w-[96vw] max-w-[1240px] h-[320px] md:h-[260px] px-4 md:px-10 md:py-8 gap-8 md:gap-[120px] lg:gap-[275px]">
        <div className="flex flex-col justify-center h-full w-full md:w-auto py-6 md:py-0">
          <h2 className="font-space-grotesk font-bold text-[30px] md:text-[26px] lg:text-[30px] leading-[100%] mb-6 text-black">
            Let’s make things happen
          </h2>
          <p className="font-space-grotesk font-normal text-[18px] md:text-[16px] lg:text-[18px] leading-[100%] mb-8 text-black max-w-[420px]">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              className="w-[220px] md:w-[220px] lg:w-[288px] h-[56px] md:h-[56px] lg:h-[68px] bg-[#191A23] text-white font-space-grotesk font-medium text-lg md:text-base lg:text-xl rounded-[14px] px-6 md:px-6 lg:px-[35px] py-3 md:py-3 lg:py-5 flex items-center justify-center text-nowrap"
            >
              Get your free proposal
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center h-full">
          <img
            src={StarEmoji}
            alt="Star Emoji"
            className="md:w-[240px] md:h-[240px] lg:h-[300px] lg:w-[500px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeProposalCard;
