import { useEffect, useState } from "react";
import img1 from "../assets/chef-service.jpg";
import SectionTitle from "./SectionTitle";
import Menucard from "./Menucard";
const Menu = () => {

  const [menu, setMenu] = useState([])
   useEffect(()=>{
    fetch('menu.json')
    .then(res=>res.json())
    .then(data => {
      // to show only popular item on home page
      const popularItem = data.filter(item=> item.category === 'popular')
      setMenu(popularItem)
      console.log(data);
    })
   }, [])

  return (
    <div className="mt-24">
      {/* chef-service */}
      <div className="relative mb-16">
        <img className="w-[80rem] mx-auto " src={img1} alt="" />
        <p className="bg-white text-black p-5 absolute top-14 opacity-90 w-[40rem] ml-80">
          Our menu features a wide variety of options, from mouth-watering
          appetizers to savory main courses and decadent desserts, all made with
          the finest ingredients. Whether you're looking for a cozy spot for a
          family dinner or a stylish venue for a special celebration, we strive
          to provide a warm and inviting atmosphere that makes every meal
          memorable.
        </p>
      </div>

    {/* section title */}
    <SectionTitle title={'check it out'}
    subTitle={'From our Menu'}
    ></SectionTitle>

    {/* displaying the most popular menus */}
    <div className="grid grid-cols-2 gap-10 p-10">
      {
        menu.map(item=> <Menucard key={item._id} item={item}></Menucard>)
      }
    </div>

    </div>
  );
};

export default Menu;
