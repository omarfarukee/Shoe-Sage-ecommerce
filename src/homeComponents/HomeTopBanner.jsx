import React from "react";
import bannerBg from "../assets/backgrounds/bannerBg.webp"
import shoe1 from "../assets/banner-shoe-img/shoe1.png"
import 'animate.css';
import "../shared/globalStyle/CommonButtonStyle.css"
export default function HomeTopBanner() {
  return (
    <div className="bg-[#f5e6e0] w-full h-[100vh] ">
      <img className="h-full absolute" src={bannerBg} alt="" />
        <div className="pt-[25vh] relative flex justify-center">
           <div className=" h-[500px]  w-[50%] flex flex-col justify-center">
            <div className="flex items-center gap-5 animate__animated animate__fadeInUp overflow-hidden">
               <div className="h-[2px] w-14  bg-red rounded-md"></div>
              <h1 className="text-red ">Summer 2024</h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-titleXxl animate__animated animate__fadeInUp">Hello New Season</h1>
            </div>
              <div className="overflow-hidden">
                 <p className="text-titleXsm uppercase animate__animated animate__fadeInUp">Limited time offer - up to 60% off & free Shipping</p>
              </div>
              <div className="overflow-hidden mt-10">
              <button class="common-button  uppercase animate__animated animate__fadeInUp" role="button">Discover More &gt;</button>
              </div>
           </div>
           <div className="overflow-hidden">
             <img className="w-[450px] animate__animated animate__fadeInUp" src={shoe1} alt="" />
           </div>
          
        </div>
    </div>
  );
}
