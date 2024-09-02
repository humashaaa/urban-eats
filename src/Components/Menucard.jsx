
const Menucard = ({item}) => {
    const {name, recipe, image, category, price, _id} = item
    console.log(item);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl ">
  <div className="flex">
  <figure>
    <img
    className='rounded-r-3xl rounded-b-3xl'
      src={image}
      alt="menu" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="flex items-center justify-between">
        <p>category : {category}</p>
        <p>Price : {price}</p>
    </div>
    
  </div>
  </div>
</div>
        </div>
    );
};

// propType

export default Menucard;