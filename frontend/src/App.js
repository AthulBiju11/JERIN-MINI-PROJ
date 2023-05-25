import React from 'react'
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Loginpage,HomePage,Products} from "./Routes.js";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Loginpage />} />
      <Route path='/' element={<HomePage/>} />
      <Route path='/products' element={<Products/>} />

      
    </Routes>
    </BrowserRouter>
  )
}

export default App