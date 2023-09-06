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
        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

        canvas.toBlob((blob) => {
          const formData = new FormData();
          formData.append("image", blob, "image.jpg");
        
          fetch("http://127.0.0.1:8000/api/image/evaluate", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.text();
            })
            .then((data) => {
              console.log(data);
              
              const [ageRange, gender, interest, imgUrl] = response.data;

              props.updateAgeAndGender(ageRange, gender, imgUrl, interest);
            })
            .catch((error) => {
              console.error("Error sending image", error);
            });
        }, "image/jpeg", 0.9);
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