import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";


function SocialMedia() {
  const socialStyle={ 
    // shadow: '-2px 2px 3px 0px rgb(0, 247, 255)'
    // filter: 'drop-shadow(-1px 1px 4px rgb(0, 247, 255))' 
    filter: 'drop-shadow(-1px 1px 4px red)' 
}
  return (
    <div class="social-container" >
      <a href="https://github.com/tushargoyal420" className="github social  p-1  "> <FontAwesomeIcon icon={faGithub} style={socialStyle}  /> </a>
      <a href="https://www.linkedin.com/in/tushar-goyal-306523191/" className="linkedin social p-1   "> <FontAwesomeIcon icon={faLinkedin} style={socialStyle}   /> </a>
      <a href="https://www.instagram.com/tus_sha_r/" className="instagram social p-1   " > <FontAwesomeIcon icon={faInstagram}  style={socialStyle}    /> </a>
      <a href="https://wa.me/916396922804" className="whatsapp social p-1  "><FontAwesomeIcon icon={faWhatsapp}  style={socialStyle}   /> </a>
      <a href="https://www.facebook.com/tushar.goyal.399041" className="facebook social p-1  " > <FontAwesomeIcon icon={faFacebook}  style={socialStyle}   /> </a>
    </div>
  )
}


export default SocialMedia
