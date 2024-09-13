
const Chefcard = ({img, name, price, description}) => {
    return (
        <div >
           <div className=" w-96">
        <div className="relative h-96 w-96">
          <img
            className="h-96 w-96 rounded-lg hover:scale-105 transition duration-300 ease-in-out"
            src={img}
            alt=""
          />
          <div className="absolute w-full  py-2 text-xl  bottom-0 bg-[rgba(0,0,0,0.55)] text-white  ">
            <h1 className="text-center font-bold uppercase">{name}</h1>
          </div>
          <div className="absolute top-0 right-0 bg-red-500 px-2 py-1 z-10">
            <p className="text-white font-bold">${price}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-3 mb-3">
            {description}
          </p>
          <button className="btn btn-primary uppercase">add to cart</button>
        </div>
      </div> 
        </div>
    );
};

export default Chefcard;