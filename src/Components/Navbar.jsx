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
        <img src="https://img.shop.com/Image/resources/logos/shop-logo-us-gold.svg" />
      </div>
      <div
        style={{
          // width:"100px",
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
          style={{ background: "Blue" }}
        />
      </div>
      <div>
        {/* <div style={{marginLeft:"-90%"}}><img  src="https://img.shop.com/Image/resources/images/icon-menu-24px.svg" alt="" />Categories</div> */}
        <div style={{ display: "flex" }}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <h4 style={{ paddingLeft: "20px", marginTop: "12px" }}>Categories</h4>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "350px",
            gap: "20px",
            marginTop: "-35px",
          }}
        >
          <div>Exclusive Brands</div>
          <div>Stores</div>
          <div>Deals</div>
          <div>SHOP Travel</div>
          <div>Departments</div>
          <div>Shop Buddy</div>
          <div>Shop Local</div>
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
              <Link to="/Signup" >Signup</Link>
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
              Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
