import React from "react";
import axios from "axios";
import { AddBook, Login, Main, Navbar, Register, UpdateBook,  } from "./components";
import {Routes, Route} from 'react-router-dom'
const App = () => {
  const config = { headers: {"Content-Type": "application/json"}}
  const getLogin = async () => {
    await axios.get('http://localhost:5000/users/login',config)
  }
  getLogin()
  return <div>
    <Navbar />
    <div className="container">
      <div className="">
        <div className="">
          <Routes>
            <Route path='/' element={<Main />} /> 
            <Route path='/add' element={<AddBook />} />
            <Route path='/update/:id' element={<UpdateBook />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  </div>;
};

export default App;
