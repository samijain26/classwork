import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
function Register({ setUser }) {
  const navigate = useNavigate();

  let [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await authService.register(form)
      // const response = await axios.post(
      //   "http://localhost:8080/auth/register",
      //   form
      // );
      const info = await axios.get("http://localhost:8080/users/info", {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      localStorage.setItem("token", response.data.token);
      setUser(info.data);
      navigate("/profile");
    } catch (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Register;
