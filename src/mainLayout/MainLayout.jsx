// MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div  className="relative min-h-screen overflow-auto ">
      <div className="top-0 z-50 fixed shadow w-full">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
