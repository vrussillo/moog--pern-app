import "../styles/Patchbooks.css";
import { list } from "./imports/GMImports";

function GM() {
  // Audio Button

  const audios = list.map((audio) => new Audio(audio));

  const getCurrentAudio = () => {
    return audios.find((audio) => false === audio.paused);
  };

  const toggle = (nextAudio) => {
    const currentAudio = getCurrentAudio();

    if (currentAudio && currentAudio !== nextAudio) {
      currentAudio.pause();
    }

    nextAudio.paused ? nextAudio.play() : nextAudio.pause();
  };

  // const stop = (nextAudio) => {
  //   const currentAudio = getCurrentAudio();

  //   if (currentAudio) {
  //     currentAudio.pause();
  //   }

  //   nextAudio.paused ? nextAudio.pause() : nextAudio.pause();
  // };

  // Audio Button

  return (
    <div className="patches-div">
      <img
        src="/templates/Covers/GM-Cover.png"
        className="patch-img"
        alt="Cover"
      />

      <div className="patch-div">
        <img
          src="/templates/GM-Manual/GM-1.png"
          className="patch-img"
          alt="Funky Robot"
        />
        <button className="gm-btn-play" onClick={() => toggle(audios[0])}>
          Preview Sound
        </button>
        <button className="gm-btn-play-2" onClick={() => toggle(audios[1])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/GM-Manual/GM-2.png"
          className="patch-img"
          alt="Dynasty Plucks"
        />
        <button className="gm-btn-play-3" onClick={() => toggle(audios[2])}>
          Preview Sound
        </button>
        <button className="gm-btn-play-4" onClick={() => toggle(audios[3])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/GM-Manual/GM-3.png"
          className="patch-img"
          alt="Ultra Sub Bass"
        />
        <button className="gm-btn-play-5" onClick={() => toggle(audios[4])}>
          Preview Sound
        </button>
        <button className="gm-btn-play-6" onClick={() => toggle(audios[5])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/GM-Manual/GM-4.png"
          className="patch-img"
          alt="J-Bass"
        />
        <button className="gm-btn-play-7" onClick={() => toggle(audios[6])}>
          Preview Sound
        </button>
        <button className="gm-btn-play-8" onClick={() => toggle(audios[7])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/GM-Manual/GM-5.png"
          className="patch-img"
          alt="Stepped Drone"
        />
        <button className="gm-btn-play-9" onClick={() => toggle(audios[8])}>
          Preview Sound
        </button>
        <button className="gm-btn-play-10" onClick={() => toggle(audios[9])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/GM-Manual/GM-6.png"
          className="patch-img"
          alt="Bag Pipes"
        />
        <button className="gm-btn-play-11" onClick={() => toggle(audios[10])}>
          Preview Sound
        </button>
        <button className="gm-btn-play-12" onClick={() => toggle(audios[11])}>
          Preview Sound
        </button>
      </div>
      <div className="patch-div">
        <img
          src="/templates/GM-Manual/GM-7.png"
          className="patch-img"
          alt="Lift Off"
        />
        <button className="gm-btn-play-13" onClick={() => toggle(audios[12])}>
          Preview Sound
        </button>
        <button className="gm-btn-play-14" onClick={() => toggle(audios[13])}>
          Preview Sound
        </button>
      </div>
    </div>
  );
}

export default GM;
