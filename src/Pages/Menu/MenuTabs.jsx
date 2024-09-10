// import { useEffect, useState } from "react";
// import Menucard from "../../Components/Menucard";

// const MenuTabs = () => {
//   const [menu, setMenu] = useState([]);
//   useEffect(() => {
//     fetch("menu.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setMenu(data);
//         console.log(data);
//       });
//   }, []);

//   const brunch = menu.filter((item) => item.category === "brunch");
//   const dessertItem = menu.filter((item) => item.category === "dessert");
//   const lunchItem = menu.filter((item) => item.category === "lunch");
//   const dinnerItem = menu.filter((item) => item.category === "dinner");
//   return (
//     <div>
//       <h1 className="font-bold text-5xl mb-28 text-gray-700 text-center mt-28 uppercase">
//         Delight in Every Course
//       </h1>

//       {/* tabs */}
//       <div className="flex justify-center items-center  mx-auto">
//         <div role="tablist" className="tabs tabs-bordered  ">
//           <input
//             type="radio"
//             name="my_tabs_1"
//             role="tab"
//             className="tab font-semibold"
//             aria-label="BRUNCH"
//             defaultChecked
//           />
//           <div role="tabpanel" className="tab-content p-10">
//           <div className="grid grid-cols-3 gap-4">
//               {brunch.map((item) => (
//                 <Menucard key={item._id} item={item}></Menucard>
//               ))}
//             </div>
//           </div>

//           <input
//             type="radio"
//             name="my_tabs_1"
//             role="tab"
//             className="tab font-semibold"
//             aria-label="LUNCH"
//           />
//           <div role="tabpanel" className="tab-content p-10">
//           <div className="grid grid-cols-3 gap-4">
//               {lunchItem.map((item) => (
//                 <Menucard key={item._id} item={item}></Menucard>
//               ))}
//             </div>
//           </div>

//           <input
//             type="radio"
//             name="my_tabs_1"
//             role="tab"
//             className="tab font-semibold"
//             aria-label="DINNER"
//           />
//           <div role="tabpanel" className="tab-content p-10">
//           <div className="grid grid-cols-3 gap-4">
//               {dinnerItem.map((item) => (
//                 <Menucard key={item._id} item={item}></Menucard>
//               ))}
//             </div>
//           </div>
//           <input
//             type="radio"
//             name="my_tabs_1"
//             role="tab"
//             className="tab font-semibold"
//             aria-label="DESSERTS"
//           />
//           <div role="tabpanel" className="tab-content p-10">
         
//           </div>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuTabs;
