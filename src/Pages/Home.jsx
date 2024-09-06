import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import Parallax from "../Components/Parallax";
import SectionTitle from "../Components/SectionTitle";
import Swipper from "../Components/Swipper";
import Banner2 from "../Components/Banner2";

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

      
      ;{/* swipper slider */}
      <div className="mt-10">
        <Swipper></Swipper>
      </div>
      {/* featured */}
      <Featured></Featured>
      {/* parallax */}
      <Parallax></Parallax>
      
    </div>
  );
};

export default Home;
