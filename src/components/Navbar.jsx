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
    <div className="flex md:flex-row flex-col gap-8 font-semibold text-xl">
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
      className={`navbar  fixed top-0 left-0 z-50 transition-all duration-300  ${
        location.pathname === "/"
          ? scrolled
            ? "bg-amber-50 shadow text-black"
            : "bg-transparent text-black md:text-white"
          : "bg-amber-50 shadow text-black"
      }`}
    >
      <div className="flex mx-auto w-11/12 md:w-10/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="z-1 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content"
            >
              {menuList}
            </ul>
          </div>

          <a className="text-2xl btn btn-ghost">Symence IT</a>
        </div>
        <div className="hidden lg:flex navbar-end">
          <ul className="px-1 menu menu-horizontal">{menuList}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
