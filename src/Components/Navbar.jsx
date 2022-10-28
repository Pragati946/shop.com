import Hamburger from "hamburger-react";
import { startTransition, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Signup from "../Pages/Signup";
export const Navbar = ({ handleFormSubmit }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      style={{
        height: "120px",
        width: "100%",
        // border:"2px solid grey",
        // Z:5
        backgroundColor: "#f0f1f7",
        top: 0,
        // overflow: "hidden",
        position: "fixed",
         zIndex:5,
        // display:"flex"
      }}
    >
      <div
        style={{
          height: "80px",
          width: "250px",
        }}
      >
       
        <Link to="/" style={{textDecoration:"none",marginLeft:"20px"}}> <img src="https://img.shop.com/Image/resources/logos/shop-logo-us-gold.svg" /></Link>
      </div>
      <div
        style={{
          // width:"100px",
        borderRadius:"20px",
          marginTop: "-72px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <div> */}
        <select
          style={{
            height: "40px",

            // marginTop:"-20px",
            // borderRadius:"5px"
          }}
        >
          <option>All Departments</option>
          <option>Auto</option>
          <option>Baby</option>
          <option>Books</option>
          <option>Business</option>
          <option>Cameras</option>
          <option>Clothes</option>
        </select>
        {/* </div>
            <div> */}
        <input
          style={{
            height: "40px",
            width: "450px",
          }}
          placeholder="Search SHOP.COM..."
          type="text"
        />
        {/* </div> */}
        <img
        
          src="https://img.shop.com/Image/resources/images/icon-search-24px.svg"
          alt=""
          style={{ background: "Blue",width:"40px" }}
        />
      </div>
      <div>
        <div style={{ display: "flex" ,marginLeft:"20px"}}>
          <Hamburger toggled={isOpen} toggle={setOpen}  style= {{}}/>
          <h4 style={{ paddingLeft: "20px", marginTop: "12px" }}>Categories</h4>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "450px",
            gap: "20px",
            marginTop: "-35px",
           
          }}
          
        >
          <Link to="/product" style={{textDecoration:"none",color:"black"}}>  <div ><b>Exclusive Brands</b></div></Link>
          <Link to="/product" style={{textDecoration:"none",color:"black"}}>  <div ><b>Stores</b></div></Link>
          <Link to="/product" style={{textDecoration:"none",color:"black"}}>  <div ><b>Deals</b></div></Link>
          <Link to="/product" style={{textDecoration:"none",color:"black"}}>  <div ><b>SHOP Travel</b></div></Link>
          <Link to="/product" style={{textDecoration:"none",color:"black"}}>  <div ><b>Departments</b></div></Link>
          <Link to="/product" style={{textDecoration:"none",color:"black"}}>  <div ><b>Shop Buddy</b></div></Link>
          <Link to="/product" style={{textDecoration:"none",color:"black"}}>  <div ><b>Shop Local</b></div></Link>
        </div>
        <div
          style={{
            marginLeft: "75%",
            marginTop: "-76px",
          }}
        >
          <div>
            <img src="https://www.shop.com/feo-cdn/B/c/T2U7XbJVM.webp" alt="" />
          </div>
          <div style={{ display: "flex", gap: "60px" }}>
            <div>
              <img
                src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg"
                alt=""
              />
              <Link to="/signup" style={{textDecoration:"none",color:"black"}}>Sign in</Link>
              {/* <button onClick={handleFormSubmit}>Signup</button> */}
            </div>
            <div>
              <img
                src="https://img.shop.com/Image/resources/images/icon-orders-24px.svg"
                alt=""
              />
              Orders
            </div>
            <div>
              <img
                src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg"
                alt=""
              />
            <Link to="/product/:productId" style={{textDecoration:"none",color:"black"}}>Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
