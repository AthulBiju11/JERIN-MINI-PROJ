import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const TrendCard = ({product}) => {
  const [click, setClick] = useState(false);
  const {img,title,price} = product
  return (
    <div className="group w-[282px] flex-column sm:shadow-xl bg-[#fff] m-[10px] ">
      <div className="m-[10px] bg-[#FCF5FE] image p-[40px]">
        <img
          src={img}
          alt=""
          className="w-[250px] group-hover:scale-[1.1] transition-all"
        ></img>
        
      </div>

      <div className="h-[135px] bg-[#fff] group-hover:bg-[#682A85] p-[15px] ">
        <div className="">
          <h5 className="TITLE text-center text-[#FB2E86] group-hover:text-[#fff] backdrop:font-[600] font-Lato">
            {title}
          </h5>
          <div className="cardbottom flex-column mt-3 text-center font-JosefinSans text-[#151875] group-hover:text-[#fff]">
            <h5>
              Rs {price} <span> / per unit</span>
            </h5>
          </div>
          <Link to="/" className="flex justify-center">
            <div className="bg-[#FB2E86] w-[70px] h-[30px] text-center mt-[15px] text-[white] sm:shadow-md">
              Buy
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
