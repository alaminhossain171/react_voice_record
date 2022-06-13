
import { useState } from "react";
import { ReactMic } from "react-mic";

export default function Pack2() {
  const [record, setRecord] = useState(false);
  const [myAudioSrc, setMyAudioSrc] = useState(null);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    var url = URL.createObjectURL(recordedBlob.blob);
    setMyAudioSrc(url);
  };

  return (
    <div className="App">
      <div>
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <div>
          <button onClick={startRecording} type="button">
            Start
          </button>
          <button onClick={stopRecording} type="button">
            Stop
          </button>
        </div>
      </div>
      <br />
      <audio controls id="myAudio" src={myAudioSrc}></audio>
    </div>
  );
}
