import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import useAuth from "../Hooks/useAuth";
import NavModal from "./NavModal";
import useCart from "../Hooks/useCart";
import { IoPersonCircleOutline, IoPersonOutline } from "react-icons/io5";
const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [is2ndOpen, setIs2ndOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const navBar = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Our Menu</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
      <Link to="/dashboard/cart" className="btn">
        cart
        <div className="badge">+{cart.length}</div>
      </Link>
    </>
  );
  const handleModal = () => {
    setIsOpen(false);
    setIs2ndOpen(true);
  };
  const handleLogin = () => {
    setIsOpen(true);
    setIs2ndOpen(false);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu-sm font-bold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
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
        <div className="navbar-end space-x-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-11 rounded-full">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <IoPersonOutline className="w-full  h-full border-4 text-white  rounded-full " />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm text-black dropdown-content mt-3 z-[50] p-2 shadow bg-blue-50 rounded-box md:w-52 w-20"
              >
                <li>
                  <button className="btn btn-sm font-extrabold mb-1  btn-ghost">
                    {user.displayName || "user"}
                  </button>
                </li>
                <li>
                  <NavLink className="font-semibold " to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink className="font-semibold mb-3" to="/myProfile">
                    Profile
                  </NavLink>
                </li>

                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm hover:bg-orange-500  bg-orange-500 text-white"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#E2725B] border  border-[#ec6d53] rounded-md shadow-sm hover:[#ec6d53]focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ec6d53]">
                  Login
                </button>
              </Link>

              <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#E2725B] border border-[#E2725B] rounded-md shadow-sm hover:[#ec6d53]focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ec6d53]">
                Book A Table
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
