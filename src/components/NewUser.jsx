import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'

function NewUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmaill] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault();
    let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let passwordPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    let namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

    if (!email) {
      return alert("email is required")
  } if (!email.match(emailPattern)) {
    alert("Invalid email")
} else {
    localStorage.setItem("email", email)

}

  if(!name){
    return alert("name is required")
  }if (!name.match(namePattern)) {
    alert("Invalide name")
} else {
    localStorage.setItem("name", name)
}

  if (!password) {
    return alert("Password is required")
} else {
    if (!password.match(passwordPattern)) {
        alert("Invalid password")
    } else {
        localStorage.setItem("password", password)
    }
}
alert("Registered successfully")
      navigate("/")
      setEmaill("")
    setPassword("");
  }

  return (
    <div>
    <nav className="navbar">
        <h1>meesho</h1>
        <input type="text" placeholder=' Try Saree, Kurti or Search by Product Code ' />
        <a href=''>Download App</a>
        <a href=''>Become a Supplier</a>
      </nav>
    <div className='contains'>
    <div className='formDiv'>
    <label htmlFor='name'>Name</label>
    <input type="text" onChange={e=> setName(e.target.value)} value={name}></input>
    <label htmlFor="Name">Email or phone number</label><br></br>
    <input type="email" onChange={e=> setEmaill(e.target.value)} value={email} /><br></br>
    <label htmlFor="Name">Password (6 or more characters)</label><br></br>
    <input type="password" onChange={e=> setPassword(e.target.value)} value={password} /><br></br>
     <button onClick={handleSubmit}>Agree & Join</button>
     <h4>Already on Meesho?  
     <Link to="login">Sign in</Link>
     </h4>
    </div>
    </div>
    </div>
  )
}

export default NewUser
