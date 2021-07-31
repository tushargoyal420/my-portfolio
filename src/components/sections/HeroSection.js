import React from "react";
import Typewriter from "typewriter-effect";
import "../css/HeroSection.css"
// import Particles from "../small/Particle"
// import Particles from 'react-particles-js';

function HeroSection() {
  const heroSectionstyle= {backgroundColor:""}
  const typeSectionstyles= {backgroundColor:''}
  return (
    <div className="herosection flex h-screen items-end pb-28" style={heroSectionstyle}>
      <div className="typewritter h-40 min-h-40 text-4xl " style={typeSectionstyles}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("<span class='para'>Hey!<br/></span>")
              .pauseFor(700)
              .typeString("<span class='para'>I'm <span class='x  name'>Tushar Goyal </span></span><br/>")
              // .typeString(" " )
              .pauseFor(700)
              .typeString("<span class='para'>I'm<b> Web Developer</b></span>")
              .pauseFor(1500)
              .deleteChars(13)
              .typeString("<span class='para'><b> UI/UX Designer</b>.</span>")
              .start();
          }}
        />
        {/* <Particles/> */}
      </div>
      {/* <button id="contact">Contact me</button> */}
    </div>
  );
}

export default HeroSection;
