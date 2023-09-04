import "./login.css";

import { Link, useNavigate } from "react-router-dom";

import { useRef } from "react";

export default function Login() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <form className="loginBox" onSubmit={handleClick}>
            <span className="SignInName">Sign In Now.</span>
            <span className="details">Enter your details below.</span>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
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
