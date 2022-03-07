import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import Loadup from './screens/Loadup/Loadup';
import { useState } from 'react';

function App() {
  const [cls, setCls] = useState("")
  const [cls2, setCls2] = useState("")
  const [cls3, setCls3] = useState("")

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home 
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
