import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import {
  CiHeart,
  CiMenuFries,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import SearchNavbar from "./SearchNavbar";
import { TbShoppingCartOff } from "react-icons/tb";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { IoIosLogOut } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // const [countryOpen, setCountryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const fetchWishlist = () => {
    const storedWishlist = JSON.parse(sessionStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  };

  // Polling for updated wishlist every second
  useEffect(() => {
    const interval = setInterval(() => {
      fetchWishlist();
    }, 1000); // Poll every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Retrieve cart data from sessionStorage
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);
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

  // Function to toggle the side menu
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/signUp' || location.pathname === '/allShoes' || location.pathname === '/shop/formal' || location.pathname === '/shop/sports' || location.pathname === '/shop/sneakers' || location.pathname === '/settings' || location.pathname === '/contact';
  const navBg = location.pathname === '/allShoes' || location.pathname === '/allShoes' || location.pathname === '/shop/formal' || location.pathname === '/shop/sports' || location.pathname === '/shop/sneakers' || location.pathname === '/settings' || location.pathname === '/contact';

  // Function to remove an item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));

    toast.success(`Removed...`, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        height: "70px"
      },
    });

    location.reload();

  };

  // Calculate the grand total
  const Total = cartItems.reduce((total, item) => total + item.price, 0);
  const cart = cartItems.length

  // get user data
  const user = JSON.parse(sessionStorage.getItem('user'));
  console.log(user);


  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from sessionStorage
    sessionStorage.removeItem('user');
    toast.success('Logged out successfully.')
    console.log('User logged out successfully.')

    // Redirect to login page
    navigate('/login');
  };

  

  return (
    <section>
      <div className="hidden lg:block ">
        <div
          className={`border-b h-24 flex w-full fixed z-50 transition-all duration-500 ${scrolled
            ? `${navBg ? "bg-red shadow-md border-none px-[5.5%]" : "shadow-md bg-white px-[5.5%]"} `
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
                    to="/shop/formal"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red submenu-item"
                        : "text-black submenu-item"
                    }
                  >
                    Men Formal
                  </NavLink>
                  <NavLink
                    to="/shop/sports"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red submenu-item"
                        : "text-black submenu-item"
                    }
                  >
                    Men Sports
                  </NavLink>
                  <NavLink
                    to="/shop/sneakers"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red submenu-item"
                        : "text-black submenu-item"
                    }
                  >
                    Men Sneakers

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
            <div className="mt-2">
              <SearchNavbar />
            </div>

            {/* search icon end*/}
            <NavLink to='/wishlist'>
              <div>
                <span className="absolute ml-6 py-[1px] px-[3px] text-[10px] text-center rounded-full bg-red text-white">
                  {wishlist.length}
                </span>
                <CiHeart className={`text-black text-fontXsm text-3xl ${isLoginPage ? "text-white" : ""}`} />
              </div>
            </NavLink>

            <NavLink to="/cart"><div>
              <span className="absolute ml-6 py-[1px] px-[3px] text-[10px] text-center rounded-full bg-red text-white">
                {cart}
              </span>
              <CiShoppingCart className={`text-black text-fontXsm text-3xl ${isLoginPage ? "text-white" : ""}`} />
            </div>
            </NavLink>

            {user !== null && <div className="relative group">

              <CiUser className={`text-black text-fontXsm cursor-pointer text-3xl ${isLoginPage ? "text-white" : ""}`} />

              {/* Submenu */}
              <div className="submenu-user">
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red submenu-item"
                      : "text-black submenu-item"
                  }
                >
                  <p className="flex justify-center items-center gap-2">settings<IoSettingsOutline /></p>

                </NavLink>
                <button onClick={handleLogout} className="flex justify-center items-center gap-2 bg-rose-100 rounded-md">
                  Log-out <IoIosLogOut />

                </button>
              </div>
            </div>}

            {user === null && <NavLink to="/login"><p className={`text-black text-fontXsm  ${isLoginPage ? "text-white" : ""}`}>Login</p></NavLink>}
            {user === null && <NavLink to="/signUp"><p className={`text-black text-fontXsm w-16 ${isLoginPage ? "text-white" : ""}`}>Sign up</p></NavLink>}

            <CiMenuFries onClick={toggleSideMenu} className={`text-black text-fontXsm text-3xl cursor-pointer ${isLoginPage ? "text-white" : ""}`} />
          </div>

        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-[100vh] border-l border-[#696969] w-[85%] md:w-[500px] bg-white transition-transform duration-500 ease-in-out transform ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 1000 }}
      >
        {/* Close Button */}
        <div className="border border-[#f7f7f7] h-20 bg-[#f7f7f7]">
          <p className="mt-6 pl-5">Selected product </p>
          <button onClick={toggleSideMenu} className='absolute text-4xl text-red top-5 right-5 hover:text-red-600'>
            &times; {/* This is a close (X) button */}
          </button>
        </div>

        {/* Side Menu Content */}
        <div className='p-2 '>

          <div>
            <h1 className="text-2xl font-semibold border-b">Cart Items ({cartItems?.length})</h1>
            {cartItems.length > 0 ? (
              <> <div className="mt-5 border-b w-[440px] h-[300px] overflow-y-scroll">
                {cartItems?.map((item) => (
                  <div key={item.id} className="p-4 rounded border-b w-[400px] flex items-center gap-3 relative">
                    <img src={item.img_1} alt={item.product_name} className="w-[100px] object-cover" />
                    <NavLink to={`/shoe/${item.id}`}>
                      <h2 className="text-lg font-semibold mt-2">{item.product_name}</h2>
                      <p className="text-gray-600">Price: {item.price} $</p>
                      <p className="text-gray-500 uppercase">{item.category}</p>
                    </NavLink>
                    <IoClose
                      className="absolute right-2 top-2 text-titleSm cursor-pointer"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                ))}
              </div>
                <div className="flex flex-col justify-between">
                  <div className="sticky bottom-0 bg-white w-full border-t p-4 flex justify-between">
                    <h2 className="font-bold text-lg">Total:</h2>
                    <p className="text-lg">{Total} $</p>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center mt-5">
                    <NavLink to="/cart">
                      <button className=" w-[300px] hover:bg-gray-100 transition-all duration-300 rounded-md h-10 bg-[#f7f7f7]">
                        View Cart
                      </button>
                    </NavLink>
                    <NavLink to="/checkout">
                      <button className="border bg-red  text-white rounded-lg w-[300px] h-10">
                        check out
                      </button>
                    </NavLink>

                  </div>
                </div>

              </>
            ) : (
              <div className="flex justify-center mt-20 items-center text-titleSm">
                <p>Your cart is empty!
                </p>
                <TbShoppingCartOff className="text-titleMd" />
              </div>

            )}
          </div>

        </div>
        {/* side menu end  */}
      </div>
{/* mobile view navbar */}
<div
      className={`border-b h-16 block lg:hidden w-full fixed z-50 transition-all duration-500 ${
        scrolled
          ? `${navBg ? "bg-red shadow-md border-none px-[5.5%]" : "shadow-md bg-white"}`
          : "px-[2px] bg-transparent backdrop-blur-sm border-b border-[#37363844]"
      }`}
    >
      <div className="h-full justify-between flex items-center px-2">
        <div className="flex items-center justify-between w-[57%]">
          <div className="relative">
            {/* Main Menu Icon */}
            <div className="nav-items ml-3">
              <p
                className="text-2xl flex items-center cursor-pointer w-14"
                onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
              >
                <RiMenu2Fill />
              </p>
            </div>

            {/* Main Menu */}
            <div
              className={`hamburger-submenu px-4 py-2 w-[200px] gap-5 absolute top-full left-0 bg-white shadow-md transition-all duration-300 ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col gap-3">
                <a href="#" className="w-full">
                  <div className="rounded-md w-full text-start px-2 hover:text-[#000000] hover:bg-[#b051514f] transition-all duration-300">
                    Home
                  </div>
                </a>

                {/* Country with Submenu */}
                <div className="w-full">
                  <div
                    className="rounded-md w-full text-start px-2 flex items-center justify-between hover:text-[#000000] hover:bg-[#b051514f] transition-all duration-300 cursor-pointer"
                    onClick={() => setCountryOpen(!countryOpen)}
                  >
                    Shop <FaCaretDown />
                  </div>

                  {/* Submenu for country */}
                  <div
                    className={`overflow-hidden transition-all duration-500 bg-[#71252514] ${
                      countryOpen ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    <a href="" className="w-1/3">
                      <div className="submenu-item rounded-md">Formal</div>
                    </a>
                    <a href="" className="w-1/3">
                      <div className="submenu-item rounded-md">Sports</div>
                    </a>
                    <a href="" className="w-1/3">
                      <div className="submenu-item rounded-md">Sneakers</div>
                    </a>
                  </div>
                </div>

                {/* Other Menu Items */}
                <a href="#" className="w-full">
                  <div className="rounded-md w-full text-start px-2 hover:text-[#000000] hover:bg-[#b051514f] transition-all duration-300">
                    Contact
                  </div>
                </a>
                <a href="#" className="w-full">
                  <div className="rounded-md w-full text-start px-2 hover:text-[#000000] hover:bg-[#b051514f] transition-all duration-300">
                    About us
                  </div>
                </a>

                {user ? (
                  <>
                    <a href="#" className="w-full">
                      <div className="rounded-md w-full text-start px-2 hover:text-[#000000] hover:bg-[#b051514f] transition-all duration-300">
                        My Profile
                      </div>
                    </a>
                    <a href="#" className="w-full">
                      <div className="rounded-md w-full text-start px-2 hover:text-[#000000] hover:bg-[#b051514f] transition-all duration-300">
                        Settings
                      </div>
                    </a>
                    <a href="#" className="w-full">
                      <div className="rounded-md w-full text-start px-2 py-[2px] bg-red-200 hover:text-[#000000] hover:bg-[#b051514f] transition-all duration-300">
                        Logout
                      </div>
                    </a>
                  </>
                ) : (
                  <a href="#" className="w-full">
                    <div className="rounded-md w-full text-start px-2 hover:text-[#000000] hover:bg-[#b051514f] transition-all duration-300">
                      Sign up
                    </div>
                  </a>
                )}
              </div>
            </div>
            {/* Main Menu end */}
          </div>

          <img className="w-20 absolute ml-[35%]" src={logo} alt="Logo" />
        </div>

        <div className="flex gap-3 justify-end items-center">
          {user ? (
            <CiUser className="text-titleSm" />
          ) : (
            <a href="#">
              <button className="w-16 border py-1 rounded-lg hover:bg-[#3e8d61c4] transition-all duration-300 hover:border-none">
                Login
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
    

    </section>
  );
}
