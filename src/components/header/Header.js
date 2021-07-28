import React from 'react'

function Header() {
    const ulstyles={}
    return (
        <div>
            <ul style={ulstyles} className="header flex flex-row fixed pl-6 pt-4 font-semibold">
                <li className="p-7 " > Home</li>
                <li className="p-7" > About</li>
                <li className="p-7" > My Skills</li>
                <li className="p-7" > Projects</li>
                <li className="p-7" > Resume</li>
                <li className="p-7" > Contact</li>
            </ul>
        </div>
    )
}

export default Header
