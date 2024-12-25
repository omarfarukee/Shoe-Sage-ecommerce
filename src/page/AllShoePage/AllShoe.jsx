// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar, AiOutlineStar, AiOutlineTable } from "react-icons/ai";
import { IoIosArrowDown, IoMdHeart } from "react-icons/io";
import { CiFilter, CiHeart, CiShoppingCart } from "react-icons/ci";
import shoe from "../../assets/backgrounds/shoe3.jpeg";
import { NavLink } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import toast from "react-hot-toast";
import useLoader from "../../shared/loader/Loader";
import FinalLoader from "../../shared/loader/FinalLoader";
import { RxRulerHorizontal } from "react-icons/rx";

export default function AllShoe() {

  const [shoeData, setShoeData] = useState([]);
  const [filteredShoeData, setFilteredShoeData] = useState([]); // Filtered data state
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 8; // Number of items per page
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedBrands, setSelectedBrands] = useState([]); // Selected brands
  const [sortOrder, setSortOrder] = useState("featured"); // Sort order
  const colors = ["white", "black", "blue", "red", "green"]; // Define your colors here
  const [selectedColor, setSelectedColor] = useState(""); // State to track the selected color
  const [selectedSize, setSelectedSize] = useState(null); // State to track the selected size
  const sizes = [5, 6, 7, 8, 9, 10]; // Available sizes
  const { loading, online } = useLoader();

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Fetch data function
  const fetchShoeData = async () => {
    try {
      const response = await axios.get('/Shoe.json'); // Replace with your actual JSON file path
      setShoeData(response.data);
    } catch (error) {
      console.error('Error fetching shoe data:', error);
    }
  };

  const fetchCart = () => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  };

  // Function to toggle the side menu
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    const cartInterval = setInterval(() => {
      fetchCart();
    }, 100);
    return () => clearInterval(cartInterval);
  });

  useEffect(() => {
    fetchShoeData();
    const storedWishlist = JSON.parse(sessionStorage.getItem('wishlist')) || [];
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setWishlist(storedWishlist);
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    let filteredData = shoeData.filter((shoe) => shoe.price <= maxPrice);

    if (selectedBrands.length > 0) {
      filteredData = filteredData.filter((shoe) => selectedBrands.includes(shoe.brand));
    }

    if (sortOrder === "price_low_high") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price_high_low") {
      filteredData.sort((a, b) => b.price - a.price);
    }

    setFilteredShoeData(filteredData);
  }, [shoeData, maxPrice, selectedBrands, sortOrder]);

  // Toggle wishlist
  const toggleWishlist = (shoe) => {
    let updatedWishlist;

    if (wishlist.some((item) => item.id === shoe.id)) {
      updatedWishlist = wishlist.filter((item) => item.id !== shoe.id);
      toast.success(`${shoe.product_name} removed from your wishlist!`);
    } else {
      updatedWishlist = [...wishlist, shoe];
      toast.success(`${shoe.product_name} added to your wishlist!`);
    }

    setWishlist(updatedWishlist);
    sessionStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Toggle cart
  const toggleCart = (shoe) => {
    let updatedCart;

    if (cartItems.some((item) => item.id === shoe.id)) {
      updatedCart = cartItems.filter((item) => item.id !== shoe.id);
      toast.success(`${shoe.product_name} removed from your cart!`);
    } else {
      updatedCart = [...cartItems, shoe];
      toast.success(`${shoe.product_name} added to your cart!`);
    }

    setCartItems(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPages = Math.ceil(filteredShoeData.length / itemsPerPage);

  const currentData = filteredShoeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  console.log(cartItems.length);

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Set the clicked size as the selected size
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color); // Update the selected color
  };


  if (loading || !online) {
    return <FinalLoader />;
  }

  return (
    <div className="overflow-hidden">

      {cartItems.length !== 0 &&
        <NavLink to="/cart">
          <div className="fixed bottom-4 hidden lg:block right-4 bg-white p-4 rounded-full shadow-lg border z-40">
            <span className="absolute ml-7 bottom-11 border w-[25px] h-[25px] flex items-center justify-center rounded-full bg-red text-white">{cartItems?.length}</span>
            <p className="text-titleLg">
              <CiShoppingCart />
            </p>

          </div>
        </NavLink>}



      {/* Filtering side menu for mobile */}
      {isSideMenuOpen && (
        <div
          onClick={() => setIsSideMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-[900]"
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-[100vh] border-r border-[#696969] w-[85%] md:w-[500px] bg-white transition-transform duration-500 ease-in-out transform ${isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ zIndex: 1000 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
      >
        {/* Close Button */}
        <div className="border border-[#f7f7f7] h-20 bg-[#f7f7f7]">
          <p className="mt-6 pl-5">Filter Product</p>
          <button
            onClick={() => setIsSideMenuOpen(false)}
            className="absolute text-4xl text-red top-5 right-5 hover:text-red-600"
          >
            &times; {/* Close (X) button */}
          </button>
        </div>

        {/* Side Menu Content for mobile */}
        <div className="overflow-y-auto h-[calc(100vh-80px)]"> {/* Adjust height dynamically */}
          <div className="w-full border pt-2">
            <div className="bg-[#f7f7f7] rounded mx-3 h-10 flex gap-3 text-titleXsm px-3 items-center">
              <IoIosArrowDown />
              <p>Brands</p>
            </div>
            <div className="px-5 mt-5">
              {[...new Set(shoeData?.map((data) => data.brand))].map((brand) => (
                <div key={brand} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <p>{brand}</p>
                </div>
              ))}
            </div>
            <div className="mb-4 px-5 mt-8">
              <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">
                Price Range
              </label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <input
                  type="range"
                  id="max-price"
                  min="20"
                  max="200"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="w-full bg-transparent outline-none"
                />
              </div>
              <div className="flex justify-between mt-2 border">
                <span className="text-sm text-gray-700 w-20">Min Price: $20</span>
                <span className="text-sm text-gray-700 w-20">Max Price: ${maxPrice}</span>
              </div>
              {/* sizes */}
              <div>
                <p className="mt-5 flex items-center gap-10">Select Size: <RxRulerHorizontal className="text-titleSm" />
                </p>
                <div className="flex flex-wrap  gap-4">
                  {sizes?.map((size) => (
                    <button
                      key={size}
                      className={`w-12 h-12 flex justify-center items-center border rounded-md text-lg font-semibold transition-all duration-300 ${selectedSize === size
                        ? "bg-red text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-rose-300"
                        }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {selectedSize && (
                  <p className="mt-4 text-gray-700 text-md">
                    Selected Size: <span className="font-bold">{selectedSize}</span>
                  </p>
                )}
              </div>
              {/* colors */}
              <div>
                <p className="mt-5 flex items-center gap-10">Colors:</p>
                <div className="flex gap-4 mt-2">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`h-8 w-8 rounded-full cursor-pointer ${selectedColor === color ? "border-4 border-gray-700" : "border"} ${color === "white"
                        ? "bg-white"
                        : color === "black"
                          ? "bg-black"
                          : color === "blue"
                            ? "bg-blue-500"
                            : color === "red"
                              ? "bg-red"
                              : "bg-green-500"
                        }`}
                      onClick={() => handleColorSelect(color)}
                    ></div>
                  ))}
                </div>

                {selectedColor && (
                  <p className="mt-4">Selected Color: <span className="font-semibold">{selectedColor}</span></p>
                )}
              </div>
            </div>
          </div>
        </div>



      </div>
      {/* filtering side menu end mobile */}


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
        <div className="relative z-10 formal-collection-text text-titleXl  lg:text-[12em] text-red">
          <h1>Mens Pride</h1>
        </div>
      </div>

      <div
        className="flex lg:flex-row flex-col justify-center mb-20"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {/* desktop view filter */}
        <div className="w-[250px] min-h-[120vh] pt-2 sticky lg:block hidden">
          <div className="bg-[#f7f7f7] rounded mx-3 h-10 flex gap-3 text-titleXsm px-3 items-center">
            <IoIosArrowDown />
            <p>Brands</p>
          </div>
          <div className="px-5 mt-5">
            {[...new Set(shoeData?.map((data) => data.brand))].map((brand) => (
              <div key={brand} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <p>{brand}</p>
              </div>
            ))}
          </div>
          <div className="mb-4 px-5 mt-8">
            <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">
              Price Range
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <input
                type="range"
                id="max-price"
                min="20"
                max="200"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="w-full bg-transparent outline-none"
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-700 w-20">Min Price: $20</span>
              <span className="text-sm text-gray-700 w-20">Max Price: ${maxPrice}</span>
            </div>


            {/* sizes */}
            <div>
              <p className="mt-5 flex items-center gap-10">Select Size: <RxRulerHorizontal className="text-titleSm" />
              </p>
              <div className="flex flex-wrap  gap-4">
                {sizes?.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 flex justify-center items-center border rounded-md text-lg font-semibold transition-all duration-300 ${selectedSize === size
                      ? "bg-red text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-rose-300"
                      }`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="mt-4 text-gray-700 text-md">
                  Selected Size: <span className="font-bold">{selectedSize}</span>
                </p>
              )}
            </div>
            {/* colors */}
            <div>
              <p className="mt-5 flex items-center gap-10">Colors:</p>
              <div className="flex gap-4 mt-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`h-6 w-6 rounded-full cursor-pointer ${selectedColor === color ? "border-4 border-gray-700" : "border"} ${color === "white"
                      ? "bg-white"
                      : color === "black"
                        ? "bg-black"
                        : color === "blue"
                          ? "bg-blue-500"
                          : color === "red"
                            ? "bg-red"
                            : "bg-green-500"
                      }`}
                    onClick={() => handleColorSelect(color)}
                  ></div>
                ))}
              </div>

              {selectedColor && (
                <p className="mt-4">Selected Color: <span className="font-semibold">{selectedColor}</span></p>
              )}
            </div>

          </div>
        </div>

        <div className="lg:w-[1200px]">
          <div className="flex lg:flex-row flex-col ml-6 items-start lg:items-center">
            <p className="lg:text-titleMd   text-titleSm">All Collections</p>
            <p className="mt-2 lg:ml-3">({filteredShoeData.length} Product Found)</p>
          </div>

          <div className="w-full h-16 bg-[#f7f7f7] items-center flex justify-between px-10 mb-3 mx-3">
            <div className="hidden lg:block"><p className="flex items-center lg:gap-5 gap-2">View as: <AiOutlineTable className="lg:text-titleSm" /></p>
            </div>
            <div className="lg:hidden block">
              <div onClick={toggleSideMenu} className="flex items-center ">
                <CiFilter className="text-titleSm" /> Filter
              </div>
            </div>

            <select
              className="select max-w-xs border border-[#0000002f]"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="featured">Featured</option>
              <option value="price_low_high">Price Low to High</option>
              <option value="price_high_low">Price High to Low</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-6 w-[100%] justify-center">


            {filteredShoeData.length === 0 && <div className="text-titleLg text-center mt-5">
              No product found
            </div>
            }
            {currentData.map((shoe) => (
              <div key={shoe.id} className="w-[260px]">
                <div className="w-full shadow-lg rounded px-2 h-[280px] flex flex-col justify-center items-center transition-all group relative overflow-hidden">
                  <img
                    src={shoe.img_1}
                    alt={shoe.product_name}
                    className="w-[200px] transition-opacity duration-500 opacity-100 group-hover:opacity-0 absolute"
                  />
                  <img
                    src={shoe.img_3}
                    alt={shoe.product_name}
                    className="w-[200px] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />

                  <button
                    className={`absolute w-[230px] shadow-lg transition-all duration-500 py-2 rounded uppercase top-[280px] group-hover:top-[230px] text-titleXXsm ${cartItems.some((item) => item.id === shoe.id)
                      ? 'bg-green-300 cursor-default'
                      : 'bg-gray-100 hover:bg-gray-200 cursor-pointer'
                      }`}
                    onClick={() => {
                      if (!cartItems.some((item) => item.id === shoe.id)) {
                        toggleCart(shoe);
                      }
                    }}
                  >
                    {cartItems.some((item) => item.id === shoe.id) ? 'Already Added' : 'Add to Cart'}
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-titleXXsm text-gray-500 uppercase">{shoe.category}</p>
                  <NavLink to={`/shoe/${shoe.id}`}>
                    <div className="mt-2">
                      <p>{shoe.product_name}</p>
                      <p>${shoe.price}</p>
                    </div>
                  </NavLink>
                  <div>
                    {wishlist.some((item) => item.id === shoe.id) ? (
                      <IoMdHeart
                        className="text-titleSm text-red cursor-pointer"
                        onClick={() => toggleWishlist(shoe)}
                      />
                    ) : (
                      <CiHeart
                        className="text-titleSm cursor-pointer"
                        onClick={() => toggleWishlist(shoe)}
                      />
                    )}
                  </div>
                  <div className="mt-2 flex">
                    {Array.from({ length: 5 }, (_, index) =>
                      index < shoe.review ? (
                        <AiFillStar key={index} className="text-yellow-500 text-titleXXsm" />
                      ) : (
                        <AiOutlineStar key={index} className="text-gray-400 text-titleXXsm" />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {
            filteredShoeData.length !== 0 &&

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
            </div>}
        </div>

      </div>




      <Footer />
    </div>
  );
}
