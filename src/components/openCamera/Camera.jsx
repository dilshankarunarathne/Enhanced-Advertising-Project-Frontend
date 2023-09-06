import React, { useState, useEffect, useRef } from "react";
import "./Camera.css";

function Camera(props) {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          setStream(stream);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing camera", error);
        });
    }
  }, []);

  const handleButtonClick = () => {
    if (stream) {
      const videoTracks = stream.getVideoTracks();
      videoTracks.forEach((track) => {
        track.stop();
      });
      setStream(null);
    } else {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          setStream(stream);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing camera", error);
        });
    }
  };

  

  useEffect(() => {
    let intervalId;

    if (stream) {
      intervalId = setInterval(() => {
        
      }, 10000);
    }
    return () => clearInterval(intervalId);
  }, [stream]);

  return (
    <div className="video">
      <div className="VideoDiv">
        <video ref={videoRef} autoPlay className="faceDetector"></video>
      </div>

      <div className="ButtonDiv">
        {" "}
        <button onClick={handleButtonClick} className="Capturebutton">
          {stream ? "Stop Camera" : "Start Camera"}
        </button>
      </div>
    </div>
  );
}

export default Camera;