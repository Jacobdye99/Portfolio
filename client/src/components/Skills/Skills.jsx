import './Skills.css'
import { useDrag } from 'react-use-gesture'
import { useState } from 'react'
export default function Skills(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
    const bindWindowPos = useDrag((params) => {
        setPosition({
            x: params.offset[0],
            y: params.offset[1]
        })
    })
  return (
    <div className='Window' {...bindWindowPos()} id="Skills"
    style={{
        top: position.y,
        left: position.x,
    }}
    onClick={() => {
      document.getElementById("Resume").style.zIndex = 1
      document.getElementById("Skills").style.zIndex = 2
      document.getElementById("Projects").style.zIndex = 1
      document.getElementById("CC").style.zIndex = 1
      document.getElementById("GT").style.zIndex = 1
      document.getElementById("PTB").style.zIndex = 1
      document.getElementById("Reviewio").style.zIndex = 1
    }}>
        <div className='TopBar'>
            <button onClick={() => props.setSkills(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/main/client/src/Assets/Images/artage-io-48181_1646541247.png?raw=true" alt="Resume" className='topBarIcon'/>
            <h4 className='fileName'>Skills</h4>
        </div>
        <div >
        <h2>I'm skilled in the following technologies:</h2>
        <div className='TechDiv'>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" className='TechImg'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='Javascript'  className='TechImg'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt='Ruby'  className='TechImg'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" alt='Rails' className='TechImg'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt='Postgres' className='TechImg'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='HTML' className='TechImg'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='Css' className='TechImg' />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='Mongo' className='TechImg' />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express" className="TechImg"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='Github' className='TechImg' />

        </div>
        </div>
    </div>
  )
}
