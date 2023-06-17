import React, { useState } from "react";
import eq1 from "../../assets/eq-1.svg";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Card = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="group w-[282px] flex-column sm:shadow-xl bg-[#FCF5FE] m-[10px] ">
      <div className=" bg-[#FCF5FE] p-[40px]">
        <img
          src={eq1}
          alt=""
          className="w-[250px] group-hover:scale-[1.1] transition-all"
        ></img>

        
      </div>
      <div className="h-[135px] bg-[#fff] group-hover:bg-[#682A85] p-[15px] ">
        <div className="">
          <div className="flex justify-right">
          {click ? (
          <AiFillHeart
            size={22}
            className=""
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className=""
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
          />
        )}
          <h5 className="TITLE mx-[22%] text-[#FB2E86] group-hover:text-[#fff] backdrop:font-[600] font-Lato">
            Product Name
          </h5>
          </div>
          <div className="cardbottom flex-column mt-3 text-center font-JosefinSans text-[#151875] group-hover:text-[#fff]">
            <h5>
              Rs 1000 <span> / per unit</span>
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

export default Card;
