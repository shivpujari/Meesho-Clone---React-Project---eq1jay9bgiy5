import React, { createContext } from 'react'
import Header from './Header'
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import '../styles/individual.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { DataAppContext } from './DataApp';

const apikey = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;

function IndividualProduct() {

    const cartData = useContext(DataAppContext);

    const navigate = useNavigate();
    const fetchId = useParams();
    const [cart, setCart] = useState([]);

    const getDatas = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            let temp = data.filter((item) => {
                return item.id === parseInt(fetchId.id)
            })
            setCart(temp)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        if (!localStorage.getItem("loginStatus")) {
            alert("You Must Login First")
            navigate("/login", { state: { preLocation: `/individualproduct`, id: fetchId.id } })
        }
        getDatas(`${apikey}`)

    }, [])

    const cartAdded = (item) => {
        cartData.setDataApp([...cartData.dataApp, item])
    }

    return (
        <div>
            <Header/>
            <div>
                {cart.length > 0 && cart.map((item, index) => (
                    <div className="card-content">
                        <div className='containsTwoDiv'>
                            <div className='imgDiv'>
                                <img className='imgTwo' src={item.image} />
                                <button onClick={() => cartAdded(cart)} className='cartBtn'><i className="fa-solid fa-cart-shopping"></i>add to cart</button>
                            </div>
                            <div className="allbtn">
                                <h4>{item.title}</h4><br></br>
                                <h5>Rs. {item.price}</h5>
                                <p>{item.description}</p><br></br>
                                <button className='buyNOw'>Buy Now</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default IndividualProduct