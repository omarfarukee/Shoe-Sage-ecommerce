import React, { useEffect } from "react";
import women from "../assets/category-img/women.jpg";
import men from "../assets/category-img/man.jpg";
import kids from "../assets/category-img/kids.jpg";
import gifts from "../assets/category-img/gifts.jpg";
import { CiShoppingBasket } from "react-icons/ci";

export default function HomeCategory() {

  return (
    <div className="flex justify-center mt-20">
      <div className="p-5 flex gap-5 w-[1300px] justify-center overflow-hidden">
        {/* card 1 */}
        <div className="relative group" data-aos="fade-right"
     data-aos-duration="1000">
          {/* Image */}
          <img
            className="w-[600px] rounded"
            src={women}
            alt="Women's Collection"
          />
          {/* Text and Button */}
          <div className="absolute top-[70%] px-5 text-white  transition-opacity duration-300 z-10">
            <p className="uppercase">Hot list</p>
            <div className="text-titleSm">
              <span className="font-bold">Women</span> Collection
            </div>
            <button className="group uppercase transition-all duration-300">
              <span className="flex ">
                Shop Now
                <CiShoppingBasket className="text-[20px] transition-all duration-300" />
              </span>
              <div className="w-5 h-[2px] bg-white group-hover:w-20 transition-all duration-300"></div>
            </button>
          </div>

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00000086] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-5 rounded"></div>
        </div>

        <div>
          {/* card 2 */}
          <div className="relative group mb-5" data-aos="fade-left"
     data-aos-duration="1000">
            {/* Image */}
            <img
              className="w-[600px] rounded"
              src={men}
              alt="Women's Collection"
            />
            {/* Text and Button */}
            <div className="absolute top-[50%] px-5 text-white  transition-opacity duration-300 z-10">
              <p className="uppercase">Hot list</p>
              <div className="text-titleSm">
                <span className="font-bold">Men</span> Collection
              </div>
              <button className="group uppercase transition-all duration-300">
                <span className="flex ">
                  Shop Now
                  <CiShoppingBasket className="text-[20px] transition-all duration-300" />
                </span>
                <div className="w-5 h-[2px] bg-white group-hover:w-20 transition-all duration-300"></div>
              </button>
            </div>

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00000086] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="flex gap-5">
            {/* card 3 */}
            <div className="relative group mb-5 " data-aos="fade-up"
     data-aos-duration="1000">
              {/* Image */}
              <img
                className="w-[290px] rounded"
                src={kids}
                alt="Women's Collection"
              />
              {/* Text and Button */}
              <div className="absolute top-[40%] px-5 text-white  transition-opacity duration-300 z-10 leading-[10px]">
                <p className="uppercase">Hot list</p>
                <div className="text-titleSm">
                  <span className="font-bold leading-[60px]">Kids</span>{" "}
                  Collection
                </div>
                <button className="group uppercase transition-all duration-300">
                  <span className="flex items-center">
                    Shop Now
                    <CiShoppingBasket className="text-[20px] transition-all duration-300" />
                  </span>
                  <div className="w-5 h-[2px] bg-white group-hover:w-20 transition-all duration-300"></div>
                </button>
              </div>

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00000086] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* card 3 */}
            <div className="relative group mb-5 " data-aos="fade-up"
                data-aos-duration="1500">
              {/* Image */}
              <img
                className="w-[290px] rounded"
                src={gifts}
                alt="Women's Collection"
              />
              {/* Text and Button */}
              <div className="absolute top-[25%] px-5 text-white  transition-opacity duration-300 z-10 leading-[10px]">
                
                <div className="text-titleSm">
                  <span className="font-bold leading-[60px]">E-Gift </span>{" "}
                  Cards
                </div>
                <p className="uppercase text-[12px] mb-5">Surprise someone with the gift they
                really want.</p>
                <button className="group uppercase transition-all duration-300">
                  <span className="flex items-center">
                    Shop Now
                    <CiShoppingBasket className="text-[20px] transition-all duration-300" />
                  </span>
                  <div className="w-5 h-[2px] bg-white group-hover:w-20 transition-all duration-300"></div>
                </button>
              </div>

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000c7] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
