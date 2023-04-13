import React, { createContext } from 'react'
import '../styles/individual.css'
import { DataAppContext } from './DataApp';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import CartEmpty from './CartEmpty';

function Cart() {
    let name = localStorage.getItem("name")
    const cartData = useContext(DataAppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("loginStatus")) {
            alert("You Must Login First")
            navigate("/login")
        }
    }, [])

    const removeItems = (index) => {
        let tempArr = [...cartData.dataApp];
        tempArr.splice(index, 1);
        cartData.setDataApp([...tempArr]);
    }
  

    const logoutBtn = () => {
      localStorage.removeItem("loginStatus")
      localStorage.removeItem("name", name)
      alert("Logout Successfully")
      navigate("/")
    }

    return (
        <div>
        { cartData.dataApp.length > 0 ? 
            <div>
            <nav className="navIndividual">
          <h1>meesho</h1>
          <input type="text" placeholder=' Try Saree, Kurti or Search by Product Code ' />
          <a href=''><p>Download App</p></a>
          <a href=''><p>Become a Supplier</p></a>
          <i className="fa fa-user profilIc"><p className='profilepara'>Profile</p><p className='userName'>{name}</p></i>
          <button className='cartButtton'>
            <i className="fa fa-shopping-cart crtIc"></i>
            <Link className='crtpra' to="/cartdisplay">Cart{cartData.dataApp.length}</Link></button>
          <button className='logBtn' onClick={logoutBtn}>Logout</button>
          </nav>
            <div>
                {cartData.dataApp.map((item, index) => (
                    <div className="card-content">
                        <div className='containsTwoDiv'>
                            <div className='imgDiv'>
                                <img className='imgTwo' src={item.image} />
                            </div>
                            <div className="allbtn">
                                <h4>{item.title}</h4><br></br>
                                <h5>Rs. {item.price}</h5>
                                <button className='ratingBtn'><i className="fa fa-star-half-o"></i>{item.rating.rate}</button>
                                <p className='itemDesc'><span>About : </span>{item.description}</p><br></br>

                                <button className='buyNOw'><Link to="/payment">Buy Now</Link></button>
                                <button className='deleteIems' onClick={() => removeItems(index)}>Remove<i class="fa fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div> : <CartEmpty/>

        }
          
        </div>

    )
}

export default Cart