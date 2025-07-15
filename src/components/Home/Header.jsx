import React from 'react';

export default function Header() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-[515px] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-auto  py-8 pt-24 lg:pt-32 gap-10 lg:gap-0 md:mt-16 lg:mt0-0">
      {/* Left: Text Box */}
      <div className="flex flex-col w-full lg:w-[531px] h-auto lg:h-[481px] gap-6 lg:gap-[35px] mb-8 lg:mb-0 ">
        <h1 className="font-space-grotesk font-medium text-[2.2rem] md:text-5xl lg:text-[60px] leading-[100%] mb-4 text-black order-1">
          Navigating the digital landscape for success
        </h1>
        {/* Mobile: Image comes after header, before text */}
        <div className="flex justify-center items-center w-full order-2 lg:hidden mb-4">
          <img
            src={'/Illustration.jpg'}
            alt="Digital marketing illustration"
            className="w-full max-w-[320px] md:max-w-[400px] h-auto rounded-lg border border-gray-200"
            style={{ aspectRatio: '600/515' }}
          />
        </div>
        <p className="font-space-grotesk font-normal text-base md:text-lg lg:text-[20px] leading-7 text-black mb-4 order-3">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <a
          href="#consultation"
          className="mt-2 inline-flex items-center justify-center font-space-grotesk text-base md:text-lg lg:text-[20px] font-medium bg-[#23232B] text-white rounded-[14px] hover:bg-[#33334d] transition-colors order-4"
          style={{ width: 264, height: 68, padding: '20px 35px', gap: 10 }}
        >
          Book a consultation
        </a>
      </div>
      {/* Right: Illustration for desktop only */}
      <div className="hidden lg:flex justify-center items-center w-full lg:max-w-[600px] h-auto lg:h-[515px]">
        <img
          src={'/Illustration.jpg'}
          alt="Digital marketing illustration"
          className="w-full max-w-[600px] h-auto rounded-lg border border-gray-200"
          style={{ height: 515 }}
        />
      </div>
    </section>
  );
}
