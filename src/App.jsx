/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const idents = [
  "Heater 1",
  "Heater 2",
  "Heater 3",
  "Heater 4",
  "Clap",
  "Open-HH",
  "Kick-n'-Hat",
  "Kick",
  "Closed-HH",
];
const links = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
];

const displayDrumPad = (arr1, arr2, arr3) => {
  return arr1.map((_, i) => [arr1[i], arr2[i], arr3[i]]);
};

const DrumPad = ({ ident, btnKey, source, playSound, updateDescription }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === btnKey) {
        playSound(btnKey);
        updateDescription(ident);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [btnKey, ident, playSound, updateDescription]);

  return (
    <div
      className="drum-pad"
      id={ident}
      onClick={() => {
        playSound(btnKey);
        updateDescription(ident);
      }}
    >
      <audio id={btnKey} src={source} className="clip"></audio>
      {btnKey}
    </div>
  );
};

function App() {
  const playSound = (btnKey) => {
    const audio = document.getElementById(btnKey);
    if (audio) {
      audio.play();
    }
  };

  const [description, setDescription] = useState("Press a key");

  return (
    <>
      <h1>Drum Machine</h1>
      <main id="drum-machine">
        <section className="pad">
          {displayDrumPad(keys, idents, links).map((item, index) => (
            <DrumPad
              key={index}
              ident={item[1]}
              btnKey={item[0]}
              source={item[2]}
              playSound={playSound}
              updateDescription={setDescription}
            />
          ))}
        </section>
        <section id="display">
          <p className="ident-text">{description}</p>
        </section>
      </main>
    </>
  );
}

export default App;
