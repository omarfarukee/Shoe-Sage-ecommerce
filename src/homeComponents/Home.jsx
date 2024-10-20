import React from 'react'
import { Helmet } from "react-helmet";
import HomeTopBanner from './HomeTopBanner';
import HomeCategory from './HomeCategory';
const Home = () => {

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
      </div>
      
  );
};

export default Home;