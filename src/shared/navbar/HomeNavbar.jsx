import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { CiHeart, CiMenuFries, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState(5);
  const [wish, setWish] = useState(10);
  useEffect(() => {
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);
  return (
    <section>
      <div className={`border-b h-24 flex  w-full fixed z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-md px-[8%]" : "px-[5%] bg-transparent backdrop-blur-sm border-b border-[#37363844]"}`}>
        <div className="flex h-full  items-center px-4 py-2 w-[60%]">
          <img src={logo} className="w-40" alt="" />
          <div className="flex space-x-10 ">
            <NavLink to="/">
              <a className="text-fontXsm ">Home</a>
            </NavLink>
            <NavLink>
              <a className="text-fontXsm ">Shop</a>
            </NavLink>
            <NavLink>
              <a className="text-fontXsm ">About</a>
            </NavLink>
            <NavLink>
              <a className="text-fontXsm ">Services</a>
            </NavLink>
            <NavLink to="/contact">
              <a className="text-fontXsm ">Contact</a>
            </NavLink>
          </div>
        </div>
        <div className=" w-[40%] gap-10 h-full flex items-center justify-end">
          {/* search icon start */}
          <label className=" swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* search icon */}
            <CiSearch className="text-3xl swap-off" />

            {/* close icon */}
            <IoCloseOutline className="text-3xl swap-on" />
          </label>
          {/* search icon end*/}
          <div>
            <span className="absolute ml-6 py-[1px] px-[3px] text-[10px] text-center rounded-full bg-red text-white">
              {wish}
            </span>
            <CiHeart className="text-3xl" />
          </div>

          <div>
            <span className="absolute ml-6 py-[1px] px-[3px] text-[10px] text-center rounded-full bg-red text-white">
              {cart}
            </span>
            <CiShoppingCart className="text-3xl" />
          </div>
          <CiUser className="text-3xl" />

          <CiMenuFries className="text-3xl" />

        </div>
      </div>
    </section>
  );
}
