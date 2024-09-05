import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import img1 from "../assets/pizza.jpg";
import img2 from "../assets/pasta.jpg";
import img3 from "../assets/samosa.jpg";
import img4 from "../assets/swarmajpg.jpg";
import img5 from "../assets/burger.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const Swipper = () => {
  
  return (
    <Swiper
    // slidesPerView={'auto'}
    // centeredSlides={true}
    // spaceBetween={30}
    // pagination={{
    //   clickable: true,
    // }}
    // modules={[Pagination]}
    // className="mySwiper"



      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}

      modules={[Autoplay,FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="overflow-hidden">
        <img className="h-80 w-96 transform transition-transform duration-300 object-cover hover:scale-105" src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <img className="h-80 w-96 transform transition-transform duration-300 object-cover hover:scale-105" src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <img className="h-80 w-96 transform transition-transform duration-300 object-cover hover:scale-105" src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <img className="object-cover h-80 w-96 transform transition-transform duration-300 hover:scale-105" src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden">
        <img className=" object-cover h-80 w-96 transform transition-transform duration-300 hover:scale-105" src={img5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipper;
