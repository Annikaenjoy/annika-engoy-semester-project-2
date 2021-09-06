import React from "react";
import { baseUrl } from "../settings/api";

const Products = ({data}) => {
    return (
        <>
        
            <img className="prod-img" src={`${baseUrl}${data.image.url}`} />
            <h5>{data.title}</h5>
            
            
    </>
    )
}

export default Products;