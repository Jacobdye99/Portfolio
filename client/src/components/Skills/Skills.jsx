import './Skills.css'

export default function Skills(props) {
  return (
    <div className='Window'>
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
