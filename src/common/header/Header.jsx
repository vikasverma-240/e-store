import React from 'react'
import  './Header.css'
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'

const Header = ({cartItem}) => {
  return (
    <div>
      <Head/>
      <Search cartItem={cartItem}/>
      <Navbar/>
    </div>
  )
}

export default Header
