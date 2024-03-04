import { Routes, Route } from "react-router-dom"
import './App.css';
import Mainpage from './Mainpage';
import Pagination from './Pagination';
import Killing from './components/Killing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/pagination' element={<Pagination />} />
      <Route path='/killing' element={<Killing />} />
    </Routes>)
}

export default App;
