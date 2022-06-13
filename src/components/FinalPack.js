/* eslint-disable react-hooks/exhaustive-deps */
import { useReactMediaRecorder } from "react-media-recorder";
import ReactAudioPlayer from "react-audio-player";
import React from "react";
import wave from '../assest/WAVE-1s.gif'
const FinalPack = () => {
    const [seconds, setSeconds] = React.useState(10);
    const [check,setCheck]=React.useState(false)

  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
    { audio: true }
  );
  React.useEffect(() => {
      if(check===true){
        timer()
      }

  },);
  function timer(){
    if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('BOOOOM! TIME UP !');
      }
  }
  return (
      <> 
    <div
      style={{ minHeight: "100vh", position: "relative",background:'#F2EDF3' }}
      className="d-flex justify-content-center align-items-center"
    >
    
      <div
        className="bg-light shadow-lg rounded"
        style={{ minHeight: "50vh", position: "relative" }}
      >
       
        <ReactAudioPlayer
          src={mediaBlobUrl ? mediaBlobUrl : null}
          autoPlay={false}
          controls
          className="my-3"
        />
        <div className='text-center text-danger'>Your time:{seconds} seconds</div>
      
    
        <div className='text-center'>
            <img src={wave} className='img-fluid' style={{width:'200px'}} alt="" />
        </div>

        <div
          className="d-flex justify-content-between"
          style={{
            position: "absolute",
            bottom: 0,
            background: "gray",
            width: "100%",
          }}
        >
          <div>
            <button className="text-light btn" onClick={()=>{
                setCheck(true)
                startRecording();
                setTimeout(stopRecording,10000)
            }}>
              {" "}
              <i className="fa-solid fa-microphone"></i>
            </button>
            <button className="text-danger btn" onClick={()=>{
                stopRecording()
                setCheck(false)
            }}>
              {" "}
              <i className="fa-solid fa-microphone-slash"></i>
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <a href={mediaBlobUrl} download>
              <i class="fa fa-download" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default FinalPack;
