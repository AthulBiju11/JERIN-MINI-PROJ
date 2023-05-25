import React from "react";

import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts";
import TrendingProd from "../components/Route/TrendCard/TrendingProd";
import LatestProducts from "../components/Route/LatestProducts/LatestProducts";




import Navbar from "../components/Layout/Navbar";


const Products = ({ activeHeading }) => {
//   const [ setActive] = useState(false);
 

//   window.addEventListener("scroll", () => {
//     if (window.screenY > 70) {
//       setActive(true);
//     } else {
//       setActive(false);
//     }
//   });
  return (
    <>
     <Navbar active={2} />

      {/* calling cards */}
      <div className="flex flex-col">
        <FeaturedProducts />

        <TrendingProd />
        <LatestProducts />
      </div>
    </>
  );
};

export default Products;
