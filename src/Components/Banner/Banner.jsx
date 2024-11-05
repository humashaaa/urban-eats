import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/Lacuisine_resto.jpg";
import React, { useRef, useState } from "react";
// import BannerAnimation from './BannerAnimation'
import "./banner.css";
import { Link } from "react-router-dom";
const Banner = ({ scrollToSection }) => {
  return (
    <div>
      <section className="relative home-banner ">
        <div className="absolute mx-auto left-[5rem]">
          <div className=" text-left  ">
{/* <BannerAnimation></BannerAnimation> */}


            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Experience the Essence of
              <strong className="block font-extrabold text-[#E2725B]">
                Fine Dining
              </strong>
            </h1>

            <p className="mt-4 max-w-4xl text-white sm:text-xl/relaxed">
              We take pride in serving dishes that combine traditional flavors
              with modern culinary twists. From farm-fresh ingredients to
              expertly crafted meals, each bite is a celebration of taste,Urban
              Eats promises an unforgettable dining experience.
            </p>

            <div className="mt-8 flex gap-4 text-center">
              <Link
                to="/menu"
                className="w-48 py-3 relative rounded group overflow-hidden font-medium bg-[#E2725B] text-white inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-[#E2725B] uppercase text-sm">
                  view full menu
                </span>
              </Link>

              <button
                onClick={scrollToSection}
                className="w-48 py-3 relative rounded group overflow-hidden font-medium bg-white text-[#E2725B] inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#E2725B] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white uppercase text-sm">
                  Book a table
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
