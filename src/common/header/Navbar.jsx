import React, { useState } from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    
    const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <div>
      <header className="header">
        <div className="container d_flex">
            <div className="categories d_flex">
                <span className="bx bx-border-all"></span>
                <h4>
                    Categories <i className="bx bxs-chevron-down"></i>
                </h4>
            </div>

            <div className="navlink">
                <ul className={MobileMenu ? "nav-links-MobileMenu" : " link f_flex capitalize"} onClick={()=> setMobileMenu(false)}>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/pages">pages</Link>
                    </li>
                    <li> 
                        <Link to="/user">user</Link>
                    </li>
                    <li>
                        <Link to="/vendor">vendor account</Link>
                    </li>
                    <li>
                        <Link to="/track">track my order</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>

                <button className="toggle" onClick={()=> setMobileMenu(!MobileMenu)}>
                    {
                        MobileMenu ? <i className="bx bx-x close home-bth"></i>: <i className="bx bx-menu open"></i>
                    }
                </button>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
