import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Camera from "../../components/openCamera/Camera";

import "./home.css";

export const Home = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="homewrapper">
        <div className="Container">
          {" "}
          <div className="LeftBar">
            <Camera></Camera>
          </div>
          <div className="RightBar">
            <span className="Topic">Extracted Details</span>
            <hr />
            <div className="sub">
              <div className="sub2">
                <span className="subtitles">Gender</span>
                <span className="subtitles">Female</span>
              </div>
              <div className="sub3">
                <span className="subtitles">Age Limit</span>
                <span className="subtitles">25-40 </span>
              </div>
            </div>

            <hr />
            <span className="Topic">Recommended Adverticement </span>
            <div className="adverticement">
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/ads2.webp"} className="adverImg" alt="" />
              </div>
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/cream1.jpg"} className="adverImg" alt="" />
              </div>
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/ads3.webp"} className="adverImg" alt="" />
              </div>
            </div>
            <div className="adverticement">
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/ads4.webp"} className="adverImg" alt="" />
              </div>
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/2.png"} className="adverImg" alt="" />
              </div>
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/3.png"} className="adverImg" alt="" />
              </div>
            </div>
            {/*  
            <div className="adverticement">
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/2.png"} className="adverImg" alt="" />
              </div>
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/2.png"} className="adverImg" alt="" />
              </div>
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/2.png"} className="adverImg" alt="" />
              </div>
            </div>
            <div className="adverticement">
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/2.png"} className="adverImg" alt="" />
              </div>
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/2.png"} className="adverImg" alt="" />
              </div>
              <div className="SingleAdverticemet">
                <img src={PF + "adverticement/2.png"} className="adverImg" alt="" />
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};
