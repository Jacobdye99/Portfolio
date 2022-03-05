import './NavBar.css'
import Clock from 'react-live-clock';
import Start from '../Start/Start';
import { FiGithub } from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'

export default function NavBar() {
  return (
    <div className='Nav'>
        <div className='Start'>
            <Start />
        </div>
        <div className='Clock'>
            <a href='https://github.com/Jacobdye99' target="_blank" rel="noreferrer" className='NavLinks' ><FiGithub size={20}/></a>
            <a href="https://www.linkedin.com/in/jacob-dye-55659b149/" target="_blank" rel="noreferrer" className='NavLinks'><AiOutlineLinkedin size={20}/></a>
            <Clock className={"Clocktext"}/>
        </div>
    </div>
  )
}
