import React from "react";
import servicesData from "../data/servicesData";
import ServicesBlock from "./ServicesBlock";

const ServicesGrid = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 md:gap-8 lg:grid-cols-2 lg:gap-12 md:mt-10 mt-5">
        {servicesData.map(service => (
          <ServicesBlock key={service.id} id={service.id} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid; 