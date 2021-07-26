import React from "react";
import Typist from "react-typist";
import Keyboard, { Cursor } from "react-mk";

function HeroSection() {
  const typerStyle = [{ display: "flex", flexDirection: "column" }];
  const greetStyle = [];
  const nameStyle = [];
  const desStyle = [];

  return (
    <div>
      <Typist style={typerStyle} className='flex justify-center items-center text-center p-3 flex-col'>
            <span style={greetStyle}> Hey,</span>
            <Typist.Delay ms={500} />
            <span style={nameStyle} > I'm Tushar Goyal</span>
            <Typist.Delay ms={500} />
            <span style={desStyle}> I'm Developer</span>
            <Typist.Backspace count={9} delay={200} />
            <span style={desStyle}>Web Developer.</span>
            
        </Typist>

      {/* <Keyboard sentenceDelayPerCharRange={[0, 0]}>
            Hey,
      </Keyboard>
      <Cursor />
      <br />
      <Keyboard
        sentenceDelayPerCharRange={[0, 0]}
        keyPressDelayRange={[50, 70]}
      >
        {({ type }) =>
          type(
            3000,
            "Multiple instances of Keyboard can easily be rendered at the same time"
          )
        }
      </Keyboard> */}
      
    </div>
  );
}

export default HeroSection;
