import { useEffect, useState } from "react";
import Menucard from "../../Components/Menucard";
import branch from "../../assets/branch.webp";
import lunch from "../../assets/lunch.jpg";
import dinner from "../../assets/dinner.jpg";
import "./menu.css";
const Menu = () => {
  //   const [menu, setMenu] = useState([])
  //    useEffect(()=>{
  //     fetch('menu.json')
  //     .then(res=>res.json())
  //     .then(data => {
  //       // to show only popular item on home page
  //       const popularItem = data.filter(item=> item.category === 'popular')
  //       setMenu(popularItem)
  //       console.log(data);
  //     })
  //    }, [])

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
            Branch
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
    </div>
  );
};

export default Menu;
