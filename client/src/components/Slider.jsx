import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
  transition: all 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  transition: all 1s;

  &:hover {
    opacity: 0.9;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: #000;
  display: inline-block;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:before {
    animation: opacityFallbackOut 0.5s step-end forwards;
    backface-visibility: hidden;
    // background-color: #000;
    background-color: ${(props) => props.btn_bg};
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
  }

  &:hover:before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }

  &:after {
    background-color: #ffffff;
    color: #fff;
  }

  span {
    z-index: 1;
    position: relative;
  }
`;

//

// <!-- HTML !-->
// <button class="button-48" role="button"><span class="text">Button 48</span></button>

// /* CSS */
// .button-48 {
//   appearance: none;
//   background-color: #FFFFFF;
//   border-width: 0;
//   box-sizing: border-box;
//   color: #000000;
//   cursor: pointer;
//   display: inline-block;
//   font-size: 14px;
//   font-weight: 500;
//   letter-spacing: 0;
//   line-height: 1em;
//   margin: 0;
//   opacity: 1;
//   outline: 0;
//   padding: 1.5em 2.2em;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   text-rendering: geometricprecision;
//   text-transform: uppercase;
//   transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: baseline;
//   white-space: nowrap;
// }

// .button-48:before {
//   animation: opacityFallbackOut .5s step-end forwards;
//   backface-visibility: hidden;
//   background-color: #EBEBEB;
//   clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
//   content: "";
//   height: 100%;
//   left: 0;
//   position: absolute;
//   top: 0;
//   transform: translateZ(0);
//   transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
//   width: 100%;
// }

// .button-48:hover:before {
//   animation: opacityFallbackIn 0s step-start forwards;
//   clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
// }

// .button-48:after {
//   background-color: #FFFFFF;
// }

// .button-48 span {
//   z-index: 1;
//   position: relative;
// }

//

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState();
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link
                to="/collections"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Button btn_bg={item.btn_bg}>
                  <span>EXPLORE</span>
                </Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
