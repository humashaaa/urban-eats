import { Helmet } from "react-helmet-async";
import Parallax from "../Components/Parallax";

import Banner from "../Components/Banner/Banner";
import Chefspecial from "../Components/Chefspecial";
import Homebanner2 from "../Components/Banner/Homebanner/Homebanner2";
import Booktable from "../Components/Booktable/Booktable";
import { useRef } from "react";
import Register from "./Register";
const Home = () => {
  const bookSectionRef = useRef(null);

  const scrollToSection = () => {
    bookSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Helmet>
        <title>UrbanEats</title>
      </Helmet>
      {/* banner */}
      <Banner scrollToSection={scrollToSection}></Banner>
      <Register></Register>
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
      <Parallax scrollToSection={scrollToSection}></Parallax>

      {/* book a table */}
      <Booktable sectionRef={bookSectionRef}></Booktable>
    </div>
  );
};

export default Home;
