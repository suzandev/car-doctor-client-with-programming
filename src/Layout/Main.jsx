import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default Main;
