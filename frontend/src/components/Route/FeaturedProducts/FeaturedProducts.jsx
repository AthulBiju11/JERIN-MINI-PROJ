import React from 'react'
import Styles from '../../../styles/style';
import eq1 from "../../../assets/eq-1.svg";
import { Link } from "react-router-dom";
import { Card, CardBody } from 'reactstrap';

const FeaturedProducts = () => {
  return (
    <div>
        {/* Heading */}
        <div className={`${Styles.section}`}>
            <div className={`${Styles.heading} mt-[50px] flex justify-center`}>
                <h1>
                    Featured Products
                </h1>
            </div>
        </div>
        {/* Heading */}


        {/* product card */}
<div className='flex float-left mt-[70px] ml-[70px]'>

    <div className='flex ml-10 w-[285px] h-[380px] bg-[#fff] sm:shadow-2xl'>
    
    <Card>
        <div className='img w-[200px] '>
           <img src = {eq1} alt='img' /> 
        </div>

        <CardBody>
          <div className='mt-[90px] w-[285px] h-[145px] bg-[#682A85]'>
          <div className='cardtop d-flex align-items-center justify-content-between'>

            <span className='productName d-flex align-items-center gap-1'>
              P1
            </span>

            <span className='tourrating d-flex align-items-center gap-1'>
                Icon
            </span>
            </div>

            <h5 className='tourtitle'>
              Product Name
            </h5>
            <div className='cardbottom d-flex align-items-center justify-content-between mt-3'>
              <h5>Rs 1000 <span> /per unit</span></h5>
              <button >
                <Link to="/"> 
                    Buy
                </Link>
              </button>
            </div>
            </div>
      </CardBody>
      </Card>





      
      
    </div>

    <div className='flex ml-10 w-[285px] h-[380px] bg-[#fff] sm:shadow-2xl'>
    
    <Card>
        <div className='img w-[200px] '>
           <img src = {eq1} alt='img' /> 
        </div>

        <CardBody>
          <div className='mt-[90px] w-[285px] h-[145px] bg-[#682A85]'>
          <div className='cardtop d-flex align-items-center justify-content-between'>

            <span className='productName d-flex align-items-center gap-1'>
              P1
            </span>

            <span className='tourrating d-flex align-items-center gap-1'>
                Icon
            </span>
            </div>

            <h5 className='tourtitle'>
              Product Name
            </h5>
            <div className='cardbottom d-flex align-items-center justify-content-between mt-3'>
              <h5>Rs 1000 <span> /per unit</span></h5>
              <button >
                <Link to="/"> 
                    Buy
                </Link>
              </button>
            </div>
            </div>
      </CardBody>
      </Card>





      
      
    </div>

    <div className='flex ml-10 w-[285px] h-[380px] bg-[#fff] sm:shadow-2xl'>
    
    <Card>
        <div className='img w-[200px] '>
           <img src = {eq1} alt='img' /> 
        </div>

        <CardBody>
          <div className='mt-[90px] w-[285px] h-[145px] bg-[#682A85]'>
          <div className='cardtop d-flex align-items-center justify-content-between'>

            <span className='productName d-flex align-items-center gap-1'>
              P1
            </span>

            <span className='tourrating d-flex align-items-center gap-1'>
                Icon
            </span>
            </div>

            <h5 className='tourtitle'>
              Product Name
            </h5>
            <div className='cardbottom d-flex align-items-center justify-content-between mt-3'>
              <h5>Rs 1000 <span> /per unit</span></h5>
              <button >
                <Link to="/"> 
                    Buy
                </Link>
              </button>
            </div>
            </div>
      </CardBody>
      </Card>





      
      
    </div>

    <div className='flex ml-10 w-[285px] h-[380px] bg-[#fff] sm:shadow-2xl'>
    
    <Card>
        <div className='img w-[200px] '>
           <img src = {eq1} alt='img' /> 
        </div>

        <CardBody>
          <div className='mt-[90px] w-[285px] h-[145px] bg-[#682A85]'>
          <div className='cardtop d-flex align-items-center justify-content-between'>

            <span className='productName d-flex align-items-center gap-1'>
              P1
            </span>

            <span className='tourrating d-flex align-items-center gap-1'>
                Icon
            </span>
            </div>

            <h5 className='tourtitle'>
              Product Name
            </h5>
            <div className='cardbottom d-flex align-items-center justify-content-between mt-3'>
              <h5>Rs 1000 <span> /per unit</span></h5>
              <button >
                <Link to="/"> 
                    Buy
                </Link>
              </button>
            </div>
            </div>
      </CardBody>
      </Card>





      
      
    </div>


</div>
{/* product card */}



{/* Heading */}
<div className={`${Styles.section}`}>
            <div className={`${Styles.heading} mt-[500px] flex justify-center`}>
                <h1>
                    Featured Products
                </h1>
            </div>
        </div>
        {/* Heading */}
    </div>
  )
}

export default FeaturedProducts