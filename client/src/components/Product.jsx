import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Image = styled.img`
  height: 65%;
  z-index: 2;
`;

const Info = styled.div`
  opacity: 0;
  width: 200px;
  height: 75px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

 
`;

const Circle = styled.div`
  display: inline-block;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #bff8ff;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 1s ease;
`;

const Container = styled.div`
  flex: 1 0 21%;
  margin: 2%;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;

  // transition: .5s all;

  &:hover ${Info} {
    opacity: 1;
  }

  &:hover ${Circle} {
    background-color: #607c80;
  }
`;





const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #bff8ff;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
