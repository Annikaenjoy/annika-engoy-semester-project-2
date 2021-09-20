import React from "react";
import { baseUrl } from "../settings/api";

const Products = ({ data }) => {
  return (
    <>
    <div className="prod-item">
      <img
        className="prod-img"
        src={`${baseUrl}${data.image.url}`}
        alt="Nail polish"
      />
          <h5>{data.title}</h5>
          <h6>$ {data.price}</h6>
          <button className="prod-button"> View more</button>
   </div>
    </>
  );
};

export default Products;
