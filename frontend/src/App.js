import React from 'react'
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Loginpage} from "./Routes.js";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Loginpage />} />

      
    </Routes>
    </BrowserRouter>
  )
}

export default App