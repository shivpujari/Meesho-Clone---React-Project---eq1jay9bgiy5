import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import { DataAppContext } from './DataApp'
import { useContext } from 'react';
import delivery from '../Images/freeDelivery.svg'
import cod from '../Images/cod.svg'
import easy from '../Images/easyReturns.svg'
import allImg from '../Images/allImage.jpg'


function Header() {
  const cartData = useContext(DataAppContext);
  let name = localStorage.getItem("name")

  const logoutBtn = () => {
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("name", name)
    
  }

  return (
    <div>
      <nav className="navabr">
        <h1>meesho</h1>
        <input type="text" placeholder=' Try Saree, Kurti or Search by Product Code ' />
        <a href=''><p>Download App</p></a>
        <a href=''><p>Become a Supplier</p></a>
        <i className="fa fa-user profileIcon"><p className='profilepara'>Profile</p><p className='userName'>{name}</p></i>
        <button className='cartButtton'>
          <i className="fa fa-shopping-cart cartIcon"></i>
          <Link className='cartpara' to="/cartdisplay">Cart{cartData.dataApp.length}</Link></button>
        <button className='logoutBtn' onClick={logoutBtn}>Logout</button>
      </nav>
      <div className='divAfterNavs'>
      <a href=""> Women Ethnic Women Western Men Kids Home & Kitchen Beauty & Health Jewellery & Accessories Bags & Footwear Electronics</a>
      </div>
      <div className='lowestPrice'>
      <div className='lowestLeft'>
      <h1>Lowest Prices
      Best Quality Shopping</h1>
      <div className='delivery'>
      <div>
      <img className='deliveyIcon' src={delivery}/>
      Free Delivery
      </div>
      <div>
      <img className='cod' src={cod}/>
      Cash on Delivery
      </div>
      <div>
      <img className='easy' src={easy}/>
      Easy Returns
      </div>
      </div>
      <button>Download the Meesho App</button>
      </div>
      <div className="lowestRight">
        <img src={allImg}/>
      </div>

      </div>
      <div className='proforyou'>
      <h1>Products For You</h1>

      </div>
    </div>
  )
}

export default Header