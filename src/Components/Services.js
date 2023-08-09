import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Services() {
  return (
    <div id="services" className="max-w-[1140px] mx-auto  md:mt-[-75px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className='lg:flex'
      >
        <SwiperSlide>
          {" "}
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
        </SwiperSlide>
        <SwiperSlide>
          {" "}
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
        </SwiperSlide>
        <SwiperSlide>
          {" "}
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative p-4">
            <h2 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
              Oral hygiene
            </h2>
            <img
              className="w-full h-full object-cover relative border-4 border-white shadow-lg"
              src="./hygiene.jpeg"
              alt="/"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative p-4">
            <h2 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
              Surgery
            </h2>
            <img
              className="w-full h-full object-cover relative border-4 border-white shadow-lg"
              src="./img_1161.jpg"
              alt="/"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative p-4">
            <h2 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
              Implants
            </h2>
            <img
              className="w-full h-full object-cover relative border-4 border-white shadow-lg"
              src="./Dental-clinics-in-Nairobi-scaled.jpg"
              alt="/"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative p-4">
            <h2 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
              Whitening
            </h2>
            <img
              className="w-full h-full object-cover relative border-4 border-white shadow-lg"
              src="./dental2a.jpg"
              alt="/"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Services;
