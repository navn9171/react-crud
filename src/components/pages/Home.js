import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    // console.log("Hellooo shubh");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:5000/users");
    // console.log(users);
    setUser(users.data.reverse());
  };

  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:5000/users/${id}`);
    loadUsers();
  }

  return (
    <div className="container">
      <h1>Home Page</h1>
      <table class="table shadow table-hover table-bordered ">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                  <Link to={`/users/${user.id}`} style={{marginLeft:"20px"}} class="btn btn-outline-primary mr-1">View</Link>
                  <Link to={`/users/edit/${user.id}`} style={{marginLeft:"20px"}} class="btn btn-outline-warning ">Edit</Link>
                  <Link onClick={()=> deleteUser(user.id)} style={{marginLeft:"20px"}} class="btn btn-outline-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
