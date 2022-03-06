import NavBar from '../../components/NavBar/NavBar'
import './Home.css'
import Popup from '../../components/Popup/Popup'
import StartMenu from '../../components/StartMenu/StartMenu'
import { useState } from 'react'
import Desktop from '../../components/Desktop/Desktop'

export default function Home() {
  const [trigger, setTrigger] = useState(false)
  return (
    <div className='fullDiv'>
      <div className='Windows Icons'>
        <Desktop />
      </div>
      <div className='StartMenuDiv'>
            <Popup trigger={trigger}>
                <StartMenu/>
            </Popup>
        </div>
      <NavBar trigger={trigger} setTrigger={setTrigger}/>
    </div>
  )
}
