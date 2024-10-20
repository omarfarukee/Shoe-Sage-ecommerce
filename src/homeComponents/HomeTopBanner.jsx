import React, { useState, useEffect } from "react";
import bannerBg from "../assets/backgrounds/bannerBg.webp";
import shoe1 from "../assets/banner-shoe-img/shoe1.png";
import shoe2 from "../assets/banner-shoe-img/shoe2.png";
import shoe3 from "../assets/banner-shoe-img/shoe3.png";
import "./Home.css";
import 'animate.css';
import "../shared/globalStyle/CommonButtonStyle.css";

export default function HomeTopBanner() {
  const [activeSlider, setActiveSlider] = useState(1);

  // Automatically switch slides every 4 seconds
  useEffect(() => {
    const interval = setTimeout(() => {
      setActiveSlider((prev) => (prev === 3 ? 1 : prev + 1));
    }, 10000);

    // Cleanup the interval
    return () => clearTimeout(interval);
  }, [activeSlider]);

  return (
    <div className="bg-[#f5e6e0] w-full min-h-[100vh] relative">
      <img className="h-full absolute" src={bannerBg} alt="" />

      {/* Slider one start */}
      <div className={`pt-[23vh] relative flex justify-center ${activeSlider === 1 ? 'block' : 'hidden'}`}>
        <div className="h-[500px] w-[50%] flex flex-col justify-center">
          <div className="flex items-center gap-5 animate__animated animate__fadeInUp overflow-hidden">
            <div className="h-[2px] w-14 bg-red rounded-md"></div>
            <div className="text-red ">Summer 2024</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-titleXxl animate__animated animate__fadeInUp">Hello New Season</div>
          </div>
          <div className="overflow-hidden">
            <p className="text-titleXsm uppercase animate__animated animate__fadeInUp">Limited time offer - up to 60% off & free Shipping</p>
          </div>
          <div className="overflow-hidden mt-10">
            <button className="common-button uppercase animate__animated animate__fadeInUp" role="button">
              Discover More &gt;
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="animate__animated animate__fadeInUp">
            <img className="w-[450px] img-wave" src={shoe1} alt="" />
          </div>
        </div>
      </div>
      {/* Slider one end */}

      {/* Slider two start */}
      <div className={`pt-[23vh] relative flex justify-center ${activeSlider === 2 ? 'block' : 'hidden'}`}>
        <div className="h-[500px] w-[50%] flex flex-col justify-center">
          <div className="flex items-center gap-5 animate__animated animate__fadeInUp overflow-hidden">
            <div className="h-[2px] w-14 bg-red rounded-md"></div>
            <div className="text-red ">Summer 2024</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-titleXxl animate__animated animate__fadeInUp">Hello New Season</div>
          </div>
          <div className="overflow-hidden">
            <p className="text-titleXsm uppercase animate__animated animate__fadeInUp">Limited time offer - up to 60% off & free Shipping</p>
          </div>
          <div className="overflow-hidden mt-10">
            <button className="common-button uppercase animate__animated animate__fadeInUp" role="button">
              Discover More &gt;
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="animate__animated animate__fadeInUp">
            <img className="w-[500px] border img-wave" src={shoe2} alt="" />
          </div>
        </div>
      </div>
      {/* Slider two end */}

      {/* Slider three start */}
      <div className={`pt-[23vh] relative flex justify-center ${activeSlider === 3 ? 'block' : 'hidden'}`}>
        <div className="h-[500px] w-[50%] flex flex-col justify-center">
          <div className="flex items-center gap-5 animate__animated animate__fadeInUp overflow-hidden">
            <div className="h-[2px] w-14 bg-red rounded-md"></div>
            <div className="text-red ">Summer 2024</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-titleXxl animate__animated animate__fadeInUp">Hello New Season</div>
          </div>
          <div className="overflow-hidden">
            <p className="text-titleXsm uppercase animate__animated animate__fadeInUp">Limited time offer - up to 60% off & free Shipping</p>
          </div>
          <div className="overflow-hidden mt-10">
            <button className="common-button uppercase animate__animated animate__fadeInUp" role="button">
              Discover More &gt;
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="animate__animated animate__fadeInUp">
            <img className="w-[500px] img-wave" src={shoe3} alt="" />
          </div>
        </div>
      </div>
      {/* Slider three end */}

      {/* Button for slider control start */}
      <div className="flex items-center gap-2 absolute bottom-10 left-[10%] text-3xl">
        <button
          className={`${activeSlider === 1 ? 'text-red' : 'text-black'}`}
          onClick={() => setActiveSlider(1)}
        >
          01
        </button>
        <div className="w-16 h-[1px] bg-red"></div>
        <button
          className={`${activeSlider === 2 ? 'text-red' : 'text-black'}`}
          onClick={() => setActiveSlider(2)}
        >
          02
        </button>
        <div className="w-16 h-[1px] bg-red"></div>
        <button
          className={`${activeSlider === 3 ? 'text-red' : 'text-black'}`}
          onClick={() => setActiveSlider(3)}
        >
          03
        </button>
      </div>
      {/* Button for slider control end */}
    </div>
  );
}
