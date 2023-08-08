import React from "react";

function Services() {
  return (
    <div id="services" className="max-w-[1140px] mx-auto md:flex mt-[-75px]">
      <div className="relative p-4">
        <h2 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Teeth Cleaning
        </h2>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="./dentist-7397734_1280.jpg"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h2 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Orthodontics
        </h2>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="./orthodontics-5764087_1280.jpg"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h2 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Crowning
        </h2>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="./woman-8076933_1280.jpg"
          alt="/"
        />
      </div>
    </div>
  );
}

export default Services;
