/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./App.css";

const DrumPad = ({ ident, btnKey, source }) => {
  return (
    <div className="drum-pad" id={ident}>
      <audio id={btnKey} src={source}></audio>
      {btnKey}
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Drum Machine</h1>
      <main id="drum-machine">
        <section className="pad">
          <DrumPad
            ident={"Heater-1"}
            bntKey={"Q"}
            source={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}
          />
        </section>
        <section id="display"></section>
      </main>
    </>
  );
}

export default App;
