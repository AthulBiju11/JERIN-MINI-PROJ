import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LatestProdCard = ({ product }) => {
  const [click, setClick] = useState(false);
  const { img, title, price } = product;

  return (
    <div className="group w-[360px] flex-column sm:shadow-xl bg-[#FCF5FE] m-[10px] relative">
      <div className="image bg-[#FCF5FE] flex justify-center items-center p-[20px]">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover group-hover:scale-[1.1] transition-all"
        />
        {click ? (
          <AiFillHeart
            size={22}
            className="cursor-pointer absolute top-0 right-0 m-2"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="cursor-pointer absolute top-0 right-0 m-2"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
          />
        )}
      </div>

      <div className="h-[55px] bg-[#fff] group-hover:bg-[#682A85] p-[15px]">
        <div className="flex justify-between">
          <h5 className="TITLE text-[#FB2E86] group-hover:text-[#fff] backdrop:font-[600] font-Lato">
            {title}
          </h5>
          <div className="cardbottom font-JosefinSans text-[#151875] group-hover:text-[#fff]">
            <h5>
              Rs {price} <span> / per unit</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProdCard;
