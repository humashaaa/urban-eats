import { Link } from "react-router-dom";
import img from "../../assets/room-service.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { DialogTitle } from "@headlessui/react";
const Login = ({ setIsOpen, isOpen }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white ">
      <div className=" text-black bg-transparent shadow-none relative h-full w-full font-montserrat">
        <div className="bg-white rounded-md  mx-auto ">
          <DialogTitle className="font-bold text-center mb-4 text-3xl">
            Login
          </DialogTitle>

          <form
            // onSubmit={handleSubmit}
            className="w-full mt-4 flex flex-col gap-5"
          >
            <div className="relative">
              <label
                htmlFor="email"
                className="block  font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="mt-2 block w-full md:w-96 px-3 h-11 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f5816a] focus:border-[#f5816a] "
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block  font-medium text-gray-700"
              >
                Password
              </label>
              <input
                // type={eye ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                className="mt-2 block w-full md:w-96 px-3 h-11 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f5816a] focus:border-[#f5816a] "
              />
              {/* {eye ? (
                  <IoMdEyeOff
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[30px] right-3"
                  />
                ) : (
                  <IoMdEye
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[30px] right-3"
                  />
                )} */}
            </div>

            {/* {errorText && (
                <p className="text-red-800 font-semibold">{errorText}</p>
              )} */}
            <div className="mt-3">
              <input
                type="submit"
                value="Login"
                className="h-11 rounded-md w-96 text-xl hover:bg-transparent hover:border-hover:bg-transparent hover:border-[#f5816a] hover:border-2 hover:text-[#f5816a]  text-white bg-[#f5816a]  cursor-pointer"
              />
            </div>
            <div className="border border-dashed w-96 mt-3 mb-3"></div>
            <div className="">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md  border border-[#f5816a] border-input  h-12  w-96"
                type="submit"
              >
                <span className="mr-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 48 48"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </span>
                <span className="font-semibold text-xl">Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
