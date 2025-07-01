import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuList = (
    <div className="flex gap-8 font-semibold text-xl">
      <NavLink to="/" className="hover:underline underline-offset-8">
        Home
      </NavLink>
      <NavLink to="/services" className="hover:underline underline-offset-8">
        Services
      </NavLink>
      <NavLink to="/products" className="hover:underline underline-offset-8">
        Products
      </NavLink>
      {/* <NavLink to="/about" className="hover:underline underline-offset-8">
        About
      </NavLink> */}
      <NavLink to="/contact-us" className="hover:underline underline-offset-8">
        Contact
      </NavLink>
    </div>
  );

  return (
    <div
      className={`navbar w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        location.pathname === "/"
          ? scrolled
            ? "bg-amber-50 shadow text-black"
            : "bg-transparent text-white"
          : "bg-amber-50 shadow text-black"
      }`}
    >
      <div className="flex justify-between mx-auto w-11/12">
        <div className="navbar-start">
          <Link to={"/"} className="text-2xl btn btn-ghost">Symence IT</Link>
        </div>

        {/* Only show menu if not on contact-us */}
          <div className="hidden lg:flex navbar-end">
            <ul className="px-1 menu menu-horizontal">{menuList}</ul>
          </div>
       
      </div>
    </div>
  );
};

export default Navbar;
