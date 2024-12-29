/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from "react-helmet";
import HomeTopBanner from './HomeTopBanner';
import HomeCategory from './HomeCategory';
import useLoader from '../shared/loader/Loader';
import FinalLoader from '../shared/loader/FinalLoader';
import MakeYourWay from './MakeYourWay';
import HomeTrendyProduct from './HomeTrendyProduct';
import HomeOfferCollection from './HomeOfferCollection';
import HomeStartingAt from './HomeStartingAt';
import HomeLimitedEdition from './HomeLimitedEdition';
import HomeGallery from './HomeGallery';
import Footer from '../shared/Footer/Footer';
const Home = () => {
  const { loading, online } = useLoader();
  if (loading || !online) {
    return <FinalLoader />;
  }
  return (
    <div className=''>
      <Helmet>
        {/* for SEC */}
        <title>Home - Shoesage</title>
        <meta name="description" content="Learn more about our company and team on our About Us page." />
        <meta name="keywords" content="About, Company, Team, Services" />
        <meta property="og:title" content="About Us - Your Website Name" />
        <meta property="og:description" content="Learn more about our company and team on our About Us page." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* top banner start */}
      <div className=''>
        <HomeTopBanner />
      </div>
      <div className=''>
        <HomeCategory/>
      </div>
      <div className='mt-20 mb-16'>
        <MakeYourWay/>
      </div>
      <div className=''>
        <HomeTrendyProduct/>
      </div>
      <div className=''>
        <HomeOfferCollection/>
      </div>
      <div className=''>
        <HomeStartingAt/>
      </div>
      <div className='hidden lg:block'>
        <HomeLimitedEdition/>
      </div>
      <div className='mt-40 lg:mt-0'>
        <HomeGallery/>
      </div>
      <div className=''>
        <Footer/>
      </div>
      </div>
      
  );
};

export default Home;