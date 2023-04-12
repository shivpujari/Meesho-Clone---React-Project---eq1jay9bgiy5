import React, { useState } from 'react'
import Header from './Header'
import { useEffect, useContext } from 'react';
import '../styles/products.css'
import { Link, useNavigate } from 'react-router-dom'
import { DataAppContext } from './DataApp';
import Footer from './Footer';



const api = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`

function Products() {

  const cartData = useContext(DataAppContext);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

 const getData = () => {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
  }
  useEffect(() => {
    getData(`${api}`);

  }, [])

  const handleClick = (item) => {
    if (!localStorage.getItem("loginStatus")) {
      alert("You Must Login First")
      navigate("/login")
    }
    cartData.setDataApp([...cartData.dataApp, item])
  }
  // const searchInput = (e) => {
  //   setData(e.target.value)
  //   console.log('searchinput - ', e.target.value)
  //   const res = data.filter((item) => {
  //     return item.title.toLowerCase().includes(e.target.value)
  //   })
  //   setData(res)
  // }

  return (
    <div>
      <Header />
      

      <div className='productsContains' >

        {data.map((item) => (
          <div className='compcard'>
            <Link to={`/individualproduct/${item.id}`} className="cartt">
              <img src={item.image} />
            </Link>
            <div className='titleOfItem'>
              <p className='paraTitle'>{item.title}</p>
              <h4>Rs. {item.price}</h4>
              <p><i className="fa fa-star-half-o"></i>{item.rating.rate}</p>
              <button onClick={() => handleClick(item)} className='cartButton'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Products

