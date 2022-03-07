
import './ProjectsWindows.css'
import { useDrag } from 'react-use-gesture'
import { useState } from 'react'

export default function CC(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
    const bindWindowPos = useDrag((params) => {
        setPosition({
            x: params.offset[0],
            y: params.offset[1]
        })
    })
  return (
    <div className='Window' {...bindWindowPos()} id="CC"
    style={{
        top: position.y,
        left: position.x,
    }}
    onClick={() => {
      document.getElementById("Resume").style.zIndex = 1
      document.getElementById("Skills").style.zIndex = 1
      document.getElementById("Projects").style.zIndex = 1
      document.getElementById("CC").style.zIndex = 4
      document.getElementById("GT").style.zIndex = 1
      document.getElementById("PTB").style.zIndex = 1
      document.getElementById("Reviewio").style.zIndex = 1
  }}>
        <div className='TopBar'>
            <button onClick={() => props.setCC(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48180_1646631279.png?raw=true" alt="Resume" className='topBarIcon'/>
            <h4 className='fileName'>Character Creator</h4>
        </div>
            <h4 className='Description'>This is a Dungeons&Dragons character creator that also serves as a random character generator</h4>
            <div className='ProjectLinks'>
            <a href='https://github.com/Jacobdye99/Character-Creator' target="_blank" rel='noreferrer' className='LinkText'>
            <div className='IndividualLinks'>
                <img src='https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true' alt='World wide web' className='Icons'/>
                <h3 className='LinkText'>Github</h3>
            </div>
            </a>
            <a href='https://jacobdye99.github.io/Character-Creator/' target="_blank" rel='noreferrer' className='LinkText'>
            <div className='IndividualLinks'>
            <img src='https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true' alt='World wide web' className='Icons'/>
                <h3 className='LinkText'>Website</h3>
            </div>
            </a>
            </div>
            
    </div>
  )
}
