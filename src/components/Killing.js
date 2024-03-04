import React from 'react';
import { NavLink } from 'react-router-dom';


function Killing() {



  return (
    <>
      <nav class="  bg-dark ">

        <ul class=" d-flex justify-content-around">
          <li class="nav-item m-2 px-4 "> <NavLink className='link-light' to={'/killing'}
          > Глушение </NavLink>
          </li>

          <li class="nav-item m-2 px-4 "> <NavLink className='link-light' to={'/drillmud'}
          >Буровые растворы </NavLink>
          </li>

          <li class="nav-item m-2  px-4"> <NavLink className='link-light' to={'/nnb'}
          >ННБ </NavLink>
          </li>

          <li class="nav-item m-2  px-4"> <NavLink className='link-light' to={'/other_calculations'}
          >Прочие расчеты </NavLink>
          </li>
        </ul>

      </nav>

      <div> Раздел глушение в процессе разработки</div>
    </>
  )



}

export default Killing;
