

export default function Projects(props) {
  return (
    <div className='Window'>
        <div className='TopBar'>
            <button onClick={() => props.setProjects(false)} className="X">X</button>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/main/client/src/Assets/Images/artage-io-48173_1646541164.png?raw=true" alt="Resume" className='topBarIcon'/>
            <h4 className='fileName'>Projects</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur iusto voluptatum nulla soluta deleniti sequi ipsum doloribus exercitationem nemo quae excepturi, sit, est quaerat expedita, praesentium dicta unde ab?</p>
    </div>
  )
}
