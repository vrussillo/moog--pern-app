import "../styles/About.css";

function About() {
  return (
    <div className="about-div">
      <div className="about-div2">
        <h1 className="h1-moog-rotate">
          <em>A</em>
          <em>b</em>
          <em class="planet left">o</em>

          <em>u</em>
          <em>t</em>
        </h1>

        <div class="about-container">
          <div class="about-content">
            <h1>Euføeni</h1>
            <h3>
              Hey there! I'm Vaughn, I go by the name of "Euføeni" for my music
              projects. This app was created using the PERN stack for my final
              project for a coding Bootcamp I'm attending. The basic idea of
              this site is to hear what patches sound like before having to
              replicate them on your own Moog Grandmother Synth. All of the
              previews you'll listen to were created by me with no
              Post-Processing to maintain the integrity of the raw Moog sound.
              If you're interested in my music, please visit my website:
              <br></br>
              <a href="https://eufoeni.com/">https://eufoeni.com/</a>
            </h3>
          </div>
          <div class="flap"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
