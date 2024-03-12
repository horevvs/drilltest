import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import '../App.css';


function Drillmud() {

  const [inputs, setInputs] = useState([])
  const [inputs2, setInputs2] = useState([])
  const [inputs3, setInputs3] = useState([]);
  const [inputs4, setInputs4] = useState([]);
  const [inputs5, setInputs5] = useState([]);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');

  const getValues = () => {
    const density = inputs;
    const depth = inputs2;
    const result = (density * depth * 9.81) / 10000000
    const result2 = Number(inputs3.replace(/\,/g, '.'))
    const totalresult = result + result2
    alert(totalresult.toFixed(4) + 'МПа');
  }


  const getValues2 = () => {
    const result2 = inputs4.replace(/\,/g, '.') / 10.197;
    alert(result2.toFixed(4) + 'МПа');
  }

  const pgm = () => {

    let res = (Math.pow(0.001 * (value4 - (value5 * 2)), 2) * 0.785 * 1000) - (Math.pow(0.001 * (value6), 2) * 0.785 * 1000)

    alert(res);
  }

  const getValues3 = () => {
    const result3 = inputs5.replace(/\,/g, '.') / 0.09806;
    alert(result3.toFixed(4) + ' кгс/см²');
  }

  const wellVolume = () => {
    const result4 = value.replace(/\,/g, '.');
    const result5 = value2.replace(/\,/g, '.');
    const result6 = value3.replace(/\,/g, '.');


    let totalresult = (((Math.pow(((result4 - ((result5 * 2)).toFixed(1)) / 1000), 2) * 0.785 * 1000).toFixed(1)) * result6).toFixed(1)
    alert('объем скважины составляет ' + totalresult + ' л' + ' или ' + totalresult / 1000 + ' м3');

  }




  return (
    <>

      <nav class="  bg-dark ">
        <ul class=" d-flex flex-sm-row flex-column    justify-content-around">
          <li class="nav-item m-2 px-4  "> <NavLink className='link-light' to={'/killing'}
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

      
      <div class="bg-info mx-3 bg-opacity-25  ">

        <h2 class="mx-5  fs-5"> 1. Расчет  утяжеления буроового раствора</h2>
        

      

      




      


      </div>





    </>
  )
}

export default Drillmud;
