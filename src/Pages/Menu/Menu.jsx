import { useEffect, useState } from "react";
import Menucard from "../../Components/Menucard";
import branch from '../../assets/branch.webp'
import './menu.css'
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
    <div >
    {/* banner */}
    <div className="menu-banner mx-auto">
        <h1 className="font-bold text-6xl uppercase text-white absolute top-1/2 left-[33rem]">
         our menu
        </h1>
      </div>

   
    </div>
  );
};

export default Menu;
