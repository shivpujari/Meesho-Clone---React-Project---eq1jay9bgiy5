import React, { createContext } from 'react'
import Header from './Header'
import '../styles/individual.css'
import { DataAppContext } from './DataApp';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

function Cart() {
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

    return (
        <div>
            <Header />
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
        </div>

    )
}

export default Cart