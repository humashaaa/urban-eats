import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useCart from "../Hooks/useCart";

const Menucard = ({ item }) => {
  const { name, description, image, category, price, _id, keywords } = item;
const axiosPublic = useAxiosPublic()
const {user} = useAuth()

const [cart, refetch] = useCart()


  // add to cart
  const handleAddToCart = item =>{
console.log(item, user?.email);
if(user && user.email){
  // save cart item to db
  const cartItem = {
    menuId : _id,
    email: user.email,
    name,
    image,
    price

  }

  axiosPublic.post(`/carts`, cartItem)
  .then(res =>{
    if(res.data.insertedId){
      toast.success("Added to cart")
      // refetch to update the cart count
      refetch()
    }
  })
}
else{
  toast.alert("You have to login first")
  //TODO - navigate or show login modal, location state set kore deya (67-2 , 67-3)
}

  }



  return (
    <div className="flex justify-start items-center gap-1 border-4 border-green-500">
       <img
        src={image}
        alt={name}
        className="w-[12rem] h-[11rem]"
      />
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
              <button onClick={()=>handleAddToCart(item)} className="p-2 text-white text-[12px] text-center bg-red-500 uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-primary">ADD TO CART</button> */}

      </div>

      
     
    </div>
  );
};

export default Menucard;
