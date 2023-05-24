import React, { useState } from "react";
import eq1 from "../../assets/eq-1.svg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LatestProdCard = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="group w-[360px] flex-column sm:shadow-xl bg-[#FCF5FE] m-[10px] ">
      <div className="image bg-[#FCF5FE] p-[30px]">
        <img
          src={eq1}
          alt=""
          className="w-[250px] group-hover:scale-[1.1] transition-all"
        ></img>
        {click ? (
          <AiFillHeart
            size={22}
            className="cursor-pointer flex float-right my-[-200px] mx-[-10px]"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="cursor-pointer flex float-right my-[-200px] mx-[-10px]"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
          />
        )}
      </div>

      <div className="h-[55px] bg-[#fff] group-hover:bg-[#682A85] p-[15px] ">
        <div className="flex justify-between">
          <h5 className="TITLE  text-[#FB2E86] group-hover:text-[#fff] backdrop:font-[600] font-Lato ">
            Product Name
          </h5>
          <div className="cardbottom font-JosefinSans text-[#151875] group-hover:text-[#fff] ">
            <h5>
              Rs 1000 <span> / per unit</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProdCard;