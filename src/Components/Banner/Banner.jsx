import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/Lacuisine_resto.jpg";
import img2 from "../../assets/large.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const Banner = ({scrollToSection}) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full flex flex-col home-banner h-[694px] text-white text-center">
            <div>
              <h1 className=" font-bold text-7xl text-white mb-5">
                Welcome to Urban Eats
              </h1>
              <p className="text-white w-[58rem] text-[18px] font-medium">
                We take pride in serving dishes that combine traditional flavors
                with modern culinary twists. From farm-fresh ingredients to
                expertly crafted meals, each bite is a celebration of taste.
                Whether you're stopping by for a quick meal or a special
                occasion, Urban Eats promises an unforgettable dining
                experience.
              </p>
            </div>
            {/* button */}
            <div className="mt-4">
            <Link
            to="/menu"
            className="relative inline-block mt-2 px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#A8563F] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#E2725B] border-2 border-[#E2725B] group-hover:bg-[#E2725B]"></span>
            <span className="relative text-white group-hover:text-white">
              VIEW FULL MENU
            </span>
          </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col home-banner2 h-[694px] text-white text-center">
            <div>
              <h1 className=" font-bold text-7xl text-white mb-5">
                Experience the Essence of Fine Dining
              </h1>
              <p className="text-white text-center mx-24 text-[18px] font-medium">
                Indulge in a culinary journey like no other. At Urban Eats, our
                diverse menu is designed to delight every palate, offering the
                perfect mix of comfort food and gourmet creations. Join us for
                an unforgettable dining experience where flavor, freshness, and
                hospitality come together in every dish.
              </p>
            </div>
            {/* button */}
            <div className="mt-4">
            <button onClick={scrollToSection}
            className="relative inline-block mt-2 px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#A8563F] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#E2725B] border-2 border-[#E2725B] group-hover:bg-[#E2725B]"></span>
            <span className="relative text-white group-hover:text-white">
              BOOK A TABLE
            </span>
          </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
