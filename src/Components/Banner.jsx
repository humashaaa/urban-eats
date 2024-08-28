import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/01.jpg";
import img2 from "../assets/02.jpg";
import img3 from "../assets/03.png";

const Banner = () => {
  return (
    <div  className="mt-5">
      <Carousel className="text-center" autoPlay={true} infiniteLoop={true}>
        <div className="w-full h-[640px] text-center">
          <img src={img1} alt="burger" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[640px] text-center">
          <img src={img2} alt="pizza" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[640px] text-center">
          <img src={img3} alt="chicken " className="w-full h-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
