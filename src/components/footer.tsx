import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 50px;

  h4 {
    margin-left: 40%;
  }
`;

export const Footer: React.FC = () => {
  return (
    <Foot>
      <h4>&copy; All rights reserved.</h4>
    </Foot>
  );
};
