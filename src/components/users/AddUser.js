import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const AddUser = () => {
  const history = useHistory();

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
    await axios.post("http://localhost:5000/users", user);
    history.push("/");
  };

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
          <h1 class="py-3">Add User</h1>

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
            class="btn btn-outline-success btn-lg btn-block w-100"
            type="submit"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
