import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0)

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        title={"testimonials"}
        subTitle={"What our clients say"}
      ></SectionTitle>

      {/* testimonial */}
     
            
        

      <div>
         <Swiper
           
           navigation={true}
           modules={[Navigation]}
           className="mySwiper"
         >
        {reviews.map((review) => <SwiperSlide  key={review._id}>
              <div className="m-24">
              <Rating style={{ maxWidth: 250 }} value={review.rating} onChange={setRating} />
                <p>{review.name}</p>
                <p>{review.details}</p>
              </div>
            </SwiperSlide>
          
        )}
          </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
