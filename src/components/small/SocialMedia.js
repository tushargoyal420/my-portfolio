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
  return (
    <div class="social-container">
      <a href="https://github.com/tushargoyal420" className="github social  p-1  "> <FontAwesomeIcon icon={faGithub}  /> </a>
      <a href="https://www.linkedin.com/in/tushar-goyal-306523191/" className="linkedin social p-1   "> <FontAwesomeIcon icon={faLinkedin}   /> </a>
      <a href="https://www.instagram.com/tus_sha_r/" className="instagram social p-1   " > <FontAwesomeIcon icon={faInstagram}     /> </a>
      <a href="https://wa.me/916396922804" className="whatsapp social p-1  "><FontAwesomeIcon icon={faWhatsapp}    /> </a>
      <a href="https://www.facebook.com/tushar.goyal.399041" className="facebook social p-1  " > <FontAwesomeIcon icon={faFacebook}    /> </a>
    </div>
  )
}


export default SocialMedia
