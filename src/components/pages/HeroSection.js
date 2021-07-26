import React from "react";
import Typewriter from "typewriter-effect";
import "../css/HeroSection.css"
// import Particles from "../small/Particle"
// import Particles from 'react-particles-js';

function HeroSection() {
  const heroSectionstyle= {}
  const typeSectionstyles= {}
  return (
    <div className=" flex h-screen items-center" style={heroSectionstyle}>
      <div className="typewritter h-32 text-4xl" style={typeSectionstyles}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hey!<br/>")
              .pauseFor(700)
              .typeString("I'm <span class='name'><b>Tushar Goyal </b> <br/></span>")
              .pauseFor(700)
              .typeString("I'm <b> Web Developer</b>")
              .pauseFor(1500)
              .deleteChars(13)
              .typeString("<b> UI/UX Designer</b>.")
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
