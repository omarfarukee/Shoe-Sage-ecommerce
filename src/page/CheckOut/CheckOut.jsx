// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../../shared/Footer/Footer';
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';

const CheckOut = () => {
    const { loading, online } = useLoader();
    if (loading || !online) {
        return <FinalLoader />;
    }
    return (
        <div className='p-2'>
            <div className='pt-28 text-titleMd lg:text-titleLg p-5 border-b'>
                Shipping and Checkout
            </div>
            <div className='flex lg:flex-row flex-col justify-center mt-5'>
            <div className='lg:w-[700px]'>
                <p className='mt-3'>BILLING DETAILS</p>
                <form>
                    <div className='flex gap-3'>
                        <input type="text" placeholder="First name..." className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Last name..." className="input input-bordered w-full max-w-xs " />
                    </div>
                    <input type="text" placeholder="Email..." className="mt-3 input input-bordered w-[99%] lg:w-[650px]" />
                    <input type="text" placeholder="Phone..." className="mt-3 input input-bordered w-[99%] lg:w-[650px]" />
                    <input type="text" placeholder="Address..." className="mt-3 input input-bordered    w-[99%] lg:w-[650px]" />
                    <input type="text" placeholder="Town/city..." className="mt-3 input input-bordered  w-[99%] lg:w-[650px]" />
                    <textarea type="text" placeholder="Order note..." className="mt-3 input input-bordered w-[99%] lg:w-[650px] h-40" />
                </form>
            </div>
            {/* cart */}
            <div className="border h-[400px] lg:w-[400px] p-5">
                <h1 className="uppercase text-titleSm">Cart Totals</h1>
                <p className="uppercase border-b flex justify-between">SubTotal: <span>200 $</span></p>

                <div className="mt-20 border-b">
                    <p className="uppercase flex justify-between">Shipping Fee : <span>40 $</span></p>
                    <p className="uppercase  flex justify-between">Vat : <span>20 $</span></p>
                </div>
                <p className="uppercase font-bold flex justify-between mt-5">
                    Total: <span>200 $</span>
                </p>


                <div >
                    <button className="border bg-red mt-10 h-16 uppercase  text-white rounded-lg w-[300px] lg:ml-7">
                        Confirm order
                    </button>
                </div>
            </div>
            </div>
            <div className='mt-10'>
                
            <Footer/>
            </div>
        </div>

    );
}

export default CheckOut;
