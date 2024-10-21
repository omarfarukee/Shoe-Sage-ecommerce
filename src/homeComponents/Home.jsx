import React from 'react'
import { Helmet } from "react-helmet";
import HomeTopBanner from './HomeTopBanner';
import HomeCategory from './HomeCategory';
import useLoader from '../shared/loader/Loader';
import FinalLoader from '../shared/loader/FinalLoader';
import MakeYourWay from './MakeYourWay';
import HomeTrendyProduct from './HomeTrendyProduct';
const Home = () => {
  const { loading, online } = useLoader();
  if (loading || !online) {
    return <FinalLoader />;
  }
  return (
    <div>
      <Helmet>
        {/* for SEC */}
        <title>Home - CoderXen</title>
        <meta name="description" content="Learn more about our company and team on our About Us page." />
        <meta name="keywords" content="About, Company, Team, Services" />
        <meta property="og:title" content="About Us - Your Website Name" />
        <meta property="og:description" content="Learn more about our company and team on our About Us page." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* top banner start */}
      <div>
        <HomeTopBanner />
      </div>
      <div>
        <HomeCategory/>
      </div>
      <div className='mt-20 mb-16'>
        <MakeYourWay/>
      </div>
      <div>
        <HomeTrendyProduct/>
      </div>
      </div>
      
  );
};

export default Home;