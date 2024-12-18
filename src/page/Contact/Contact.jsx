// eslint-disable-next-line no-unused-vars
import React from 'react'
import shoe from "../../assets/backgrounds/shoe3.jpeg";
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import Footer from '../../shared/Footer/Footer';
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
export default function Contact() {
  const { loading, online } = useLoader();
  if (loading || !online) {
    return <FinalLoader />;
  }
  return (
    <div className=' text-fontMd overflow-hidden'>
      {/* Background Section */}
            <div
              className="overflow-hidden h-[65vh] w-screen flex justify-center items-center"
              style={{
                backgroundImage: `url(${shoe})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute h-[65vh] inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 formal-collection-text text-titleXl  lg:text-[12em] text-red">
                <h1>Contact</h1>
              </div>
            </div>
             <div className='p-2'>
                        <div className='pt-28 text-titleLg p-5'>
                            Message Us
                        </div>
                        <div className='flex lg:flex-row flex-col justify-center mt-5'>
                        <div className='lg:w-[700px]'>
                            <form>
                                <div className='flex flex-row gap-3'>
                                    <input type="text" placeholder="First name..." className="input input-bordered w-full max-w-xs" />
                                    <input type="text" placeholder="Last name..." className="input input-bordered w-full max-w-xs " />
                                </div>
                                <input type="text" placeholder="Email..." className="mt-3 input input-bordered w-[99%] lg:w-[650px]" />
                                <input type="text" placeholder="Phone..." className="mt-3 input input-bordered w-[99%] lg:w-[650px]" />
                                
                                <textarea type="text" placeholder="Write message..." className="mt-3 pt-3 input input-bordered lg:w-[650px] w-[99%] h-40" />
                                <div className='flex justify-center'>
                                   <button className=" bg-red mt-5 h-12 uppercase  text-white rounded-lg w-[300px] ml-">
                                    Submit
                                </button>
                                </div>
                               
                            </form>
                        </div>
                        {/* cart */}
                        <div className="h-[400px] w-[400px] p-5">
                            <h1 className='text-titleSm'>Chat us with</h1>
                            <div className='flex items-center gap-3 mt-5'>
                              <FaWhatsapp className='text-[#25d366] text-titleSm cursor-pointer'/> Via Whatsapp
                            </div>
                            <div className='flex items-center gap-3 mt-5'>
                              <FaFacebookMessenger className='text-[#cf40be] text-titleSm cursor-pointer'/> Via Messenger
                            </div>
            
                            
                        </div>
                        </div>
                        <div className='mt-10'>
                            
                        <Footer/>
                        </div>
                    </div>
    </div>
  )
}
