import React from 'react'
import Particles from 'react-particles-js'
import particlesConfig from './particle-config'

function Particle() {
    return (
        <div>
            <Particles params={particlesConfig}/>
        </div>
    )
}

export default Particle
