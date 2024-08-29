import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./HomePage.css";

export function HomePage({ handleLogout }) {
  // Define state to store the api data of products
  // Add code to make a call to the API to fetch the products and store it in the component https://fakestoreapi.com/products

  const isLoading = false;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={9} className="product-view-col">
          <h2>Home page goes here</h2>

          {/* Add code to show the API data on the home page */}
        </Col>
      </Row>
    </Container>
  );
}
