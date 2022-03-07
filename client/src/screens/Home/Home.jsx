import NavBar from '../../components/NavBar/NavBar'
import './Home.css'
import Popup from '../../components/Popup/Popup'
import StartMenu from '../../components/StartMenu/StartMenu'
import { useState } from 'react'
import Desktop from '../../components/Desktop/Desktop'
import ResumeIcon from '../../components/Resume/Resume'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import CC from '../../components/ProjectsWindows/CC'
import GT from '../../components/ProjectsWindows/GT'
import PTB from '../../components/ProjectsWindows/PTB'
import Reviewio from '../../components/ProjectsWindows/Reviewio'

export default function Home(props) {
  const [trigger, setTrigger] = useState(false)
  const [resume, setResume] = useState(false)
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState(false)
  const [cc, setCC] = useState(false)
  const [ptb, setPTB] = useState(false)
  const [gt, setGT] = useState(false)
  const [reviewio, setReviewio] = useState(false) 


  

  return (
    <div className='fullDiv'>
      <div className='Windows Icons'>
        <Desktop 
        setResume={setResume}
        setProjects={setProjects}
        setSkills={setSkills}
        cls={props.cls}
        setCls={props.setCls}
        cls2={props.cls2}
        setCls2={props.setCls2}
        cls3={props.cls3}
        setCls3={props.setCls3}
        />
      </div>
      <div className='StartMenuDiv'>
            <Popup trigger={trigger}>
                <StartMenu/>
            </Popup>
        </div>
        <div className='Windows'>
          <Popup trigger={resume}>
            <ResumeIcon
            setResume={setResume}
            
            
            />
          </Popup>
          <Popup trigger={projects}>
            <Projects 
            setProjects={setProjects}
            cc={cc}
            setCC={setCC}
            ptb={ptb}
            setPTB={setPTB}
            gt={gt}
            setGT={setGT}
            reviewio={reviewio}
            setReviewio={setReviewio}
            
            />
          </Popup>
          <Popup trigger={skills}>
            <Skills 
            setSkills={setSkills}
          
            />
          </Popup>
          <Popup trigger={cc}>
            <CC setCC={setCC}
            
            />
          </Popup>
          <Popup trigger={gt}>
            <GT setGT={setGT}
            />
          </Popup>
          <Popup trigger={ptb}>
            <PTB setPTB={setPTB}
            />
          </Popup>
          <Popup trigger={reviewio}>
            <Reviewio setReviewio={setReviewio}
            />
          </Popup>
        </div>
        <div onClick={() => {
      props.setCls("")
      props.setCls2("")
      props.setCls3("")
    }}>
      <NavBar trigger={trigger} setTrigger={setTrigger}/>
        </div>
    </div>
  )
}
