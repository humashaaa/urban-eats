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
