import React, { useContext } from 'react'
import Styles from '../../../styles/style';
import Card from '../../Card/card';
import { ProductsContext } from '../../../context/productContext';

const FeaturedProducts = () => {

  const {data} = useContext(ProductsContext);

  

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
<div className='flex float-left w-[100%] justify-center'>
{data && 
  data.map((product,i) => {
    return <Card product={product} key={i}/>
  })
}


</div>
{/* product card */}




    </div>
  )
}

export default FeaturedProducts