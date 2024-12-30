// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import useLoader from "../../shared/loader/Loader";
import FinalLoader from "../../shared/loader/FinalLoader";
import { TbShoppingCartOff } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import Footer from "../../shared/Footer/Footer";
import { Helmet } from "react-helmet";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { loading, online } = useLoader();
    const [quantities, setQuantities] = useState({});

    // Load cart items from sessionStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
        setCartItems(storedCart);

        // Initialize quantities
        const initialQuantities = storedCart.reduce((acc, item) => {
            acc[item.id] = 1; // Default quantity
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, []);

    // Calculate the grand total
    const Total = cartItems.reduce((total, item) => {
        return total + (quantities[item.id] || 1) * item.price;
    }, 0);
    const grandTotal = Total + 40 + 20;

    // Function to remove an item
    const removeItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
        toast.success(`Removed...`, {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
                height: "70px",
            },
        });
    };

    // Handle checkout: Save order details in sessionStorage
    const handleCheckout = () => {
        const orderCart = cartItems.map((item) => ({
            id: item.id,
            name: item.product_name,
            img: item.img_1, // Include the image
            quantity: quantities[item.id] || 1,
            price: item.price,
            subtotal: (quantities[item.id] || 1) * item.price,
        }));
        const orderSummary = {
            items: orderCart,
            subtotal: Total,
            shippingFee: 40,
            vat: 20,
            grandTotal,
        };

        sessionStorage.setItem("orderCart", JSON.stringify(orderSummary));
    };

    const handleIncrement = (itemId) => {
        setQuantities((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 1) + 1, // Increment by 1
        }));
    };

    const handleDecrement = (itemId) => {
        setQuantities((prev) => ({
            ...prev,
            [itemId]: Math.max(1, (prev[itemId] || 1) - 1), // Decrement but prevent going below 1
        }));
    };

    const handleQuantityChange = (itemId, value) => {
        const newValue = parseInt(value, 10) || 1; // Ensure valid number
        setQuantities((prev) => ({
            ...prev,
            [itemId]: Math.max(1, newValue), // Prevent quantity less than 1
        }));
    };

    if (loading || !online) {
        return <FinalLoader />;
    }

    return (
        <div>
            <Helmet>
                {/* for SEC */}
                <title>Cart - Shoesage</title>
                <meta name="description" content="Learn more about our company and team on our About Us page." />
                <meta name="keywords" content="About, Company, Team, Services" />
                <meta property="og:title" content="About Us - Your Website Name" />
                <meta property="og:description" content="Learn more about our company and team on our About Us page." />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="pt-28 flex justify-center">
                <div className="lg:w-[90vw] lg:h-[100vh]">
                    <h1 className="text-titleLg font-semibold border-b border-red">
                        Cart ({cartItems?.length})
                    </h1>
                    <div className="lg:flex justify-center gap-5 mt-20">
                        {/* cart product area */}
                        <div className="lg:w-[50%] px-5">
                            {cartItems.length > 0 ? (
                                <>
                                    <div
                                        className="mt-5 lg:h-[70vh] overflow-y-auto mb-2"
                                        style={{ WebkitOverflowScrolling: 'touch' }}
                                        onWheel={(e) => e.stopPropagation()} // Ensures smooth scrolling when hovering
                                    >
                                        {cartItems?.map((item) => (
                                            <div key={item.id}>
                                                <div className="lg:p-4 rounded border-b w-full flex lg:flex-row items-center gap-3 relative flex-col">
                                                    <img
                                                        src={item.img_1}
                                                        alt={item.product_name}
                                                        className="w-[100px] object-cover"
                                                    />
                                                    <NavLink to={`/shoe/${item.id}`}>
                                                        <h2 className="text-lg font-semibold mt-2">{item.product_name}</h2>
                                                        <p className="text-gray-600">Price: {item.price} $</p>
                                                        <p className="text-gray-500 uppercase">{item.category}</p>
                                                    </NavLink>
                                                    <IoClose
                                                        className="absolute right-2 top-2 text-titleSm cursor-pointer"
                                                        onClick={() => removeItem(item.id)}
                                                    />
                                                    {/* Quantity */}
                                                    <div className="mb-4 mt-5 w-48 lg:ml-[20%]">
                                                        <label
                                                            htmlFor={`quantity-${item.id}`}
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Quantity
                                                        </label>
                                                        <div className="flex items-center border border-gray-300 rounded-md p-2">
                                                            <button
                                                                type="button"
                                                                onClick={() => handleDecrement(item.id)}
                                                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-l"
                                                            >
                                                                <FaMinus />
                                                            </button>
                                                            <input
                                                                type="number"
                                                                id={`quantity-${item.id}`}
                                                                value={quantities[item.id] || 1}
                                                                onChange={(e) =>
                                                                    handleQuantityChange(item.id, e.target.value)
                                                                }
                                                                className="w-full ml-4 bg-transparent outline-none text-center"
                                                                min="1"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => handleIncrement(item.id)}
                                                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-r"
                                                            >
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        <p className="mt-2 font-semibold">
                                                            Subtotal: {quantities[item.id] * item.price || item.price} $
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <div className="flex justify-center mt-20 items-center text-titleSm ">
                                        <p>Your cart is empty!</p>
                                        <TbShoppingCartOff className="text-titleMd" />
                                    </div>
                                    <NavLink to="/allShoes">
                                        <button className="mt-5 border-b border px-6 mb-10 rounded-lg bg-red text-white py-2">
                                            Shop
                                        </button>
                                    </NavLink>
                                </div>

                            )}
                        </div>

                        {/* cart total area */}
                        <div className="border h-[400px] lg:w-[400px] lg:p-5 p-2 mb-3 rounded-lg shadow-lg">
                            <h1 className="uppercase text-titleSm">Cart Totals</h1>
                            <p className="uppercase border-b flex justify-between">SubTotal: <span>{Total} $</span></p>
                            {Total !== 0 && (
                                <div className="mt-20 border-b">
                                    <p className="uppercase flex justify-between">Shipping Fee : <span>40 $</span></p>
                                    <p className="uppercase flex justify-between">Vat : <span>20 $</span></p>
                                </div>
                            )}
                            <p className="uppercase font-bold flex justify-between mt-5">
                                Total: {Total === 0 ? "0" : <span>{grandTotal} $</span>}
                            </p>
                            <NavLink
                                to="/checkout"
                                onClick={handleCheckout}
                            >
                                <button className="border bg-red mt-10 h-16 uppercase text-white rounded-lg w-[300px] lg:ml-7">
                                    Proceed to check out
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
