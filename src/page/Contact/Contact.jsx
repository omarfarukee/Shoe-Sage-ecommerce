// eslint-disable-next-line no-unused-vars
import React from 'react'
// import shoe from "../../assets/backgrounds/shoe3.jpeg";
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import ContactSVG from '../../SVG/ContactSVG';
import { LiaFacebookMessenger, LiaWhatsapp } from 'react-icons/lia';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';

export default function Contact() {
  const { loading, online } = useLoader();
  if (loading || !online) {
    return <FinalLoader />;
  }
  return (
    <div className=''>
      
          <ContactSVG/>

          <div className='pt-40'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='formal-collection-text text-titleXxxl text-red'>Get in touch</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nobis quidem doloremque.</p>
            </div>

          <div className='flex flex-wrap gap-5 justify-center mt-10'>
            <div className='w-[300px] h-[250px] border rounded-lg p-5 hover:shadow-lg z-10 transition-all duration-300'>
                <div>
                  <p className='p-3 w-16 rounded-xl bg-rose-50'>
                    <LiaFacebookMessenger className='text-titleMd' />
                  </p>
                  <p className='text-titleXsm mt-10'>Chat to sales</p> 
                  <p className='text-titleXXsm'>Speak to our friendly team</p>     
                  <button className='px-3  py-1 rounded-lg mt-5 bg-rose-50 hover:text-white hover:bg-red transition-all duration-300 flex items-center gap-1'>Via Messenger <LiaFacebookMessenger /></button>          
                </div>
            </div>
            <div className='w-[300px] h-[250px] border rounded-lg p-5 hover:shadow-lg z-10 transition-all duration-300'>
                <div>
                  <p className='p-3 w-16 rounded-xl bg-rose-50'>
                    <LiaWhatsapp  className='text-titleMd' />
                  </p>
                  <p className='text-titleXsm mt-10'>Chat to support</p> 
                  <p className='text-titleXXsm'>We&apos;re here to help</p>    
                  <button className='px-3  py-1 rounded-lg mt-5 bg-rose-50 hover:text-white hover:bg-red transition-all duration-300 flex items-center gap-1'>Via What&apos;s app <LiaWhatsapp  /></button>          
                </div>
            </div>
            <div className='w-[300px] h-[250px] border rounded-lg p-5 hover:shadow-lg z-10 transition-all duration-300'>
                <div>
                  <p className='p-3 w-16 rounded-xl bg-rose-50'>
                    <IoLocationOutline  className='text-titleMd' />
                  </p>
                  <p className='text-titleXsm mt-10'>Visit us</p> 
                  <p className='text-titleXXsm'>Visit out office HQ</p>     
                  <button className='px-3  py-1 rounded-lg mt-5 bg-rose-50 hover:text-white hover:bg-red transition-all duration-300 flex items-center gap-1'>Get direction <IoLocationOutline  /></button>          
                </div>
            </div>
            <div className='w-[300px] h-[250px] border rounded-lg p-5 hover:shadow-lg z-10 transition-all duration-300'>
                <div>
                  <p className='p-3 w-16 rounded-xl bg-rose-50'>
                    <IoCallOutline  className='text-titleMd' />
                  </p>
                  <p className='text-titleXsm mt-10'>Call us</p> 
                  <p className='text-titleXXsm'>Mon-Fri 8am to 5pm</p>     
                  <button className='px-3  py-1 rounded-lg mt-5 bg-rose-50 hover:text-white hover:bg-red transition-all duration-300 flex items-center gap-1'>+880 1942361251 <IoCallOutline  /></button>          
                </div>
            </div>
          </div>

          </div>

    </div>
  )
}
