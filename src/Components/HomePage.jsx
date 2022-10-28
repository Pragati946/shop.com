import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { HomeImageSlider } from "./HomeImageSlider";
// import Hamburger from "hamburger-react";
import {
  HomeGifSlider,
  HomeGifSlider2,
} from "../Carousel/HomeImageSlider"
import { startTransition, useState } from "react";
import { Navigate } from "react-router-dom";
import Signup from "../Pages/Signup";

export const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      
     
      <div style={{ width: "100%", marginTop: "150px" }}>
        <div
          style={{
            display: "flex",
            paddingRight: "20px",
            gap: "7px",
            justifyContent: "center",
          }}
        >
          <h4>$50,063,983</h4>
          <p>awarded in </p>
          <img
            style={{ height: "40px", width: "40px" }}
            src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
            alt=""
          />
          <p>Cashback!</p>
          <button
            style={{
              borderRadius: "20px",
              height: "40px",
              width: "100px",
              border: "2px solid black",
            }}
          >
            Learn More
          </button>
        </div>
        <img
          style={{ width: "100%", marginTop: "10px" }}
          src="https://img.shop.com/Image/resources/homepage/30_Anniversary_Banner.png"
          alt=""
        />
        <img
          style={{ width: "100%", marginTop: "-5px", height: "300px" }}
          src=" https://www.shop.com/feo-cdn/y/H/p4i0ZnTXA.webp"
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          width: "100%",
          marginTop: "40px",
        }}
      >
        <div>
          <h4>
            Featured Product - Lumière de
            {/* <br/> */}
            Vie® Hommes Exfoliating Face Scrub
          </h4>
          <img
            style={{ width: "100%" }}
            src="https://img.shop.com/Image/270000/274000/274036/products/1875875357.jpg?plain&size=300x300"
            alt=""
          />
        </div>
        <div>
          <h4>Dr. Deedra Mason's Essential 9</h4>
          <img
            style={{ width: "70%" }}
            src="https://img.shop.com/Image/homepage/us_eng_essential9_sq1616511735959.jpg"
            alt=""
          />
        </div>
        <div>
          <h4>Featured One Cart Stores</h4>
          <img
            style={{ width: "70%" }}
            src="https://img.shop.com/Image/homepage/Rastellis_MA_MidSummer22_600x600-img_CTA1657723097922.png"
            alt=""
          />
        </div>
        <div>
          <h4>Sign in for the best experience</h4>
          <img
            style={{ width: "70%" }}
            src="https://img.shop.com/Image/homepage/Rastellis_MA_MidSummer22_600x600-img_CTA1657723097922.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <h2>Popular Brands</h2>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <img
            style={{ width: "90%" }}
            src="https://www.shop.com/feo-cdn/d/b/zT4i8COrg.webp"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ marginRight: "40px" }}
            src="https://www.shop.com/feo-cdn/A/p/ONaGbc0Sw.webp"
            alt=""
          />
          <img
            style={{ marginRight: "40px" }}
            src="https://www.shop.com/feo-cdn/W/F/MSQneTOF8.webp"
            alt=""
          />
          <img src="https://www.shop.com/feo-cdn/L/6/4sMQp52O0.webp" alt="" />
        </div>
        <div>
          <img
            style={{ marginRight: "40px" }}
            src="https://www.shop.com/feo-cdn/b/M/ihVmpQaZE.webp"
            alt=""
          />

          <img
            style={{ marginRight: "40px" }}
            src="https://www.shop.com/feo-cdn/l/I/USB2Cic44.webp"
            alt=""
          />
          {/* <img style={{marginRight:"40px"}}src="https://www.shop.com/feo-cdn/b/M/ihVmpQaZE.webp" alt="" /> */}
          <img
            style={{ marginLeft: "80px" }}
            src="https://www.shop.com/feo-cdn/3/K/NjwdecovA.webp"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          margin: "auto",
          height: "150px",
          width: "150px",
          marginTop: "20px",
        }}
      >
        <img
          src="https://img.shop.com/Image/resources/homepage/shop-homepage-icon-gold.svg"
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          width: "100%",
          marginTop: "40px",
        }}
      >
        <div>
          <img src="https://www.shop.com/feo-cdn/v/X/sW3POHeMQ.webp" alt="" />
        </div>
        <div>
          <img src="https://www.shop.com/feo-cdn/K/X/32EFiyNvE.webp" alt="" />
        </div>
        <div>
          <img src="https://www.shop.com/feo-cdn/0/C/A6yJeUcUE.webp" alt="" />
        </div>
        <div>
          <img src="https://www.shop.com/feo-cdn/C/r/NIDMytUo0.jpg" alt="" />
        </div>
      </div>
      {/* <div style={{width:"80%",height:"200px",border:"1px solid black"}}> */}
      <div>
        <HomeImageSlider />
      </div>
  < HomeGifSlider/> 
      <HomeGifSlider2/>
   
    </div>
  );
};
