import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-blue-950 min-h-screen p-6">
      <ul className=" text-white font-bold">
        <li>
          <NavLink to="/dashboard/cart"> My cart</NavLink>
        </li>
      </ul>
      </div>
     
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
