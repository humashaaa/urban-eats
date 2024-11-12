import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import Register from "../Pages/Register/Register";
import { IoMdClose } from "react-icons/io";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Login from "../Pages/Login/Login";
const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
const [is2ndOpen, setIs2ndOpen] = useState(false);
const toastShownRef = useRef(false); // Use useRef to track if toast was shown

  const loginDialogRef = useRef(null);

  const handleModal =()=>{
    setIsOpen(false)
    setIs2ndOpen(true)

  }
  const handleLogin =()=>{
    setIsOpen(true)
    setIs2ndOpen(false)

  }

  useEffect(() => {
    if (!user && !loading  && !toastShownRef.current) {
      toast.error("You have to log in first");
      toastShownRef.current = true;
       // Open login modal
       if (loginDialogRef.current) {
        loginDialogRef.current.focus();
      }

      const logInElement = document.getElementById("logIn");
    if (logInElement) {
      logInElement.addEventListener("click", () => setIsOpen(true));
    }

    // Cleanup to avoid memory leaks
    return () => {
      if (logInElement) {
        logInElement.removeEventListener("click", () => setIsOpen(true));
      }
    };
    }
  }, [user, loading]);

  // useEffect(() => {
  //   if (!user) {
  //     toast.error('You have to log in first');
  //     setIsOpen(true)
  //     // setTimeout(() => {
  //     //   document.getElementById("logIn");
  //     // }, 3000);
  //   }
  // }, [user]); 
  // Handle loading state
  if (loading) return <LoadingSpinner />;

  // If user is logged in, show the protected content
  if (user) return children;

    return (
   

  <div>
    {/* Login Dialog */}
    <Dialog
      id="logIn"
      open={isOpen}
      initialFocus={loginDialogRef}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="max-w-3xl space-y-4 border bg-white p-12">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-20 right-[546px] bg-gray-100 text-gray-500 hover:text-white hover:bg-black hover:bg-opacity-50 p-1 rounded-full transition duration-300"
            >
              <IoMdClose className="text-2xl" />
            </button>

            <Login isOpen={isOpen} setIsOpen={setIsOpen} />

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

    {/* Register Dialog */}
    <Dialog
      open={is2ndOpen}
      onClose={() => setIs2ndOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="max-w-3xl space-y-4 border bg-white p-12">
            <button
              onClick={() => setIs2ndOpen(false)}
              className="absolute top-9 right-[546px] bg-gray-100 text-gray-500 hover:text-white hover:bg-black hover:bg-opacity-50 p-1 rounded-full transition duration-300"
            >
              <IoMdClose className="text-2xl" />
            </button>

            <Register isOpen={is2ndOpen} setIsOpen={setIs2ndOpen} />

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

   
     {!isOpen && !is2ndOpen && (
            <Navigate to="/" state={{ from: location }} replace />
          )}
  </div>

      
    );
};

export default PrivateRoute;