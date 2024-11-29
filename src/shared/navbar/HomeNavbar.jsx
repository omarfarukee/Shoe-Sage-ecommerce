import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  CiHeart,
  CiMenuFries,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import SearchNavbar from "./SearchNavbar";
export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState(0);
  const [wish, setWish] = useState(0);
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
  
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/signUp' || location.pathname === '/allShoes';
  const navBg = location.pathname === '/allShoes'
  

  return (
    <section>
      <div
        className={`border-b h-24 flex  w-full fixed z-50 transition-all duration-500 ${
          scrolled
            ? `${navBg ?"bg-red shadow-md border-none px-[5.5%]": "shadow-md bg-white px-[5.5%]"} `
            : "px-[5%] bg-transparent backdrop-blur-sm border-b border-[#37363844]"
        }`}
      >
        <div className="flex h-full  items-center px-4 py-2 w-[60%]">
          <img src={logo} className="w-40" alt="" />
          <div className="flex space-x-10 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <a className={`text-black text-fontXsm ${isLoginPage ? "text-white" : ""}`}>Home</a>
            </NavLink>
            <div className="relative group">
              <NavLink
                to="/allShoes"
                className={({ isActive }) =>
                  `${isActive ? "nav-item active" : "nav-item"} ${isLoginPage ? "text-white" : ""}`
                }
              >
                Shop <GoChevronDown />
              </NavLink>
              {/* Submenu */}
              <div className="submenu">
                <NavLink
                  to="/shop/men"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red submenu-item"
                      : "text-black submenu-item"
                  }
                >
                  Men Formal
                </NavLink>
                <NavLink
                  to="/shop/women"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red submenu-item"
                      : "text-black submenu-item"
                  }
                >
                  Men Sports
                </NavLink>
                <NavLink
                  to="/shop/kids"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red submenu-item"
                      : "text-black submenu-item"
                  }
                >
                  Men Snicker

                </NavLink>
              </div>
            </div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <a className={`text-black text-fontXsm ${isLoginPage ? "text-white" : ""}`}>About</a>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <a className={`text-black text-fontXsm ${isLoginPage ? "text-white" : ""}`}>Contact</a>
            </NavLink>
          </div>
        </div>
        <div className=" w-[40%] gap-10 h-full flex items-center justify-end">
          {/* search icon start */}
          {/* <label className=" swap swap-rotate">
            
            <input type="checkbox" />

            
            <CiSearch className="text-3xl swap-off" />

           
            <IoCloseOutline className="text-3xl swap-on" />
          </label> */}
          <div className="mt-2">
          <SearchNavbar/>
          </div>
          
          {/* search icon end*/}
          <div>
            <span className="absolute ml-6 py-[1px] px-[3px] text-[10px] text-center rounded-full bg-red text-white">
              {wish}
            </span>
            <CiHeart className={`text-black text-fontXsm text-3xl ${isLoginPage ? "text-white" : ""}`} />
          </div>

          <div>
            <span className="absolute ml-6 py-[1px] px-[3px] text-[10px] text-center rounded-full bg-red text-white">
              {cart}
            </span>
            <CiShoppingCart className={`text-black text-fontXsm text-3xl ${isLoginPage ? "text-white" : ""}`} />
          </div>
          <CiUser className={`text-black text-fontXsm text-3xl ${isLoginPage ? "text-white" : ""}`} />

          <NavLink to="/login"><p className={`text-black text-fontXsm  ${isLoginPage ? "text-white" : ""}`}>Login</p></NavLink>
          <NavLink to="/signUp"><p className={`text-black text-fontXsm w-16 ${isLoginPage ? "text-white" : ""}`}>Sign up</p></NavLink>

          <CiMenuFries className={`text-black text-fontXsm text-3xl ${isLoginPage ? "text-white" : ""}`}  />

          
        </div>
        
      </div>
    </section>
  );
}
