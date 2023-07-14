import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./pages.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(true);

  const navigate = useNavigate();
  const config = { headers: { "Content-Type": "application/json" } };
  const getLogin = async () => {
    await axios.get("http://localhost:5000/users/login", config);
  };

  const alertHandler = () => setAlert(prev => !prev)

  useEffect(() => {
    alertHandler()
  },[error])

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const login = await axios.post(
        "http://localhost:5000/users/login",
        user,
        config
      );
      console.log(login);
      navigate("/");
      alertHandler()
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
// useEffect(() => {
//   alertHandler()
// }, [])
  return (
    <form className="container auth">
      <h3 className="my-3 text-primary">Login for TravelBook</h3>
      {error.length > 0 && (
        <div
          className=" my-3 alert alert-danger alert-dismissible fade show animation"
          role="alert"
        >
          <strong style={{marginRight: "10px"}}>Error!</strong>
          {error}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="descr" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={loginHandler}>
        Login
      </button>
    </form>
  );
};

export default Login;
