const Menucard = ({ item }) => {
  const { name, description, image, category, price, _id, keywords } = item;
  return (
    <div className="relative group">
      <div className="w-96  bg-[#fcf9f9] h-44 ">
        <div className="flex">
          <div className="p-5 w-96  space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="flex-1 text-xl font-medium group-hover:text-gray-500">
                {name}
              </h2>
              <p className="font-bold text-[18px] text-[#333333]">${price}</p>
            </div>

            <div className="flex flex-col items-start gap-4 ">
              <p className="flex-1 text-gray-600 group-hover:text-gray-500">
                {description}
              </p>
              <p className="p-2 text-white text-[12px] text-center bg-red-500 uppercase">
                add to cart
              </p>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-primary">ADD TO CART</button> */}

      </div>

      {/* Image Reveal with Scale on Hover */}
      <img
        src={image}
        alt={name}
        className="absolute top-0 right-0 w-28 h-28 rounded-sm object-cover opacity-0 transform group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
      />
    </div>
  );
};

export default Menucard;
