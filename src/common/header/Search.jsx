import React from 'react';
import logo from "../assest/images/logo512.png";
import { Link } from 'react-router-dom';

const Search = () => {

  window.addEventListener("scroll", function(){
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY >100)
  })

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="logo" width={50} />
          </div>

          <div className="search-box f_flex">
            <i className="bx bx-search"></i>
            <input type="text" placeholder='Search and hit enter......' />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="bx bx-user icon-circle"></i>
            <div className="cart">
              <Link to='/cart'>
                <i className="bx bx-shopping-bag icon-circle"></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
