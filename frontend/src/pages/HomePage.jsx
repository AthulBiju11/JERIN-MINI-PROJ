import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Hero2 from "../components/Route/Hero2/Hero2";
import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts.jsx";
import LatestProducts from "../components/Route/LatestProducts/LatestProducts";
import TrendingProd from "../components/Route/TrendCard/TrendingProd";
import Footer from "../components/Layout/Footer/Footer";
import Navbar from "../components/Layout/Navbar";

const HomePage = () => {
  return (
    <div>
      <Header  />
      <div className="sticky top-[0] z-10">
        <Navbar active={1} />
      </div>
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
