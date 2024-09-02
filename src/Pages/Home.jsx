import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import Menu from "../Components/Menu";
import Parallax from "../Components/Parallax";
import SectionTitle from "../Components/SectionTitle";
import Swipper from "../Components/Swipper";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
       <Helmet>
                <title>UrbanEats</title>
             </Helmet>


        {/* banner */}
      <Banner></Banner>

      {/* section title */}
      <SectionTitle
        title={"open at 11 am"}
        subTitle={"you can try on different thing"}
      ></SectionTitle>

      {/* swipper slider */}

      <div className="mt-10">
        <Swipper></Swipper>
      </div>

      {/* menu */}
      <Menu></Menu>

      {/* featured */}
      <Featured></Featured>

      {/* parallax */}
      <Parallax></Parallax>

      {/* testimonials */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
