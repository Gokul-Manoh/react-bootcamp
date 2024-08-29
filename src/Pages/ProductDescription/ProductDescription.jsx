import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./ProductDescription.css";

export function ProductDescription() {

  // Add state to store single product

  // Add code to trigger api call to https://fakestoreapi.com/products/${id}
  // id is fetched from useParams()

  const [product, setproduct] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/2`)
    .then((response) => {
      setisLoading(true);
      setproduct(response.data)
      setisLoading(false);
    })
    .catch(err => console.log(err))
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-description mt-8">
      <div>
        <p style={{fontWeight: "500"}}>{product.title}</p>
        <p style={{color: "gray"}}>{product.description}</p>
        <p style={{fontWeight: "500", fontSize: "1.5rem", color: "green"}}>$ {product.price}</p>
        </div>
      <img src={product.image} height="150" width="150" />
    </div>
  );
};
