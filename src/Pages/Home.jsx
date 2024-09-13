import { Helmet } from "react-helmet-async";
import Featured from "../Components/Featured";
import Parallax from "../Components/Parallax";
import SectionTitle from "../Components/SectionTitle";
import Swipper from "../Components/Swipper";
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

      
      ;{/* swipper slider */}
      <div className="mt-10">
        <Swipper></Swipper>
      </div>

       {/* chef's special */}
       <section>
        <h1 className="font-bold text-5xl text-gray-700 text-center mt-11 uppercase">
          Chef's Specials
        </h1>
<Chefspecial></Chefspecial>











        <div className="flex items-center justify-center gap-8 mt-20">
          {/* 1st */}
          <div>
            {/* <div className="flex justify-center items-center gap-5 mb-10">
              <img className="w-44 h-52 rounded-sm" src={img1} alt="" />
              <div>
                <h1 className="mb-2 text-xl font-semibold">
                  PASTA WITH RAGU'-------------------------
                  <span className="text-red-500">$25</span>
                </h1>
                <p className="text-gray-500">Meat / Pasta / Cheese / Onion</p>
                <p className="w-96 mt-3 mb-4 text-gray-600">
                  Pasta with Ragù is a classic Italian dish topped with a rich,
                  slow-cooked meat and tomato sauce. Perfectly hearty and
                  flavorful!
                </p>
                <button className="btn btn-primary">buy now</button>
              </div>
            </div> */}
            {/* 2nd dish */}
            {/* <div className="flex justify-center items-center gap-5">
              <img className="w-44 h-52 rounded-sm" src={img2} alt="" />
              <div>
                <h1 className="mb-2 text-xl font-semibold">
                  GRILLED FISH--------------------------------
                  <span className="text-red-500">$20</span>
                </h1>
                <p className="text-gray-500">
                  Sea bream / Oregano / Extra Virgin Olive Oil
                </p>
                <p className="w-96 mt-3 mb-4 text-gray-600">
                  Grilled Fish is a light and flavorful dish, perfectly seasoned
                  fish fillets, grilled to smoky perfection. Fresh, simple, and
                  delicious!
                </p>
                <button className="btn btn-primary">buy now</button>
              </div>
            </div> */}
          </div>

          {/* 2nd */}
          <div>
            {/* <div className="flex justify-center items-center gap-5 mb-10">
              <img className="w-44 h-52 rounded-sm" src={img3} alt="" />
              <div>
                <h1 className="mb-2 text-xl font-semibold">
                  SMOKED HAM-------------------------------
                  <span className="text-red-500">$18</span>
                </h1>
                <p className="text-gray-500">Ham / Cheese / Butter</p>
                <p className="w-96 mt-3 mb-4 text-gray-600">
                  Smoked Ham is a savory, cured meat that’s slow-smoked to
                  enhance its rich, smoky flavor, perfect for sandwiches or as a
                  main dish.
                </p>
                <button className="btn btn-primary">buy now</button>
              </div>
            </div> */}
            {/* 4th dish */}
            {/* <div className="flex justify-center items-center gap-5">
              <img className="w-44 h-52 rounded-sm" src={img4} alt="" />
              <div>
                <h1 className="mb-2 text-xl font-semibold">
                  Truffle-Lobster Risotto----------------------
                  <span className="text-red-500">$27</span>
                </h1>
                <p className="text-gray-500">
                  Lobster/ fresh truffles / Arborio rice
                </p>
                <p className="w-96 mt-3 mb-4 text-gray-600">
                  Truffle-Infused Lobster Risotto is an indulgent dish combining
                  the delicate sweetness of lobster with the earthy richness of
                  truffle. 
                </p>
                <button className="btn btn-primary">buy now</button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* featured */}
      <Featured></Featured>
      {/* parallax */}
      <Parallax></Parallax>
      
    </div>
  );
};

export default Home;
