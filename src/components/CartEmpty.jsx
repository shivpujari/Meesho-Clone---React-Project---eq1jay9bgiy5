import React from 'react'
import cartImg from '../Images/cartempty.jpg'
import '../styles/cartempty.css';
import { useNavigate } from 'react-router';
import { DataAppContext } from './DataApp'
import { useContext } from 'react';
import { Link } from 'react-router-dom'


function CartEmpty() {
  let name = localStorage.getItem("name")
  const cartData = useContext(DataAppContext);

  const navigate = useNavigate();

  const logoutBtn = () => {
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("name", name)
    alert("Logout Successfully")
    navigate("/")
  }


  return (
    <div>
    <nav className="navabr">
        <h1>meesho</h1>
        <input type="text"  placeholder=' Try Saree, Kurti or Search by Product Code ' />
        <a href='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow'><p>Download App</p></a>
        <a href=''><p>Become a Supplier</p></a>
        <i className="fa fa-user profileIcon"><p className='profilepara'>Profile</p><p className='userName'>{name}</p></i>
        <button className='cartButtton'>
          <i className="fa fa-shopping-cart cartIcon"></i>
          <Link className='cartpara' to="/cartdisplay">Cart{cartData.dataApp.length}</Link></button>
        <button className='logoutBtn' onClick={logoutBtn}>Logout</button>
      </nav>
   <div className='cartDiv'>
      <div >
    <img src={cartImg}/>
    <h2>Your cart is empty!</h2>
    <h4>Add items to it now.</h4>
    </div>
    </div>
    </div>
  )
}

export default CartEmpty