import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import Styles from '../../styles/style'

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${Styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "underline && text-[#fefec9]" : "text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar