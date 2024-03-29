import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import '../App.css';


function Other_calculations() {

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

        <h2 class="mx-5 pt-5 fs-5"> 1. Расчет  гидростатического давления на забое</h2>
        <div class="form-group mx-5  ">
          <label for="formGroupExampleInput">Плотность промывочной жидкости (кг/м<sup>3</sup>) </label>
          <input type="text" class="form-control height_control" id="formGroupExampleInput" placeholder="Введите значение" value={inputs} onChange={(e) => setInputs(e.target.value)} />
        </div>

        <div class="form-group mx-5  pt-2 ">
          <label for="formGroupExampleInput2 pt-5" > Расчетная глубина (м) </label>
          <input type="text" class="form-control  height_control" id="formGroupExampleInput2" placeholder="Введите значение" value={inputs2} onChange={(e) => setInputs2(e.target.value)} />
        </div>

        <div class="form-group mx-5  pt-2 ">
          <label for="formGroupExampleInput2 pt-5" >Давление на устье (Мпа) </label>
          <input type="text" class="form-control height_control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs3} onChange={(e) => setInputs3(e.target.value)} />
        </div>

        <div class='mx-5 py-4'>
          <Button onClick={() => getValues()} variant="primary" size="sm" active>
            Выполнить расчет
          </Button>
        </div>

        <h2 class="mx-5 py-2 fs-5"> 2. Перевод Мпа в атмосферы и обратно</h2>
        <div class="form-group mx-5  ">
          <label for="formGroupExampleInput2 pt-5" >Значение в (кгс/см²) </label>
          <input type="text" class="form-control height_control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs4} onChange={(e) => setInputs4(e.target.value)} />
          <div class=' py-4'>
            <Button onClick={() => getValues2()} variant="primary" size="sm" active>
              Выполнить перевод в Мпа
            </Button>
          </div>
        </div>

        <div class="form-group mx-5 ">
          <label for="formGroupExampleInput2 pt-5" >Значение в (Мпа) </label>
          <input type="text" class="form-control height_control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs5} onChange={(e) => setInputs5(e.target.value)} />
          <div class=' py-4'>
            <Button onClick={() => getValues3()} variant="primary" size="sm" active>
              Выполнить перевод в  кгс/см²
            </Button>
          </div>
        </div>

        <h2 class="mx-5 py-3 fs-5"> 3. Расчет  объёма скважины</h2>

        <div>
          <select class="form-select height_control mx-5  my-3" aria-label="Default select example" value={value} onChange={(e) => setValue(e.target.value)}>
            <option selected>Диаметр эксплуатационной колонны, мм</option>
            <option value="114">114</option>
            <option value="127">127</option>
            <option value="140">140</option>
            <option value="146">146</option>
            <option value="168.3">168.3</option>
            <option value="178">178</option>
            <option value="194">194</option>
            <option value="219">219</option>
            <option value="244.5">244.5</option>
            <option value="324">324</option>
          </select>


          <select class="form-select height_control mx-5" aria-label="Default select example" value={value2} onChange={(e) => setValue2(e.target.value)}>
            <option selected>Толщина стенки, мм </option>
            <option value="5.2">5,2</option>
            <option value="5.7">5,7</option>
            <option value="6.4">6.4</option>
            <option value="7.4">7.4</option>
            <option value="8.6">8.6</option>
            <option value="8.94">8.94</option>
            <option value="9.2">9.2</option>
            <option value="9.5">9.5</option>
            <option value="10.2">10.2</option>
            <option value="10.5">10.5</option>
            <option value="10.6">10.6</option>
            <option value="10.6">10.6</option>
            <option value="11.5">10.5</option>
            <option value="12.7">12.7</option>
          </select>

          <input type="text" class="form-control my-3 height_control  mx-5" id="formGroupExampleInput2" placeholder="Укажите глубину скважины, м" value={value3} onChange={(e) => setValue3(e.target.value)} />


        </div>


        <div class='  px-5 py-4'>
          <Button class=" mx-5 w-25 mx-5" onClick={() => wellVolume()} variant="primary" size="sm" active>
            Показать объем скважины в м<sup>3</sup>
          </Button>
        </div>

        <h2 class="mx-5 py-3 fs-5"> 4. Расчет объема кольцевого пространства скважины</h2>

        <div>

          <select class="form-select height_control mx-5 my-3" aria-label="Default select example" value={value4} onChange={(e) => setValue4(e.target.value)}>
            <option selected>Диаметр эксплуатационной колонны, мм</option>
            <option value="114">114</option>
            <option value="127">127</option>
            <option value="140">140</option>
            <option value="146">146</option>
            <option value="168.3">168.3</option>
            <option value="178">178</option>
            <option value="194">194</option>
            <option value="219">219</option>
            <option value="244.5">244.5</option>
            <option value="324">324</option>
            <option value="426">426</option>
          </select>


          <select class="form-select height_control mx-5" aria-label="Default select example" value={value5} onChange={(e) => setValue5(e.target.value)}>
            <option selected>Толщина стенки, мм </option>
            <option value="5.2">5,2</option>
            <option value="5.7">5,7</option>
            <option value="6.4">6.4</option>
            <option value="7.4">7.4</option>
            <option value="8.6">8.6</option>
            <option value="8.94">8.94</option>
            <option value="9.2">9.2</option>
            <option value="9.5">9.5</option>
            <option value="10.2">10.2</option>
            <option value="10.5">10.5</option>
            <option value="10.6">10.6</option>
            <option value="10.6">10.6</option>
            <option value="11.5">10.5</option>
            <option value="12.7">12.7</option>
          </select>

          <select class="form-select height_control mx-5 my-3" aria-label="Default select example" value={value6} onChange={(e) => setValue6(e.target.value)}>
            <option selected>Диаметр спущенной в скважину НКТ, мм</option>
            <option value="73">73</option>
            <option value="89">89</option>
            <option value="114">114</option>
            <option value="127">127</option>
            <option value="140">140</option>
            <option value="146">146</option>
            <option value="168.3">168.3</option>
            <option value="178">178</option>
            <option value="194">194</option>
            <option value="219">219</option>
            <option value="244.5">244.5</option>
            <option value="324">324</option>
          </select>


          <div class='  px-5 py-4'>
            <Button class=" mx-5 w-25 mx-5" onClick={() => pgm()} variant="primary" size="sm" active>
              Рассчитать объем 1 погонного метра
            </Button>
          </div>







        </div>


      </div>





    </>
  )
}

export default Other_calculations;
