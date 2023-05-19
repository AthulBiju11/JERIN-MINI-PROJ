import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/mechkart logo.svg";
import Styles from "../../styles/style";
import { categoriesData, productData } from "../../static/data";
import { AiOutlineSearch, AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai";
import {CgProfile} from "react-icons/cg"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.screenY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

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
          <div className="w-[110px] bg-[#682A85] h-[47px] my-[-5px] flex items-center justify-center rounded-[5px] cursor-pointer">
            <Link to="/login">
              <h1 className="ml-4 text-[#fff] flex items-center">
                Login <IoIosArrowForward className="mr-2 mt-0.5" />
              </h1>
            </Link>
          </div>
          {/* Login button */}
        </div>
      </div>
      {/* sub header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#682A85] h-[70px]`}
      >
        <div
          className={`${Styles.section} relative ${Styles.noramlFlex} justify-between`}
        >
          {/* sub header (purple box) includes categories, home bestselling etc.. */}

          {/* categories dropdown */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] mr-[10px] w-[270px] hidden 1000px:block">
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
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* categories dropdown*/}

          {/* Navbar ie,home bestselling etc....*/}
          <div className={`${Styles.noramlFlex} ml-[350px] mx-[30px]`}>
            <Navbar active={activeHeading} />
          </div>
          {/* navbar */}

          {/* whishlist heart */}
          <div className="flex">
            <div className={`${Styles.noramlFlex}`}>
              <div className="absolute cursor-pointer">
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 90%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#ff0b0b] w-[13px] h-[13px] top right p-0 m-0 text-white font-mono text-[9px] leading-tight text-center">
                0
                </span>
              </div>
            </div>
          </div>
          {/* whishlist heart */}


          {/* Shopping cart */}
          <div>
            <div className={`${Styles.noramlFlex}`}>
              <div className="absolute cursor-pointer ">
                <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 90%)" />
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
              <div className="relative cursor-pointer ml-1">
                <CgProfile size={30} color="rgb(255 255 255 / 90%)" />
              
              </div>
            </div>
          </div>
                {/* profile icon */}

                




        </div>
      </div>
      {/* sub header */}
    </>
  );
};

export default Header;
