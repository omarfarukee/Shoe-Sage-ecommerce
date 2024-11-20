import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function SearchNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative">
      {/* Search Icon Toggle */}
      <label className="swap swap-rotate" onClick={toggleSearch}>
        {!isSearchOpen ? (
          <CiSearch className="text-3xl " />
        ) : (
          <IoCloseOutline className="text-3xl " />
        )}
      </label>

      {/* Search Area */}
      <div
        className={`fixed  z-10  left-0 w-full bg-white shadow-lg transition-all mt-[96px] duration-500 ease-in-out ${
          isSearchOpen
            ? "top-0 opacity-100 h-[400px]"
            : "-top-[500px]  opacity-0 h-[200px]"
        }`}
      >
        <div className="text-titleXXsm ml-[8%] mt-14 text-gray-500 uppercase">
          What Are You Looking For?
        </div>
        <div className="p-4 flex justify-center items-center gap-4">
          <input
            type="text"
            className=" p-2 w-[80%] border-b-2 border-red outline-none bg-transparent"
            placeholder="Search ..."
          />
          <button className=""><CiSearch className="text-3xl text-red" /></button>
        </div>
        <div className="text-titleXsm ml-[8%] mt-2 text-gray-500 uppercase">
          Quick links
        </div>
        {/* lins buttons */}
        <div className="ml-[8%] mt-5">
        <button className="group text-sm uppercase transition-all duration-300">
          Formal Collection
          <div className="w-8 h-[2px] bg-red group-hover:w-28 transition-all duration-300"></div>
        </button>
        <br />
        <button className="group text-sm uppercase transition-all duration-300 mt-4">
          Sports collection
          <div className="w-8 h-[2px] bg-red group-hover:w-28 transition-all duration-300"></div>
        </button>
        <br />
        <button className="group text-sm uppercase transition-all duration-300 mt-4">
        Snicker collection
          <div className="w-8 h-[2px] bg-red group-hover:w-28 transition-all duration-300"></div>
        </button>    
        </div>
        
      </div>
      <div
        className={`fixed left-0 w-full bg-[#000000d0] shadow-lg transition-all mt-[100px] duration-500 ease-in-out ${
          isSearchOpen
            ? "top-0 opacity-100 h-[100vh]"
            : "-top-[120vh]  opacity-0 h-[200px]"
        }`}
      ></div>
    </div>
  );
}
