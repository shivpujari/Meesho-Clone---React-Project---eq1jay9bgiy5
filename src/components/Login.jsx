import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/login.css'


const Signin = () => {
  const locationP = useLocation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [credential, setCredential] = useState(false);

  const loginForm = (e) => {
    e.preventDefault();
    let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let passwordPatern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/


    if (!email) {
      return alert("Email is required")
    } else {
      if (!email.match(emailPattern)) {
        setCredential(true);
        alert("Invalid email")
      } else {
        setCredential(false)
        localStorage.setItem("email", email)
      }
    }
    if (!password) {
      return alert("Password is required")
    } else {
      if (!password.match(passwordPatern)) {
        setCredential(true);
        alert("Invalid Password")
      } else {
        setCredential(false)
        localStorage.setItem("password", password)
      }
    }

    if (!credential) {
      if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
        alert("Login Successfully")

        localStorage.setItem("loginStatus", true)
        if (locationP.state) {
          navigate(`/individualproduct/${locationP.state.id}`)
        } else {
          navigate("/")
        }
      } else {
        alert("Invalid Credentials")
      }
    }
  }

  return (

    <div>
      <nav className="navbar">
        <h1>meesho</h1>
        <input type="text" placeholder=' Try Saree, Kurti or Search by Product Code ' />
        <a href='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow'>Download App</a>
        <a href=''>Become a Supplier</a>
      </nav>
      <div className='contains'>
        <div className="formDiv">
          <label htmlFor="Name">Email or phone number</label><br></br>
          <input type="text" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} value={email} id="username" className="form" />
          <label htmlFor="Name">Password (6 or more characters)</label><br></br>
          <input type="password" placeholder="Ex: Abc@98" id="password" className="form" value={password} onChange={e => setPassword(e.target.value)} />

          <div className='rows'>
            <button onClick={loginForm} className="button1">Login</button>
          </div>

          <div className="new_acc">
            <div className="inner_acc">
              <Link to="/newuser" className="inputs">Create new Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
