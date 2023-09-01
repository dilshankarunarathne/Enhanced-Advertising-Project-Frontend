import React, { useState, useEffect, useRef } from "react";

import "./Camera.css";

function Camera() {
  const [stream, setStream] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
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
        setIsStreaming(false);
      });
      setStream(null);
    } else {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          setStream(stream);
          setIsStreaming(true);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }

          console.log("streaming...!");

          const mediaRecorder = new MediaRecorder(stream);
          const chunks = [];

          mediaRecorder.addEventListener("dataavailable", (event) => {
            chunks.push(event.data);
          });

          mediaRecorder.addEventListener("stop", () => {
            const blob = new Blob(chunks, { type: "video/mp4" });
            const videoURL = URL.createObjectURL(blob);
            console.log(videoURL);

            fetch("http://127.0.0.1:8000/", {
              method: "POST",
              headers: {
                "Content-Type": "video/mp4",
              },
              body: blob,
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data); // Do something with the response data
              })
              .catch((error) => {
                console.error("Error sending video data", error);
              });
          });

          mediaRecorder.start();
        })
        .catch((error) => {
          console.error("Error accessing camera", error);
        });
    }
  };

  const handleStopStreamingClick = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setIsStreaming(false);
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

      console.log("captured...!");

      fetch("http://127.0.0.1:8000/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageData }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Do something with the response data
        })
        .catch((error) => {
          console.error("Error sending image data", error);
        });
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
        <button onClick={handleButtonClick} className="Capturebutton">
          {isStreaming ? "Stop Streaming" : "Start Streaming"}
        </button>
        {isStreaming && (
          <button onClick={handleStopStreamingClick} className="Capturebutton">
            Stop Streaming
          </button>
        )}
      </div>
      

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
}

export default Camera;
