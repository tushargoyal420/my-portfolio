import React from 'react'
import{ NavLink } from 'react-router-dom'


function Header() {
    const ulstyles={}
    return (
        <div >
            <ul style={ulstyles} className="header flex fixed flex-row  pl-6 pt-4 font-semibold " >
                <NavLink to='/' className="p-7  "style={ulstyles} > Home</NavLink>
                <NavLink to='/about' className="p-7  "style={ulstyles} > About</NavLink>
                <NavLink to='/skills' className="p-7  "style={ulstyles} > Skills</NavLink>
                <NavLink to='/projects' className="p-7  "style={ulstyles} > Projects</NavLink>
                <NavLink to='/resume' className="p-7  "style={ulstyles} > Resume</NavLink>
                <NavLink to='/contact' className="p-7  "style={ulstyles} > Contact</NavLink>
            </ul>
        </div>
    )
}

export default Header
