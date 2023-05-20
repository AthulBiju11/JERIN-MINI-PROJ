import React from "react";
import eq1 from "../../assets/eq-1.svg";

const LatestProdCard = () => {
  return (
    <div className="group w-[360px] flex-column sm:shadow-xl bg-[#FCF5FE] m-[10px] ">
      <div className="image bg-[#FCF5FE] p-[30px]">
        <img
          src={eq1}
          alt=""
          className="w-[250px] group-hover:scale-[1.1] transition-all"
        ></img>
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
