import { useEffect, useState } from "react";
import img1 from "../../assets/pasta-ragu.jpg";
import img2 from "../../assets/grilled-fish.jpg";
import img3 from "../../assets/ham.jpg";
import img4 from "../../assets/lobstar.jpg";
import "./menu.css";
import MenuTabs from "./MenuTabs";
const Menu = () => {
  

  return (
    <div>
      {/* banner */}
      <div className="menu-banner mx-auto">
        <h1 className="font-bold text-6xl uppercase text-white absolute top-1/2 left-[33rem]">
          our menu
        </h1>
      </div>

      <div className="flex gap-4 mt-16 mb-24 items-center justify-center">
        <div className="branch">
          <h1 className="text-3xl bg-[rgba(0,0,0,0.4)] p-7 rounded-md text-white uppercase  top-1/2 left-1/2 font-semibold">
            Brunch
          </h1>
        </div>
        <div className="lunch">
          <h1 className="text-3xl bg-[rgba(0,0,0,0.4)] p-7 rounded-md text-white uppercase  top-1/2 left-1/2 font-semibold">
            Lunch
          </h1>
        </div>
        <div className="dinner">
          <h1 className="text-3xl bg-[rgba(0,0,0,0.4)] p-7 rounded-md text-white uppercase  top-1/2 left-1/2 font-semibold">
            dinner
          </h1>
        </div>
      </div>

      {/* chef's special */}
      <section>
        <h1 className="font-bold text-5xl text-gray-700 text-center mt-11 uppercase">
          Chef's Specials
        </h1>
        <div className="flex items-center justify-center gap-8 mt-20">
          {/* 1st */}
          <div>
            <div className="flex justify-center items-center gap-5 mb-10">
              <img className="w-44 h-52 rounded-sm" src={img1} alt="" />
              <div>
                <h1 className="mb-2 text-xl font-semibold">
                  PASTA WITH RAGU'-------------------------
                  <span className="text-red-500">$25</span>
                </h1>
                <p className="text-gray-500">Meat / Pasta / Cheese / Onion</p>
                <p className="w-96 mt-3 mb-4 text-gray-600">
                  Pasta with Ragù is a classic Italian dish topped with a rich,
                  slow-cooked meat and tomato sauce. Perfectly hearty and
                  flavorful!
                </p>
                <button className="btn btn-primary">buy now</button>
              </div>
            </div>
            {/* 2nd dish */}
            <div className="flex justify-center items-center gap-5">
              <img className="w-44 h-52 rounded-sm" src={img2} alt="" />
              <div>
                <h1 className="mb-2 text-xl font-semibold">
                  GRILLED FISH--------------------------------
                  <span className="text-red-500">$20</span>
                </h1>
                <p className="text-gray-500">
                  Sea bream / Oregano / Extra Virgin Olive Oil
                </p>
                <p className="w-96 mt-3 mb-4 text-gray-600">
                  Grilled Fish is a light and flavorful dish, perfectly seasoned
                  fish fillets, grilled to smoky perfection. Fresh, simple, and
                  delicious!
                </p>
                <button className="btn btn-primary">buy now</button>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div>
            <div className="flex justify-center items-center gap-5 mb-10">
              <img className="w-44 h-52 rounded-sm" src={img3} alt="" />
              <div>
                <h1 className="mb-2 text-xl font-semibold">
                  SMOKED HAM-------------------------------
                  <span className="text-red-500">$18</span>
                </h1>
                <p className="text-gray-500">Ham / Cheese / Butter</p>
                <p className="w-96 mt-3 mb-4 text-gray-600">
                  Smoked Ham is a savory, cured meat that’s slow-smoked to
                  enhance its rich, smoky flavor, perfect for sandwiches or as a
                  main dish.
                </p>
                <button className="btn btn-primary">buy now</button>
              </div>
            </div>
            {/* 4th dish */}
            <div className="flex justify-center items-center gap-5">
              <img className="w-44 h-52 rounded-sm" src={img4} alt="" />
              <div>
                <h1 className="mb-2 text-xl font-semibold">
                  Truffle-Lobster Risotto----------------------
                  <span className="text-red-500">$27</span>
                </h1>
                <p className="text-gray-500">
                  Lobster/ fresh truffles / Arborio rice
                </p>
                <p className="w-96 mt-3 mb-4 text-gray-600">
                  Truffle-Infused Lobster Risotto is an indulgent dish combining
                  the delicate sweetness of lobster with the earthy richness of
                  truffle. 
                </p>
                <button className="btn btn-primary">buy now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MenuTabs></MenuTabs>
    </div>
  );
};

export default Menu;
