import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/mechkartlogo.svg";
import Styles from "../../styles/style";
import { productData } from "../../static/data";
import {
  AiOutlineSearch,
} from "react-icons/ai";

import { IoIosArrowForward } from "react-icons/io";

 import Navbar from "./Navbar";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  // const [active, setActive] = useState(false);
 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  // window.addEventListener("scroll", () => {
  //   if (window.screenY > 70) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // }
  // );

  return (
    <>
      <div className={`${Styles.section}`}>
        <div className="hidden 800px:mx-[-30px] 800px:my-[20px] 800px:flex justify-between">
          {/* logo header */}
          <div className="w-[50px] h-[50px]">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* logo header */}

          {/* search box */}
          <div className="w-[30%] mr-[750px] relative">
            <input
              type="text"
              placeholder="Search Products.."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#d079f8] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30yh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          {/* Search box */}

          {/* Login button */}
          <div className="w-[110px] bg-[#682A85] hover:bg-[#983ec2] h-[47px] my-[-5px] flex items-center justify-center rounded-[5px] cursor-pointer">
            <Link to="/login">
              <h1 className="ml-4 text-[#fff] flex items-center">
                Login <IoIosArrowForward className="mr-2 mt-0.5" />
              </h1>
            </Link>
          </div>
          {/* Login button */}
        </div>
      </div>
      <Navbar active ={1}/>
    </>
  );
};

export default Header;
