import { useEffect, useState } from "react";
import "./menu.css";
import Menucard from "../../Components/Menucard";
import { useLocation } from "react-router-dom";
import Banner2 from "../../Components/Banner2";
const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        console.log(data);
      });
  }, []);

  const brunchItem = menu.filter((item) => item.category === "brunch");
  const dessertItem = menu.filter((item) => item.category === "dessert");
  const lunchItem = menu.filter((item) => item.category === "lunch");
  const dinnerItem = menu.filter((item) => item.category === "dinner");

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Adding a small delay to ensure the section is rendered
    }
  }, [hash]);
  

  return (
    <div>
      {/* banner */}
      <div className="menu-banner mx-auto">
        <h1 className="font-bold text-7xl uppercase text-white absolute top-1/2 left-[33rem]">
          our menu
        </h1>
      </div>

      {/* 2nd banner */}
     
        <Banner2></Banner2>
     

      {/* brunch */}
      <div id="brunch" className="branch-banner bg-fixed">
        <h1 className="text-6xl bg-[rgba(0,0,0,0.4)] p-8 rounded-md text-white uppercase font-bold">
          Brunch
        </h1>
      </div>
      <div className="px-20 mb-32 mt-16">
        <div className="grid grid-cols-3 gap-4 bg-white mb-28">
          {brunchItem.map((item) => (
            <Menucard key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* lunch */}
      <div id="lunch" className="lunch-banner bg-fixed">
        <h1 className="text-6xl bg-[rgba(0,0,0,0.4)] p-8 rounded-md text-white uppercase font-bold">
          Lunch
        </h1>
      </div>
      <div  className="px-20 mb-32 mt-16">
        <div  className="grid grid-cols-3 gap-4 bg-white mb-28">
          {lunchItem.map((item) => (
            <Menucard key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* dinner */}
      <div id="dinner" className="dinner-banner bg-fixed">
        <h1 className="text-6xl bg-[rgba(0,0,0,0.4)] p-8 rounded-md text-white uppercase font-bold">
          Dinner
        </h1>
      </div>
      <div className="px-20 mb-32 mt-16">
        <div  className="grid grid-cols-3 gap-4 bg-white mb-28">
          {dinnerItem.map((item) => (
            <Menucard key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* dessert */}
      <div className="dessert-banner bg-fixed">
        <h1 className="text-6xl bg-[rgba(0,0,0,0.4)] p-8 rounded-md text-white uppercase font-bold">
          Dessert
        </h1>
      </div>
      <div className="px-20 mb-32 mt-16">
        <div className="grid grid-cols-3 gap-4 bg-white mb-28">
          {dessertItem.map((item) => (
            <Menucard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
