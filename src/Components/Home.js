import React from "react";

function Home() {
  return (
    <div id="home" className="w-full h-[90vh]">
      <img
        className="w-full h-full object-cover"
        src="./woman-3498849_1280.jpg"
        alt="/"
      />

      <div className="max-w-[1140px] mx-auto">
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4' >
          <h1 className='font-bold text-4xl '>WeekAway Dental Services</h1>
          <h2 className='text-4xl py-4 italic'>Need the smile you deserve? </h2>
          <p className=''>
            We at Weekaway dental clinic offer the
            best dental care. Visit us today and get the best care in town.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
