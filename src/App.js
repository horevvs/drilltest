import { Routes, Route } from "react-router-dom"
import './App.css';
import Mainpage from './Mainpage';

import Killing from './components/Killing';
import Drillmud from './components/Drillmud';
import Nnb from './components/Nnb';
import Other_calculations from './components/Other_calculations';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
        <Route path='/killing' element={<Killing />} />
        <Route path='/drillmud' element={<Drillmud />} />
        <Route path='/nnb' element={<Nnb />} />
        <Route path='/other_calculations' element={<Other_calculations />} />
    </Routes>)
}

export default App;
