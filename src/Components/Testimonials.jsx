import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode, } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5001/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {/* testimonial */}    
      <div className="mb-16">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={90}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, FreeMode]}
          className="mySwiper "
        >         
          {reviews.map((review) => (
            <SwiperSlide key={review._id} >
              <div className="">
                <div className=" card bg-base-100 w-96 h-72 shadow-lg">
                  <div className="card-body">
                    <Rating
                      style={{ maxWidth: 250 }}
                      value={review.rating}
                      onChange={setRating}
                    />
                    <h2 className="card-title">{review.name}</h2>
                    <p>{review.details}</p>                  
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))} 
        </Swiper>
     
      </div>
    </div>
  );
};

export default Testimonials;
