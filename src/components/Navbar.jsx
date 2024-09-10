import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import React, { useState, useRef } from 'react';
const Navbar = () => {
    const [iconName, setIconName] = useState('menu');
    const iconRef = useRef();
    const navlinksRef = useRef();

    const onToggleMenu = () => {
      const newName = iconName === 'menu' ? 'close' : 'menu';
      setIconName(newName);
      iconRef.current.name = newName;
  
      // Toggle the class for the navlinks
      if (navlinksRef.current) {
        navlinksRef.current.classList.toggle('top-[9%]');
        navlinksRef.current.classList.toggle('-top-full');
      }
  
    };

  return (
    <nav className="bg-black p-4 flex justify-between items-center xl:px-20 px-10">
      <div className="xl:flex items-center lg:gap-24 gap-0">
        <div className="flex items-center justify-center text-white">
        <button className="flex justify-center items-center mr-2 lg:hidden text-white text-3xl">
      <ion-icon
        ref={iconRef}
        name={iconName}
        className="cursor-pointer"
        onClick={onToggleMenu}
      ></ion-icon>
    </button>
          {/* Logo */}
          <img
            src="/images/logo_wolf.webp"
            alt="Logo"
            className="w-12 mr-2"
          />

          {/* Brand Text */}
          <span
            className="flex text-white font-semibold
          logo text-[40px] gap-2"
          >
            PPGP <span className="text-blue-600">IT</span>
          </span>
          <div className="absolute bg-white min-h-[25vh] left-0 -top-full w-full flex items-center z-[999] lg:static lg:bg-black lg:min-h-[92px] transition-all duration-300" ref={navlinksRef}>
            <ul className="flex flex-col lg:flex-row lg:ml-8 lg:gap-16 xl:gap-24 text-2xl w-full justify-center items-center gap-4">
              <li className="">
                <NavLink
                  to="/"
                  className="lg:text-white text-black hover:text-green-400 lg:block"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/product"
                  className="lg:text-white text-black hover:text-green-400 flex justify-center items-center gap-2">
                  Product
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/contact"
                  className="lg:text-white text-black hover:text-green-400 lg:block"
                >
                  Contact
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/about"
                  className="lg:text-white text-black hover:text-green-400 lg:block"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
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
