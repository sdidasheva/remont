import React, { useState } from "react";
import './App.scss';
import dots from './images/dots.jpg';
import residences from './residences.json';

function App() {
const [value, setValue] = useState(0);
  // Изменение текста в зависимости от количества найденных объектов
  let objLength = residences.length;
  function foundObjNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}
  // Отображение списка объектов в версии desktop 
let residenceName = residences.map((residence, index) => {
  return (

      <li className={value===index ? "residences__object_li-active" : "residences__object_li" }
      key={residence.id}
      onClick={()=> setValue(index)} >{residence.name}</li>
  )
})

  // Отображение списка объектов в версии mobile
let residenceNameMobile = residences.map((residence, index) => {
  return (
      <option className="residences__object_options"
      key={residence.id}
      value={residence.name}
      >{residence.name}</option>
  )
})

const onChange = (e) => {
  const index = residences.findIndex(residence => residence.name === e.target.value);
  setValue(index);
}

  // Отображение фотографий 
const {image} = residences[value];
const Images = () => {
  let i = '';
  for (i = 0; i < image.length; i++) {
        const [current, setCurrent] = useState(0)
            const length = image.length;
            const prevImage = () => {
                setCurrent(current === 0 ? length - 1 : current - 1);
            }
            const nextImage = () => {
                setCurrent(current === length - 1 ? 0 : current + 1);
            }
            return (
                <div className='residences__images'>
                    <img src={image[current]} className="residences__image" />
                    <div className="arrows">
                        <button className="arrow" onClick={prevImage} >&#60;</button>
                        <button className="arrow" onClick={nextImage} >&#62;</button>
                    </div>
                    <div className="image_length"><strong>{current + 1}</strong>/{length}</div>
                </div>
            )
    } 
}


  return (
    <div className='gallery'>
      <div className='wrapper'>
        <div className='gallery__header'>
          <div className='header__actions'>
            <h1  className='header__actions_title'>Галерея проектов</h1>
            <p className='header__actions_text'>Сумма экономии рассчитана в сравнении с суммой цен этого же перечня товаров по отдельности</p>
            <button className='header__actions_btn'>ВЫБРАТЬ ДИЗАЙН</button>
          </div>
          <div className='header__success'>
            <img className='header__success_dotsimg' src={dots} alt='red_dots'/>
            <div className='header__success_textcontainer'><p className='header__success_text'>Мы успешно завершили <br/> уже <span>более 450</span> ремонтов</p></div>
          </div>
        </div>
        <main className='gallery__residences'>
          <div className='residences__list'>
            <div className='residences__list_type'>
              <div className='residences__type_text'>ТИП РЕМОНТА</div>
              <select className='residences__type_select'>
                <option className='residences__type_option'>Smart Comfort</option>
              </select>
            </div>
            <div className='residences__list_objects'>
              <p className='residences__objects_text'>{foundObjNum(length, [`Найден ${objLength} объект:`, `Найдено ${objLength} объекта:`, `Найдено ${objLength} объектов:`])}
              </p>
              <ul className="residences__objects_ul"> {residenceName}</ul>
            </div>
            <div className='residences__list_objects-mobile'>
              <div className='residences__finished'>СДЕЛАННЫЕ РЕМОНТЫ
              </div>
              <select onChange={onChange} className="residences__objects_select"> 
              {residenceNameMobile}
              </select>
            </div>
          </div>
          <Images/>
        </main>
      </div>
    </div>
  );
}

export default App;
