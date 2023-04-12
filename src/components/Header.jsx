import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import { Link, useSearchParams } from 'react-router-dom'
import { DataAppContext } from './DataApp'
import { useContext } from 'react';
import delivery from '../Images/freeDelivery.svg'
import cod from '../Images/cod.svg'
import easy from '../Images/easyReturns.svg'
import allImg from '../Images/allImage.jpg'


function Header() {

  const api = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`
  
 

  const cartData = useContext(DataAppContext);
  const { data, setData } = cartData;
  let name = localStorage.getItem("name")
  // const [qeury, setQuery] = useState();



  const logoutBtn = () => {
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("name", name)
  }

  const searchInput = (e) => {
    setData(e.target.value)
    console.log('searchinput - ', e.target.value)
    const res = data.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value)
    })
    setData(res)
  }

  return (
    <div>
      <nav className="navabr">
        <h1>meesho</h1>
        <input type="text" onChange={searchInput}  placeholder=' Try Saree, Kurti or Search by Product Code ' />
        {data.map((hid)=>(
          <p></p>
  ))}
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
              <img className='deliveyIcon' src={delivery} />
              Free Delivery
            </div>
            <div>
              <img className='cod' src={cod} />
              Cash on Delivery
            </div>
            <div>
              <img className='easy' src={easy} />
              Easy Returns
            </div>
          </div>
          <button>Download the Meesho App</button>
        </div>
        <div className="lowestRight">
          <img src={allImg} />
        </div>

      </div>
      <div className='proforyou'>
        <h1>Products For You</h1>

      </div>
    </div>
  )
}

export default Header