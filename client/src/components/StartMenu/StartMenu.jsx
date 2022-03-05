import React from 'react'
import './StartMenu.css'
import { Link } from 'react-router-dom'

export default function StartMenu() {
  return (
    <div className='StartMenuDiv'>
        <Link to="/" className='StartLinks'>Logout</Link>
    </div>
  )
}
