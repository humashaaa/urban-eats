import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { HelmetProvider } from "react-helmet-async";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Login from "./Pages/Login/Login.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Components/Layout/Dashboard.jsx";
import Cart from "./UserDashboard/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/about",
        element: 
        // <PrivateRoute>
          <About></About>
          // {/* </PrivateRoute> */}
          ,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "/register",
        // element: <Register></Register>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path : "dashboard",
    element : <Dashboard></Dashboard>,
    children : [
      {
        path: "cart",
        element: <Cart></Cart>
      }
    ]
  }
]);

const queryClient = new QueryClient();


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
