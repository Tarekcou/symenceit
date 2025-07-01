import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const menuList = (
    <div className="flex gap-8">
      <NavLink to="/" className="hover:underline underline-offset-8">
        Home
      </NavLink>
      <NavLink to="/services" className="hover:underline underline-offset-8">
        Services
      </NavLink>
      <NavLink to="/products" className="hover:underline underline-offset-8">
        Products
      </NavLink>
      <NavLink to="/about" className="hover:underline underline-offset-8">
        About
      </NavLink>
      <NavLink to="/contact" className="hover:underline underline-offset-8">
        Contact
      </NavLink>
    </div>
  );
  

  return (
    <div
      className={`navbar w-full  fixed top-0 left-0  z-50 transition-all duration-300 ${
        scrolled ? "bg-base-100 shadow text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between mx-auto w-11/12">
        <div className="navbar-start">
          <a className="text-xl btn btn-ghost">Symence</a>
        </div>
        <div className="hidden lg:flex navbar-end">
          <ul className="px-1 menu menu-horizontal">{menuList}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
