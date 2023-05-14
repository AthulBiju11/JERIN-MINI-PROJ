import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/mechkart logo.svg";
import Styles from "../../styles/style";
import {productData} from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [ searchTerm, setSearchTerm ]= useState("");
  const [ searchData, setSearchData ] = useState(null);
  
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  
    const filteredProducts =
      productData &&
      productData.filter((product) => 
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
     setSearchData(filteredProducts);
  };

  return (
    <div className={`${Styles.section}`}>
      <div className="hidden 800px:mx-[-30px] 800px:my-[20px] 800px:flex item-center">

        {/* logo header */}
        <div className="w-[50px] h-[50px]">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {/* logo header */}

        {/* search box */}
        <div className="w-[30%] mx-[30px] relative">
          <input
            type="text"
            placeholder="Search Products.."
            value={searchTerm}
            onChange={handleSearchChange}
            className="h-[40px] w-full px-2 border-[#d079f8] border-[2px] rounded-md"
          />
          <AiOutlineSearch size={30} className="absolute right-2 top-1.5 cursor-pointer"/>
          {
          searchData && searchData.length !==0 ? (
            <div className="absolute min-h-[30yh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {
                    searchData && searchData.map((i,index)=> {
                        const d =i.name;
                        const Product_name=d.replace(/\s+/g, "-");
                        return(
                            <Link to={`/product/${Product_name}`}>
                                <div className="w-full flex items-start-py-3">
                                    <img src={i.image_Url[0].url} alt=""
                                    className="w-[40px] h-[40px] mr-[10px]"/>
                                    <h1>
                                        {i.name}
                                    </h1>
                                </div>
                            </Link>
                        )
                    })}
                 </div>
                 ):null
          }

        </div> 
        


      </div>
    </div>
  );
};

export default Header;
