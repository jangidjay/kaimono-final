import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive'
import img from "../images/cta_bg_01_wide.jpg";

const Container = styled.div`
  haight: 40vh;
  // width: 100vw;
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
  
`;

const Image = styled.div`
  // border: 10px solid #000;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 96vw;
  height: 60vh;
  filter: contrast(0.7) brightness(0.7);
  border-radius: 15px;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 50px;
  width: 50vw;
  height: 40vh;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin: 80px;
  border-radius: 50px;
  text-align: center;

  &:hover {
    box-shadow: 0px 10px 40px 0px #000;
  }
`;

const Heading = styled.h1`
  margin: 20px 0;
  font-size: 38px;
`;

const SayWhat = styled.h3`
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  height: 40px;
  width: 30vw;
  border-radius: 50px;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
`;

const Button = styled.button`
  border: none;
  height: 40px;
  font-size: 16px;
  padding: 10px;
  border-radius: 50px;
  background-color: #960018;
  color: #fff;
  transition: .3s all;

  &:hover {
    background-color: #E30B5D;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Image></Image>
      <Info>
        <Heading>BE THE FIRST</Heading>
        <SayWhat>
          TO RECEIVE EXCLUSIVE DISCOUNTS, SALES, AND SO MUCH MORE
        </SayWhat>
        <Input placeholder="Email..."/>
        <Button>SUBSCRIBE and GET <span style={{fontWeight: "bold", fontSize: "18px"}}>30%</span> DISCOUNT</Button>
      </Info>
      {/* </Image> */}
    </Container>
  );
};

export default Newsletter;
