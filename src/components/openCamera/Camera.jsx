import React, { useState, useEffect, useRef } from "react";
import "./Camera.css";

function Camera(props) {
  const [stream, setStream] = useState(null);
  const [socket, setSocket] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws/video_stream/');
    setSocket(socket);
    socket.onerror = function(error) {
      console.log(`WebSocket error: ${error}`);
    };
    socket.onmessage = function(event) {
      const data = JSON.parse(event.data);
      const modelOutput = data.model_output;
      const range = modelOutput[0];
      const gender = modelOutput[1];
      const category = modelOutput[2];
      const imageUrl = modelOutput[3];
      console.log(range, gender, category, imageUrl);
      props.updateAgeAndGender(range, gender, imageUrl, category);
    };
    return () => {
      socket.close();
    };
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
          const reader = new FileReader();
          reader.onloadend = function() {
            const base64data = reader.result;
            if (socket.readyState === WebSocket.OPEN) {
              socket.send(base64data);
            }
          }
          reader.readAsDataURL(blob);
        }, "image/jpeg", 0.9);
      }, 10000);
    }
    return () => clearInterval(intervalId);
  }, [socket, stream]);

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