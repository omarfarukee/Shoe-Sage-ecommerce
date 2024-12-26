// eslint-disable-next-line no-unused-vars
import React from 'react'
// import shoe from "../../assets/backgrounds/shoe3.jpeg";
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import ContactSVG from '../../SVG/ContactSVG';
import { LiaFacebookMessenger, LiaWhatsapp } from 'react-icons/lia';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import Footer from '../../shared/Footer/Footer';
import { AiOutlineSend } from 'react-icons/ai';

export default function Contact() {
  const { loading, online } = useLoader();
  if (loading || !online) {
    return <FinalLoader />;
  }
  return (
    <div className=''>

      <ContactSVG />

      <div className='pt-40 mb-40'>
        <div className='flex flex-col justify-center items-center text-center'>
          <h1 className='formal-collection-text lg:text-titleXxxl text-titleXl text-red'>Get in touch</h1>
          <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nobis quidem doloremque.</p>
        </div>

        <div className='flex flex-wrap gap-5 justify-center mt-10'>
          <div className='w-[300px] h-[250px] border border-[#0000000a] rounded-lg p-5 hover:shadow-lg z-10 transition-all duration-300'>
            <div>
              <p className='p-3 w-16 rounded-xl bg-rose-50'>
                <LiaFacebookMessenger className='text-titleMd text-red' />
              </p>
              <p className='text-titleXsm mt-10'>Chat to sales</p>
              <p className='text-titleXXsm'>Speak to our friendly team</p>
              <button className='px-3  py-1 rounded-lg mt-5 bg-rose-50 hover:text-white hover:bg-red transition-all duration-300 flex items-center gap-1'>Via Messenger <LiaFacebookMessenger /></button>
            </div>
          </div>
          <div className='w-[300px] h-[250px] border border-[#0000000a] rounded-lg p-5 hover:shadow-lg z-10 transition-all duration-300'>
            <div>
              <p className='p-3 w-16 rounded-xl bg-rose-50'>
                <LiaWhatsapp className='text-titleMd text-red' />
              </p>
              <p className='text-titleXsm mt-10'>Chat to support</p>
              <p className='text-titleXXsm'>We&apos;re here to help</p>
              <button className='px-3  py-1 rounded-lg mt-5 bg-rose-50 hover:text-white hover:bg-red transition-all duration-300 flex items-center gap-1'>Via What&apos;s app <LiaWhatsapp /></button>
            </div>
          </div>
          <div className='w-[300px] h-[250px] border border-[#0000000a] rounded-lg p-5 hover:shadow-lg z-10 transition-all duration-300'>
            <div>
              <p className='p-3 w-16 rounded-xl bg-rose-50'>
                <IoLocationOutline className='text-titleMd text-red' />
              </p>
              <p className='text-titleXsm mt-10'>Visit us</p>
              <p className='text-titleXXsm'>Visit out office HQ</p>
              <button className='px-3  py-1 rounded-lg mt-5 bg-rose-50 hover:text-white hover:bg-red transition-all duration-300 flex items-center gap-1'>Get direction <IoLocationOutline /></button>
            </div>
          </div>
          <div className='w-[300px] h-[250px] border border-[#0000000a] rounded-lg p-5 hover:shadow-lg z-10 transition-all duration-300'>
            <div>
              <p className='p-3 w-16 rounded-xl bg-rose-50'>
                <IoCallOutline className='text-titleMd text-red' />
              </p>
              <p className='text-titleXsm mt-10'>Call us</p>
              <p className='text-titleXXsm'>Mon-Fri 8am to 5pm</p>
              <button className='px-3  py-1 rounded-lg mt-5 bg-rose-50 hover:text-white hover:bg-red transition-all duration-300 flex items-center gap-1'>+880 1942361251 <IoCallOutline /></button>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center mt-10 justify-center'>

          <div className='mt-4 mb-5 flex flex-col items-center'>
            <h1 className='text-titleMd'>Message us</h1>
            <p>We will get back you within 24 hours.</p>
          </div>

          <div className='lg:w-[70%] w-[90%] border border-[#0000000a] p-5 rounded-xl bg-transparent backdrop-blur-contact z-10'>
            <form className=''>
              <div className='flex w-full gap-3'>
                <div className='w-full'>
                  <label className="label">
                    <span className="label-text">First Name <span className='text-red'>*</span> </span>
                  </label>
                  <input type="text" placeholder="First name..." className="input w-full border-[#00000026] border " />
                </div>
                <div className='w-full'>
                  <label className="label">
                    <span className="label-text">Last Name <span className='text-red'>*</span></span>
                  </label>
                  <input type="text" placeholder="Last name..." className="w-full input border-[#00000026] border " />
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email <span className='text-red'>*</span></span>
                </label>
                <input type="text" placeholder="Email..." className="mt-3 input border-[#00000026] border w-[99%] lg:w-full" />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Phone <span className='text-red'>*</span></span>
                </label>
                <input type="text" placeholder="Phone..." className="mt-3 input border-[#00000026] border w-[99%] lg:w-full" />
              </div>



              <div>
                <label className="label">
                  <span className="label-text">You message <span className='text-red'>*</span></span>
                </label>
                <textarea type="text" placeholder="Write message.." className="mt-3 p-5 input border-[#00000026] border w-[99%] lg:w-full h-40" />
              </div>


              <button type='submit' className='px-3  py-1 w-[200px] h-[50px] justify-center rounded-lg mt-5 bg-rose-100 hover:text-white hover:bg-red transition-all duration-300 flex items-center gap-1'>Submit<AiOutlineSend /></button>
             
            </form>
            
          </div>
          <ContactSVG />
        </div>
      </div>
      <Footer />

    </div>
  )
}
