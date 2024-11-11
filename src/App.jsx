import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Shared/Nav";
import Footer from "./Shared/Footer";

const App = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes("login" || "register")
  return (
    <div>
      { noHeaderFooter ||<Nav></Nav>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default App;