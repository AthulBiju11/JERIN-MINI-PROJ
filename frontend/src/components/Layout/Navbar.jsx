import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import Styles from "../../styles/style";
import DropDown from "./DropDown";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { categoriesData } from "../../static/data";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";


const Navbar = ({ active }) => {
  const [dropDown, setDropDown] = useState(false);
  

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      newRequest.get(`/categories`).then((res) => {
        return res.data;
      }),
  });



  return (
    <>
      {/* sub header */}
      <div className="sm:shadow-md mt-[-5px] transition hidden md:flex justify-between w-full bg-[#682A85] h-[70px] sticky top-0 z-10">
        <div className={` ${Styles.noramlFlex} m-8`}>
          {/* sub header (purple box) includes categories, home bestselling etc.. */}

          {/* categories dropdown */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden lg:block">
              <BiMenuAltLeft size={30} className="absolute top-3.5 left-2" />
              <button className="h-[100%] w-full flex justify-between items-center pl-[50px] bg-[#fff] font-sans text-lg font-[400] select-none rounded-t-md">
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-[21px] cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {/* dropdown logic */}
              {dropDown ? (
                <DropDown
                  categoriesData={data}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* categories dropdown*/}
        </div>
        <div className="flex m-8">
          {/* Navbar ie,home bestselling etc....*/}
          <div className={`${Styles.noramlFlex} mr-20`}>
            <div className={`block lg:flex`}>
              {navItems &&
                navItems.map((i, index) => (
                  <div className="flex" key={index}>
                    <Link
                      to={i.url}
                      className={`${
                        active === index + 1
                          ? "underline text-[#fefec9]"
                          : "text-black lg:text-[#fff]"
                      } pb-[30px] lg:pb-0 font-[500] px-5 cursor-pointer`}
                    >
                      {i.title}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          {/* navbar */}
          {/* whishlist heart */}
          <div className="flex items-center gap-4">
            <div className={`${Styles.noramlFlex}`}>
              <div className="relative cursor-pointer">
                <AiOutlineHeart
                  size={30}
                  color="rgb(255 255 255 / 90%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#ff0b0b] w-[13px] h-[13px] top right p-0 m-0 text-white font-mono text-[9px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            {/* whishlist heart */}

            {/* Shopping cart */}
            <div>
              <div className={`${Styles.noramlFlex}`}>
                <div className="relative cursor-pointer ">
                  <AiOutlineShoppingCart
                    size={30}
                    color="rgb(255 255 255 / 90%)"
                  />
                  <span className="absolute left-5 top-0 rounded-full bg-[#ff0b0b] w-[13px] h-[13px] top right p-0 m-0 text-white font-mono text-[9px] leading-tight text-center">
                    0
                  </span>
                </div>
              </div>
            </div>
            {/* ShoppingCart */}

            {/* profile icon */}
            <div>
              <div className={`${Styles.noramlFlex}`}>
                <div className="relative cursor-pointer">
                  <CgProfile
                    size={30}
                    color="rgb(255 255 255 / 90%)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub header */}
    </>
  );
};

export default Navbar;
