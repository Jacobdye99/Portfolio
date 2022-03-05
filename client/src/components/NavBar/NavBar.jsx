import './NavBar.css'
import Clock from 'react-live-clock';

export default function NavBar() {
  return (
    <div className='Nav'>
        <div className='Clock'>
            <Clock />
        </div>
    </div>
  )
}
