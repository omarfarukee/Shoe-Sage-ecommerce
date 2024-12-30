import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { RxRulerHorizontal } from "react-icons/rx";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import FinalLoader from "../../shared/loader/FinalLoader";
import toast from "react-hot-toast";
import useLoader from "../../shared/loader/Loader";

export default function SingleShoesDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const [shoe, setShoe] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Track the currently selected big image
  const [selectedSize, setSelectedSize] = useState(null); // State to track the selected size
  const sizes = [5, 6, 7, 8, 9, 10]; // Available sizes
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [activeTab, setActiveTab] = useState("info"); // Default to "info"
  const [cartItems, setCartItems] = useState([]);
  const colors = ["white", "black", "blue", "red", "green"]; // Define your colors here
  const [selectedColor, setSelectedColor] = useState(""); // State to track the selected color
  const subtotal = quantity * shoe?.price

  const { loading, online } = useLoader();

  // Load cart items from sessionStorage on component mount
  const fetchCart = () => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }

  useEffect(() => {
    const cartInterval = setInterval(fetchCart, 100);
    return () => clearInterval(cartInterval);
  }, []);

  // Fetch shoe data
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

  // Handle size click
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Handle color select and update the selected image
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    const colorImageKey = `img_${color}`; // Generate the key dynamically (e.g., img_green)

    // Check if the selected color image exists
    if (shoe[colorImageKey]) {
      setSelectedImage(shoe[colorImageKey]); // Set the big image to the selected color's image
    } else {
      // If the color image doesn't exist, show an alert
      toast.error(`The color ${color} is not available for this shoe.`, {
        style: {
          borderRadius: "10px",
          background: "#f44336",
          color: "#fff",
          height: "70px",
        },
      });
    }
  };


  // Handle image click to update the big image
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  // Add to cart with color-specific image
  const handleAddToCart = () => {
    // Clone the shoe object to avoid direct state mutation
    const shoeForCart = { ...shoe };

    // If a valid color is selected and its image exists, set it as img_1
    if (selectedColor) {
      const colorImageKey = `img_${selectedColor}`;
      if (shoeForCart[colorImageKey]) {
        shoeForCart.img_1 = shoeForCart[colorImageKey]; // Update img_1
      }
    }

    // Check if the item is already in the cart
    if (cartItems.some((item) => item.id === shoe.id)) {
      toast.success("This item is already in your cart.", {
        style: {
          borderRadius: "10px",
          background: "#4caf50",
          color: "#fff",
          height: "70px",
        },
      });
      return;
    }

    // Add the updated shoe to the cart
    const updatedCart = [...cartItems, shoeForCart];
    setCartItems(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success(`${shoe.product_name} added to your cart`, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        height: "70px",
      },
    });
  };

  // Handle zoom effect on image
  const [zoomStyles, setZoomStyles] = useState({
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundSize: "contain",
  });

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

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleRatingClick = (value) => {
    setRating(value === rating ? 0 : value);
  };

  const renderRatingStars = () => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        onClick={() => handleRatingClick(i + 1)}
        className={`text-titleSm font-extrabold cursor-pointer ${i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
      >
        ★
      </span>
    ));
  };

  // Return loading or main content
  if (loading || !online) {
    return <FinalLoader />;
  }

  if (!shoe) {
    return <p>Loading...</p>;
  }

  console.log(selectedImage)
  return (
    <div>
      <div className="flex justify-center">
        <div className="pt-36 flex lg:flex-row flex-col w-[1200px] justify-between">
          <div className="lg:w-[600px] lg:h-[550px]  flex lg:flex-row flex-col justify-center gap-10 items-center">
            {/* Thumbnails */}
            <div className="flex lg:flex-col  gap-3">
              {[shoe.img_1, shoe.img_2, shoe.img_3, shoe.img_4]?.map((img, index) => (
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
            {/* Big Image with Zoom Effect */}
            <div
              className="relative lg:w-[400px] w-[300px] h-[300px] lg:h-[400px] overflow-hidden cursor-zoom-in"
              style={zoomStyles.backgroundImage ? zoomStyles : {}} // Apply dynamic styles
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {!zoomStyles.backgroundImage && (
                <img
                  className="w-full h-full object-contain"
                  src={selectedImage}
                  alt="Selected Shoe"
                />
              )}
            </div>

          </div>
          <div className="lg:w-[600px] lg:h-[500px] lg:ml-16 ml-3">
            <NavLink to="/">Home /</NavLink>
            <NavLink to="/allShoes"> Shope</NavLink>
            <div className="mt-10">
              <p className="text-titleMd font-semibold">{shoe?.product_name}</p>
              <p className="text-titleXsm mt-5">Price: {shoe?.price}$</p>
              <p className="mt-5">{shoe?.description}</p>
              <div>
                <p className="mt-5 flex items-center gap-10">Select Size: <RxRulerHorizontal className="text-titleSm" />
                </p>
                <div className="flex flex-wrap lg:w-full w-[350px] gap-4">
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
            <div className="flex lg:flex-row flex-col  items-center gap-5">

              {/* quantity hidden */}
              <div className="mb-4 mt-5 lg:w-48 hidden">
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
                    className="w-full lg:ml-4 bg-transparent outline-none text-center"
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
              <div className="mt-5 flex">
                {cartItems?.some((item) => item.id === shoe.id) ? (
                  <> <button disabled className="w-48 cursor-not-allowed mb-2 flex items-center h-16 rounded justify-center bg-red text-white gap-2 border">Added in your cart </button>
                    <NavLink to='/cart'>
                      <button className="w-28 mb-2 flex items-center h-16 rounded justify-center bg-red text-white gap-2 border">View cart <FaCartPlus /></button>
                    </NavLink>
                  </>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      handleAddToCart(shoe);
                    }}
                    className="w-48 mb-2 flex items-center h-16 rounded justify-center bg-red text-white gap-2 border">Add To cart <FaCartPlus /></button>
                )}
              </div>




            </div>
          </div>
          <div>
          </div>
        </div>

      </div>

      <div className="border">
        {/* Tab Buttons */}
        <div className="flex gap-5 justify-center mt-20 mb-20">
          <button
            className={`w-[200px] py-2 border-b ${activeTab === "info" ? "border-red" : "border-gray-100"
              }`}
            onClick={() => setActiveTab("info")}
          >
            Additional Information
          </button>
          <button
            className={`w-[200px] py-2 border-b ${activeTab === "reviews" ? "border-red" : "border-gray-100"
              }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (2)
          </button>
        </div>

        {/* Additional Info Content */}
        <div className="lg:px-0 px-3 flex justify-center">
          <div
            className={`  mb-20  w-[1000px] ${activeTab === "info" ? "block" : "hidden"
              }`}
          >
            <div className="text-titleSm">{shoe?.product_name}</div>
            <div className="mt-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, facere. Praesentium nostrum sunt, iste rerum beatae velit, recusandae necessitatibus veritatis tempora fugit quibusdam dignissimos eaque, ut rem. Animi, earum non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius odit nobis optio ipsam dolore consectetur labore adipisci, deserunt corporis eveniet a corrupti harum, praesentium ab asperiores aliquid voluptatibus, reprehenderit quod.</div>
            <div>
              <p className="text-titleSm">Why choose product?</p>
              <li className="text-titleXXsm mt-5">Creat by cotton fibric with soft and smooth</li>
              <li className="text-titleXXsm mt-5">Creat by cotton fibric with soft and smooth</li>
              <li className="text-titleXXsm mt-5">Creat by cotton fibric with soft and smooth</li>
            </div>
          </div>
        </div>


        {/* Reviews Content */}
        <div className="flex lg:px-0 px-3 justify-center">
          <div
            className={` justify-center w-[1000px] mb-20 ${activeTab === "reviews" ? "block" : "hidden"
              }`}
          >
            <div>
              <h1 className="text-titleSm">Be the first to review “Message Cotton T-Shirt”</h1>
              <p>Your email address will not be published. Required fields are marked *</p>
              <div className='mt-2 rounded-xl'>

                <div className='p-2'>
                  <div className='flex items-center justify-center mt-2 font-bold gap-x-2'><p>What&apos;s your rating ?</p></div>
                  <div className='flex justify-center mt-2 font-bold border-b-2 border-red'>
                    {renderRatingStars()}
                  </div>
                  <form>
                    <div className='mt-5'>
                      {/* <label className="textArea"> <span className="text-lg label-text">Write Here:</span></label> */}
                      <textarea
                        className="w-full pt-3 h-28 input input-bordered rounded-3xl"
                        placeholder="Write your valuable Feedback here..."
                        name='textArea'
                      />
                    </div>
                    <div className="flex justify-center mt-2 mb-5 text-center">
                      <div>
                        <button className='px-2 py-2 rounded bg-red text-white' type="submit" data-front="Submit Review ＋" data-back="Click to add ≣">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="text-titleSm">
                Reviews
              </div>
              <div className="mt-5 mb-5">
                {/* review show */}
                <div className="">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <img className="w-16 rounded-full" src="https://avatars.githubusercontent.com/u/108360147?v=4" alt="" />
                      <div>
                        <p className="text-titleXXsm">Omar Faruk</p>
                        <p className="text-titleXXsm">April 06, 2023</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      <p><FaStar /></p>
                      <p><FaStar /></p>
                      <p><FaStar /></p>
                      <p><FaStar /></p>
                      <p><FaStar /></p>
                    </div>
                  </div>

                  <div className="text-titleXXsm pl-5 border-b border-red pb-2">
                    <p>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta modi fugiat. Fugiat fugit error est repellendus veniam optio eveniet unde possimus placeat, neque, voluptates recusandae enim nesciunt. Rem, placeat.&quot;</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <img className="w-16 rounded-full" src="https://avatars.githubusercontent.com/u/108360147?v=4" alt="" />
                      <div>
                        <p className="text-titleXXsm">Omar Faruk</p>
                        <p className="text-titleXXsm">April 06, 2023</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      <p><FaStar /></p>
                      <p><FaStar /></p>
                      <p><FaStar /></p>
                      <p><FaStar /></p>
                      <p><FaStar /></p>
                    </div>
                  </div>

                  <div className="text-titleXXsm pl-5 border-b border-red pb-2">
                    <p>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta modi fugiat. Fugiat fugit error est repellendus veniam optio eveniet unde possimus placeat, neque, voluptates recusandae enim nesciunt. Rem, placeat.&quot;</p>
                  </div>
                </div>
                {/* review show end */}
              </div>


            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
