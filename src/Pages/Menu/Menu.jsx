import { useEffect, useState } from "react";

import "./menu.css";
// import MenuTabs from "./MenuTabs";
import Menucard from "../../Components/Menucard";
import Cover from "./Cover";
import dessertImg from "../../assets/dessert.jpg";
import dinnerImg from "../../assets/steak.jpg";
import lunchImg from "../../assets/istockphoto-1428412216-612x612.jpg";
import brunchImg from "../../assets/Screenshot 2024-09-09 212719.png";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        console.log(data);
      });
  }, []);

  const brunch = menu.filter((item) => item.category === "brunch");
  const dessertItem = menu.filter((item) => item.category === "dessert");
  const lunchItem = menu.filter((item) => item.category === "lunch");
  const dinnerItem = menu.filter((item) => item.category === "dinner");

  return (
    <div>
      {/* banner */}
      <div className="menu-banner mx-auto">
        <h1 className="font-bold text-7xl uppercase text-white absolute top-1/2 left-[33rem]">
          our menu
        </h1>
      </div>

      <div className="flex gap-4 mt-16 mb-24 items-center justify-center">
        <a
          href="#brunch"
          className="branch transition transform duration-500 hover:scale-105 ease-in-out"
        >
          <h1 className="text-3xl bg-[rgba(0,0,0,0.4)]  p-7 rounded-md text-white uppercase  top-1/2 left-1/2 font-semibold">
            Brunch
          </h1>
        </a>
        <a
          href="#lunch"
          className="lunch transition transform duration-500 hover:scale-105 ease-in-out"
        >
          <h1 className="text-3xl bg-[rgba(0,0,0,0.4)] p-7 rounded-md text-white uppercase  top-1/2 left-1/2 font-semibold">
            Lunch
          </h1>
        </a>
        <a
          href="#dinner"
          className="dinner transition transform duration-500 hover:scale-105 ease-in-out"
        >
          <h1 className="text-3xl bg-[rgba(0,0,0,0.4)] p-7 rounded-md text-white uppercase  top-1/2 left-1/2 font-semibold">
            dinner
          </h1>
        </a>
      </div>

      <h1 className="font-bold text-5xl mb-28 text-gray-700 text-center mt-28 uppercase">
        Delight in Every Course
      </h1>
      {/* brunch */}

      <div id="brunch" className="branch-banner bg-fixed">
        <h1 className="text-6xl bg-[rgba(0,0,0,0.4)] p-8 rounded-md text-white uppercase  top-1/2 left-1/2 font-bold">
          Brunch
        </h1>
      </div>
      <div className=" px-20 mb-32 mt-16 ">
        <div className="grid grid-cols-3 gap-4 bg-white  mb-28 ">
          {brunch.map((item) => (
            <Menucard key={item._id} item={item}></Menucard>
          ))}
        </div>
      </div>

      {/* lunch */}
      <div id="lunch" className="lunch-banner bg-fixed">
        <h1 className="text-6xl bg-[rgba(0,0,0,0.4)] p-8 rounded-md text-white uppercase  top-1/2 left-1/2 font-bold">
          Lunch
        </h1>
      </div>
      <div className=" px-20 mb-32 mt-16 ">
        <div className="grid grid-cols-3 gap-4 bg-white  mb-28 ">
          {lunchItem.map((item) => (
            <Menucard key={item._id} item={item}></Menucard>
          ))}
        </div>
      </div>
      {/* dinner */}
      <div id="dinner" className="dinner-banner bg-fixed">
        <h1 className="text-6xl bg-[rgba(0,0,0,0.4)] p-8 rounded-md text-white uppercase  top-1/2 left-1/2 font-bold">
          Dinner
        </h1>
      </div>
      <div className=" px-20 mb-32 mt-16 ">
        <div className="grid grid-cols-3 gap-4 bg-white  mb-28 ">
          {dinnerItem.map((item) => (
            <Menucard key={item._id} item={item}></Menucard>
          ))}
        </div>
      </div>
      {/* dessert */}
      <div className="dessert-banner bg-fixed">
        <h1 className="text-6xl bg-[rgba(0,0,0,0.4)] p-8 rounded-md text-white uppercase  top-1/2 left-1/2 font-bold">
          Dessert
        </h1>
      </div>
      <div className=" px-20 mb-32 mt-16 ">
        <div className="grid grid-cols-3 gap-4 bg-white  mb-28 ">
          {dessertItem.map((item) => (
            <Menucard key={item._id} item={item}></Menucard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
