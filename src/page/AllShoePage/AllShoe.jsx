// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import shoe from "../../assets/backgrounds/shoe3.jpeg";

export default function AllShoe() {
  const [shoeData, setShoeData] = useState([]); // Store shoe data
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 8; // Number of items per page
  const [wish, setWish] = useState(false);

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

  // Calculate total pages
  const totalPages = Math.ceil(shoeData.length / itemsPerPage);

  // Get data for the current page
  const currentData = shoeData.slice(
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
          <h1>Mens Pride</h1>
        </div>
      </div>

      {/* Shoe Items Section */}
      <div
        className="flex justify-center mt-20 mb-20"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="flex flex-wrap gap-6 w-[1200px] justify-center">
          {currentData.map((shoe) => (
            <div key={shoe.id} className="w-[260px]">
              <div className="w-full shadow-lg rounded px-2 h-[280px] flex flex-col justify-center items-center transition-all group relative overflow-hidden">
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
                <button className="absolute w-[230px] shadow-lg hover:bg-gray-200 transition-all duration-500 bg-gray-100 py-2 rounded uppercase top-[280px] group-hover:top-[230px] text-titleXXsm">
                  Add to cart
                </button>
              </div>
              <div className="mt-4 flex items-center">
                <p className="text-titleXXsm text-gray-500 uppercase">
                  {shoe?.category}
                </p>

                <div className="absolute flex ml-56">
                  {!wish && (
                    <CiHeart
                      className="text-titleSm"
                      onClick={() => setWish(true)}
                    />
                  )}
                  {wish && (
                    <IoMdHeart
                      className="text-titleSm text-red"
                      onClick={() => setWish(false)}
                    />
                  )}
                </div>
              </div>
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
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center gap-4 mt-4 mb-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
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
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
