import "./about.css";
import Testimonials from "../../Components/Testimonials";

import chef1 from "../../assets/chef1.jpg";
import chef2 from "../../assets/chef2.png";
import chef3 from "../../assets/chef3.jpg";
const About = () => {
  return (
    <div>
      {/* banner */}
      <div className="about mx-auto">
        <h1 className="font-bold text-6xl uppercase text-white absolute top-1/2 left-[33rem]">
          about us
        </h1>
      </div>

      <div className="text-center mt-24 mb-44 space-y-5">
        <h1 className="font-bold text-4xl uppercase text-gray-700">
          Discover the Flavors of the City at UrbanEats
        </h1>
        <p className="font-medium text-gray-500 w-2/3 mx-auto">
          We believe that great food brings people together. Our mission is to
          offer a unique dining experience that combines the best of local
          ingredients with global culinary inspiration. From hearty meals to
          quick bites, each dish is crafted with passion and creativity to
          satisfy every palate. We pride ourselves on providing a warm, inviting
          atmosphere where friends, families, and food lovers can gather to
          enjoy fresh flavors, excellent service, and unforgettable moments.
          Come and taste the urban difference at UrbanEats!
        </p>
        {/* book table button */}
        <div className="flex justify-center">
          <button className="btn w-72 btn-secondary uppercase">
            book a table
          </button>
        </div>
      </div>

      {/* parallax */}
      <div className="mt-16 mb-72 aboutImg flex flex-col items-center justify-center  bg-fixed ">
        <h1 className="text-center mt-36 mb-12 text-4xl font-bold uppercase  mx-auto text-gray-700 ">
          meet our chef
        </h1>
        <div className="flex  mt-40 gap-10 items-center justify-center p-10 rounded-lg   text-white  ">
          <div className="flex items-center justify-center gap-3 ">
            <div className="relative">
              <img
                className="h-96 w-96 rounded-lg hover:scale-105 transition duration-300 ease-in-out"
                src={chef1}
                alt=""
              />
              <div className="absolute w-full py-2 text-xl  bottom-0 bg-[rgba(0,0,0,0.55)] text-white  ">
                <h1 className="text-center font-bold uppercase">
                  sarah Rahman
                </h1>
                <h2 className="text-center font-semibold text-sm capitalize">
                  head chef
                </h2>
              </div>
            </div>
            {/* chef 2 */}
            <div className="relative">
              <img
                className="h-96 w-96 rounded-lg hover:scale-105 transition duration-300 ease-in-out"
                src={chef2}
                alt=""
              />
              <div className="absolute w-full py-2 text-xl  bottom-0 bg-[rgba(0,0,0,0.55)] text-white  ">
                <h1 className="text-center font-bold uppercase">
                  Farhana Islam
                </h1>
                <h2 className="text-center font-semibold text-sm capitalize">
                  Executive Chef
                </h2>
              </div>
            </div>
            {/* chef 3 */}
            <div className="relative">
              <img
                className="h-96 w-96 rounded-lg hover:scale-105 transition duration-300 ease-in-out"
                src={chef3}
                alt=""
              />
              <div className="absolute w-full py-2 text-xl  bottom-0 bg-[rgba(0,0,0,0.55)] text-white  ">
                <h1 className="text-center font-bold uppercase">
                  Arif Hossain
                </h1>
                <h2 className="text-center text-sm font-semibold capitalize">
                  Grill Chef
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-36 mb-20 space-y-5">
        <h1 className="font-bold text-4xl uppercase text-gray-700">
          What Our Customers Are Saying
        </h1>
        <p className="font-medium text-gray-500 w-2/3 mx-auto">
          we take pride in delivering delicious meals and exceptional service.
          But don’t just take our word for it—hear what our happy customers have
          to say!
        </p>
      </div>
      {/* testimonials */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default About;
