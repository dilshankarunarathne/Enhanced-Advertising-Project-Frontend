import React from "react";
import { useState } from 'react';

import Navbar from "../../components/navbar/Navbar";
import Camera from "../../components/openCamera/Camera";

import { Navigate } from "react-router-dom";

import "./home.css";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <Component />;
  };

  return AuthRoute;
};

export const Home = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [ads, setAds] = useState([]);
  const [ageRange, setAgeRange] = useState("");
  const [gender, setGender] = useState("");
  const [interest, setInterest] = useState("");

  function updateAgeAndGender(data) {
    if (Array.isArray(data.model_output)) {
      setAgeRange(data.model_output[0]);
      setGender(data.model_output[1]);
      setInterest(data.model_output[2]);
      setAds(data.model_output[3]);
    } else {
      console.error('model_output is not an array:', data);
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="homewrapper">
        <div className="Container">
          <div className="LeftBar">
            <Camera updateAgeAndGender={updateAgeAndGender}></Camera>
          </div>
          <div className="RightBar">
            <span className="Topic">Extracted Details</span>
            <hr />
            <div className="sub">
              <div className="sub2">
                <span className="subtitles">Gender</span>
                <span className="subtitles">{gender}</span>
              </div>
              <div className="sub3">
                <span className="subtitles">Age Limit</span>
                <span className="subtitles">{ageRange}</span>
              </div>
            </div>
            <hr />
            <span className="Topic">Recommended Adverticement </span>
            <div className="adverticement">
              {ads.map((ad, index) => (
                <div key={index} className="SingleAdverticemet">
                  <img src={`data:image/jpeg;base64,${ad.banner}`} className="adverImg" alt={ad.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Home);
