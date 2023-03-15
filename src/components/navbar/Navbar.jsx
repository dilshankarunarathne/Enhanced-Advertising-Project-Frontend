import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPop, setOpenPop] = useState(false);
  const [openPopLog, setOpenPopLog] = useState(false);
  const handleClick = () => {
    setOpenPop(!openPop);
    setOpenPopLog(openPopLog);
  };
  const handleClickLog = () => {
    setOpenPop(openPop);
    setOpenPopLog(!openPopLog);
  };
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(currentUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // await axios.post("http://localhost:8800/api//auth/logout");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img src={PF + "logo.png"} className="logo" alt="" />
          </Link>
        </div>
        <div className="links">
          {!currentUser?.isSeller && (
            <Link to={"/reports"} style={{ textDecoration: "none" }}>
              <span className="joinbutton">Show Reports</span>
            </Link>
          )}
          {!currentUser?.isSeller && (
            <Link
              to={"/manageAdeverticement"}
              style={{ textDecoration: "none" }}
            >
              <span className="joinbutton2">Manage Adverticement</span>
            </Link>
          )}

          {!currentUser ? (
            <Link to={"/profile"} style={{ textDecoration: "none" }}>
              <div className="user" onClick={() => setOpen(!open)}>
                <img src={PF + "/noavatar.jpg"} className="userimge" alt="" />
                {open && (
                  <div className="options">
                    {!currentUser.isSeller && (
                      <>
                        <Link to="/manageAdeverticement">
                          Add Adverticement
                        </Link>
                        <Link to="/reports">Show Reports</Link>
                      </>
                    )}
                    <Link className="link" to="/profile">
                      Profile
                    </Link>
                    <Link className="link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </Link>
          ) : (
            <>
              <span onClick={handleClickLog}> Sign in</span>
              {openPopLog && (
                <div className="log-dialog">
                  <Login></Login>
                </div>
              )}
              <span className="joinbutton" onClick={handleClick}>
                Join
              </span>
              {openPop && (
                <div className="regiter-dialog">
                  <Register></Register>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
