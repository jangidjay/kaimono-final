import React from "react";
import styled from "styled-components";
import { allCollection } from "../data";
import AllCollection from "./AllCollection";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Collection = () => {
  return (
    <Container>
      {allCollection.map((item) => (
        <AllCollection item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Collection;
