import React, { useState } from "react";
import { DialogTitle } from "@headlessui/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import img from "../../assets/resturant-login.png";
import { MdKeyboardBackspace } from "react-icons/md";
import { TbFidgetSpinner } from "react-icons/tb";
const Register = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUser, googleSignIn, loading } = useAuth();
  const [user, setUser] = useState(null);
  // console.log(role);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, photo } = data;
    console.log(data);
    createUser(email, password).then(async (result) => {
      if (result.user) {
        setUser({ ...user, photoURL: photo, displayName: name });

        updateUser(name, photo).then(async () => {
          // user set on the database

          console.log(data);

          const userData = {
            email,
            password,
            name,
            photo,
            role: "user",
          };

          console.log(userData);

          await axiosPublic.post(`/users`, userData).then((res) => {
            if (res.data.insertedId) {
              console.log("user added");
              toast.success("Signed up successful");
              navigate("/");
            }
          });
        });
      }

      //   console.log(result);
    });
  };

  const validation = (value) => {
    if (!value) return "this field is required";
    if (value.length < 6) return "Password must be at least 6 characters long";
    if (!/[A-Z]/.test(value))
      return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(value))
      return "Password must contain at least one lowercase letter";
    return true;
  };

  const handleSocialLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: "user",
      };
      console.log(userInfo);
      axiosPublic.post(`/users`, userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
        toast.success("Sign up Successfully");
      });
    });
  };

  return (
    <div className=" min-h-screen pt-10 ">
      <div className="flex gap-10 mx-auto  shadow-xl w-[60rem] h-[39rem] pt-10  justify-center items-start bg-white ">
        <div>
          <img className="w-96 h-[27rem] pt-16" src={img} alt="" />
        </div>
        <div className=" text-black  flex flex-col w-[26rem]  relative h-[28rem] bg-transparent ">
          <div className="bg-white rounded-md  mx-auto ">
            <div className="font-bold text-center mb-4 text-3xl">Register</div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mt-6 flex flex-col gap-5"
            >
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block  font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Enter your name"
                  required
                  className="mt-2 block w-full md:w-96 px-3 h-11 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f5816a] focus:border-[#f5816a] "
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block  font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email")}
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
                  type={eye ? "text" : "password"}
                  {...register("password", { validate: validation })}
                  placeholder="Enter your password"
                  required
                  className="mt-2 block w-full md:w-96 px-3 h-11 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f5816a] focus:border-[#f5816a] "
                />
                {eye ? (
                  <IoMdEyeOff
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-xl absolute z-10 top-[45px] right-3"
                  />
                ) : (
                  <IoMdEye
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-xl absolute z-10 top-[45px] right-3"
                  />
                )}
              </div>

              <div className="mt-3">
                <button
                  disabled={loading}
                  type="submit"
                  className="h-11 rounded-md w-96 text-xl hover:text-[#f5816a] hover:bg-transparent hover:border-2 hover:border-[#f5816a]   text-white bg-[#f5816a]  cursor-pointer"
                >
                  {loading ? (
                    <div className="flex gap-1 items-center justify-center">
                      <TbFidgetSpinner className="animate-spin" />
                      Register
                    </div>
                  ) : (
                    " Register"
                  )}
                </button>
              </div>
            </form>

            <div className="border border-dashed w-96 mt-6 mb-6"></div>
            <div className="">
              <button
                onClick={handleSocialLogin}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md  border border-[#f5816a] border-input  h-12  w-96"
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
            <span className="block text-sm mt-4 text-center">
              Already have an account?{" "}
              <button className="text-blue-500 cursor-pointer">
                <Link to="/login" className="hover:underline">
                  {" "}
                  Login
                </Link>
              </button>
            </span>
            <div className="flex items-center justify-center text-red-600  mt-2">
              <Link
                className="flex hover:text-orange-500 items-center gap-1"
                to="/"
              >
                {" "}
                <MdKeyboardBackspace className="text-xl font-bold" /> Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
