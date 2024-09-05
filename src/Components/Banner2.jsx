import SectionTitle from "./SectionTitle";
import img1 from "../assets/Green White Modern Simple Restaurant Special Offer Instagram Post (1).png";
import img2 from "../assets/Orange Black Minimalist Happy Thanksgiving Instagram Post.png";
import img3 from "../assets/Green and Cream Flat & Minimalist menu today Price List Instagram Post.png";
import delivery from "../assets/food-delivery.png";
import safety from "../assets/food-safety.png";
import chef from "../assets/chef.png";
import cooking from "../assets/cooking.png";
const Banner2 = () => {
  return (
    <div className="mb-24">
      <div>
        <SectionTitle subTitle={"What We Do"}></SectionTitle>
      </div>

      {/* 2nd banner */}
      <div className="space-y-4">
        <div className="flex items-center justify-center font-bold text-5xl uppercase gap-4">
          <h1>Great</h1>
          <img className="w-36 h-20 rounded-xl" src={img1} alt="" />
          <h1> Taste Of Food</h1>
        </div>
        <div className="flex items-center justify-center font-bold text-5xl uppercase gap-4">
          <h1>At Every Single Bite</h1>
          <img className="w-36 h-20 rounded-xl" src={img2} alt="" />
          <h1>Time</h1>
          <img className="w-36 h-20 rounded-xl" src={img3} alt="" />
        </div>
        <div className="flex items-center justify-center font-bold text-5xl uppercase gap-4">
          <h1> To Explore Taste.</h1>
        </div>
      </div>

      {/* free delivery */}

      <div className="flex items-center justify-center gap-8 mt-24">
        {/* delivery */}
        <div className="p-2">
          <div className="flex justify-center items-center">
            <img
              className="w-28 h-28 transform scale-x-[-1] transition-transform duration-300 hover:scale-105"
              src={delivery}
              alt=""
            />
          </div>
          <h1 className="font-extrabold text-xl text-center mt-3 mb-2">
            Free Delivery
          </h1>
          <p className="text-slate-500 w-44 font-medium text-center">
            Enjoy free food delivery on all orders from our restaurant!
          </p>
        </div>
        {/* safety */}
        <div className="p-2">
          <div className="flex justify-center">
            <img
              className="w-28 h-28 transform scale-x-[-1] transition-transform duration-300 hover:scale-105"
              src={safety}
              alt=""
            />
          </div>
          <h1 className="font-extrabold text-xl text-center mt-3 mb-2">
            100% Safe
          </h1>
          <p className="text-slate-500 w-44 font-medium text-center">
            Your safety is our priority—hygienic meals every time.
          </p>
        </div>
        {/* chef */}
        <div className="p-2">
          <div className="flex justify-center ">
            <img
              className="w-28 h-28 transform scale-x-[-1] transition-transform duration-300 hover:scale-105"
              src={chef}
              alt=""
            />
          </div>
          <h1 className="font-extrabold text-xl text-center mt-3 mb-2">
            Professional Chef
          </h1>
          <p className="text-slate-500 w-44 font-medium text-center">
            Crafted by expert chefs for a perfect dining experience.
          </p>
        </div>
        {/* cooking */}
        <div className="p-2">
          <div className="flex justify-center ">
            <img
              className="w-28 h-28 transform scale-x-[-1] transition-transform duration-300 hover:scale-105"
              src={cooking}
              alt=""
            />
          </div>
          <h1 className="font-extrabold text-xl text-center mt-3 mb-2">
            Perfect Cooking
          </h1>
          <p className="text-slate-500 w-44 font-medium text-center">
            Perfectly cooked meals, crafted with care and precision.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button className="btn btn-primary bg-red-600 border-none text-white">Book a Table</button>
      </div>
    </div>
  );
};

export default Banner2;
