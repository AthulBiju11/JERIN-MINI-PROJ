import React from "react";
import Styles from "../../../styles/style";
import roundele from "../../../assets/round elemnet.svg";
import fifty from "../../../assets/Group 130.svg";
import eq1 from "../../../assets/eq-1.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" bg-[#FCF5FE] w-full h-[500px]">
      <div>
      <img
        src={roundele}
        alt=""
        className=" relative w-[400px] float-right mr-[150px] mt-[55px]"
      />

      <img
        src={fifty}
        alt=""
        className="absolute w-[90px] float-left ml-[1250px] mt-[65px]"
      />

      <img
        src={eq1}
        alt=""
        className="absolute w-[350px] float-left ml-[950px] mt-[120px]"
      />
      </div>
      {/* Text Content starts */}
      <div
        className={`${Styles.section} flex float-left w-[90%] 800px:w-[50%]`}
      >
        <h1
          className={`mx-[200px] mt-[90px] text-[35px] 800px:text-[20px] text-[#FB2E86] font-[500] capitalize`}
        >
          Best Mechanical Equipment
        </h1>

        {/* Text conetent 2 */}
      </div>
      <div
        className={`${Styles.section} flex float-left w-[90%] 800px:w-[60%]`}
      >
        <h1
          className={`mx-[200px] mt-[20px] text-[35px] 800px:text-[40px] text-[#000] font-[500] font-JosefinSans capitalize`}
        >
          New Equipments Available at 50% off !
        </h1>
      </div>

      {/* Text content 3 */}
      <div
        className={`${Styles.section} flex float-left w-[90%] 800px:w-[60%]`}
      >
        <p className="mx-[200px] mt-[20px] text-[35px] leading-[1,2] 800px:text-[15px] text-[#8A8FB9] font-[200] capitalize">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          quisquam voluptates dolore quasi odio earum facere autem. Eos
          perspiciatis magni ducimus tempora quo et
        </p>
      </div>
      {/* Text content end */}

      <div
        className={`${Styles.section} flex float-left w-[90%] 800px:w-[60%]`}
      >
        <div className="w-[150px] mx-[200px] mt-[40px] bg-[#FB2E86] h-[50px] my-[-5px] flex items-center justify-center rounded-[2px] cursor-pointer">
          <Link to="/product">
            <h1 className="text-[#fff] flex items-center">Shop now</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
