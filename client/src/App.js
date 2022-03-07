import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import Loadup from './screens/Loadup/Loadup';
import { useState } from 'react';

function App() {
  const [mousePos, setMousePos] = useState({ x: null, y: null })
  const [cls, setCls] = useState("")
  const [cls2, setCls2] = useState("")
  const [cls3, setCls3] = useState("")
  const updateMousePosition = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="App" >
      <Routes>
        <Route path='/home' element={<Home 
        mousePos={mousePos} 
        updateMousePosition={updateMousePosition} 
        cls={cls} 
        setCls={setCls}
        cls2={cls2}
        setCls2={setCls2}
        cls3={cls3}
        setCls3={setCls3}

        />} />
        <Route path='/' element={<Loadup />} />
      </Routes>
    </div>
  );
}

export default App;
