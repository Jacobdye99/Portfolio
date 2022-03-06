import NavBar from '../../components/NavBar/NavBar'
import './Home.css'
import Popup from '../../components/Popup/Popup'
import StartMenu from '../../components/StartMenu/StartMenu'
import { useState } from 'react'
import Desktop from '../../components/Desktop/Desktop'
import ResumeIcon from '../../components/Resume/Resume'

export default function Home() {
  const [trigger, setTrigger] = useState(false)
  const [resume, setResume] = useState(false)
  const [cls, setCls] = useState("")
  const [cls2, setCls2] = useState("")
  const [cls3, setCls3] = useState("")
  return (
    <div className='fullDiv' >
      <div className='Windows Icons'>
        <Desktop 
        setResume={setResume}
        cls={cls}
        setCls={setCls}
        cls2={cls2}
        setCls2={setCls2}
        cls3={cls3}
        setCls3={setCls3}
        />
      </div>
      <div className='StartMenuDiv'>
            <Popup trigger={trigger}>
                <StartMenu/>
            </Popup>
        </div>
        <div className='Windows'>
          <Popup trigger={resume}>
            <ResumeIcon setResume={setResume}/>
          </Popup>
        </div>
        <div onClick={() => {
      setCls("")
      setCls2("")
      setCls3("")
    }}>
      <NavBar trigger={trigger} setTrigger={setTrigger}/>
        </div>
    </div>
  )
}
