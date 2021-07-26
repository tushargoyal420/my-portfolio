import React from 'react'
// import profileimage from "../images/profileimage.jpg"
import profileimage from "../images/profileimage3.png"
import "../css/GlobalStyles.css"
import SocialMedia from  "../small/SocialMedia"

function SideHeader() {
    return (
        <div className="sideheader h-screen text-white fixed w-37">
            <div className="flex h-screen justify-center items-center text-center p-3 flex-col">
                
                <div className="flex-auto profile">
                    <div className="bg-white overflow-hidden rounded-full h-32 w-32 pt-10 flex items-center justify-center">
                        <img src={profileimage} alt='' className=""/>
                    </div>
                    <h1 className="text-2xl  pt-4 pb-8"> Tushar Goyal </h1>
                    <p className="text-base pt-1 border-t-2 "> Web Developer </p>
                    <p className="text-base pt-1"> UI/UX Designer </p>
                </div>
                    
                <div className="pages flex-auto tracking-widest " >
                    <ul >
                        <li className="border-t p-1" >About</li>
                        <li className="border-t p-1" >My Skills</li>
                        <li className="border-t p-1" >Projects</li>
                        <li className="border-t p-1" >Resume</li>
                        <li className="border-t p-1 border-b" >Contact</li>
                    </ul>
                </div>
                
                 <div className="socialMedia">
                    <SocialMedia />
                </div>

            </div>        
        </div>
)
}

export default SideHeader
