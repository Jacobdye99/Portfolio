import React from 'react'
import '../Window/Window.css'

export default function ResumeIcon(props) {
    return (
    <div className='Window'>
        <div className='TopBar'>
            <button onClick={() => props.setResume(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/main/client/src/Assets/Images/artage-io-48175_1646541195.png?raw=true" alt="Resume" className='topBarIcon'/>
            <h4 className='fileName'>Resume</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur iusto voluptatum nulla soluta deleniti sequi ipsum doloribus exercitationem nemo quae excepturi, sit, est quaerat expedita, praesentium dicta unde ab?</p>
    </div>
    )
}
