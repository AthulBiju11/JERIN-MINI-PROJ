import React from "react";
import Styles from "../../../styles/style";
import LatestProdCard from "../../LatestProductsCard/LatestProdCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const LatestProducts = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      {/* Heading */}
      <div className={`${Styles.section} flex justify-center`}>
        <div className={`${Styles.heading} mt-[60px]`}>
          <h1>Latest Products</h1>
        </div>
      </div>
      {/* Heading */}

      {/* items have to be linked similar to NAvbar */}

      <div className="mb-8">
        <ul className="flex justify-center gap-5">
          <li
            className={
              active === 0
                ? "underline text-[#FB2E86]"
                : "text-[#151875] hover:underline hover:text-[#FB2E86]"
            }
          >
            <Link to="" onClick={() => setActive(0)}>
              New Arival
            </Link>
          </li>
          <li
            className={
              active === 1
                ? "underline text-[#FB2E86]"
                : "text-[#151875] hover:underline hover:text-[#FB2E86]"
            }
          >
            <Link to="" onClick={() => setActive(1)}>
              Best Seller
            </Link>
          </li>
          <li
            className={
              active === 2
                ? "underline text-[#FB2E86]"
                : "text-[#151875] hover:underline hover:text-[#FB2E86]"
            }
          >
            <Link to="" onClick={() => setActive(2)}>
              Special Offers
            </Link>
          </li>
        </ul>
      </div>

      {/* product card */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-[37px]">
          <LatestProdCard />
          <LatestProdCard />
          <LatestProdCard />
          <LatestProdCard />
          <LatestProdCard />
          <LatestProdCard />
        </div>
      </div>
      {/* product card */}
    </div>
  );
};

export default LatestProducts;
