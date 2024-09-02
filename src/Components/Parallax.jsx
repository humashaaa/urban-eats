import img1 from "../assets/featured.jpg";
import './Parallax.css'
const Parallax = () => {
  return (
    <div className="mt-12 featuredImage p-24 bg-fixed">
      <div className="flex gap-5 items-center justify-center text-white bg-slate-600 bg-opacity-65">
        <img className="h-[300px] w-[500px]" src={img1} alt="" />
        <div className="w-96">
          <h1>Where can i get?</h1>
          <p>
            where every meal is a celebration of taste and hospitality. Our
            chefs use only the freshest ingredients to craft delicious dishes
            that will delight your senses. Whether you're here for a casual
            lunch, a family dinner, or a special occasion, we offer a warm and
            friendly atmosphere to make your dining experience unforgettable.
          </p>
          <button className="btn btn-outline btn-success">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
