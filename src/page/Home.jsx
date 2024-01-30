import React, { useState } from 'react'
import excursions_1 from '../assets/excursions_1.jpg'
import excursions_2 from '../assets/excursions_2.jpg'
import excursions_3 from '../assets/excursions_3.jpg'
import excursions_4 from '../assets/excursions_4.jpg'
import excursions_5 from '../assets/excursions_5.jpg'
import excursions_6 from '../assets/excursions_6.jpg'
import excursions_7 from '../assets/excursions_7.jpg'
import excursions_8 from '../assets/excursions_8.jpg'
import excursions_9 from '../assets/excursions_9.jpg'
import excursions_10 from '../assets/excursions_10.jpg'
import box_4 from '../assets/box-4.jpg'
import box_5 from '../assets/DSC_7905.jpg'
import box_3 from '../assets/box-1.jpg'
import box_2 from '../assets/box-2.jpg'
import box_1 from '../assets/box-3.jpg'
import TourCard from '../components/TourCard'
function Home() {

  const [cadrTour, setCardTour] = useState([
    {
      id: 1,
      title: "Морские Круизы из Узбекистана",
      description: 'Морские круизы от Персидского залива и до Карибов!',
      img: excursions_1,
      price: '17 286',
      info: '8 дней 7 ночей',
      infoYears: 0
    },
    {
      id: 2,
      title: "Всё лучшее в Минске",
      description: 'Увлекательный тур в Минск из Ташкента.',
      img: excursions_2,
      price: '6 775 000',
      info: '7 дней 6 ночей',
      infoYears: '0+'
    },
    {
      id: 3,
      title: "Недвижимость в Алании из Ташкента",
      description: 'Купите недвижимость в Турции по самым привлекательным ценам',
      img: excursions_3,
      infoYears: 0
    },
    {
      id: 4,
      title: "КОКО ДЕ МЕР НА СЕЙШЕЛАХ",
      description: 'Отправляйтесь на Сейшелы в незабываемый тур, где вас ждут солнечные пляжи и завораживающие',
      img: excursions_4,
      price: '51 744 935',
      info: '8 дней 7 ночей',
      infoYears: 0
    },
    {
      id: 5,
      title: "«МОСКВА — ДЕНЬ ЗА ДНЕМ»",
      description: 'Экскурсионный тур в Москву из Ташкента.',
      img: excursions_5,
      price: '1 792 500',
      info: '	От 2 до 7 дней',
      infoYears: 0
    },
    {
      id: 6,
      title: "ФУКУОК – «ЖЕМЧУЖНЫЙ ОСТРОВ»",
      description: 'Обрамленный белоснежными пляжами и скрывающий где-то в глубине',
      img: excursions_6,
      price: '14 370 000',
      info: '	12 дней и 11 ночей/11 дней 10 ночей',
      infoYears: 0
    },
    {
      id: 7,
      title: "ЧЕРНОГОРИЯ ( Montenegro)",
      description: 'Увлекательный тур в Черногорию. Тур в Черногорию из Ташкента.',
      img: excursions_7,
      price: '14 500 000',
      info: '8 дней 7 ночей',
      infoYears: 0
    },
    {
      id: 8,
      title: "Экскурсионный тур – Краски Цейлона!",
      description: 'Экзотический тур на Шри Ланку, прямой перелет',
      img: excursions_8,
      price: '19 398 000',
      info: '8 дней 7 ночей',
      infoYears: 0
    },
    {
      id: 9,
      title: "Отдых на побережье Индийского океана ( Шри – Ланка)",
      description: 'Отдых на побережье Индийского',
      img: excursions_9,
      price: '18 162 000',
      info: 'От 7 до 14 дней',
      infoYears: 0
    },
    {
      id: 10,
      title: "БАКУ — город контрастов и впечатлений",
      description: 'Недельный тур в Азербайджан из Ташкента',
      img: excursions_10,
      price: '7 370 000 ',
      info: '7 дней 6 ночей',
      infoYears: 0
    },

  ])

  return (
    <div className='home-block-all'>
      <div className="home-block-1">
        <div className="home-block-text">Самые лучшие туры</div>
        <div className="home-block-link"><p>Главная</p><span>/Самые лучшие туры</span></div>
      </div>
      <div className="home__alll">
        <div className="block-excursions-all-home-input-btn-block-all">
          <div className="home-input-btn-block-all">
            <h1>Выберите направление</h1>
            <div className="home-input-btn-block">
              <select className='selct'>
                <option>Выберите направление</option>
                <option>Австрия</option>
                <option>Азербайджан</option>
                <option>Англия</option>
                <option>Аргентина</option>
              </select>
              <div className="home-input-search">
                <input placeholder='Туры по словам' type="text" />
              </div>
              <div className="home-btn-block">
                Найти тур
              </div>
            </div>
          </div>
          <div className="block-excursions-all">
            <h1>Все туры</h1>
            <div className="excursions-block-ALL">
              {
                cadrTour.map((item) => (
                  <TourCard item={item} key={item.id} />
                ))
              }
            </div>
          </div>
        </div>
        <div className="block-excursions-all-home">
          <div className="blockk">
            <h1>Ваш личный менеджер</h1>
            <img src={box_4} alt="" />
            <img src={box_5} alt="" />
            <img src={box_3} alt="" />
            <img src={box_2} alt="" />
            <img src={box_1} alt="" />
            <h2>+998 78 120-77-22</h2>
            <h2>+998 78 120-77-29</h2>
          </div>
          <div className="block">
            <h1>Не нашли тур
подходящий Вам?</h1>
            <p>Мы с радостью составим для
Вас тур любой сложности. Вам лишь нужно связаться с нами
или заполните форму</p>
            <button>Форма заявки</button>
          </div>
          <div className="blockk">
            <h1>Популярные туры</h1>
            <div className="mini-block">
            Морские Круизы из
Узбекистана
            </div>
            <div className="mini-block-1">
            Всё лучшее в Минске
            </div>
            <div className="mini-block-2">
            Недвижимость в Алании из Ташкента
            </div>
            <div className="mini-block-3">КОКО ДЕ МЕР НА СЕЙШЕЛАХ

            </div>
            <div className="mini-block-4">
            «МОСКВА — ДЕНЬ ЗА ДНЕМ»
                        </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home