// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Footer from '../../shared/Footer/Footer';
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import { NavLink } from 'react-router-dom';

const CheckOut = () => {
    const { loading, online } = useLoader();
    const [orderCart, setOrderCart] = useState(null);

    // Load orderCart data from sessionStorage on component mount
    useEffect(() => {
        const storedOrder = JSON.parse(sessionStorage.getItem("orderCart"));
        if (storedOrder) {
            setOrderCart(storedOrder);
        }
    }, []);


    const subtotal = orderCart?.items?.map((item) => item?.subtotal)
    if (!orderCart || subtotal?.length === 0) {
        return (
            <div className="text-center pt-40">
                <h2 className="text-2xl font-bold">No items in your checkout!</h2>
                <NavLink to="/cart" className="text-red-500 underline mt-5 block">
                    Go to Cart
                </NavLink>
            </div>
        );
    }
    if (loading || !online) {
        return <FinalLoader />;
    }
    return (
        <div className='p-2'>
            <div className='pt-28 text-titleMd lg:text-titleLg p-5 border-b'>
                Shipping and Checkout
            </div>
            <div className='flex lg:flex-row flex-col  mt-5'>
                <div className=' px-5 lg:w-[50%]'>
                    <p className='mt-3'>BILLING DETAILS</p>
                    <form className=''>
                        <div className='flex w-full gap-3'>
                            <div className='w-full'>
                                <label className="label">
                                    <span className="label-text">First Name <span className='text-red'>*</span> </span>
                                </label>
                                <input type="text" placeholder="First name..." className="input w-full input-bordered " />
                            </div>
                            <div className='w-full'>
                                <label className="label">
                                    <span className="label-text">Last Name <span className='text-red'>*</span></span>
                                </label>
                                <input type="text" placeholder="Last name..." className="w-full input input-bordered " />
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Email <span className='text-red'>*</span></span>
                            </label>
                            <input type="text" placeholder="Email..." className="mt-3 input input-bordered w-[99%] lg:w-full" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Phone <span className='text-red'>*</span></span>
                            </label>
                            <input type="text" placeholder="Phone..." className="mt-3 input input-bordered w-[99%] lg:w-full" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Address <span className='text-red'>*</span></span>
                            </label>
                            <input type="text" placeholder="Address..." className="mt-3 input input-bordered    w-[99%] lg:w-full" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Town/City <span className='text-red'>*</span></span>
                            </label>
                            <input type="text" placeholder="Town/city..." className="mt-3 input input-bordered  w-[99%] lg:w-full" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Order Note</span>
                            </label>
                            <textarea type="text" placeholder="Order note..." className="mt-3 input input-bordered w-[99%] lg:w-full h-40" />
                        </div>
                    </form>
                </div>
                {/* cart */}
                <div className="pt-5 px-5 lg:px-20  p-3 bg-[#fbfbfc] lg:w-[50%]">
                    <h1 className="text-3xl font-bold mb-5">Checkout</h1>
                    <div className="border rounded-lg p-5 shadow-lg">
                        <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
                        <ul className="mb-5">
                            {orderCart.items.map((item) => (
                                <li key={item.id} className="border-b pb-3 mb-3 flex justify-between items-center text-end">
                                    <img src={item.img} alt={item.name} className="w-16 h-16 mr-4 object-contain rounded" />
                                    <div>
                                        <p className="font-bold">{item.name}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: {item.price} $</p>
                                        <p>Subtotal: {item.subtotal} $</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <form className='flex items-center gap-3 mb-3'>
                                <input type="text" placeholder="Discount Coupon" className="mt-3 input input-bordered  w-[99%] lg:w-full" />
                                <button className='w-[100px] border h-[50px] mt-3 bg-red text-white rounded-lg'>
                                    Apply
                                </button>
                            </form>
                        </div>

                        <p className="border-t pt-3 flex justify-between">
                            <span>Subtotal:</span> <span>{orderCart.subtotal} $</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Shipping Fee:</span> <span>{orderCart.shippingFee} $</span>
                        </p>
                        <p className="flex justify-between">
                            <span>VAT:</span> <span>{orderCart.vat} $</span>
                        </p>
                        <p className="font-bold text-lg flex justify-between mt-3">
                            <span>Grand Total:</span> <span>{orderCart.grandTotal} $</span>
                        </p>
                    </div>
                    <button className="bg-green-500 text-white px-5 py-3 rounded-lg mt-5">
                        Confirm and Pay
                    </button>
                </div>
            </div>
            <div className='mt-10'>

                <Footer />
            </div>
        </div>

    );
}

export default CheckOut;
