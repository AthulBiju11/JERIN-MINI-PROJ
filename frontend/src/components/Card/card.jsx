import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Card = ({ product }) => {
  const { img, title, price, _id } = product;
  const [click, setClick] = useState(false);

  const mutation = useMutation({
    mutationFn : (product) => {
      return newRequest.post("/cart",{productId : _id})
    }
  })

  const handleAdd = () => {
    mutation.mutate(product);
  }

  

  return (
    <div className="group w-[282px] flex-column sm:shadow-xl bg-[#FCF5FE] m-[10px] relative">
      <div className="bg-[#FCF5FE] p-[30px] mb-[135px]">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover object-center group-hover:scale-[1.1] transition-all"
        />
      </div>

      <div className="h-[135px] bg-[#fff] group-hover:bg-[#682A85] p-[15px] absolute bottom-0 left-0 right-0">
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
              {title}
            </h5>
          </div>
          <div className="cardbottom flex-column mt-3 text-center font-JosefinSans text-[#151875] group-hover:text-[#fff]">
            <h5>
              Rs {price} <span> / per unit</span>
            </h5>
          </div>
          <Link to="/" className="flex justify-center">
            <div className="bg-[#FB2E86] w-[70px] h-[30px] text-center mt-[15px] text-[white] sm:shadow-md" onClick={handleAdd}>
              Add
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
