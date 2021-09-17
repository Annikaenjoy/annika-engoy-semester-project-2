import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../settings/api.js";
import HeroBanner from "../components/Header";

const productsUrl = baseUrl + "/home";

const Homepage = () => {
  const [home, setHome] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(productsUrl);
      const json = await response.json();
      setHome(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="body-container">
          {" "}
          <HeroBanner data={home} key={home.id} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
