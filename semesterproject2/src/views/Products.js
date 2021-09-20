import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../settings/api.js";
import Products from "../components/Products";

const productsUrl = baseUrl + "/products";

const Productspage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(productsUrl);
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  console.log(products[0])

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="body-container">
        <div className="prod-container">
          {products.map((prod) => (
            <Products data={prod} key={prod.id} />
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Productspage;
