import React from "react";
// import { Image } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
// import Carousl from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
const responsive = {superLargeDesktop: {
  // the naming can be any, depends on you.
  breakpoint: { max: 4000, min: 3000 },
  items: 5
},
desktop: {
  breakpoint: { max: 3000, min: 1024 },
  items: 3
},
tablet: {
  breakpoint: { max: 1024, min: 464 },
  items: 2
},
mobile: {
  breakpoint: { max: 464, min: 0 },
  items: 1
}
}
export const HomeImageSlider = ({ slides }) => {
 
  return (
   
   <div>

     <div style={{ padding: 30, border: "2px solid white" ,width:"750px",marginLeft:"5%",marginTop:"80px"}}>
     <h2> Stay Fit This Summer</h2>
  <Carousel>
    <Carousel.Item interval={1500}>
      <img
        className="d-block w-100"
        style={{ width: "500px", height: "350px" }}
        src="https://img.shop.com/Image/235000/243300/243395/products/1065616453.jpg?plain&size=600x600"
        alt="Image One"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://img.shop.com/Image/235000/243300/243395/products/559078811.jpg?plain&size=600x600"
        alt="Image Two"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://img.shop.com/Image/235000/243300/243395/products/559078799.jpg?plain&size=600x600"
        alt="Image Three"
      />
      {/* <Carousel.Caption></Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item interval={500} >
      <img
       style={{ width: "500px", height: "350px"  }}
        className="d-block w-100"
        src="https://img.shop.com/Image/235000/243300/243395/products/1717564503.jpg?plain&size=600x600"
        alt="Image Four"
      />
      {/* <Carousel.Caption></Carousel.Caption> */}
     </Carousel.Item> 
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://img.shop.com/Image/235000/243300/243395/products/1882071012.jpg?plain&size=600x600"
        alt="Image Six"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://img.shop.com/Image/235000/243300/243395/products/570817677.jpg?plain&size=600x600"
        alt="Image Seven"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://img.shop.com/Image/235000/243300/243395/products/1887745621.jpg?plain&size=600x600"
        alt="Image Eight"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
{/* ---------------------------------------------------------------- */}
<div style={{marginTop:"-62%",marginLeft:"50%"}}>
  <img style={{width:"60%",marginTop:"490px"}}src="https://www.shop.com/feo-cdn/K/d/BVqTjwX0s.webp"/>
</div>
<div style={{ padding: 30, border: "2px solid white" ,width:"750px",marginLeft:"5%",marginTop:"80px"}}>
     <h2> Stay Fit This Summer</h2>
  <Carousel>
    <Carousel.Item interval={1500}>
      <img
        className="d-block w-100"
        style={{ width: "500px", height: "350px" }}
        src="https://www.shop.com/feo-cdn/4/g/D8DIl5fGI.webp"
        alt="Image One"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://www.shop.com/feo-cdn/w/t/nzuLb-Tb0.webp"
        alt="Image Two"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://www.shop.com/feo-cdn/b/7/xSImsrzpw.webp"
        alt="Image Three"
      />
      {/* <Carousel.Caption></Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item interval={500} >
      <img
       style={{ width: "500px", height: "350px"  }}
        className="d-block w-100"
        src="https://www.shop.com/feo-cdn/g/p/tDhoafGUg.webp"
        alt="Image Four"
      />
      {/* <Carousel.Caption></Carousel.Caption> */}
     </Carousel.Item> 
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://www.shop.com/feo-cdn/O/L/LsSiTIqIA.webp"
        alt="Image Six"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://www.shop.com/feo-cdn/d/r/GiREPDxPE.webp"
        alt="Image Seven"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
       style={{ width: "500px", height: "350px" }}
        className="d-block w-100"
        src="https://www.shop.com/feo-cdn/y/v/t_nQrTa_c.webp"
        alt="Image Eight"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
<div style={{marginTop:"-62%",marginLeft:"50%"}}>
  <img style={{width:"60%",marginTop:"490px"}}src="https://www.shop.com/feo-cdn/_/u/JkcKNXNw8.jpg"/>
</div>

    
   </div>
  );
};