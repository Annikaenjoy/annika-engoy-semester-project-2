import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { useState } from "react";
// import { useEffect } from "react";
// import { baseUrl } from "../settings/api.js";

// const productsUrl = baseUrl + "products";


const Homepage = () => {

  // const [home, setHome] = useState({});

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch(productsUrl);
  //     const json = await response.json();
  //     setProducts(json);
  //     console.log(json)

  // } catch (error) {
  //     console.log(error);
  //     //displayMessage("error", error, ".product-container");
  // }
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, [])

    return (
      <>
        <Navbar />
        {/* <div className="wrapper">
          <div className="body-container">{heroBanner}</div>
          {products.map((hero, i) => (<Product data={hero.home}/>))}
      </div> */}
  
            <Footer/>
      </>
    );
  };
  export default Homepage;
  