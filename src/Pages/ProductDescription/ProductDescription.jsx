import React from "react";
import { Container } from "react-bootstrap";
import "./ProductDescription.css";

export const ProductDescription = () => {

  // Add state to store single product

  // Add code to trigger api call to https://fakestoreapi.com/products/${id}
  // id is fetched from useParams()
  
  const isLoading = true
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="product-description mt-8">
      Product description page goes here
    </Container>
  );
};
