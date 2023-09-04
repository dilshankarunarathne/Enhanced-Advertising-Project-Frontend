import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export default function Login() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', usernameValue);
    formData.append('password', passwordValue);
    

    const response = await fetch(
      'http://127.0.0.1:8000/api/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
      },
      body: formData
    });

    if (response.ok) {  // successful login
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token);

      navigate("/");
    } else {
      // TODO: show error
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">

          <form className="loginBox" onSubmit={handleClick}>
            <span className="SignInName">Sign In Now.</span>
            <span className="details">Enter your details below.</span>

            <input
              placeholder="Username"
              type="text"
              required
              className="loginInput"
              ref={username}
            />

            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />

            <button className="loginButton">"Sign In"</button>
            <span className="loginForgot">Forgot Password?</span>

            <div className="loginRegister">
              <span className="notamem">Not a member?</span>
              <Link to={"/register"}>
                <button className="loginRegisterButton">
                  {/* {isFetching ? (
                    <CircularProgress color="secondary" size="20px" />
                  ) : (
                    "Create a New Account"
                  )} */}
                  Create a New Account
                </button>
              </Link>
            </div>

          </form>
        </div>
        <div
          className="LoginRight"
          style={{
            backgroundImage: `url("http://localhost:3000/assets/back.png")`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
            marginTop: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}
