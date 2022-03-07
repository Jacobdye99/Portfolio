import { useState } from "react"
import './Desktop.css'

export default function Desktop(props) {
  return (
    <div className="Desktop">
        <div className={props.cls} onDoubleClick={() => {
            props.setResume(true)
            props.setCls("")
            }} onClick={() => {
                props.setCls("Clicked")
                props.setCls2("")
                props.setCls3("")
                }}>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/main/client/src/Assets/Images/artage-io-48175_1646541195.png?raw=true" alt="Resume" className="Icons"/>
            <h3 className="IconText">About Me</h3>
        </div>
        <div className={props.cls2} onClick={() => {
            props.setCls2("Clicked")
            props.setCls("")
            props.setCls3("")
    }}
            onDoubleClick={() => {
                    props.setProjects(true)
                    props.setCls2("")
        }}>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/main/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true" alt="Projects" className="Icons"/>
            <h3 className="IconText">Projects</h3>
        </div>
        <div className={props.cls3} onClick={() => {
            props.setCls3("Clicked")
            props.setCls("")
            props.setCls2("")
    }} 
                onDoubleClick={() => {
                    props.setSkills(true)
                    props.setCls3("")
                }}>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/main/client/src/Assets/Images/artage-io-48181_1646541247.png?raw=true" alt="Skills" className="Icons"/>
            <h3 className="IconText">Skills</h3>
        </div>
    </div>
  )
}
