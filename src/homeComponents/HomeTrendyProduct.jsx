import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiHeart } from 'react-icons/ci';
import { IoMdHeart } from 'react-icons/io';

export default function HomeTrendyProduct() {
  // State to store the shoe data
  const [shoeData, setShoeData] = useState([]);
  const [wish, setWish] = useState(false);
  // Fetch data with Axios when the component mounts
  useEffect(() => {
    axios.get('/Shoe.json') // Replace with your actual JSON file path
      .then(response => {
        setShoeData(response.data); // Store the data in the state
      })
      .catch(error => {
        console.error("There was an error fetching the shoe data!", error);
      });
  }, []);

  

  return (
    <div>
      <div className='flex justify-center mb-5'>
        <div className='text-titleMd'>
          Our trendy <span className='font-bold'>Products</span>
        </div>
      </div>

      {/* Display the fetched shoe data */}
      <div className='flex justify-center'>
      <div className='flex flex-wrap gap-6  w-[1200px] justify-center'>
        {shoeData.map((shoe) => (
          <div key={shoe.id} className='w-[260px]'>
          <div className='w-full border px-2 h-[280px] flex flex-col justify-center items-center transition-all group relative overflow-hidden'>
            {/* First Image */}
            <img
              src={shoe.img_1}
              alt={shoe.product_name}
              className='w-[200px] transition-opacity duration-500 opacity-100 group-hover:opacity-0 absolute'
            />
            {/* Second Image (on hover) */}
            <img
              src={shoe.img_3}
              alt={shoe.product_name}
              className='w-[200px] transition-opacity duration-500 opacity-0 group-hover:opacity-100'
            />
            <button className="absolute w-[230px] shadow-lg hover:bg-gray-200 transition-all duration-500 bg-gray-100 py-2 rounded uppercase top-[280px] group-hover:top-[230px] text-titleXXsm">Add to cart</button>
          </div>
          <div className='mt-4'>
            <p className='text-titleXXsm text-gray-500 uppercase'>{shoe?.category}</p>
            <div className='absolute flex'>
               { !wish && <CiHeart className='text-titleSm' onClick={()=> setWish(true)} />}
                {wish&&<IoMdHeart className='text-titleSm text-red' onClick={()=> setWish(false)} />}
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </div>
      </div>
      
  );
}
