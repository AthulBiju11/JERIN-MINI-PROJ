import React from "react";
import Styles from "../../../styles/style";
import TrendCard from "../../TrendingProductCard/TrendProdCard";
import TrendProdCard2 from "../../TrendProdCard2/TrendProdCard2";

const TrendingProd = () => {
  return (
    <div>
      {/* Heading */}
      <div className={`${Styles.section}`}>
        <div className={`${Styles.heading} mt-[50px] flex justify-center`}>
          <h1>Trending Products</h1>
        </div>
      </div>
      {/* Heading */}

      {/* product card */}
      <div className="flex w-[100%] justify-center ">
        <div className="grid grid-cols-4 gap-[30px]">
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
        </div>
      </div>

      <div className="flex w-[100%] justify-center ">
        <TrendProdCard2 />
      </div>

      {/* product card */}
    </div>
  );
};

export default TrendingProd;
