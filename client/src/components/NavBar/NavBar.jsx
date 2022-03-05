import './NavBar.css'
import Clock from 'react-live-clock';
import Start from '../Start/Start';

export default function NavBar() {
  return (
    <div className='Nav'>
        <div className='Start'>
            <Start />
        </div>
        <div className='Clock'>
            <Clock />
        </div>
    </div>
  )
}
