import React from 'react'
import './StartMenu.css'
import { Link } from 'react-router-dom'

export default function StartMenu() {
  return (
    <div className='StartMenuDiv'>
        <Link to="/" className='StartLinks'>
            <img src="https://github.com/Jacobdye99/Portfolio/blob/dev/client/src/Assets/Images/artage-io-48177_1646468426.png?raw=true" alt="Windows 95 computer logo" className='StartImg'/>
            <h4 className='StartText2'>Logout</h4>
        </Link>
    </div>
  )
}
