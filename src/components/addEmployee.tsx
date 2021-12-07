import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postEmployee, setEmployee } from "../Redux/reducer/employee";

const Add = styled.div`
  margin-left: 100px;
  margin-bottom: 200px;
  margin-top: 100px;

  button {
    width: 200px;
    height: 30px;
    color: blue;
    border-radius: 10px;
    margin-left: 30px;
    cursor: pointer;
  }
`;
const Break = styled.div`
  height: 20px;
`;

const Radio = styled.span`
  input {
    width: 20px;
    height: 20px;
    margin-right: 50px;
  }
;2`;

const Text = styled.span`
  input {
    width: 300px;
    height: 30px;
  }
`;

export const AddEmployee: React.FC = () => {
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    employeeName: "",
    dateofBirth: "",
    gender: "",
    salary: "",
  });

  const changer = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
   // console.log("the formdata value is ", formdata);
  };

  const handleSubmit = () => {
    console.log("submit button is clicked");
    dispatch(postEmployee(formdata));
    console.log("the value of formdata is ", formdata);
  };
  return (
    <Add>
      <h3>Add Employee</h3>
      <table cellPadding={10}>
        <tr>
          <td>Name</td>
          <td>
            <Text>
              <input
                type="text"
                placeholder="Employee Name"
                id="name"
                name="employeeName"
                onChange={(e) => changer(e)}
              />
            </Text>
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>
            <Text>
              <input
                type="date"
                name="dateofBirth"
                onChange={(e) => changer(e)}
              />
            </Text>
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>
            <Radio>
              <label>Male: </label>
              <input
                type="radio"
                value="Male"
                name="gender"
                onChange={(e) => changer(e)}
              />

              <label>Female: </label>
              <input
                type="radio"
                value="Female"
                name="gender"
                onChange={(e) => changer(e)}
              />
            </Radio>
          </td>
        </tr>
        <tr>
          <td>Salary</td>
          <td>
            <Text>
              <input type="number" name="salary" onChange={(e) => changer(e)} />
            </Text>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button onClick={handleSubmit}>Add</button>
          </td>
        </tr>
      </table>
    </Add>
  );
};
