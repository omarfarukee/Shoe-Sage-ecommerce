import { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HomeLimitedEdition() {
  const [shoeData, setShoeData] = useState([]); // Store shoe data
  const [wish, setWish] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current chunk (set of 4 cards)
  const itemsPerSlide = 4; // Number of items per slide
  const autoSlideInterval = 10000; // 10 seconds

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

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Move to the next chunk
    }, autoSlideInterval);

    return () => clearInterval(interval); // Cleanup interval on unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Function to navigate to next chunk (4 items)
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= Math.ceil(shoeData.length / itemsPerSlide)
        ? 0 // If we reach the last chunk, go back to the first one
        : prevIndex + 1
    );
  };

  // Function to navigate to previous chunk (4 items)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(shoeData.length / itemsPerSlide) - 1 // If we are at the first chunk, go to the last one
        : prevIndex - 1
    );
  };

  // Split shoeData into chunks of 4 items each
  const chunkedData = [];
  for (let i = 0; i < shoeData.length; i += itemsPerSlide) {
    chunkedData.push(shoeData.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="mt-40 mb-20">
      {/* Title Section */}
      <div className="flex justify-center mb-10">
        <div className="text-titleMd uppercase" data-aos="fade-down" data-aos-duration="3000">
          Our trendy <span className="font-bold text-red">Products</span>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative w-full flex justify-center">
        <button
          onClick={handlePrev}
          className="absolute mr-[1200px] mt-5 z-10 top-1/2 text-2xl transition-all duration-300 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
        >
          <FaChevronLeft />
        </button>

        <div className="w-[1200px] overflow-hidden">
          <div className="flex transition-transform duration-500">
            {chunkedData[currentIndex]?.map((shoe) => (
              <div key={shoe.id} className="w-[25%] px-3">
                <div className="shadow-lg rounded px-2 h-[280px] flex flex-col justify-center items-center transition-all group relative overflow-hidden">
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
                  <p className="text-titleXXsm text-gray-500 uppercase">{shoe?.category}</p>

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

        <button
          onClick={handleNext}
          className="absolute ml-[1200px] top-1/2 transition-all duration-300 bg-gray-200 text-2xl rounded-full p-2 hover:bg-gray-300"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}