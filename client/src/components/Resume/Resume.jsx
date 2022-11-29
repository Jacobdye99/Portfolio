
import '../Window/Window.css'
import './Resume.css'
import Pdf from '../../Assets/Images/Jacob_Dye_Resume (1).pdf'
import { useState } from 'react'
import { useDrag } from 'react-use-gesture'

export default function ResumeIcon(props) {
    const [position, setPosition] = useState({ x: 0, y: 50 })
    
    const bindWindowPos = useDrag((params) => {
        setPosition({
            x: params.offset[0],
            y: params.offset[1]
        })
    })
    return (
    <div className='Window' {...bindWindowPos()} id="Resume"
    style={{
        top: position.y,
        left: position.x,
    }}
    onClick={() => {
        document.getElementById("Resume").style.zIndex = 2
      document.getElementById("Skills").style.zIndex = 1
      document.getElementById("Projects").style.zIndex = 1
      document.getElementById("CC").style.zIndex = 1
      document.getElementById("GT").style.zIndex = 1
      document.getElementById("PTB").style.zIndex = 1
      document.getElementById("Reviewio").style.zIndex = 1
    }} >
        <div className='TopBar' 
        >
            <button onClick={() => props.setResume(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/main/client/src/Assets/Images/artage-io-48175_1646541195.png?raw=true" alt="Resume" className='topBarIcon'/>
            <h4 className='fileName'>About Me</h4>
        </div>
        <div>
            <img src='https://github.com/Jacobdye99/Portfolio/blob/main/client/src/Assets/Images/IMG_7879copy.jpg?raw=true' alt='Jacob Dye' className='PicOfMe'/>
            <p className='InnerText'>
                Hi I'm Jacob Dye and I'm a full stack software engineer. 
                I'm very skilled with React, Ruby, and CSS.
                I'm very eager to learn as much as I can about software engineering and eventually teach myself how to create video games. 
                I love working on a team and taking on any challenge that comes my way.
                I learned a lot at General Assembly and I'm new enough that I can be moulded into the engineer your company needs.
            </p>
            <a href={Pdf} target="_blank" rel='noreferrer' className='ResumeLink'>My Resume</a>
        </div>
    </div>
    )
}
