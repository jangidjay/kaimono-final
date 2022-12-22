import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";


const Heading = styled.h1`
  font-size: 18px;
  text-align: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 40px;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Heading>
        <h1>SHOP BY CATEGORY</h1>
      </Heading>
      <Categories />
      <Heading>
        <h1>POPULAR IN SHOP</h1>
      </Heading>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
