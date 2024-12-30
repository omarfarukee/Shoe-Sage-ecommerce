// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../../shared/Footer/Footer';
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import gif1 from "../../assets/gif-img/gif1.gif";
import ContactSVG from '../../SVG/ContactSVG';
import img1 from "../../assets/shoe-images/part1.jpg"
import img2 from "../../assets/shoe-images/part2.jpg"
import img3 from "../../assets/shoe-images/part3.jpg"
import img4 from "../../assets/shoe-images/part4.jpg"
import img5 from "../../assets/shoe-images/part5.jpg"
import { Helmet } from 'react-helmet';
const AboutUs = () => {
    const { loading, online } = useLoader();
    if (loading || !online) {
        return <FinalLoader />;
    }

    return (
        <div className='overflow-hidden'>
            <Helmet>
        {/* for SEC */}
        <title>About US - Shoesage</title>
        <meta name="description" content="Learn more about our company and team on our About Us page." />
        <meta name="keywords" content="About, Company, Team, Services" />
        <meta property="og:title" content="About Us - Your Website Name" />
        <meta property="og:description" content="Learn more about our company and team on our About Us page." />
        <meta property="og:type" content="website" />
      </Helmet>
            <div>
                <div className="relative flex justify-center items-center w-full h-[70vh] mb-20">
                    {/* Image */}
                    <img className="w-full h-full object-cover" src={gif1} alt="Gif" />

                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

                    {/* Text on top of the image */}
                    <div className="absolute flex justify-center items-center text-white text-center" data-aos="fade-up"
                        data-aos-duration="3000">
                        <div>
                            <h1 className='formal-collection-text lg:text-titleXxxl text-titleXl text-red' data-aos="fade-up"
                                data-aos-duration="3000">About us</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* mission */}
            <div className='w-full lg:h-[70vh] lg:flex items-center lg:justify-between mb-20'>

                <ContactSVG />

                <div className='lg:w-[40%] flex items-center' data-aos="fade-right"
                    data-aos-duration="2000">
                    <h1 className='absolute lg:text-titleLg font-semibold mb-12 lg:left-[30%] left-[20%] text-titleSm'>Our Mission</h1>
                    <div className='lg:w-[90%] w-[70%] h-[2px] bg-red'></div>
                    <div className='h-16 w-16 rounded-full bg-red'></div>
                </div>

                <div className='lg:w-[50%] lg:h-[400px] lg:mr-5 rounded-2xl lg:mt-0 mt-3 flex px-3 lg:px-0'>
                    <div className='w-56 h-56 rounded-full border bg-[#c3001083] absolute ml-[30%] mt-10'></div>
                    <div className='w-20 h-20 rounded-full border bg-[#c3001083] absolute ml-[10%] mt-20'></div>
                    <div className='w-10 h-10 rounded-full border bg-[#c3001083] absolute ml-[5%] mt-72'></div>
                    <div>
                        <div className='w-full border-[#c3001017] shadow-lg h-full border mr-5 rounded-2xl  backdrop-blur-lg z-10 p-6 items-center flex text-start'>
                            <h1 data-aos="fade-left"
                                data-aos-duration="3000" className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt ratione, eius nemo quia mollitia molestias laborum tempore iure, ipsa eum amet officia saepe quidem, tenetur esse cum? Maiores nostrum iure molestiae sapiente officia fugit sint accusamus? Ipsum iste quasi harum, id dignissimos provident nesciunt qui numquam quisquam modi illum accusamus a enim sunt. Numquam earum voluptatem recusandae labore nihil! Voluptates impedit, eveniet dignissimos suscipit voluptatum cum officia nostrum? Ratione nobis maiores fugiat impedit et modi culpa vitae ea expedita?</h1>
                        </div>
                    </div>

                </div>

            </div>

            {/* vision */}
            <div className='w-full lg:h-[70vh] lg:flex flex-row-reverse items-center lg:justify-between mb-20'>

                <ContactSVG />

                <div className='lg:w-[40%] flex flex-row-reverse items-center' data-aos="fade-left"
                    data-aos-duration="2000">
                    <h1 className='absolute lg:text-titleLg font-semibold mb-12 lg:right-[30%] right-[20%] text-titleSm'>Our vision</h1>
                    <div className='lg:w-[90%] w-[70%] h-[2px] bg-red'></div>
                    <div className='h-16 w-16 rounded-full bg-red'></div>
                </div>

                <div className='lg:w-[50%] lg:h-[400px] lg:ml-5 rounded-2xl lg:mt-0 mt-3 flex px-3 lg:px-0'>
                    <div className='w-56 h-56 rounded-full border bg-[#c3001083] absolute ml-[30%] mt-10'></div>
                    <div className='w-20 h-20 rounded-full border bg-[#c3001083] absolute ml-[10%] mt-20'></div>
                    <div className='w-10 h-10 rounded-full border bg-[#c3001083] absolute ml-[5%] mt-72'></div>
                    <div>
                        <div className='w-full border-[#c3001017] shadow-lg h-full border mr-5 rounded-2xl  backdrop-blur-lg z-10 p-6 items-center flex text-start'>
                            <h1 data-aos="fade-right"
                                data-aos-duration="3000" className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt ratione, eius nemo quia mollitia molestias laborum tempore iure, ipsa eum amet officia saepe quidem, tenetur esse cum? Maiores nostrum iure molestiae sapiente officia fugit sint accusamus? Ipsum iste quasi harum, id dignissimos provident nesciunt qui numquam quisquam modi illum accusamus a enim sunt. Numquam earum voluptatem recusandae labore nihil! Voluptates impedit, eveniet dignissimos suscipit voluptatum cum officia nostrum? Ratione nobis maiores fugiat impedit et modi culpa vitae ea expedita?</h1>
                        </div>
                    </div>

                </div>

            </div>


            <div className=''>
                <div className='flex lg:gap-10 gap-1 justify-center lg:h-[600px] items-center px-2'>
                    <div className='relative' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className="absolute top-0 left-0 w-full bg-black opacity-50 lg:mt-8 h-[200px] lg:h-[500px] rounded-xl"></div>
                        <img className='lg:h-[500px] h-[200px] rounded-xl lg:mt-8' src={img1} alt="" />
                    </div>
                    <div className='relative' data-aos="fade-down"
                        data-aos-duration="3000">
                        <div className="absolute top-0 left-0 w-full bg-black opacity-50 mb-6 h-[200px] lg:h-[500px] rounded-xl"></div>
                        <img className='lg:h-[500px] h-[200px] rounded-xl mb-6' src={img2} alt="" />
                    </div>
                    <div className='relative' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className="absolute top-0 left-0 w-full bg-black opacity-50 lg:mt-10 h-[200px] lg:h-[500px] rounded-xl"></div>
                        <img className='lg:h-[500px] h-[200px] rounded-xl lg:mt-10' src={img3} alt="" />
                    </div>
                    <div className='relative' data-aos="fade-down"
                        data-aos-duration="3000">
                        <div className="absolute top-0 left-0 w-full bg-black opacity-50 mb-7 lg:mb-12 h-[200px] lg:h-[500px] rounded-xl"></div>
                        <img className='lg:h-[500px] h-[200px] rounded-xl mb-7 lg:mb-12' src={img4} alt="" />
                    </div>
                    <div className='relative' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className="absolute top-0 left-0 w-full bg-black opacity-50 lg:mt-7 h-[200px] lg:h-[500px] rounded-xl"></div>
                        <img className='lg:h-[500px] h-[200px] rounded-xl lg:mt-7' src={img5} alt="" />
                    </div>


                    <div className='absolute' data-aos="fade-Up"
                        data-aos-duration="3000">
                        <h1 className='formal-collection-text lg:text-[13em] text-titleXl text-red '>Our History</h1>
                    </div>

                </div>


                <div className=' lg:h-[400px] w-full relative flex justify-center mb-20 px-3 '>

                    <ContactSVG />

                    <div className='lg:w-[60%] rounded-xl p-5 text-center border-[#c300100e] shadow-lg bg-transparent backdrop-blur-contact justify-center flex items-center border' data-aos="fade-down"
                        data-aos-duration="3000">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates perferendis neque eligendi quam commodi sit ipsa. Quos saepe quisquam dolorem possimus dolorum suscipit asperiores repellendus pariatur amet aliquid? Amet distinctio consequuntur, aut iure voluptates laboriosam debitis, non magnam ab odio natus nulla sunt iusto aspernatur. Modi ad rem voluptas! Dolorum repudiandae doloribus nesciunt. Nisi quibusdam explicabo eum cumque possimus temporibus culpa tenetur adipisci, facere necessitatibus repellendus optio tempora nam minus nesciunt. Beatae sequi temporibus facilis delectus. At debitis cupiditate tenetur praesentium voluptate a? Esse facilis aperiam accusamus ullam quam qui ipsam natus asperiores, soluta eius doloribus voluptatibus, tempore reprehenderit!
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default AboutUs;
