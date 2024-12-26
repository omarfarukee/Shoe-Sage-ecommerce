// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../../shared/Footer/Footer';
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import gif1 from "../../assets/gif-img/gif1.gif";
const AboutUs = () => {
    const { loading, online } = useLoader();
    if (loading || !online) {
        return <FinalLoader />;
    }

    return (
        <div className=''>
            <div>
                <div className="relative flex justify-center items-center w-full h-[600px]">
                    {/* Image */}
                    <img className="w-full h-full object-cover" src={gif1} alt="Gif" />

                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

                    {/* Text on top of the image */}
                    <div className="absolute flex justify-center items-center text-white text-center" data-aos="fade-up"
                        data-aos-duration="3000">
                        <div>
                            <h1 className='formal-collection-text lg:text-titleXxxl text-titleXl text-red' data-aos="fade-down"
                                data-aos-duration="3000">About us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
