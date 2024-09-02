import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/Red White Bold Simple Food Menu Promotion Instagram Post.png";
import img2 from '../assets/Black and Red Bold National Pizza Day Instagram Post (3).png';
import img3 from '../assets/Orange White Black Modern Burger Instagram Post.png'

const Banner = () => {
  return (
    <div>
      <Carousel className="text-center" autoPlay={true} infiniteLoop={true}>
        <div className="w-full h-[694px] text-center">
          <img src={img1} alt="burger" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[694px] text-center">
          <img src={img2} alt="pizza" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[694px] text-center">
          <img src={img3} alt="chicken " className="w-full h-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
