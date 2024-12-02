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

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { loading, online } = useLoader();
    const [quantities, setQuantities] = useState({}); // Initialize as an empty object

    // Load cart items from sessionStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    // Update quantities state whenever cartItems change
    useEffect(() => {
        const initialQuantities = cartItems.reduce((acc, item) => {
            acc[item.id] = 1; // Default quantity for each item
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, [cartItems]);

    // Calculate the grand total
    const Total = cartItems.reduce((total, item) => {
        return total + (quantities[item.id] || 1) * item.price;
    }, 0);

    const grandTotal = Total + 40 + 20
    console.log(Total);
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
        location.reload()
    };

    const handleIncrement = (itemId) => {
        setQuantities((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1,
        }));
    };

    const handleDecrement = (itemId) => {
        setQuantities((prev) => ({
            ...prev,
            [itemId]: Math.max(1, prev[itemId] - 1), // Prevent quantity less than 1
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
            <div className="pt-28 flex justify-center">
                <div className="w-[90vw] h-[80vh]">
                    <h1 className="text-titleLg font-semibold border-b border-red">
                        Cart ({cartItems?.length})
                    </h1>
                    <div className="flex justify-center gap-5 mt-20">
                        <div className=" w-[50%]">
                            {cartItems.length > 0 ? (
                                <>
                                    <div className="mt-5  h-[70vh] overflow-y-scroll">
                                        {cartItems.map((item) => (
                                            <div key={item.id}>
                                                <div className="p-4 rounded border-b w-full flex items-center gap-3 relative">
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
                                                    <div className="mb-4 mt-5 w-48 ml-[20%]">
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
                                                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
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
                                <div className="flex justify-center mt-20 items-center text-titleSm">
                                    <p>Your cart is empty!</p>
                                    <TbShoppingCartOff className="text-titleMd" />
                                </div>
                            )}
                        </div>
                        <div className="border h-[400px] w-[400px] p-5">
                            <h1 className="uppercase text-titleSm">Cart Totals</h1>
                            <p className="uppercase border-b flex justify-between">SubTotal: <span>{Total} $</span></p>

                            {Total !== 0 && <div className="mt-20 border-b">
                                <p className="uppercase flex justify-between">Shipping Fee : <span>40 $</span></p>
                                <p className="uppercase  flex justify-between">Vat : <span>20 $</span></p>
                            </div>}
                            <p className="uppercase font-bold flex justify-between mt-5">
                                Total: {Total === 0 ? "0" : <span>{Total} $</span>}
                            </p>


                            <NavLink to="/checkout">
                                <button className="border bg-red mt-10 h-16 uppercase  text-white rounded-lg w-[300px] ml-7">
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
