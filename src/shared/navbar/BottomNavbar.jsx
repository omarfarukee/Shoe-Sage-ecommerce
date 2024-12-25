// eslint-disable-next-line no-unused-vars
import React from "react";
import toast from "react-hot-toast";
import { FaHome, FaCalendarAlt, FaInfoCircle, FaBasketballBall, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const BottomNavbar = () => {
      // get user data
  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from sessionStorage
    sessionStorage.removeItem('user');
    toast.success('Logged out successfully.')
    console.log('User logged out successfully.')

    // Redirect to login page
    navigate('/login');
  };

  // console.log(user);
  return (
    <div className="fixed bottom-0 left-0 w-full z-20 text-center">
      <ul className="animate__animated animate__backInUp menu menu-horizontal bg-white border-t border-t-red backdrop-blur-lg  w-full flex justify-between items-center rounded-tr-[20px] rounded-tl-[20px]">
      <NavLink to="/">
         <li>
          <p className="flex flex-col gap-0">
            <FaHome className="text-lg text-red" />
            <span className="text-[10px] uppercase">Home</span>
          </p>
        </li>
        </NavLink> 
        <li>
          <a href="events.html" className="flex flex-col gap-0">
            <FaCalendarAlt className="text-lg text-red" />
            <span className="text-[10px] uppercase">Events</span>
          </a>
        </li>
        <li>
          <div className="dropdown dropdown-top">
            <div tabIndex={0} className="flex flex-col gap-[0px] text-center">
              <FaInfoCircle className="text-lg text-red" />
              <span className="text-[10px] uppercase">Info</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content bg-white z-[1] w-32 p-2 shadow rounded-lg border border-red"
            >
             <NavLink to="/about"><li>
                <p>About Us</p>
              </li>
                </NavLink> 
                <NavLink to="/contact">
              <li>
                <p>Contact</p>
              </li></NavLink>
            </ul>
          </div>
        </li>
        <li>
          <a href="slotPage.html" className="flex flex-col gap-0">
            <FaBasketballBall className="text-lg text-red" />
            <span className="text-[10px] uppercase">Field</span>
          </a>
        </li>
        <li>
          <div className="dropdown dropdown-top">
            <div tabIndex={0} className="flex flex-col gap-[0px] text-center">
              <FaUser className="text-lg text-red" />
              <span className="text-[10px] uppercase">Info</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content right-3 absolute bg-white z-[1] w-32 p-2 shadow rounded-lg border border-red"
            >
             {!user &&<>
                <NavLink to="/login">
             <li>
                <p>Login</p>
              </li></NavLink>
              <NavLink to="/signUp"> <li>
                <a href="contact.html">Sign-up</a>
              </li> </NavLink></> }
              {user &&<><li>
                <p>Settings</p>
              </li>
              <li>
                <p onClick={handleLogout}>Logout</p>
              </li></> }
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavbar;
