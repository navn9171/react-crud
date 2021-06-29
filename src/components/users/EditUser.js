import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";

const EditUser = () => {
  const history = useHistory();
  const {id} = useParams();
//   alert(id)

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/users/${id}`, user);
    history.push("/");
  };

  useEffect(() => {
      loadUser();
  }, [])

  const loadUser = async()=>{
      const result = await axios.get(`http://localhost:5000/users/${id}`);
        // console.log(result);
        setUser(result.data);
  }

  return (
    <div className="container py-5">
      <div class="w-75 mx-auto shadow p-5">
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          class="text-center border border-light py-1"
          action=""
        >
          <h1 class="py-3">Edit User</h1>

          <input
            type="text"
            id="defaultContactFormName"
            class="form-control mb-4"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => {
              onInputChange(e);
            }}
          />

          <input
            type="text"
            id="defaultContactFormName"
            class="form-control mb-4"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => {
              onInputChange(e);
            }}
          />

          <input
            type="email"
            id="defaultContactFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={(e) => {
              onInputChange(e);
            }}
          />

          <input
            type="text"
            id="defaultContactFormName"
            class="form-control mb-4"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              onInputChange(e);
            }}
          />

          <input
            type="text"
            id="defaultContactFormName"
            class="form-control mb-4"
            placeholder="Website Name"
            name="website"
            value={website}
            onChange={(e) => {
              onInputChange(e);
            }}
          />

          <button
            class="btn btn-outline-warning btn-lg btn-block w-100"
            type="submit"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
