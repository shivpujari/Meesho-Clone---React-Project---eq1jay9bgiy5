import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import IndividualProduct from './IndividualProduct';
import NewUser from './NewUser';
import Products from './Products';
import Login from './Login';
import Cart from './Cart';
import CartDisplay from './CartDisplay';
import DataApp from './DataApp';
import Payment from './Payment';

const App = () => {

  return (
    <div id="main">
      <DataApp>
        {<BrowserRouter>

          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/individualproduct/:id" element={<IndividualProduct />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cartdisplay" element={<CartDisplay />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>}
      </DataApp>
    </div>
  )
}


export default App;
