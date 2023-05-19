import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts.jsx";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero />
        <FeaturedProducts />
    </div>
  )
}

export default HomePage
