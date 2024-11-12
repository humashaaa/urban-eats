import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const NavModal = () => {
  const { logOut } = useAuth();
  
  return (
    <div>
      <NavLink>food history</NavLink>


      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default NavModal;
