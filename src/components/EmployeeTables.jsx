// fullName, password va email cua nhan vien sau khi sign in
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function EmployeeTables() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];
    setUsers(parsedUsers);
  }, []);

  const addUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  return (
    <>
      <h2 className="text-center my-3">Employee Abc&apos; group</h2>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr className="text-center" key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button
        type="button"
        className="d-flex justify-content-end btn btn-outline-primary ms-3"
        onClick={() => history.push("/signin")}
      >
        Back
      </button>
    </>
  );
}

export default EmployeeTables;
