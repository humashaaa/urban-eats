import axios from "axios";


export const axiosPublic = axios.create({
    // baseURL : 'https:vercel.app' 
    baseURL : 'http://localhost:5001' 
  })
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;