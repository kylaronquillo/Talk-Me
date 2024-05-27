import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../App.css";

const Speak = () => {
  const [isListening, setIsListening] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleMicClick = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
    setIsListening(!isListening);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(transcript).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500); 
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="container-speak">
      <div>
        <button
          type="button"
          className="mic-btn"
          onClick={handleMicClick}
          style={{
            backgroundColor: isListening ? 'red' : '#B984D9',
          }}
        >
          <i className="bi bi-mic-fill" style={{ fontSize: '6dvh', color: 'white' }}></i>
        </button>
      </div>
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ height: '500px', display: 'flex', flexDirection: 'column', }}>
        <div className="text-transcript" style={{ overflowY: 'auto', flexGrow: 1 }}>
          <p className="font-transcript">{transcript}</p>
        </div>
        <div className="choices" style={{ display: 'flex', justifyContent: 'space-around'}}>
          <button onClick={resetTranscript} className="btn btn-light"><i className="bi bi-trash3-fill"></i></button>
          <button onClick={handleCopyClick} className="btn btn-light">
            {isCopied ? <><i className="bi bi-check-lg"></i> Copied</> : <i className="bi bi-copy"></i>}
          </button>
          <button className="btn btn-light"><i className="bi bi-floppy"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Speak;
