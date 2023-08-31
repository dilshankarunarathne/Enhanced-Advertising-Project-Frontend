import React, { useState, useEffect, useRef } from "react";

import "./Camera.css";

function Camera() {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
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

  const handleCaptureClick = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL("image/png");
      console.log(imageData); // Do something with the image data
    }
  };

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
        <button onClick={handleCaptureClick} className="Capturebutton">
          Capture
        </button>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
}

export default Camera;
