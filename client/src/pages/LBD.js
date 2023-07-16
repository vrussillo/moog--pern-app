import { useState } from "react";
import "../styles/Patchbooks.css";
import { list } from "./imports/LBDImports";

function LBD() {
  const [audios] = useState(list.map((audio) => new Audio(audio)));

  const toggle = (index) => {
    audios.forEach((audio, i) => {
      if (i === index) {
        audio.paused ? audio.play() : audio.pause();
      } else {
        audio.pause();
      }
    });
  };

  return (
    <div className="patches-div">
      <img src="/templates/LBD/LBD-1.png" className="patch-img" alt="Cover" />
      <img
        src="/templates/LBD/LBD-2.png"
        className="patch-img"
        alt="Description"
      />
      {audios.map((audio, index) => (
        <div className="patch-div" key={index}>
          <img
            src={`/templates/LBD/LBD-${index + 3}.png`}
            className="patch-img"
            alt={`Patch ${index + 1}`}
          />
          <button className="lbd-btn-play" onClick={() => toggle(index)}>
            Preview Sound
          </button>
        </div>
      ))}
      <div className="patch-div">
        <img
          src="/templates/LBD/LBD-15.png"
          className="patch-img"
          alt="End Page"
        />
      </div>
    </div>
  );
}

export default LBD;
