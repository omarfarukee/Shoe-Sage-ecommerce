// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { RxRulerHorizontal } from "react-icons/rx";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";

export default function SingleShoesDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const [shoe, setShoe] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Track the currently selected big image
  const [selectedSize, setSelectedSize] = useState(null); // State to track the selected size
  const sizes = [5, 6, 7, 8, 9, 10]; // Available sizes
  const [quantity, setQuantity] = useState(1);
  const subtotal = quantity * shoe?.price
  const handleSizeClick = (size) => {
    setSelectedSize(size); // Set the clicked size as the selected size
  };

  const [zoomStyles, setZoomStyles] = useState({
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundSize: "contain",
  });

  useEffect(() => {
    axios
      .get("/Shoe.json") // Replace with your actual JSON file path
      .then((response) => {
        const selectedShoe = response.data.find(
          (item) => item.id === parseInt(id)
        ); // Find the shoe by ID
        setShoe(selectedShoe);
        setSelectedImage(selectedShoe?.img_1); // Default to the first image
      })
      .catch((error) => {
        console.error("Error fetching the shoe data!", error);
      });
  }, [id]);

  if (!shoe) {
    return <p>Loading...</p>;
  }

  // Handle image click
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  // Handle mouse move to show the zoom effect
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect(); // Get the bounding box of the image
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100; // Calculate X as a percentage
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100; // Calculate Y as a percentage

    setZoomStyles({
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${xPercent}% ${yPercent}%`, // Use percentages for precision
      backgroundSize: "200%", // Zoom level
    });
  };

  // Handle mouse leave to reset the zoom
  const handleMouseLeave = () => {
    setZoomStyles({
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "contain",
    });
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
    <div className="flex justify-center">
      <div className="pt-36 flex  w-[1200px] justify-between">
        <div className="w-[600px] h-[500px]  flex justify-center gap-10 items-center">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {[shoe.img_1, shoe.img_2, shoe.img_3, shoe.img_4].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={`h-20 object-contain w-20 rounded border p-2 cursor-pointer transition-opacity duration-300 ${selectedImage === img ? "opacity-100" : "opacity-40"
                  }`}
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>

          {/* Big Image with Zoom Effect */}
          <div
            className="relative w-[400px] h-[400px] overflow-hidden cursor-zoom-in"
            style={zoomStyles.backgroundImage ? zoomStyles : {}} // Apply dynamic styles
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {!zoomStyles.backgroundImage && (
              <img
                className="w-full h-full object-contain "
                src={selectedImage}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="w-[600px] h-[500px] ml-16">
          <NavLink to="/">Home /</NavLink>
          <NavLink to="/allShoes"> Shope</NavLink>
          <div className="mt-10">
            <p className="text-titleMd font-semibold">{shoe?.product_name}</p>
            <p className="text-titleXsm mt-5">Price: {shoe?.price}$</p>
            <p className="mt-5">{shoe?.description}</p>
            <div>
              <p className="mt-5 flex items-center gap-10">Select Size: <RxRulerHorizontal className="text-titleSm" />
              </p>
              <div className="flex gap-4">
                {sizes.map((size) => (
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
          </div>
          <div className="flex items-center gap-5">


            <div className="mb-4 mt-5 w-48">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <div className="flex  items-center border border-gray-300 rounded-md p-2">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-l"
                >
                  <FaMinus />
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full ml-4 bg-transparent outline-none text-center"
                  min="1"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-r"
                >
                  <FaPlus />
                </button>
              </div>
              <p className="mt-2 font-semibold">Subtotal: {subtotal} $</p>
            </div>

            <button className="w-48 mb-2 flex items-center h-16 rounded justify-center bg-red text-white gap-2 border">Add To cart <FaCartPlus /></button>
          </div>
        </div>

        <div>


        </div>
      </div>
      
    </div>
    <div className="flex gap-5 justify-center mt-20 mb-20">
        <button className=" w-[200px] border-red py-2 border-b">Additional Information</button>
        <button className=" w-[200px] border-gray-100 border-b">Reviews</button>
    </div>
    <div className="flex justify-center mb-20 hidden">
        this is additional info 
    </div>
    <div className="flex justify-center mb-20">
        <div>
          <h1 className="text-titleSm">Be the first to review “Message Cotton T-Shirt”</h1>
          <p>Your email address will not be published. Required fields are marked *</p> 
        </div>
    </div>
    <Footer/>
    </div>
  );
}
