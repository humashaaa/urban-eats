import "./about.css";
import img1 from "../../assets/chef-cooking.avif";
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

      <div className="text-center mt-24 mb-24 space-y-5">
        <h1 className="font-bold text-4xl text-gray-700">
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
      </div>

      {/* parallax */}
      <div className="mt-12 mb-72 aboutImg pt-[33rem]  bg-fixed ">
        <div className="flex gap-10 items-center justify-center p-10 rounded-lg  text-white  ">
          <div className="flex items-center justify-center gap-3">
            <img className="h-96 w-96 rounded-lg" src={chef1} alt="" />
            <img className="h-96 w-96 rounded-lg" src={chef2} alt="" />
            <img className="h-96 w-96 rounded-lg" src={chef3} alt="" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default About;
