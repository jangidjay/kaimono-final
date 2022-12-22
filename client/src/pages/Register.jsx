import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/registration.jpg";
import { mobile } from '../responsive'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: #000;
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

const Title = styled.div`
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

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  gap: 5px;
  margin-bottom: 5px;
`;

const Check = styled.input``;

const Span = styled.span`
  text-decoration: underline;
  cursor: pointer;
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
  text-transform: uppercase;
`;

const Register = () => {
  return (
    <Container>
      <Image></Image>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Input placeholder="name" type="text" />
          <Input placeholder="lastname" type="text" />
          <Input placeholder="username" type="text" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
          <Checkbox>
            <Check type="checkbox" id="agree" name="agree" />
            <Redirect for="agree">
              I agree to all the <Link
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            ><Span>Terms and Service</Span></Link>
            </Redirect>
          </Checkbox>
          <Button>SIGN UP</Button>
          <Redirect>
            Already have an Account?
            <Link
              to="/signin"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Span> Login</Span>
            </Link>
          </Redirect>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
