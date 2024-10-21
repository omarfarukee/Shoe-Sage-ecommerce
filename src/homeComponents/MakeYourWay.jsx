import React from "react";
import gif1 from "../assets/gif-img/gif1.gif";

export default function MakeYourWay() {
  return (
    <div>
      <div
        className="h-10 w-full"
        style={{
          background:
            "linear-gradient(to top, #47514f 0%, rgba(255, 0, 0, 0) 30%)",
        }}
      ></div>

      <div className="relative flex justify-center items-center w-full h-[600px]">
        {/* Image */}
        <img className="w-full h-full object-cover" src={gif1} alt="Gif" />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Text on top of the image */}
        <div className="absolute flex justify-center items-center text-white text-center" data-aos="fade-up"
              data-aos-duration="1000">
          <div>
            <div
              className="text-titleXxxl font-bold text-transparent  border-red inline-block"
              style={{ WebkitTextStroke: "2px var(--red)" }}
              
            >
              Make Your Way
            </div>
            <p className="text-titleSm mt-2">Discover the path to greatness</p>
          </div>
        </div>
      </div>
      <div
        className="h-10 w-full"
        style={{
          background:
            "linear-gradient(to bottom, #47514f 0%, rgba(255, 0, 0, 0) 30%)",
        }}
      ></div>
    </div>
  );
}
