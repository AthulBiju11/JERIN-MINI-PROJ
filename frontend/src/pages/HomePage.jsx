import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Hero2 from "../components/Route/Hero2/Hero2";
import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts.jsx";
import LatestProducts from "../components/Route/LatestProducts/LatestProducts";
import TrendingProd from "../components/Route/TrendCard/TrendingProd";
import Footer from "../components/Layout/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <Hero2 />
      <TrendingProd />
      <Footer />
    </div>
  );
};

export default HomePage;
