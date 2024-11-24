// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import shoe2 from "../assets/shoe-images/shoes-gray-back.jpg"
import shoe3 from "../assets/shoe-images/shoes-red-back.jpg"
import { CiShoppingBasket } from 'react-icons/ci'
// import ScrollTrigger from 'react-scroll-trigger'
export default function HomeStartingAt() {

    // const [animate, setAnimate] = useState(false)
    return (
        <div className='overflow-hidden mb-20'>
            {/* formal shoe starting at offer */}


            <div className="flex justify-center mt-44 gap-20">
                <div className="absolute w-full">
                    <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c3001023" strokeWidth="1"><path d="M 0 300 C 300 250, 300 350, 300 100 S 500 250, 600 300 S 700 350, 1000  100"></path><path d="M 0 290 C 280 230, 300 330, 300 100 S 500 230, 600 280 S 700 330, 1000  100"></path><path d="M 0 280 C 260 210, 300 310, 300 100 S 500 210, 600 260 S 700 310, 1000  100"></path><path d="M 0 270 C 240 190, 300 290, 300 100 S 500 190, 600 240 S 700 290, 1000  100"></path><path d="M 0 260 C 220 170, 300 270, 300 100 S 500 170, 600 220 S 700 270, 1000  100"></path><path d="M 0 250 C 200 150, 300 250, 300 100 S 500 150, 600 200 S 700 250, 1000  100"></path><path d="M 0 240 C 180 130, 300 230, 300 100 S 500 130, 600 180 S 700 230, 1000  100"></path><path d="M 0 230 C 160 110, 300 210, 300 100 S 500 110, 600 160 S 700 210, 1000  100"></path><path d="M 0 220 C 140 90,  300 190, 300 100 S 500 90, 600 140 S 700 190,  1000  100"></path><path d="M 0 210 C 120 70,  300 170, 300 100 S 500 70, 600 120 S 700 170,  1000  100"></path><path d="M 0 200 C 100 50,  300 150, 300 100 S 500 50, 600 100 S 700 150,  1000  100"></path></g></svg>
                </div>
                {/* <ScrollTrigger onEnter={() => setAnimate(true)}> */}
                    <div className='flex  justify-center gap-20'>  
                    <div className="text-[13em] absolute z-10 font-bold text-[#c300109c] mt-20 formal-collection-text" data-aos="fade-up"
              data-aos-duration="3000">
                        Formal Collection
                    </div>
                        <div className="absolute text-titleXl z-10 mt-[310px] mr-14 " data-aos="fade-down"
              data-aos-duration="3000"><span className="text-white">Starting</span><span className="text-red"> at</span> <span className="text-white">$19.99</span> </div>
                        <button className="group uppercase absolute z-10 mt-[400px] transition-all duration-300" >
                            <span className="flex text-2xl items-center">
                                Shop Now
                                <CiShoppingBasket className="text-[20px] transition-all duration-300 text-2xl text-white" />
                            </span>
                            <div className="w-5 h-[2px] bg-red group-hover:w-36 transition-all duration-300"></div>
                        </button>
                        <div data-aos="fade-right"
              data-aos-duration="3000">
                            <div

                                className="relative rounded-lg w-[400px] h-[510px] shadow-xl animate__animated animate__fadeInLeft"
                                style={{
                                    backgroundImage: `url(${shoe2})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                            </div>
                        </div>
                        <div data-aos="fade-left"
              data-aos-duration="3000">


                            <div
                                className="relative rounded-lg w-[400px] h-[510px] shadow-xl" 
                                style={{
                                    backgroundImage: `url(${shoe3})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                {/* </ScrollTrigger> */}
            </div>

        </div>
    )
}
