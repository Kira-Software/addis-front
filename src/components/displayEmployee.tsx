import React, { useState, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteEmployee, getEmployee } from "../Redux/reducer/employee";
import { Edit } from "../pages/edit";

const Display = styled.div`
  height: 800px;
  overflow: auto;
  border: solid 1px black;
  margin-top: 50px;
  border-radius: 10px;
  h1 {
    margin-left: 40%;
  }

  // float: right;
`;
const Card = styled.div`
  // width: 40%;
  margin-left: 20px;
  height: 200px;
  overflow: auto;
  border: solid 1px blue;
  border-radius: 20px;
  margin-top: 20px;
  //float: right;
  //margin-right: 9%;

  p {
    font-weight: bold;
    margin-left: 100px;
  }
`;
const Icons = styled.span`
  float: right;
  margin-right: 100px;
`;

const Icon = styled.span`
  margin-left: 30px;
  cursor: pointer;
`;

export const DisplayEmployee: React.FC = () => {
  const [data, setData] = useState([
    {
      employeename: "Kirubel",
      birthdate: "1999-05-31",
      gender: "male",
      salary: "10000",
    },
    {
      employeename: "Someone",
      birthdate: "1997-05-31",
      gender: "male",
      salary: "15000",
    },
  ]);

  const [display, setDisplay] = useState(true);

  const [editform, setEditform] = useState({
    id: "",
    employeeName: "",
    dateofBirth: "",
    gender: "",
    salary: "",
  });
  const handleDelete = (id) => {
    let answer = window.confirm(
      "are you sure that you want to delete this employee?"
    );
    if (answer) {
      dispatch(deleteEmployee(id));
    }
  };

  const dispatch = useDispatch();
  const employee = useSelector(
    (state: RootStateOrAny) => state.employee.employee
  );

  const handleEdit = (_id, employeeName, dateofBirth, gender, salary) => {
    const edit = { _id, employeeName, dateofBirth, gender, salary };
    console.log("edit icon clicked and edit value is", edit);
    setEditform({
      employeeName: employeeName,
      dateofBirth: dateofBirth,
      gender: gender,
      salary: salary,
      id: _id,
    });

    localStorage.setItem("open", "edit");
    // window.location.reload();
    //localStorage.setItem("edit", JSON.stringify(edit));
    // localStorage.setItem("id", _id);
    // localStorage.setItem("employeeName", employeeName);
    // localStorage.setItem("dateofBirth", dateofBirth);
    // localStorage.setItem("gender", gender);
    // localStorage.setItem("salary", salary);
  };
  useEffect(() => {
    dispatch(getEmployee());
    //localStorage.setItem("open", "display");
  }, []);

  //console.log(employee);
  return (
    <>
      {localStorage.getItem("open") == "edit" ? (
        <div>
          {/* <h1>Edit Employee</h1> */}
          <Edit
            employeeName={editform.employeeName}
            dateofBirth={editform.dateofBirth}
            gender={editform.gender}
            salary={parseInt(editform.salary)}
            id={editform.id}
          />
        </div>
      ) : (
        <div>
          <h1>Employee List</h1>
          <Display>
            {employee &&
              employee.map((item, idx) => {
                return (
                  <Card key={idx}>
                    <p>Name: {item.employeeName} </p>
                    <p>Birth Date: {item.dateofBirth} </p>
                    <p>Gender: {item.gender} </p>
                    <p>Salary: {item.salary} </p>
                    <Icons>
                      <Icon>
                        {/* <Link to="/edit">
                          {" "} */}
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() =>
                            handleEdit(
                              item._id,
                              item.employeeName,
                              item.dateofBirth,
                              item.gender,
                              item.salary
                            )
                          }
                        />
                        {/* </Link> */}
                      </Icon>
                      <Icon>
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => handleDelete(item._id)}
                        />{" "}
                      </Icon>
                    </Icons>
                  </Card>
                );
              })}
          </Display>
        </div>
      )}
    </>
  );
};
