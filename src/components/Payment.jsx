import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

function Payment() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("");
const handlePayment = () => {
    if(!name){
        return alert("Name is rewuired")
    }else{
        localStorage.setItem("name", name) 
    }
    if(!mobile){
        return alert("Mobile Number is rewuired")
    }else{
        localStorage.setItem("mobile", mobile) 
    } if(!address){
        return alert("Address is required")
    }else{
        localStorage.setItem("address", address) 
    }

    alert("Order Placed successfully");
    navigate("/")
    setAddress("")
    setMobile("")
    setName("")
    

    
    }


    return (
        <div>
            <Header />
            <div className='contains'>
            <div className='formDiv'>
                <label htmlFor='name'>Name</label>
                <input type="text" onChange={e => setName(e.target.value)} value={name}></input><br></br>
                <label htmlFor='name'>Mobile No. </label>
                <input type="number" onChange={e => setMobile(e.target.value)} value={mobile}></input><br></br>
                <label htmlFor='name'>Address</label>
                <input type="text" onChange={e => setAddress(e.target.value)} value={address}></input><br></br>
                <label htmlFor='name'>Payment Method</label>
                <select>
                    <option>Cash on Delivery</option>
                    <option>Paytm</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                </select>
                <button onClick={handlePayment}> Place Order</button>
            </div>
            </div>
        </div>
    )
}

export default Payment