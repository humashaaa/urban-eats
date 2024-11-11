import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCart = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: cart = [], isPending, refetch} = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart/${user.email}`);
      console.log(res.data);
      return res.data;
    },
    


  });
  return [cart, refetch]
};

export default useCart;
