import { useState, useEffect } from 'react';
import axios from 'axios';
import { CiHeart } from 'react-icons/ci';
import { IoMdHeart } from 'react-icons/io';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import toast from 'react-hot-toast';

export default function HomeTrendyProduct() {
  // State to store the shoe data
  const [shoeData, setShoeData] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Fetch data with Axios when the component mounts
  useEffect(() => {
    axios
      .get('/Shoe.json') // Replace with your actual JSON file path
      .then((response) => {
        setShoeData(response.data); // Store the data in the state
      })
      .catch((error) => {
        console.error('There was an error fetching the shoe data!', error);
      });

    // Load wishlist from session storage
    const storedWishlist = JSON.parse(sessionStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  // Function to toggle wishlist
  const toggleWishlist = (shoe) => {
    let updatedWishlist;

    if (wishlist?.some((item) => item.id === shoe.id)) {
      // Remove from wishlist
      updatedWishlist = wishlist.filter((item) => item.id !== shoe.id);
      toast.success(`${shoe.product_name} removed from your wishlist!`);
    } else {
      // Add to wishlist
      updatedWishlist = [...wishlist, shoe];
      toast.success(`${shoe.product_name} added to your wishlist!`);
      
    }

    // Update state and session storage
    setWishlist(updatedWishlist);
    sessionStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <div className="flex justify-center mb-5">
        <div
          className="text-titleMd uppercase"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          Our trendy <span className="font-bold text-red">Products</span>
        </div>
      </div>

      {/* Display the fetched shoe data */}
      <div
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="flex flex-wrap gap-6 w-[1200px] justify-center">
          {shoeData.slice(0, 8)?.map((shoe) => (
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

                {/* Wishlist Toggle Icon */}
                <div className="absolute flex ml-56">
                  {wishlist?.some((item) => item.id === shoe.id) ? (
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
    </div>
  );
}
