import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import Loadup from './screens/Loadup/Loadup';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Loadup />} />
      </Routes>
    </div>
  );
}

export default App;
