import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Products.css";

export function Products() {
  // Define state to store the api data of products
  // Add code to make a call to the API to fetch the products and store it in the component https://fakestoreapi.com/products

  const [products, setproducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      setisLoading(true);
      setproducts(response.data)
      setisLoading(false);
    })
    .catch(err => console.log(err))
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{padding: "2rem"}}>
      {/* Add code to show the API data on the home page */}
      {
        products?.map((product) => (
          <div key={product.id} style={{cursor: "pointer"}}>
            <div>
            <p style={{fontWeight: "500"}}>{product.title}</p>
            <p style={{fontWeight: "500", fontSize: "1.5rem", color: "green"}}>$ {product.price}</p>
            </div>
            <img src={product.image} height="75" width="75" />
            <hr />
          </div>
        ))
      }
    </div>
  );
}
