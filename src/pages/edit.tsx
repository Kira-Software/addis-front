import React, { useState } from "react";
import { Nav } from "../components/navbar";
import { Footer } from "../components/footer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { editEmployee } from "../Redux/reducer/employee";

const Text = styled.span`
  input {
    width: 300px;
    height: 30px;
  }
`;

const Radio = styled.span`
  input {
    width: 20px;
    height: 20px;
    margin-right: 50px;
  }
`;

const Button = styled.span`
  button {
    width: 200px;
    height: 30px;
    color: blue;
    border-radius: 10px;
    margin-left: 30px;
    cursor: pointer;
  }
`;

const Editform = styled.div`
  margin-left: 20%;
  margin-top: 50px;
`;

interface Props {
  id?: string;
  employeeName?: string;
  dateofBirth?: string;
  gender?: string;
  salary?: Number | any;
}

export const Edit: React.FC<Props> = ({
  employeeName,
  dateofBirth,
  gender,
  salary,
  id,
}) => {
  //   let edit =  localStorage.getItem("edit");
  //  const sth =  JSON.parse(edit)
  //console.log(employeeName, dateofBirth, gender, salary, id);

  const [editform, setEditform] = useState({
    editemployeeName: employeeName,
    editdateofBirth: dateofBirth,
    editgender: gender,
    editsalary: salary,
  });

  const dispatch = useDispatch();

  const handleEdit = () => {
    localStorage.setItem("open", "display");
    console.log("editform value is ", editform);
    dispatch(editEmployee(id, editform));
    // window.location.reload();
  };

  const changer = (e) => {
    setEditform({ ...editform, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {/* <Nav /> */}
      <Editform>
        <h3>Edit page</h3>

        <table cellPadding={10}>
          <tr>
            <td>Name</td>
            <td>
              <Text>
                <input
                  type="text"
                  placeholder="Employee Name"
                  id="name"
                  value={editform.editemployeeName}
                  onChange={(e) => changer(e)}
                  name="editemployeeName"
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
                  //value={editform.editdateofBirth}
                  onChange={(e) => changer(e)}
                  name="editdateofBirth"
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
                  checked={editform.editgender === "Male" ? true : false}
                  onChange={(e) => changer(e)}
                  name="editgender"
                />

                <label>Female: </label>
                <input
                  type="radio"
                  value="Female"
                  checked={editform.editgender === "Female" ? true : false}
                  onChange={(e) => changer(e)}
                  name="editgender"
                />
              </Radio>
            </td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>
              <Text>
                <input
                  type="number"
                  id="name"
                  value={editform.editsalary}
                  onChange={(e) => changer(e)}
                  name="editsalary"
                />
              </Text>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Button>
                {" "}
                <button onClick={handleEdit}>Edit</button>
              </Button>
            </td>
          </tr>
        </table>
      </Editform>
      {/* <Footer /> */}
    </div>
  );
};
