import { useState } from 'react'
import { useDrag } from 'react-use-gesture'

export default function GT(props) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const bindWindowPos = useDrag((params) => {
        setPosition({
            x: params.offset[0],
            y: params.offset[1]
        })
    })
  return (
    <div className='Window' {...bindWindowPos()} id="GT"
    style={{
        top: position.y,
        left: position.x,
    }}
    onClick={() => {
        document.getElementById("Resume").style.zIndex = 1
        document.getElementById("Skills").style.zIndex = 1
        document.getElementById("Projects").style.zIndex = 1
        document.getElementById("CC").style.zIndex = 1
        document.getElementById("GT").style.zIndex = 5
        document.getElementById("PTB").style.zIndex = 1
        document.getElementById("Reviewio").style.zIndex = 1
    }}>
        <div className='TopBar'>
            <button onClick={() => props.setGT(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48180_1646631279.png?raw=true" alt="Resume" className='topBarIcon'/>
            <h4 className='fileName'>Gameterest</h4>
        </div>
        <h4 className='Description'>This is a game board that is like pinterest you can leave a comment on any game login and logout as well as add any game on the front page to your favorites</h4>
            <div className='ProjectLinks'>
            <a href='https://github.com/Elvedin123/gametrest-frontend' target="_blank" rel='noreferrer' className='LinkText'>
            <div className='IndividualLinks'>
                <img src='https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true' alt='World wide web' className='Icons'/>
                <h3 className='LinkText'>Github Front-End</h3>
            </div>
            </a>
            <a href='https://github.com/Jacobdye99/Gameterest_BackEnd' target="_blank" rel='noreferrer' className='LinkText'>
            <div className='IndividualLinks'>
                <img src='https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true' alt='World wide web' className='Icons'/>
                <h3 className='LinkText'>Github Back-End</h3>
            </div>
            </a>
            <a href='https://gameterest2.herokuapp.com/' target="_blank" rel='noreferrer' className='LinkText'>
            <div className='IndividualLinks'>
            <img src='https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true' alt='World wide web' className='Icons'/>
                <h3 className='LinkText'>Website</h3>
            </div>
            </a>
            </div>
    </div>
  )
}
