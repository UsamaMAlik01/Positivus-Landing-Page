import React from 'react';
import Marquee from "react-fast-marquee";

const logos = [
  '/amazon.png',
  '/dribbble.png',
  '/hubspot.png',
  '/netflix.png',
  '/zoom.png',
];

export default function BrandSheet() {
  return (
    <div className="w-full flex flex-col gap-2">
      {/* Desktop & md: Single marquee right to left */}
      <div className="hidden md:block w-[98%] h-[56px]  mt-16">
        <Marquee speed={40} pauseOnHover={true} gradient={false} className="flex items-center h-[56px]">
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="brand logo"
              className="mx-10"
              style={{ width: 150, height: 56, mixBlendMode: 'luminosity', filter: 'grayscale(1)' }}
            />
          ))}
        </Marquee>
      </div>
      {/* Mobile: Two marquees, one left-to-right, one right-to-left */}
      <div className="flex flex-col md:hidden gap-2">
        <div className="w-full h-[48px] px-4">
          <Marquee speed={30} pauseOnHover={true} gradient={false} className="flex items-center h-[48px]">
            {logos.concat(logos).map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="brand logo"
                className="mx-6"
                style={{ width: 125, height: 48, mixBlendMode: 'luminosity', filter: 'grayscale(1)' }}
              />
            ))}
          </Marquee>
        </div>
        <div className="w-full h-[48px] px-4">
          <Marquee speed={30} pauseOnHover={true} gradient={false} direction="right" className="flex items-center h-[48px]">
            {logos.concat(logos).map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="brand logo"
                className="mx-6"
                style={{ width: 125, height: 48, mixBlendMode: 'luminosity', filter: 'grayscale(1)' }}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

