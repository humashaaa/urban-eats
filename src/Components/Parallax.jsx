import { Link } from "react-router-dom";
import img1 from "../assets/parallax.webp";
import "./Parallax.css";
const Parallax = ({ scrollToSection }) => {
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
          <button
            onClick={scrollToSection}
            className="px-8 py-3 text-sm rounded-md bg-[#E2725B] text-white font-bold transition duration-200 hover:bg-white hover:text-[#E2725B] border-2 border-transparent hover:border-[#E2725B]"
          >
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
