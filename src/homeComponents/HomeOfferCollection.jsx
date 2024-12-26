// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import background from "../assets/backgrounds/banner-2-bg.webp";
import shoe1 from "../assets/gif-img/shoe1.gif"

import { CiShoppingBasket } from "react-icons/ci";
export default function HomeOfferCollection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 10,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const countdownDate = new Date();
        countdownDate.setDate(countdownDate.getDate() + 10); // Set countdown to 10 days from now

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate.getTime() - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
    return (
        <div className="mb-20 mt-20">
            <div className="lg:px-10">
                <div
                    className="relative items-center flex justify-center lg:h-[75vh] h-[600px] rounded-sm "
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-10"></div>

                    {/* Content */}
                    <div className="relative px-3 lg:px-0 z-10 flex lg:flex-row flex-col-reverse items-center  w-full justify-evenly">
                        <div className="">
                            <p className="text-red uppercase" data-aos="fade-right"
                                data-aos-duration="3000">Deal of the week</p>
                            <h1 className=" mb-4 lg:text-titleXl text-titleSm uppercase" data-aos="fade-right"
                                data-aos-duration="3000"><span className="font-bold">Winter</span> Collection</h1>
                            <p className="text-lg" data-aos="fade-right"
                                data-aos-duration="3000">
                                Enjoy amazing discounts on our latest collection. Don’t miss out!
                            </p>
                            <button className="group uppercase transition-all duration-300 mt-5" data-aos="fade-right"
                                data-aos-duration="3000">
                                <span className="flex ">
                                    Shop Now
                                    <CiShoppingBasket className="text-[20px] transition-all duration-300" />
                                </span>
                                <div className="w-5 h-[2px] bg-red group-hover:w-20 transition-all duration-300"></div>
                            </button>
                            {/* counter */}
                            <div className="flex gap-5 mt-5" data-aos="fade-right"
                                data-aos-duration="3000">
                                <div>
                                    <span className="font-mono lg:text-titleXl text-titleSm">
                                        <span>{timeLeft.days}</span>
                                    </span>
                                    days
                                </div>
                                <div>
                                    <span className="font-mono lg:text-titleXl text-titleSm">
                                        <span>{timeLeft.hours}</span>
                                    </span>
                                    hours
                                </div>
                                <div>
                                    <span className=" font-mono lg:text-titleXl text-titleSm">
                                        <span>{timeLeft.minutes}</span>
                                    </span>
                                    min
                                </div>
                                <div>
                                    <span className="font-mono lg:text-titleXl text-titleSm">
                                        <span>{timeLeft.seconds}</span>
                                    </span>
                                    sec
                                </div>
                            </div>
                            {/* counter end*/}
                        </div>
                        <div>
                            <img className="w-[500px] " src={shoe1} alt="" />
                        </div>


                    </div>
                </div>
            </div>

           

        </div>
    );
}
