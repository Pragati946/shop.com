import React from 'react'
import { Link } from 'react-router-dom'
import {Routes,Route} from "react-router-dom"
import {HomePage} from "./Components/HomePage"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"
import {Navbar} from "./Components/Navbar"
import {Footer} from "./Foot/Footer"
export const AllRouter = () => {
  return (
    <div>
        
        <Link to="/">Home</Link> 
         <Link to="/signup">Signup</Link>
       <Link to="/login">Login</Link>

     
    </div>
  )
}
