import React from "react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center xl:px-20 sm:px-10">
      <div className="xl:flex items-center xl:gap-24 gap-0">
        <div className="flex items-center justify-center text-white">
        <button className="mr-2 xl:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
          {/* Logo */}
          <img src="public\images\logo_wolf.webp" alt="Logo" className="w-12 mr-2" />

          {/* Brand Text */}
          <span className="flex text-white font-semibold
          logo text-[40px] gap-2">PPGP <span className="text-blue-600">IT</span></span>
        </div>
        <ul className="flex gap-24 text-2xl">
          <li>
            <NavLink to="/" className="text-white hover:text-green-400 sm:hidden xl:block">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="text-white hover:text-green-400 sm:hidden xl:block">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-white hover:text-green-400 sm:hidden xl:block">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-white hover:text-green-400 sm:hidden xl:block">
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex text-white gap-10">
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </NavLink>
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </NavLink>
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
