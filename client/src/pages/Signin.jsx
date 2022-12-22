import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/signin.jpg";
import {mobile} from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Image = styled.div`
  flex: 1;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 40px;
  background-color: #fff;
  ${mobile({width: "80%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #96528a;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Redirect = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Signin = () => {
  return (
    <Container>
      <Image></Image>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Redirect>FORGOT PASSWORD?</Redirect>
          <Redirect>
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              CREATE A NEW ACCOUNT
            </Link>
          </Redirect>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signin;
