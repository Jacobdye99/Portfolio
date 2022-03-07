import './Loadup.css'

export default function Loadup() {
  return (
    <div className="LoadDiv">
        <script>
        {setTimeout(function(){
            window.location.href = 'https://www.jacobdye.com/home';
         }, 3000)}
        </script>
        <div>
            <img src="https://c.tenor.com/eQON8ZKeRiUAAAAC/microsoft-windows95.gif" alt="Windows startup screen" className="startScreen"/>
        </div>
    </div>
  )
}
