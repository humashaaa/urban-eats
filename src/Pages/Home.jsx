import { Helmet } from "react-helmet-async";
import Featured from "../Components/Featured";
import Parallax from "../Components/Parallax";
import SectionTitle from "../Components/SectionTitle";
import Banner2 from "../Components/Banner2";

import Banner from "../Components/Banner/Banner";
import Chefspecial from "../Components/Chefspecial";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>UrbanEats</title>
      </Helmet>
      {/* banner */}
      <Banner></Banner>
      {/* 2nd banner */}
      <Banner2></Banner2>

      <SectionTitle
        subTitle={"International Dishes"}
        title={"Our Iconic Menu"}
      ></SectionTitle>

     
       {/* chef's special */}
       <section>
        <h1 className="font-bold text-5xl text-gray-700 text-center mt-11 uppercase">
          Chef's Specials
        </h1>
<Chefspecial></Chefspecial>











      </section>
      {/* featured */}
      <Featured></Featured>
      {/* parallax */}
      <Parallax></Parallax>
      
    </div>
  );
};

export default Home;
