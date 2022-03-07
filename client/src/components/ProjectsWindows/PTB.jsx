import { useState } from 'react'
import { useDrag } from 'react-use-gesture'

export default function PTB(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
    const bindWindowPos = useDrag((params) => {
        setPosition({
            x: params.offset[0],
            y: params.offset[1]
        })
    })
  return (
    <div className='Window' {...bindWindowPos()}
    style={{
        top: position.y,
        left: position.x,
    }}>
        <div className='TopBar'>
            <button onClick={() => props.setPTB(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48180_1646631279.png?raw=true" alt="Resume" className='topBarIcon'/>
            <h4 className='fileName'>Pokemon Team Builder</h4>
        </div>
        <h4 className='Description'>This is a webite that you can use to build and share your favorite pokemon team built with React and Airtable</h4>
            <div className='ProjectLinks'>
            <a href='https://github.com/Jacobdye99/Pokedex-team-builder' target="_blank" rel='noreferrer' className='LinkText'>
            <div className='IndividualLinks'>
                <img src='https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true' alt='World wide web' className='Icons'/>
                <h3 className='LinkText'>Github</h3>
            </div>
            </a>
            <a href='https://vigilant-tereshkova-9e4ea5.netlify.app/' target="_blank" rel='noreferrer' className='LinkText'>
            <div className='IndividualLinks'>
            <img src='https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true' alt='World wide web' className='Icons'/>
                <h3 className='LinkText'>Website</h3>
            </div>
            </a>
            </div>
    </div>
  )
}
