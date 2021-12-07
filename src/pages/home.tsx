import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navbar = styled.nav`
  height: 100vh;
  background: #fff;
  // padding: 0rem calc((100vw -1300px) / 2);
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
`;

const Blue = styled.div`
  height: 100vh;
  background: #4589b5;
  border-radius: 500px 0px 500px 0px;

  button {
    width: 300px;
    height: 40px;
    background-color: #fff;
    color: #000;
    margin-left: 40%;
    margin-top: 200px;
    border-radius: 30px;
    //  font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }

  h1 {
    margin-left: 40%;
    padding-top: 200px;
    font-size: 40px;
  }
`;

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    console.log("button is clicked");
    navigate("/employee");
  };
  return (
    <Navbar>
      <Blue>
        <h1>Employee Manager</h1>
        <button onClick={handleStart}>Get Started</button>
      </Blue>
    </Navbar>
  );
};
