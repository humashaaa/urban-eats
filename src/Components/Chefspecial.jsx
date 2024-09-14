import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/special1.jpg";
import img2 from "../assets/special2.jpg";
import img3 from "../assets/special3.jpg";
import img4 from "../assets/special4.jpg";
import img5 from "../assets/special5.jpg";
import img6 from "../assets/special6.jpg";
import Chefcard from "./Chefcard";
import './chefcard.css';

const Chefspecial = () => {
  const carouselRef = useRef(null);
  const cardWidth = 300; // Fixed width for each card, ensure it's consistent

  // Scroll handling functions
  const handleScrollLeft = () => {
    const carousel = carouselRef.current;
    carousel.scrollBy({
      left: -cardWidth, // Scroll left by one card width
      behavior: "smooth", // Smooth scrolling
    });
  };

  const handleScrollRight = () => {
    const carousel = carouselRef.current;
    carousel.scrollBy({
      left: cardWidth, // Scroll right by one card width
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Drag functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - carousel.offsetLeft);
      setScrollLeft(carousel.scrollLeft);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed here
      carousel.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
      setIsDragging(false);
    };

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mousemove', handleMouseMove);
    carousel.addEventListener('mouseup', handleMouseUpOrLeave);
    carousel.addEventListener('mouseleave', handleMouseUpOrLeave);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mousemove', handleMouseMove);
      carousel.removeEventListener('mouseup', handleMouseUpOrLeave);
      carousel.removeEventListener('mouseleave', handleMouseUpOrLeave);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="wrapper mt-20 relative ">
      <FaArrowLeft
        className="bg-red-600 p-1 w-8 h-8 text-white absolute top-60 z-10 cursor-pointer"
        onClick={handleScrollLeft}
      />
      <div
        className="mt-7 carousal flex gap-4 items-center"
        ref={carouselRef}
        style={{
          overflowX: "scroll",
          cursor: isDragging ? "grabbing" : "grab",
          padding: "0 10px", // Added padding for visibility of the first card
        }}
      >
        {/* Card 1 */}
        <div
          className=" flex-shrink-0"
          style={{ minWidth: `${cardWidth}px` }}
        >
          <Chefcard
            img={img1}
            name={"Grilled Salmon"}
            description={`Perfectly grilled salmon accompanied by sautéed vegetables and a side of mashed potatoes`}
            price={"25"}
          />
        </div>
        {/* Card 2 */}
        <div
          className=" flex-shrink-0"
          style={{ minWidth: `${cardWidth}px` }}
        >
          <Chefcard
            img={img2}
            name={"Hearty Vegetable Soup"}
            description={`A comforting blend of seasonal vegetables simmered in a flavorful broth, enriched with herbs and spices.`}
            price={"19"}
          />
        </div>
        {/* Card 3 */}
        <div
          className=" flex-shrink-0"
          style={{ minWidth: `${cardWidth}px` }}
        >
          <Chefcard
            img={img3}
            name={"Beef Brisket"}
            description={`Slow-cooked beef brisket with aromatic spices, served with roasted vegetables and a rich gravy.`}
            price={"26"}
          />
        </div>
        {/* Card 4 */}
        <div
          className=" flex-shrink-0"
          style={{ minWidth: `${cardWidth}px` }}
        >
          <Chefcard
            img={img4}
            name={"Caviar Spaghetti"}
            description={`Elegant spaghetti tossed in a light champagne cream sauce, topped with delicate caviar and fresh chives.`}
            price={"20"}
          />
        </div>
        {/* Card 5 */}
        <div
          className=" flex-shrink-0"
          style={{ minWidth: `${cardWidth}px` }}
        >
          <Chefcard
            img={img5}
            name={"Truffle-Infused Mashed Potatoes"}
            description={`Creamy mashed potatoes blended with rich truffle oil and topped with parmesan shavings.`}
            price={"18"}
          />
        </div>
        {/* Card 6 */}
        <div
          className=" flex-shrink-0"
          style={{ minWidth: `${cardWidth}px` }}
        >
          <Chefcard
            img={img6}
            name={"Golden Caramel Pudding"}
            description={`A rich, creamy caramel pudding topped with gold flakes, offering a luxurious twist to a classic dessert.`}
            price={"23"}
          />
        </div>
      </div>
      <FaArrowRight
        className="bg-red-600 p-1 w-8 h-8 text-white absolute top-[15rem] z-10 right-0 cursor-pointer"
        onClick={handleScrollRight}
      />
    </div>
  );
};

export default Chefspecial;
