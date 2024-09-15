import { Helmet } from "react-helmet-async";
import Parallax from "../Components/Parallax";

import Banner from "../Components/Banner/Banner";
import Chefspecial from "../Components/Chefspecial";
import Homebanner2 from "../Components/Banner/Homebanner/Homebanner2";
import Booktable from "../Components/Booktable/Booktable";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>UrbanEats</title>
      </Helmet>
      {/* banner */}
      <Banner></Banner>
      {/* 2nd banner */}
      <Homebanner2></Homebanner2>

      {/* chef's special */}
      <section>
        <h1 className="font-bold text-5xl text-gray-700 text-center mt-11 uppercase">
          Chef's Specials
        </h1>
        <Chefspecial></Chefspecial>
      </section>
     
      {/* parallax */}
      <Parallax></Parallax>

      {/* book a table */}
      <Booktable></Booktable>
    </div>
  );
};

export default Home;
