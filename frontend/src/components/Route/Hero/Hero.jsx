import React from 'react'
import roundele from "../../../assets/round elemnet.svg";
import fifty from "../../../assets/Group 130.svg";

const Hero = () => {
  return (
    <div className="relative top-0 bg-[#FCF5FE] w-full h-[500px]">
        <img src={roundele}
        className=' relative w-[400px] float-right mr-[150px] mt-[55px]'/>

        <img src={fifty}
        className='absolute w-[90px] float-left ml-[1250px] mt-[65px]'/>
    


    </div>
  )
}

export default Hero