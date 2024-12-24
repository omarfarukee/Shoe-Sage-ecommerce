import { useState, useEffect } from 'react';
import axios from 'axios';
import { CiHeart } from 'react-icons/ci';
import { IoMdHeart } from 'react-icons/io';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

export default function HomeTrendyProduct() {
  const [shoeData, setShoeData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  // Fetch data function
  const fetchShoeData = async () => {
    try {
      const response = await axios.get('/Shoe.json'); // Replace with your actual JSON file path
      setShoeData(response.data);
    } catch (error) {
      console.error('Error fetching shoe data:', error);
    }
  };

  console.log(cartItems);

  const fetchCart = () => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(storedCart)
  }

  useEffect(() => {
    const cartInterval = setInterval(() => {
      fetchCart()
    }, 100);
    return () => clearInterval(cartInterval)
  })

  // Initialize data fetch and set up periodic updates
  useEffect(() => {
    // Initial data fetch
    fetchShoeData();
    // Load wishlist and cart from session storage
    const storedWishlist = JSON.parse(sessionStorage.getItem('wishlist')) || [];
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setWishlist(storedWishlist);
    setCartItems(storedCart);

    // Set interval to fetch updated data every second
    const intervalId = setInterval(() => {
      fetchShoeData();
    }, 1000); // Fetch data every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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

  return (
    <div>
      {/* Header */}
      <div className="flex justify-center mb-5 px-5">
        <div className="text-titleMd uppercase" data-aos="fade-down" data-aos-duration="3000">
          Our trendy <span className="font-bold text-red">Products</span>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className="flex flex-wrap gap-6 lg:w-[1200px] justify-center mx-auto"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {shoeData.slice(0, 8)?.map((shoe) => (
          <div key={shoe.id} className="w-[260px]">
            <div className="w-full shadow-lg rounded px-2 h-[280px] flex flex-col justify-center items-center transition-all group relative overflow-hidden">
              {/* Images */}
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

              {/* Add to Cart Button */}
              <button
                className={`absolute w-[230px] shadow-lg transition-all duration-500 py-2 rounded uppercase top-[280px] group-hover:top-[230px] text-titleXXsm ${
                  cartItems.some((item) => item.id === shoe.id)
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

            {/* Product Info */}
            <div className="mt-4">
              <p className="text-titleXXsm text-gray-500 uppercase">{shoe.category}</p>
             <NavLink to={`/shoe/${shoe.id}`}>   
              <div className="mt-2">
                <p>{shoe.product_name}</p>
                <p>${shoe.price}</p>
              </div>
              </NavLink>

              {/* Wishlist Icon */}
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

              {/* Review Stars */}
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
    </div>
  );
}
