import {  NavLink } from "react-router-dom";

const Nav = () => {
  const navBar = <>
  <NavLink to='/'>Home</NavLink>
  <NavLink to='/menu'>Our Menu</NavLink>
  <NavLink to='/about'>About Us</NavLink>
  <NavLink to='/contact-us'>Contact Us</NavLink>
  
  </>
    return (
        <div>
           <div className="navbar fixed z-30 bg-opacity-30 bg-black text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className=" menu-sm font-bold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {navBar}        
      </ul>
    </div>
    
    <a className="btn btn-ghost text-xl">UrbanEats</a>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-10 font-bold menu menu-horizontal px-1">
      {navBar}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#E2725B] border border-[#E2725B] rounded-md shadow-sm hover:[#ec6d53]focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ec6d53]" >
Login
</button>
  </div>
</div> 
        </div>
    );
};

export default Nav;