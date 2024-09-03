import React from "react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center px-20">
      <div className="flex items-center gap-24">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />

          {/* Brand Text */}
          <span className="text-white font-semibold
          logo text-4xl">PPGP <span className="text-blue-600">IT</span></span>
        </div>
        <ul className="flex gap-24 text-2xl">
          <li>
            <NavLink href="#" className="text-white hover:text-green-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="text-white hover:text-green-400">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="text-white hover:text-green-400">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="text-white hover:text-green-400">
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search"
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user"
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shopping-cart"
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
