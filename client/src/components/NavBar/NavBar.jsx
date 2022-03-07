import './NavBar.css'
import Clock from 'react-live-clock';
import Start from '../Start/Start';
import { FiGithub } from 'react-icons/fi'



export default function NavBar(props) {
    
  return (
    <div className='Nav'>
        <div className='Start' onClick={() => props.setTrigger(!props.trigger)} style={props.trigger ? {borderStyle: 'inset'} : {borderStyle: 'outset'} }>
            <Start />
        </div>
        <div className='Clock'>
            <a href='https://github.com/Jacobdye99' target="_blank" rel="noreferrer" className='NavLinks' ><FiGithub size={20}/></a>
            <a href="https://www.linkedin.com/in/jacob-dye-55659b149/" target="_blank" rel="noreferrer" className='NavLinks'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='LinkedIn' className='NavImgs'/>
            </a>
            <Clock className={"Clocktext"} ticking={true}/>
        </div>
    </div>
  )
}
