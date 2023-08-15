import React from "react";

import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts";
import TrendingProd from "../components/Route/TrendCard/TrendingProd";
import LatestProducts from "../components/Route/LatestProducts/LatestProducts";



import Footer from "../components/Layout/Footer/Footer";
import Navbar from "../components/Layout/Navbar";


const Products = () => {
 
 

  return (
    <>
     <Navbar active={2} />

      {/* calling cards */}
      <div className="flex flex-col">
        <FeaturedProducts />

        
        <LatestProducts />
        <TrendingProd />
        <Footer />
      </div>
    </>
  );
};

export default Products;
