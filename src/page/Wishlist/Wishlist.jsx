// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import { IoMdClose } from 'react-icons/io';
import Footer from '../../shared/Footer/Footer';
import { NavLink } from 'react-router-dom';

export default function Wishlist() {
  const { loading, online } = useLoader();
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from session storage when the component mounts
  useEffect(() => {
    const storedWishlist = JSON.parse(sessionStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  // Function to remove item from wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    sessionStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  if (loading || !online) {
    return <FinalLoader />;
  }

  return (
    <div className="pt-28">
      <div className="text-titleLg border-b mb-5 px-10"><p>Wishlist</p></div>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-5">
        {wishlist.length === 0 ? (
         <div className=''><p className="text-center text-gray-500 mb-60">Your wishlist is empty!</p></div> 
        ) : (
          wishlist?.map((item) => (
            <div
              key={item.id}
              className="relative bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => removeFromWishlist(item.id)}
              >
                <IoMdClose size={20} />
              </button>

              {/* Product Image */}
              <img
                src={item.img_1}
                alt={item.product_name}
                className="w-32 h-32 object-contain"
              />

              {/* Product Info */}
            <NavLink to={`/shoe/${item.id}`}>
            <div className="mt-4 text-center">
                <p className="text-titleSm font-semibold">{item.product_name}</p>
                <p className="text-gray-500 text-sm uppercase">{item.category}</p>
                <p className="text-titleSm font-bold text-red-500 mt-2">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              </NavLink>  
            </div>
          ))
        )}
      </div>
      <Footer/>
    </div>
  );
}
