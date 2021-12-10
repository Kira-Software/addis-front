import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  background-color: green;
  font-size: 25px;
  //position: absolute;
  // top: 0px;
  // left: 0px;
`;

export const Nav: React.FC = () => {
  return (
    <NavBar>
      <h1>Employee Manager</h1>
    </NavBar>
  );
};
