import React from 'react'
import './ProjectsWindows.css'

export default function CC(props) {
  return (
    <div className='Window'>
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
