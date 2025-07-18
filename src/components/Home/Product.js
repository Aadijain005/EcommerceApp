import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Rating } from '@mui/material';

const options = {
  readOnly: true,
  value: 2.5,
  precision: 0.5,
  size: window.innerWidth < 600 ? "small" : "medium",
  name: "product-rating", // ✅ Add this line
};


const Product = ({ product }) => {
  return (
    <Link className="productCard" to={product._id}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating{...options} />{" "}
        <ReactStars {...options} /> <span>(256 Reviews)</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default Product;
