import React, { useState, useEffect } from "react";
import contactQuotes from "../data/contactQoute";
// import ContactSideImg from "../assets/ContactSideImg.png";

const getBreakpoint = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 768) return 'sm';
  }
  return 'md';
};

const ContactUs = () => {
  const [mode, setMode] = useState("hi");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [quote, setQuote] = useState(() => contactQuotes[Math.floor(Math.random() * contactQuotes.length)]);
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleModeChange = (val) => {
    setMode(val);
    if (val === "quote") {
      setQuote(contactQuotes[Math.floor(Math.random() * contactQuotes.length)]);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-5 md:mt-10">
      <div className="bg-[#F5F5F5] rounded-[45px] max-w-[1240px] w-[96%]  lg:w-full md:w-[96%] h-[550px]  md:h-[700px] flex flex-row p-[60px] pt-[60px] pb-[80px] px-[24px] md:px-[100px] gap-10 relative shadow-md">
        {/* Left Side Content (form/radio/quote) */}
        <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
          {/* Radio Buttons */}
          <div className="flex items-center gap-6 mb-8">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="mode"
                checked={mode === "hi"}
                onChange={() => handleModeChange("hi")}
                className="accent-[#B9FF66] w-5 h-5 mr-2"
              />
              <span className="text-lg font-space-grotesk">Say Hi</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="mode"
                checked={mode === "quote"}
                onChange={() => handleModeChange("quote")}
                className="accent-[#B9FF66] w-5 h-5 mr-2"
              />
              <span className="text-lg font-space-grotesk">Get a Quote</span>
            </label>
          </div>
          {/* Form or Quote */}
          {mode === "hi" ? (
            <form className="flex flex-col gap-6">
              <div>
                <label className="block mb-2 text-base font-space-grotesk">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border border-black rounded-[16px] px-5 py-4 text-base font-space-grotesk bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-base font-space-grotesk">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-black rounded-[16px] px-5 py-4 text-base font-space-grotesk bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-base font-space-grotesk">Message*</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  className="w-full border border-black rounded-[16px] px-5 py-4 text-base font-space-grotesk bg-white focus:outline-none resize-none"
                />
              </div>
              {/* Desktop/Tablet: Button inside the form */}
              {breakpoint !== 'sm' && (
                <button
                  type="submit"
                  className="w-full bg-[#191A23] text-white rounded-[16px] py-5 mt-4 text-lg font-space-grotesk font-medium shadow-md hover:bg-[#23242a] transition-colors"
                >
                  Send Message
                </button>
              )}
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-xl md:text-2xl font-space-grotesk text-center text-black bg-white border border-black rounded-[16px] px-8 py-10 shadow-md">
                {quote}
              </div>
            </div>
          )}
        </div>
        {/* Right Side Image (hidden on mobile, 50% out of box) */}
        <div className="hidden md:block flex-1 relative order-1 md:order-2 lg:right-[-22%] right-[-10%] ">
          <img
            src={'/ContactSideImg.png'}
            alt="Contact"
            className="absolute right-[-25%] top-1/2 -translate-y-1/2 lg:max-h-[500px] lg:w-auto object-contain z-10 h-[500px] w-[300px]"
            style={{ maxWidth: 'unset' }}
          />
        </div>
      </div>
      {/* Mobile: Button outside the box */}
      {breakpoint === 'sm' && mode === 'hi' && (
        <button
          type="submit"
          className="w-[90vw] max-w-[400px] bg-[#191A23] text-white rounded-[16px] py-5 mt-8 text-lg font-space-grotesk font-medium shadow-md hover:bg-[#23242a] transition-colors"
        >
          Send Message
        </button>
      )}
    </div>
  );
};

export default ContactUs;
