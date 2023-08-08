import React from "react";

function About() {
  return (
    <div id="about" className="max-w-[1140px] mx-auto p-4">
        <h1 className="text-center text-2xl p-4">About Us</h1>
      <div className="md:grid grid-cols-2  p-4">
        <div className="w-full relative p-4">
          <img className="rounded-md" src="./orthodontics-6536026_1280.jpg"  alt="/"/>
          <img className="w-[300px] sm:w-[150px] mt-[-115px] py-2 relative object-cover border-4  border-white shadow-lg rounded-md" src='./dentist-7397734_1280.jpg' alt="/"/>
        </div>
        <div className="w-full text-center">
          <h2 className="text-xl p-2 font-bold">We Provide Essential Services For Your Health Care</h2>
          <p className="p-2">
            We are committed to providing you and your family with exceptional
            dental care in a warm and welcoming environment. Your smile is our
            priority, and we strive to ensure that you leave our clinic with a
            confident and healthy grin. Our team of highly skilled dental
            professionals is dedicated to helping you achieve optimal oral
            health and maintain it for years to come.
          </p>
          <button className="bg-red-600 text-white font-bold rounded-md p-2 mt-4">View More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
