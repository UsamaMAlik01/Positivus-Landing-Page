import React from "react";
import headingData from "../data/headingData";

const HeadingAndSubheading = ({ id }) => {
  const data = headingData.find(item => item.id === id);
  if (!data) return null;
  return (
    <div className="w-full flex flex-col px-5 gap-4 box-border md:flex-row items-center md:px-[150px] md:gap-6 lg:mt-20 mt-10">
      {/* If data.image exists, use public path */}
      {data.image && (
        <img src={data.image} alt={data.heading || 'Heading'} className="mb-2 w-full max-w-[120px] object-contain rounded" />
      )}
      <div className="bg-[#B9FF66] text-black font-bold text-lg  px-3 py-1.5 md:text-2xl md:px-4 md:py-2">
        {data.heading}
      </div>
      {data.subheading && (
        <div className="text-black text-sm font-normal w-full md:flex-1 md:min-w-0 md:text-base md:max-w-xl md:text-justify text-center">
          {data.subheading}
        </div>
      )}
    </div>
  );
};

export default HeadingAndSubheading;
