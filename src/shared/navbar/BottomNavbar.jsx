// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineProduct } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaHome, FaInfoCircle, FaUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { NavLink, useNavigate } from "react-router-dom";

const BottomNavbar = () => {
    const [wishlist, setWishlist] = useState([]);
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


    const fetchWishlist = () => {
        const storedWishlist = JSON.parse(sessionStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    };

    // Polling for updated wishlist every second
    useEffect(() => {
        const interval = setInterval(() => {
            fetchWishlist();
        }, 100); // Poll every 1 second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
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
                <NavLink to="/allShoes">
                    <li>
                        <p className="flex flex-col gap-0">
                            <AiOutlineProduct className="text-lg text-red" />
                            <span className="text-[10px] uppercase">Shop</span>
                        </p>
                    </li>
                </NavLink>
                <li>
                    <div className="dropdown dropdown-top">
                        <div tabIndex={0} className="flex flex-col gap-[0px] text-center items-center">
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
                            <TiArrowSortedDown className="absolute text-titleSm text-red " />
                        </ul>
                    </div>
                </li>
                <NavLink to="/wishlist">
                    <li>
                        <a href="slotPage.html" className="flex flex-col gap-0">
                            <span className="text-[10px] uppercase absolute ml-7 bottom-[35px] w-[20px] h-[20px] border rounded-full flex justify-center items-center text-white bg-red">{wishlist?.length}</span>
                            <CiHeart className={`text-red text-titleXsm `} />
                            <span className="text-[10px] uppercase">Wishlist</span>
                        </a>
                    </li>
                </NavLink>
                <li>
                    <div className="dropdown dropdown-top">
                        <div tabIndex={0} className="flex flex-col gap-[0px] text-center items-center">
                            <FaUser className="text-lg text-red" />
                            <span className="text-[10px] uppercase">User</span>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content right-3 absolute bg-white z-[1] w-32 p-2 shadow rounded-lg border border-red"
                        >
                            {!user && <>
                                <NavLink to="/login">
                                    <li>
                                        <p>Login</p>
                                    </li></NavLink>
                                <NavLink to="/signUp"> <li>
                                    <a href="contact.html">Sign-up</a>
                                </li> </NavLink></>}
                            {user && <>
                           <NavLink to="/settings">
                            <li>
                                <p className="flex justify-center items-center gap-2">settings<IoSettingsOutline /></p>
                            </li>
                            </NavLink> 
                                <li className=" bg-rose-100 rounded-lg text-center">
                                    <p onClick={handleLogout} >Logout</p>
                                </li></>}
                            <TiArrowSortedDown className="absolute text-titleSm text-red right-3" />
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default BottomNavbar;
