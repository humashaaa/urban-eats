import { Link } from "react-router-dom";
import img1 from "../assets/parallax.webp";
import "./Parallax.css";
const Parallax = () => {
  return (
    <div className="mt-36 featuredImage p-28  bg-fixed ">
      <div className="flex gap-10 items-center justify-center p-10 rounded-lg  text-white  ">
        <img className="h-[400px] w-[600px] rounded-lg" src={img1} alt="" />
        <div className="w-96 space-y-4">
          <h1 className="uppercase font-bold text-2xl">Where can i get?</h1>
          <p className="text-white  font-medium">
            where every meal is a celebration of taste and hospitality. Our
            chefs use only the freshest ingredients to craft delicious dishes
            that will delight your senses. Whether you're here for a casual
            lunch, a family dinner, or a special occasion, we offer a warm and
            friendly atmosphere to make your dining experience unforgettable.
          </p>
          <a
          href="book-a-table"
            className="relative inline-block mt-2 px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#A8563F] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#E2725B] border-2 border-[#E2725B] group-hover:bg-[#E2725B]"></span>
            <span className="relative text-white group-hover:text-white">
              BOOK A TABLE
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
