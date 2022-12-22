import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: 1s all;
  ${mobile({ height: "20vh" })}
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 80vh;
  position: relative;
  transition: all 1s;

  &:hover ${Image} {
    // filter: blur(2px);
    filter: grayscale(0);
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  align-self: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  font-weight: 600;
  width: 100px;
  align-self: center;
  transition: 0.3s all;

  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
