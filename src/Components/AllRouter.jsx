import React from 'react'
import { Link } from 'react-router-dom'
export const AllRouter = () => {
  return (
    <div>
        
        <Link to="/">Home</Link> 
       <Link to="/Navbar">Navbar</Link>
         <Link to="/signup">Signup</Link>
       <Link to="/Login">Login</Link>
    </div>
  )
}
