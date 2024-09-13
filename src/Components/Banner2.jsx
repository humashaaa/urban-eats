import SectionTitle from "./SectionTitle";
import img1 from "../assets/Green White Modern Simple Restaurant Special Offer Instagram Post (1).png";
import img2 from "../assets/Orange Black Minimalist Happy Thanksgiving Instagram Post.png";
import img3 from "../assets/Green and Cream Flat & Minimalist menu today Price List Instagram Post.png";

const Banner2 = () => {
  return (
    <div className="mb-24 mt-28">
      

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

    </div>
  );
};

export default Banner2;
