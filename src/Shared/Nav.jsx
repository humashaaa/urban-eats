import Login from "../Pages/Login/Login";
import Register from '../Pages/Register/Register'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [is2ndOpen, setIs2ndOpen] = useState(false);
  const navBar = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Our Menu</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
    </>
  );
  const handleModal =()=>{
    setIsOpen(false)
    setIs2ndOpen(true)

  }
  const handleLogin =()=>{
    setIsOpen(true)
    setIs2ndOpen(false)

  }

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
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#E2725B] border  border-[#ec6d53] rounded-md shadow-sm hover:[#ec6d53]focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ec6d53]"
          >
            Login
          </button>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0  w-screen  overflow-y-auto p-4">
              <div className="flex min-h-full items-center justify-center">
                <DialogPanel className="max-w-3xl space-y-4 border bg-white p-12">
                  {/* Close Icon */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-20 right-[546px] bg-gray-100  text-gray-500 hover:text-white hover:bg-black hover:bg-opacity-50 p-1 rounded-full transition duration-300 "
                  >
                    <IoMdClose className="text-2xl " />
                  </button>
                 
                  <Login isOpen={isOpen} setIsOpen={setIsOpen}></Login>
                  <span className="block text-center">
              Don't have an account?{" "}
              <button
                onClick={handleModal}
                className="text-blue-500 cursor-pointer"
              >
                Register
              </button>
              
            </span>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
          {/* register */}
          <Dialog
            open={is2ndOpen}
            onClose={() => setIs2ndOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0  w-screen  overflow-y-auto p-4">
              <div className="flex min-h-full items-center justify-center">
                <DialogPanel className="max-w-3xl space-y-4 border bg-white p-12">
                  {/* Close Icon */}
                  <button
                    onClick={() => setIs2ndOpen(false)}
                    className="absolute top-9 right-[546px] bg-gray-100  text-gray-500 hover:text-white hover:bg-black hover:bg-opacity-50 p-1 rounded-full transition duration-300 "
                  >
                    <IoMdClose className="text-2xl " />
                  </button>
                 

                  <Register isOpen={is2ndOpen} setIsOpen={setIs2ndOpen}></Register>
                  <span className="block text-center">
              Already have an account?{" "}
              <button
                onClick={handleLogin}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </button>

            </span>
                </DialogPanel>
              </div>
            </div>
          </Dialog>

          <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#E2725B] border border-[#E2725B] rounded-md shadow-sm hover:[#ec6d53]focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ec6d53]">
            Book A Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
