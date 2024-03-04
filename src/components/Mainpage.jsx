import React from 'react';
import { NavLink } from 'react-router-dom';


function Home() {
 

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-lg-5">
          <a class="navbar-brand" href="#!">Инженерные расчеты</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item m-1 "> <NavLink to={'/Blog'}
                style={({ isActive }) => ({
                  color: isActive ? '#ffff' : '#ffff',
                  textDecoration: isActive ? 'none' : 'none'
                })}> Глушение </NavLink> </li>

              <li class="nav-item m-1"> <NavLink to={'/Chats'}
                style={({ isActive }) => ({ color: isActive ? '#ffff' : '#ffff', textDecoration: isActive ? 'none' : 'none' })}> Цементаж </NavLink> </li>

              <li class="nav-item m-1"> <NavLink to={'/Profiles'}
                style={({ isActive }) => ({ color: isActive ? '#ffff' : '#ffff', textDecoration: isActive ? 'none' : 'none' })}> Буровые растворы </NavLink> </li>


              <li class="nav-item m-1"> <NavLink to={'/Metric'}
                style={({ isActive }) => ({ color: isActive ? '#ffff' : '#ffff', textDecoration: isActive ? 'none' : 'none' })}
              > Перевод величин </NavLink> </li>
            </ul>

            <div  class="text-bg-light mx-5 bg-opacity-25 ">
              4
            </div>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Home;

