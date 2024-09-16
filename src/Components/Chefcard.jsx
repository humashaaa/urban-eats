import { Link } from "react-router-dom";

const Chefcard = ({img, name, price, description}) => {
    return (
        <div >
           <div className=" w-96">
        <div className="relative h-96 w-96">
          <img
            className="h-96 w-96 rounded-lg "
            src={img}
            alt=""
          />
          <div className="absolute w-full  py-2 text-xl  bottom-0 bg-[rgba(0,0,0,0.55)] text-white  ">
            <h1 className="text-center font-bold uppercase">{name}</h1>
          </div>
          <div className="absolute top-0 right-0 bg-red-500 px-2 py-1 z-10">
            <p className="text-white font-bold">${price}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-3 mb-3">
            {description}
          </p>
          <Link to='/' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#E2725B] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#E2725B] group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5  text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 3M21 16H7m0 0a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
</svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 3M21 16H7m0 0a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
</svg>
</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">ADD TO CART</span>
</Link>
        </div>
      </div> 
        </div>
    );
};

export default Chefcard;