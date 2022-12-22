import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";


const Name = styled.h1`
  color: #777;
  font-size: 28px;
`;

const Container = styled.div`
  flex: 1 0 21%;
  margin: 2%;
  min-width: 280px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  border: 1px solid black;

  &:hover ${Name} {
    color: #000;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-item: flex-end;
  
`;



const Price = styled.p`
  margin: 5px 0;
`;

const Span = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RatingSpan = styled.span`
  font-size: 20px;
  font-weight: 500;
  background-color: #96528a;
  color: #fff;
  padding: 5px;
  border-radius: 50px;
`;

const Reviews = styled.p``;

const AllCollection = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={item.img} />
        <Info>
          <Name>{item.name}</Name>
          <Price>
            $ <Span>{item.price}</Span>
          </Price>
          <Rating>
            <RatingSpan>({item.rating}) </RatingSpan>
            <Reviews>{item.reviews}</Reviews>
          </Rating>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default AllCollection;
