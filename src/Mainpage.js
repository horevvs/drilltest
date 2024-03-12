import { NavLink } from "react-router-dom"
import './App.css';




function App() {

    return (
        <>
            <nav className="  bg-dark ">
                <ul className=" d-flex flex-sm-row flex-column   justify-content-around  ">
                    <li className="nav-item m-2 px-4 "> <NavLink className='link-light' to={'/killing'}
                    > Глушение </NavLink>
                    </li>
                    <li className="nav-item m-2 px-4 "> <NavLink className='link-light' to={'/drillmud'}
                    >Буровые растворы </NavLink>
                    </li>
                    <li className="nav-item m-2  px-4"> <NavLink className='link-light' to={'/nnb'}
                    >ННБ </NavLink>
                    </li>
                    <li className="nav-item m-2  px-4"> <NavLink className='link-light' to={'/other_calculations'}
                    >Прочие расчеты </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="text-center  more fs-1 fw-bold  text-light" > Инженерные расчеты для технологов </div>
        </>
    );
}

export default App;
