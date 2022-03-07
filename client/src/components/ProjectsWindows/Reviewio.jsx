import { useState } from 'react'
import { useDrag } from 'react-use-gesture'

export default function Reviewio(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
    const bindWindowPos = useDrag((params) => {
        setPosition({
            x: params.offset[0],
            y: params.offset[1]
        })
    })
  return (
    <div className='Window' {...bindWindowPos()} id="Reviewio"
    style={{
        top: position.y,
        left: position.x,
    }}
    onClick={() => {
        document.getElementById("Resume").style.zIndex = 1
        document.getElementById("Skills").style.zIndex = 1
        document.getElementById("Projects").style.zIndex = 1
        document.getElementById("CC").style.zIndex = 1
        document.getElementById("GT").style.zIndex = 1
        document.getElementById("PTB").style.zIndex = 1
        document.getElementById("Reviewio").style.zIndex = 3
    }}>
        <div className='TopBar'>
            <button onClick={() => props.setReviewio(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48180_1646631279.png?raw=true" alt="Resume" className='topBarIcon'/>
            <h4 className='fileName'>Reviewio</h4>
        </div>
        <h4 className='Description'>This is a review social media/blog where you can create an account and leave a review on any piece of media that you can think of</h4>
            <div className='ProjectLinks'>
            <a href='https://github.com/Jacobdye99/Review.io' target="_blank" rel='noreferrer' className='LinkText'>
            <div className='IndividualLinks'>
                <img src='https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true' alt='World wide web' className='Icons'/>
                <h3 className='LinkText'>Github</h3>
            </div>
            </a>
            <a href='https://objective-shockley-ab1229.netlify.app/' target="_blank" rel='noreferrer' className='LinkText'>
            <div className='IndividualLinks'>
            <img src='https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true' alt='World wide web' className='Icons'/>
                <h3 className='LinkText'>Website</h3>
            </div>
            </a>
            </div>
    </div>
  )
}
