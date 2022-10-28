import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Navbar } from "../Components/Navbar";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
  const { id, title, image, price, category } = product;
    return (
      <div>
        {/* <Navbar /> */}
        
        <Card style={{ width: "18rem", margin: "10px", gap: "80px" }} key={id}>
        <div style={{marginBottom:"20%"}}></div>
          <Link to={`/product/${id}`}>
            <Card.Img variant="top" src={image} style={{ width: "60%" }} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text style={{ color: "black",textDecoration: "none"  }}>
                <b>Rs:{price}</b>
              </Card.Text>
              <Card.Text style={{ color: "black", textDecoration: "none" }}>
                {category}
              </Card.Text>
              <Button variant="primary" style={{ backgroundColor: "#414467 "}}>
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
