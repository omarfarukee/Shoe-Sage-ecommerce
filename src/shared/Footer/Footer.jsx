// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from "../../assets/logo/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
export default function Footer() {
  return (
    <div>
      <div className='border h-[500px]   bg-[#e4e4e4] justify-center pt-20'>
          <div className='flex justify-center gap-10 px-5'>

        
            <div className='border w-[300px] h-[300px] '>
                <img src={logo} className='w-40' alt="" />
                <p className='mt-5'>1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</p>
                <p className='mt-5'>sale@uomo.com +1 246-345-0695</p>
                <div className='flex gap-10 mt-5'>
                  <FaFacebook/>
                  <FaLinkedin/>
                  <FaInstagram/>
                </div>
            </div>
            <div className='border w-[300px] h-[300px] '>
                <h3 className='text-lg mb-10'>Company</h3>
                <a href="" className=''><p>About us</p></a>
                <a href=""><p className='mt-2'>About us</p></a>
                <a href=""><p className='mt-2'>About us</p></a>
                <a href=""><p className='mt-2'>About us</p></a>
                <a href=""><p className='mt-2'>About us</p></a>
            </div>
            <div className='border w-[300px] h-[300px] '>
                <h3 className='text-lg mb-10'>Shop</h3>
                <a href="" className=''><p>Dhaka</p></a>
                <a href=""><p className='mt-2'>uttora</p></a>
                <a href=""><p className='mt-2'>dhaka</p></a>
                <a href=""><p className='mt-2'>CMS</p></a>
                <a href=""><p className='mt-2'>Dhaka</p></a>
            </div>
            <div className='border w-[300px] h-[300px] '>
                <h3 className='text-lg mb-10'>Subscribe</h3>
                <p className='mt-10'>Be the first to get the latest news about trends, promotions, and much more!</p>
                <div className='flex'>
                  <input className='h-11 rounded-sm' type="email" />
                  <button className='h-11  w-20 bg-white'>Join</button>
                </div>
                <div className='mt-5'>
              <p>Terms & conditions <span className='font-bold underline text-blue-600'>Policy</span> </p>
            </div>
            </div>
            
            </div>

        <div className='flex justify-center'>
          <div className='h-[2px] w-[90vw] bg-red mt-5'></div>
        </div>
        <div className='flex justify-center mt-5'>
          <p>©2024 Show sage</p>
        </div>
            
      </div>

    </div>
  )
}
