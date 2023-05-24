import React from "react";
import img1 from "../../assets/img1.svg";
import eq1 from "../../assets/eq-1.svg";

const TrendProdCard2 = () => {
  return (
    <div className="grid grid-cols-3 gap-[61px] mt-[40px]  ">
      <div className="bg-[#FEF6FB] w-[385px] h-[250px] p-[20px] ">
        <h2 style={{ fontSize: "30px", color: "#111772", fontWeight: "bold" }}>
          23% off on all products
        </h2>
        <span
          className="underline"
          style={{ fontSize: "18px", color: "#F06BA1" }}
        >
          Shop Now
        </span>
        <img
          src={img1}
          alt=""
          className="float-right w-[180px] mb-[30px] "
        ></img>
      </div>
      <div className="bg-[#EEEFFA]  w-[385px] h-[250px] p-[20px]">
        <h2 style={{ fontSize: "30px", color: "#111772", fontWeight: "bold" }}>
          23% off on all products
        </h2>
        <span
          className="underline"
          style={{ fontSize: "18px", color: "#F06BA1" }}
        >
          Shop Now
        </span>
      </div>
      <div className="grid gap-5">
        {/* 1 */}
        <div className="flex w-[385px] h-[70px] shadow-sm">
          <div className=" w-[80px] m-[5px] h-[60px] bg-[#FCF5FE] p-[5px]">
            <img src={eq1} alt="" className="w-[60px]"></img>
          </div>
          <div className=" m-[10px]">
            <h4 className="font-medium font-JosefinSans text-[#151875]">
              Master Blade 2000
            </h4>
            <span className="text-sm font-JosefinSans text-[#151875]">
              Rs. 2000
            </span>
          </div>
        </div>
        {/* 1 */}

        {/* 2*/}
        <div className="flex w-[385px] h-[70px] shadow-sm">
          <div className=" w-[80px] m-[5px] h-[60px] bg-[#FCF5FE] p-[5px]">
            <img src={eq1} alt="" className="w-[60px]"></img>
          </div>
          <div className=" m-[10px]">
            <h4 className="font-medium font-JosefinSans text-[#151875]">
              Master Blade 2000
            </h4>
            <span className="text-sm font-JosefinSans text-[#151875]">
              Rs. 2000
            </span>
          </div>
        </div>
        {/* 2 */}

        {/* 3 */}
        <div className="flex w-[385px] h-[70px] shadow-sm">
          <div className=" w-[80px] m-[5px] h-[60px] bg-[#FCF5FE] p-[5px]">
            <img src={eq1} alt="" className="w-[60px]"></img>
          </div>
          <div className=" m-[10px]">
            <h4 className="font-medium font-JosefinSans text-[#151875]">
              Master Blade 2000
            </h4>
            <span className="text-sm font-JosefinSans text-[#151875]">
              Rs. 2000
            </span>
          </div>
        </div>
        {/* 3 */}
      </div>
    </div>
  );
};

export default TrendProdCard2;
