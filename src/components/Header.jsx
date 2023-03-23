import React, { useState } from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import { DataAppContext } from './DataApp'
import { useEffect, useContext } from 'react';



function Header() {
  const cartData = useContext(DataAppContext);
  let name = localStorage.getItem("name")
  const [login, setLogin] = useState(false);
  const[value, setValue] = useState(true)
  

  const logoutBtn = () => {
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("name",name)
  }

  return (
    <div>
      <nav className="navabr">
        <h1>meesho</h1>
        <input type="text" placeholder=' Try Saree, Kurti or Search by Product Code ' />
        <a href=''>Download App</a>
        <a href=''>Become a Supplier</a>
        <i className="fa fa-user profileIcon"><p className='profilepara'>Profile</p><p className='userName'>{name}</p></i>
        <i className="fa fa-shopping-cart cartIcon">
          <Link className='cartpara' to="/cartdisplay">Cart{cartData.dataApp.length}</Link></i>
            <button className='logoutBtn' onClick={logoutBtn}>Logout</button>
   
      </nav>
    </div>
  )
}

export default Header