
const Menucard = ({item}) => {
    const {name, description, image, category, price, _id, keywords} = item
    console.log(item);
    return (
        <div>
            <div className="w-96 ">
  <div className="flex">
  {/* <figure>
    <img
    className='rounded-r-3xl rounded-b-3xl'
      src={image}
      alt="menu" />
  </figure> */}
  <div className="p-3 w-96 h-36 space-y-2">
    <div className="flex justify-between items-center">
    <h2 className="flex-1 text-xl font-medium">{name}</h2>
    <p className="font-bold text-[18px]">${price}</p>
    </div>

    
    <div className="flex items-start justify-between">
    <p className="flex-1 text-gray-600 ">{description}</p>
    <p className=" p-1 text-white text-[11px] text-center bg-red-500 uppercase">{keywords}</p>
    </div>
    
  </div>
  </div>
</div>
        </div>
    );
};

// propType

export default Menucard;