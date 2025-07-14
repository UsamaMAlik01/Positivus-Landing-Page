import React from "react";
import servicesData from "../../data/servicesData";
import { CircleArrowOutUpRight } from "lucide-react";

const ServicesBlock = ({ id }) => {
  const data = servicesData.find(item => item.id === id);
  if (!data) return null;

  return (
    <div
      className="relative w-[96vw] max-w-[1240px] h-[320px] mx-auto bg-white md:px-10 md:py-8 md:p-0 flex flex-col md:flex-row md:w-[740px] lg:w-[600px] md:h-[310px] md:max-w-none md:mx-0"
      style={{
        background: data.boxBg,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: "#191A23",
        boxShadow: "0px 5px 0px 0px #191A23",
        boxSizing: "border-box",
        opacity: 1,
      }}
    >
      <div className="flex flex-col h-full w-full md:flex-row md:justify-around md:h-full">
        {/* Left/top: Heading and Learn More */}
        <div className="pt-6 pl-6 z-10 md:pt-4 md:pl-4 md:justify-between md:w-1/2 md:h-full flex flex-col h-full justify-around">
          <div className="flex flex-col">
            <span
              className="font-bold text-2xl md:text-[36px] lg:text-3xl rounded w-fit mb-2 md:mb-3"
              style={{ background: data.headingBg }}
            >
              {data.heading1}
            </span>
            <span
              className="font-bold text-2xl md:text-[36px] lg:text-3xl w-fit rounded"
              style={{ background: data.headingBg }}
            >
              {data.heading2}
            </span>
          </div>
          <div className="flex items-center space-x-2 pl-1 pt-3 pb-4 md:pl-2 md:pb-0 md:pt-4 md:mb-0 mb-2">
            <span
              className="inline-flex items-center justify-center rounded-full p-1 md:p-2"
              style={{ background: data.iconBg }}
            >
              <CircleArrowOutUpRight color={data.iconColor} size={14} className="md:size-6 lg:size-7" />
            </span>
            <span className="text-xs md:text-base font-medium" style={{ color: data.iconColor }}>
              Learn more
            </span>
          </div>
        </div>
        {/* Right/bottom: Image (desktop) */}
        <div className="hidden md:flex items-center justify-center w-1/2 h-full">
          <img
            src={data.image}
            alt={data.heading1 + ' ' + data.heading2}
            className="max-h-[120px] md:max-h-[240px] lg:max-h-[180px] max-w-[180px] object-contain"
          />
        </div>
        {/* Mobile image: absolute bottom right */}
        <img
          src={data.image}
          alt={data.heading1 + ' ' + data.heading2}
          className="block md:hidden absolute bottom-4 right-4 max-h-[180px] max-w-[180px] object-contain"
        />
      </div>
    </div>
  );
};

export default ServicesBlock;
