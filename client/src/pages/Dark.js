import { useState } from "react";
import { list } from "./imports/DarkImports";
import "../styles/Patchbooks.css";

const Dark = () => {
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
      <img src="/templates/Dark/Dark-1.png" className="patch-img" alt="Cover" />
      <img
        src="/templates/Dark/Dark-2.png"
        className="patch-img"
        alt="Description"
      />
      {audios.map((audio, index) => (
        <div className="patch-div" key={index}>
          <img
            src={`/templates/Dark/Dark-${index + 3}.png`}
            className="patch-img"
            alt={`Patch ${index + 1}`}
          />
          <button className="dark-btn-play" onClick={() => toggle(index)}>
            Preview Sound
          </button>
        </div>
      ))}
      <div className="patch-div">
        <img
          src="/templates/Dark/Dark-19.png"
          className="patch-img"
          alt="End Page"
        />
      </div>
    </div>
  );
};

export default Dark;
