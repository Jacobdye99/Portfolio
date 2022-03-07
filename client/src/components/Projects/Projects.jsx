import './Projects.css'

export default function Projects(props) {
  return (
    <div className='Window'>
        <div className='TopBar'>
            <button onClick={() => props.setProjects(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/main/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true" alt="Resume" className='topBarIcon'/>
            <h4 className='fileName'>Projects</h4>
        </div>
        <div>
        <h2>These are some of my projects:</h2>

        </div>
    </div>
  )
}
