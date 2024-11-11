import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import img from '../../assets/resturant-login.png'
const Login = ({ setIsOpen, isOpen }) => {
  const [eye, setEye] = useState(false);
  const { user, loading, signIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        toast.success("Login Successfully");
        navigate("/");       
      })
      .catch((error) => {
        toast.error(error?.message);
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      navigate(location.state);
    }
  }, [user]);

  const handleSocialLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      // axiosSecure.post(`/users`, userInfo)
      // .then(res=>{
      //   console.log(res.data);
      //   navigate("/");
      // toast.success("Sign in Successfully");
      // })
    });
  };

  return (
   <div className=" min-h-screen pt-20">
     <div className="flex gap-10 mx-auto  shadow-xl w-[60rem] h-[35rem]  justify-center items-center bg-white ">
<div>
  <img className="w-96 h-96" src={img} alt="" />
</div>
<div className=" text-black bg-transparent  flex flex-col w-[26rem]  relative h-[28rem]  ">
        <div className="bg-white rounded-md  mx-auto ">
          <div className="font-bold text-center mb-7 text-3xl">
            Login
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
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
                {...register("password")}
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
              <input
                type="submit"
                value="Login"
                className="h-11 rounded-md w-96 text-xl hover:bg-transparent hover:border-hover:bg-transparent hover:border-[#f5816a] hover:border-2 hover:text-[#f5816a]  text-white bg-[#f5816a]  cursor-pointer"
              />
            </div>
          </form>

          <div className="border border-dashed w-96 mt-6 mb-6"></div>
          <div className="">
            <button
              onClick={handleSocialLogin}
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
          <span className="block text-sm mt-2  text-center">
                        Don't have an account?{" "}
                        <Link to="/register"><button
                          className="text-blue-500 hover:underline cursor-pointer"
                        >
                          Register
                        </button></Link>
                      </span>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;
