import { NavLink } from "react-router-dom"
import './App.css';




function App() {


    return (
        <div>
            <ul className="pagination d-flex justify-content-center m-4">
                <li className="page-item"> <NavLink to="/" className='page-link'> 1 </NavLink> </li>
                <li className="page-item"> <NavLink to="/pagination" className='page-link'> 2 </NavLink> </li>
                <li className="page-item"> <NavLink to="/killing" className='page-link'> 3 </NavLink> </li>
            </ul>
        </div>
    );
}

export default App;
