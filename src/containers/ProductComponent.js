import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
     <div>
       <Navbar/>
      <Card style={{ width: "18rem", margin: "10px", gap: "80px" }}key={id} >
      <Link to={`/product/${id}`}>
        <Card.Img variant="top" src={image} style={{width:"80%"}}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ color: "#d0538c" }}>
            <b>Rs:{price}</b>
          </Card.Text>
          
          <Card.Text style={{ color: "black" ,textDecoration:"none"}}>{category}</Card.Text>

          <Button variant="primary" style={{ backgroundColor: "grey" }}>
            ADD TO CART
          </Button>
        </Card.Body>
      </Link>
    </Card>
     </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
