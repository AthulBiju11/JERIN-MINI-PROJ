import React from 'react'
import Styles from '../../../styles/style';
import Card from '../../Card/card';

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
<div className='flex float-left w-[100%] justify-center'>
<Card/>
<Card/>
<Card/>
<Card/>

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