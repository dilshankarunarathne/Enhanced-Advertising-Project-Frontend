import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match");
    } else {

      const user = new FormData();
      user.append("email", email.current.value);
      user.append("password", password.current.value);
      user.append("username", username.current.value);
      user.append("is_adviser", false); // TODO: get from toggle

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
      };

      try {
        console.log("registering user with data:", user);
        await axios.post("http://127.0.0.1:8000/api/auth/register", user, config);
        navigate("/login");
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  const routeChange = () => {
    navigate("/login");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <form action="" className="loginBox" onSubmit={handleClick}>
            <span className="SignInName">Sign Up Now.</span>
            <span className="details">Enter your details below.</span>
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              type="email"
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              ref={password}
              className="loginInput"
              required
              type="password"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              required
              type="password"
            />

            <div className="toggle">
              <label htmlFor="">Activate the Adverticer Account</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <div className="loginRegister">
              <span className="notamem">Already a member?</span>
              <Link to={"/login"}>
                <button className="loginRegisterButton" onClick={routeChange}>
                  Log into Account
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div
          className="LoginRight"
          style={{
            backgroundImage: `url(${PF + "back.png"})`,

            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}
