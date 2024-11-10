import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const NavModal = () => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <NavLink>cart</NavLink>
      <NavLink>food history</NavLink>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default NavModal;
