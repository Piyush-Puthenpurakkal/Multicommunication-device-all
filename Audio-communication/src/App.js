import React, { useState } from "react";

function App() {
  const [redAudio, setRedAudio] = useState(null);
  const [blueAudio, setBlueAudio] = useState(null);
  const [greenAudio, setGreenAudio] = useState(null);

  const handleFileChange = (color, event) => {
    const file = event.target.files[0];
    switch (color) {
      case "red":
        setRedAudio(file);
        break;
      case "blue":
        setBlueAudio(file);
        break;
      case "green":
        setGreenAudio(file);
        break;
      default:
        break;
    }
  };

  const resetAudio = (color) => {
    switch (color) {
      case "red":
        setRedAudio(null);
        break;
      case "blue":
        setBlueAudio(null);
        break;
      case "green":
        setGreenAudio(null);
        break;
      default:
        break;
    }
  };

  const sendAudio = (fromColor, toColor) => {
    let audio = null;
    switch (fromColor) {
      case "red":
        audio = redAudio;
        break;
      case "blue":
        audio = blueAudio;
        break;
      case "green":
        audio = greenAudio;
        break;
      default:
        break;
    }

    switch (toColor) {
      case "red":
        setRedAudio(audio);
        break;
      case "blue":
        setBlueAudio(audio);
        break;
      case "green":
        setGreenAudio(audio);
        break;
      default:
        break;
    }
  };

  const AudioControl = ({ color, audio, onReset }) => {
    return (
      <div>
        <audio controls>
          <source src={URL.createObjectURL(audio)} />
        </audio>
        <button onClick={() => onReset(color)}>Reset</button>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Multicommunication Device</h1>
      <div style={{ backgroundColor: "red" }}>
        <input type="file" onChange={(e) => handleFileChange("red", e)} />
        {redAudio && (
          <div>
            <button onClick={() => sendAudio("red", "blue")}>
              Send Audio to Blue
            </button>
            <button onClick={() => sendAudio("red", "green")}>
              Send Audio to Green
            </button>
          </div>
        )}
        {blueAudio && (
          <button onClick={() => resetAudio("red")}>Audio from Blue</button>
        )}
        {greenAudio && (
          <button onClick={() => resetAudio("red")}>Audio from Green</button>
        )}
        {redAudio && (
          <AudioControl color="red" audio={redAudio} onReset={resetAudio} />
        )}
      </div>
      <div style={{ backgroundColor: "blue" }}>
        <input type="file" onChange={(e) => handleFileChange("blue", e)} />
        {blueAudio && (
          <div>
            <button onClick={() => sendAudio("blue", "green")}>
              Send Audio to Green
            </button>
            <button onClick={() => sendAudio("blue", "red")}>
              Send Audio to Red
            </button>
          </div>
        )}
        {greenAudio && (
          <button onClick={() => resetAudio("blue")}>Audio from Green</button>
        )}
        {redAudio && (
          <button onClick={() => resetAudio("blue")}>Audio from Red</button>
        )}
        {blueAudio && (
          <AudioControl color="blue" audio={blueAudio} onReset={resetAudio} />
        )}
      </div>
      <div style={{ backgroundColor: "green" }}>
        <input type="file" onChange={(e) => handleFileChange("green", e)} />
        {greenAudio && (
          <div>
            <button onClick={() => sendAudio("green", "red")}>
              Send Audio to Red
            </button>
            <button onClick={() => sendAudio("green", "blue")}>
              Send Audio to Blue
            </button>
          </div>
        )}
        {redAudio && (
          <button onClick={() => resetAudio("green")}>Audio from Red</button>
        )}
        {blueAudio && (
          <button onClick={() => resetAudio("green")}>Audio from Blue</button>
        )}
        {greenAudio && (
          <AudioControl color="green" audio={greenAudio} onReset={resetAudio} />
        )}
      </div>
    </div>
  );
}

export default App;
