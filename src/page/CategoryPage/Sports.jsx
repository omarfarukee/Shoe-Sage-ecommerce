// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import shoe from "../../assets/backgrounds/shoe3.jpeg";
import Footer from '../../shared/Footer/Footer';
import { AiFillStar, AiOutlineStar, AiOutlineTable } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import FinalLoader from '../../shared/loader/FinalLoader';
import toast from 'react-hot-toast';
import axios from 'axios';
import useLoader from '../../shared/loader/Loader';
export default function Sports(){
    const [shoeData, setShoeData] = useState([]); // Store shoe data
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const itemsPerPage = 8; // Number of items per page
    const [maxPrice, setMaxPrice] = useState(30000);
    const [cartItems, setCartItems] = useState([]);
  
    const { loading, online } = useLoader();
  
  
  
    const handleMaxPriceChange = (event) => {
      setMaxPrice(parseInt(event.target.value));
    };
    // Fetch data with Axios
    useEffect(() => {
      axios
        .get("/Shoe.json") // Replace with your actual JSON file path
        .then((response) => {
          setShoeData(response.data); // Set shoe data in state
        })
        .catch((error) => {
          console.error("There was an error fetching the shoe data!", error);
        });
    }, []);
  
  // Filter data to include only "formal" shoes
  const formalShoes = shoeData.filter((shoe) => shoe.category === "sports");
  
  // Calculate total pages based on filtered data
  const totalPages = Math.ceil(formalShoes.length / itemsPerPage);
  
  // Get data for the current page from filtered data
  const currentData = formalShoes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  
    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling effect
      });
    };
  
    // Handle page navigation
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
        scrollToTop();
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
        scrollToTop();
      }
    };
  
  
    // Load cart items from sessionStorage on component mount
    const fetchCart = () => {
      const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
      setCartItems(storedCart);
    };
    // Polling for updated wishlist every second
    useEffect(() => {
      const interval = setInterval(() => {
        fetchCart();
      }, 1000); // Poll every 1 second
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
  
    const handleAddToCart = (shoe) => {
      // Check if the item is already in the cart
      if (cartItems?.some((item) => item.id === shoe.id)) {
        toast.success('', {
          style: {
            borderRadius: '10px',
            background: '#4caf50',
            color: '#fff',
            height: "70px"
          },
        });
        return;
      }
  
      // Add the new item to the cart
      const updatedCart = [...cartItems, shoe];
      setCartItems(updatedCart);
      sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  
      toast.success(`${shoe?.product_name} Added to you cart`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          height: "70px"
        },
      });
      location.reload();
    };
    if (loading || !online) {
      return <FinalLoader />;
    }
  
    return (
      <div className="overflow-hidden">
        {/* Background Section */}
        <div
          className="overflow-hidden h-[65vh] w-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${shoe})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute h-[65vh] inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 formal-collection-text text-[12em] text-red">
            <h1>Mens Sports</h1>
          </div>
        </div>
  
        {/* Shoe Items Section */}
        <div
          className="flex  justify-center  mb-20"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* filter bar with brand*/}
          <div className="w-[250px] h-[100vh]  pt-2 sticky">
            <div className="bg-[#f7f7f7] rounded mx-3 h-10 flex gap-3 text-titleXsm px-3 items-center">
              <IoIosArrowDown />
              <p>Brands</p>
            </div>
            <div className="px-5 mt-5">
              <div className="flex items-center gap-2">
                <input className="" type="checkbox" />
                <p>Adidas</p>
              </div>
              <div className="flex items-center gap-2">
                <input className="" type="checkbox" />
                <p>Puma</p>
              </div>
              <div className="flex items-center gap-2">
                <input className="" type="checkbox" />
                <p>Nike</p>
              </div>
              <div className="flex items-center gap-2">
                <input className="" type="checkbox" />
                <p>Bata</p>
              </div>
  
            </div>
            {/* price range filter */}
            <div className="mb-4 px-5 mt-8">
              <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">
                Price Range
              </label>
              <div className="flex items-center 
   border border-gray-300 rounded-md p-2">
                <input
                  type="range"
                  id="max-price"
                  min="20"
                  max="30000"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="w-full bg-transparent outline-none"
  
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-700 w-20">Min Price: $20</span>
                <span className="text-sm text-gray-700 w-20">Max Price: ${maxPrice}</span>
              </div>
            </div>
  
          </div>
          {/* filter bar brand end*/}
  
          <div className="w-[1200px]">
            <p className="text-titleMd ml-5 mt-5 mb-5">Sports</p>
            <div className="w-full h-16 bg-[#f7f7f7] items-center flex justify-between  px-10 mb-3 mx-3">
  
              <p className=" flex items-center gap-5">View as: <AiOutlineTable className="text-titleSm" />
              </p>
              <select className="select max-w-xs border border-[#0000002f]">
                <option disabled selected>Featured</option>
                <option>Price Low to heigh</option>
                <option>Price heigh to low</option>
              </select>
            </div>
            {/* product show using map  */}
            <div className="flex flex-wrap gap-6 w-[100%] justify-center ">
              {currentData
                ?.filter((shoe) => shoe?.category === "sports") // Filter only 'formal' shoes
                .map((shoe) => (
                  <div
                    key={shoe.id}
                    className="w-[260px] transition-all duration-300 p-2 hover:shadow-lg"
                  >
                    <div className="w-full rounded px-2 h-[280px] flex flex-col justify-center items-center transition-all group relative overflow-hidden">
                      {/* First Image */}
                      <img
                        src={shoe.img_1}
                        alt={shoe.product_name}
                        className="w-[200px] transition-opacity duration-500 opacity-100 group-hover:opacity-0 absolute"
                      />
                      {/* Second Image (on hover) */}
                      <img
                        src={shoe.img_3}
                        alt={shoe.product_name}
                        className="w-[200px] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      />
                      {cartItems?.some((item) => item.id === shoe.id) ? (
                        <button
                          className="absolute w-[230px] shadow-lg hover:bg-gray-200 transition-all duration-500 bg-gray-100 py-2 rounded uppercase top-[280px] group-hover:top-[230px] text-titleXXsm cursor-not-allowed"
                        >
                          Already Added
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.preventDefault(); // Prevent navigation
                            handleAddToCart(shoe);
                          }}
                          className="absolute w-[230px] shadow-lg hover:bg-gray-200 transition-all duration-500 bg-gray-100 py-2 rounded uppercase top-[280px] group-hover:top-[230px] text-titleXXsm"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                    <div className="mt-4 flex items-center">
                      <p className="text-titleXXsm text-gray-500 uppercase">
                        {shoe?.category}
                      </p>
                      <div className="absolute flex ml-56">
                        {<CiHeart className="text-titleSm" />}
                      </div>
                    </div>
                    <div>Price: {shoe?.price} $</div>
                    <NavLink to={`/shoe/${shoe.id}`}>
                      <div>
                        <p>{shoe?.product_name}</p>
                        {/* Review Stars */}
                        <div className="mt-2 flex">
                          {Array.from({ length: 5 }, (_, index) =>
                            index < shoe.review ? (
                              <AiFillStar
                                key={index}
                                className="text-yellow-500 text-titleXXsm"
                              />
                            ) : (
                              <AiOutlineStar
                                key={index}
                                className="text-gray-400 text-titleXXsm"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
  
            </div>
            {/* product show using map end */}
  
            {/* Pagination Section */}
            <div className="flex justify-center items-center gap-4 mt-4 mb-8">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                {"<"}
              </button>
              <span className="text-lg font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                {">"}
              </button>
            </div>
          </div>
  
        </div>
  
        <Footer />
      </div>
    );
  }
  