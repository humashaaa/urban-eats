import { Link } from "react-router-dom";
import "./homebanner2.css";

const Homebanner2 = () => {
  return (
    <div className="flex gap-4 mt-16 mb-24 items-center justify-center">
      <Link
        to="/menu#brunch"
        className="branch transition transform duration-500 hover:scale-105 ease-in-out"
      >
        <h1 className="text-3xl bg-[rgba(0,0,0,0.4)] p-7 rounded-md text-white uppercase font-semibold">
          Brunch
        </h1>
      </Link>
      <Link
        to="/menu#lunch"
        className="lunch transition transform duration-500 hover:scale-105 ease-in-out"
      >
        <h1 className="text-3xl bg-[rgba(0,0,0,0.4)] p-7 rounded-md text-white uppercase font-semibold">
          Lunch
        </h1>
      </Link>
      <Link
        to="/menu#dinner"
        className="dinner transition transform duration-500 hover:scale-105 ease-in-out"
      >
        <h1 className="text-3xl bg-[rgba(0,0,0,0.4)] p-7 rounded-md text-white uppercase font-semibold">
          Dinner
        </h1>
      </Link>
    </div>
  );
};

export default Homebanner2;
