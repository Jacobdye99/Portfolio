import './Projects.css'
import { useState } from 'react'
import { useDrag } from 'react-use-gesture'


export default function Projects(props) {
  const [cls, setCls] = useState("")
  const [cls2, setCls2] = useState("")
  const [cls3, setCls3] = useState("")
  const [cls4, setCls4] = useState("")
  const [position, setPosition] = useState({ x: 0, y: 0 })
    const bindWindowPos = useDrag((params) => {
        setPosition({
            x: params.offset[0],
            y: params.offset[1]
        })
    })
  return (
    <div className='Window' {...bindWindowPos()} id="Projects"
    style={{
        top: position.y,
        left: position.x,
    }}
    onClick={() => {
      document.getElementById("Resume").style.zIndex = 1
      document.getElementById("Skills").style.zIndex = 1
      document.getElementById("Projects").style.zIndex = 4
      document.getElementById("CC").style.zIndex = 1
      document.getElementById("GT").style.zIndex = 1
      document.getElementById("PTB").style.zIndex = 1
      document.getElementById("Reviewio").style.zIndex = 1
    }}>
        <div className='TopBar'>
            <button onClick={() => props.setProjects(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48180_1646631279.png?raw=true" alt="Projects Files" className='topBarIcon'/>
            <h4 className='fileName'>Projects</h4>
        </div>
        
        <div>
        <h2>These are some of my projects:</h2>
        </div>
        <div className='Folders'>
        <div className={cls} onClick={() => {
                setCls("Clicked2")
                setCls2("")
                setCls3("")
                setCls4("")
                }}
                onDoubleClick={() => {
                  props.setCC(true)
                  setCls("")
                  }}>
        <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48180_1646631279.png?raw=true" alt="Resume" className='Files'/>
        <h4 className='fileText'>Character Creator</h4>
        </div >
        <div className={cls2} onClick={() => {
                setCls("")
                setCls2("Clicked2")
                setCls3("")
                setCls4("")
                }}
                onDoubleClick={() => {
                  props.setPTB(true)
                  setCls2("")
                  }}>
        <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48180_1646631279.png?raw=true" alt="Resume" className='Files'/>
        <h4 className='fileText'>Pokemon Team Builder</h4>
        </div>
        <div className={cls3} onClick={() => {
                setCls("")
                setCls2("")
                setCls3("Clicked2")
                setCls4("")
                }}
                onDoubleClick={() => {
                  props.setGT(true)
                  setCls3("")
                  }}>
        <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48180_1646631279.png?raw=true" alt="Resume" className='Files'/>
        <h4 className='fileText'>Gameterest</h4>
        </div>
        <div className={cls4} onClick={() => {
                setCls("")
                setCls2("")
                setCls3("")
                setCls4("Clicked2")
                }}
                onDoubleClick={() => {
                  props.setReviewio(true)
                  setCls4("")
                  }}>
        <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48180_1646631279.png?raw=true" alt="Resume" className='Files'/>
        <h4 className='fileText'>Review.io</h4>
        </div>
        
        </div>
    </div>
  )
}
