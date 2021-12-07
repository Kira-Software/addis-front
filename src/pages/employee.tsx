import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Nav } from "../components/navbar";
import { Footer } from "../components/footer";
import { AddEmployee } from "../components/addEmployee";
import { DisplayEmployee } from "../components/displayEmployee";
import { getEmployee } from "../Redux/reducer/employee";

const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #4589b5;
`;

const Add = styled.div`
  float: left;
  width: 50%;
`;

const Display = styled.div``;

const Foot = styled.div`
  margin-top: 500px;
`;

export const Employee: React.FC = () => {
  const dispatch = useDispatch();
  const employee = useSelector(
    (state: RootStateOrAny) => state.employee.employee
  );
  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  //console.log(employee);
  return (
    <div>
      <Nav />
      <Add>
        <AddEmployee />
      </Add>

      {/* <Display> */}
        <DisplayEmployee />
      {/* </Display> */}

      <Foot>
        <Footer />
      </Foot>
    </div>
  );
};
