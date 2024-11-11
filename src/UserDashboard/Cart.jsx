import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useCart from "../Hooks/useCart";
// my cart
const Cart = () => {
  const axiosPublic = useAxiosPublic();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = async (id) => {
    console.log(id);
    await axiosPublic.delete(`/carts/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast("Removed from cart");
        refetch();
      }
    });
  };

  return (
    <div>
      <h1>My Cart</h1>
      <h1> Total Price :{totalPrice}</h1>
      <div>
        {cart.map((item) => (
          <>
            <p>Name : {item.name}</p>
            <button
              className="btn-primary btn text-white p-2"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Cart;
