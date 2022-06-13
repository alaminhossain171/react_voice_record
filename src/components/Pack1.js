/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import ReactAudioPlayer from "react-audio-player";
const Pack1 = () => {
  function handleStop(stopRecording) {
    console.log("handleStop called");
    stopRecording();
  }
  function handleStart(startRecording, stopRecording) {
    console.log("handle start called");
    startRecording();
  }

  return (
    <div
      style={{ minHeight: "100vh", position: "relative" }}
      className="d-flex justify-content-center align-items-center"
    >
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div
            className="bg-light shadow-lg rounded"
            style={{ height: 500, position: "relative" }}
          >
            {/* <p>{status}</p> */}
            <ReactAudioPlayer
              src={mediaBlobUrl ? mediaBlobUrl : null}
              autoPlay={false}
              controls
              className="my-2"
            />

            <div
              style={{
                position: "absolute",
                bottom: 0,
                background: "gray",
                width: "100%",
              }}
            >
              <div className="d-flex justify-content-between">
                <div className="">
                  <button
                    className="btn"
                    onClick={() => {
                      handleStart(startRecording, stopRecording);
                      setInterval(stopRecording, 3000);
                    }}
                  >
                    <i className="fa-solid fa-microphone"></i>
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleStop(stopRecording)}
                  >
                    <i className="fa-solid fa-microphone-slash"></i>
                  </button>
                </div>
                <div>
                  <div className="btn">
                    <a href={mediaBlobUrl ? mediaBlobUrl : null} download>
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <video src={mediaBlobUrl} controls autoPlay loop /> */}
          </div>
        )}
      />
    </div>
  );
};

export default Pack1;
