import React from 'react'
import contact_img from '../assets/tury-v-parizh-iz-tashkenta.jpg'
import contact_img1 from '../assets/ts-team.jpg'
import contact_img2 from '../assets/tur-v-egipet.jpg'
import contact_4_block_img from '../assets/DSC_7905.jpg'
import box_1 from '../assets/box-1.jpg'
import box_2 from '../assets/box-2.jpg'
import box_3 from '../assets/box-3.jpg'
import box_4 from '../assets/box-4.jpg'
import box__1 from '../assets/box__1.jpg'
import box__2 from '../assets/box__2.jpg'
import box__3 from '../assets/box__3.jpg'
import box__4 from '../assets/box__4.jpg'
import block_1 from '../assets/Marwin-Brands-green.png'
import block_2 from '../assets/block_2.png'
import block_3 from '../assets/block_3.png'
import block_4 from '../assets/block_4.png'
import block_5 from '../assets/block_5.png'
import block_6 from '../assets/block_6.png'
import block_7 from '../assets/block_7.png'
function Contact() {
  return (

    <div>

      <div className="contactBigImg">
        <div className="head">О компании</div>
      </div>
      <div className="contact-2-block">
        <p>TRAVELSYSTEM – компания, успешно осуществляющая туроператорскую и агентскую деятельность. <br />
          Компания обладает серьезной репутацией, с выдающимся прошлым и передовым будущим! На рынке Узбекистана с <br />
          2009г</p>
      </div>
      <div className="contact-3-all">
        <div className="contact-3-block">
          <div className="contact-3-block-img"><img src={contact_img} alt="" /></div>
          <div className="contact-3-block-text">
            <hr />
            <h1>
              Основные направления</h1>
            <p>В портфель основных направлений входят Чехия, Франция, Италия, Бенилюкс, <br />
              Австрия, Испания, Израиль, Германия, Турция,Таиланд,Египет, Вьетнам, <br />
              Мальдивы и другие страны (экскурсионные, лечебно-оздоровительные туры, <br />
              пляжный отдых, отдых на озерах и в горах, организация свадеб, MICE для <br />
              групп любого размера, событийные и паломнические туры)</p>
            <hr />
          </div>
        </div>




        <div className="contact-3-block">
          <div className="contact-3-block-text">
            <hr />
            <h1>
              Миссия
              TRAVELSYSTEM</h1>
            <p>Объединение усилий сотрудников всех департаментов для воплощения в <br />
              путешествиях лучших возможностей отдыха, развития личности, познания <br />
              исторических и культурных ценностей. Поэтому наши программы регулярно <br />
              пополняются еще не изведанными маршрутами. Приоритетом в нашей работе <br />
              были и остаются надежность туроператора, высокое качество продукта и <br />
              сервиса, а также простота и удобство в использовании современных <br />
              технологий бронирования.</p>
            <hr />
          </div>
          <div className="contact-3-block-img"><img src={contact_img1} alt="" /></div>
        </div>



        <div className="contact-3-block">
          <div className="contact-3-block-img"><img src={contact_img2} alt="" /></div>
          <div className="contact-3-block-text">
            <hr />
            <h1>
              Талисман
              TRAVELSYSTEM    </h1>
            <p>


              Приносящая удачу божья коровка, устремленная ввысь. И мы приглашаем <br />
              вместе с нами, вслед за ней, открывать мир и путешествовать с <br />
              удовольствием!</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="contact-4-all">
        <h1>Наша команда</h1>
        <div className="contact-4-blockk">
          <div className="contact-4-block">
            <div className="contact-4-block-img"><img src={contact_4_block_img} alt="" /></div>
            <div className="contact-4-block-text">Альбина Калимуллина</div>
            <div className="contact-4-block-tel">+998 93 183 60 70</div>
          </div>
          <div className="contact-4-block">
            <div className="contact-4-block-img"><img src={box_1} alt="" /></div>
            <div className="contact-4-block-text">Эля Хайрулина</div>
            <div className="contact-4-block-tel">+998 93 183 40 80</div>
          </div>
          <div className="contact-4-block">
            <div className="contact-4-block-img"><img src={box_2} alt="" /></div>
            <div className="contact-4-block-text">Ираида Тонких</div>
            <div className="contact-4-block-tel">+998 93 183 20 40</div>
          </div>
          <div className="contact-4-block">
            <div className="contact-4-block-img"><img src={box_3} alt="" /></div>
            <div className="contact-4-block-text">Вячеслав Каримов</div>
            <div className="contact-4-block-tel">+998 93 183 20 10</div>
          </div>
          <div className="contact-4-block">
            <div className="contact-4-block-img"><img src={box_4} alt="" /></div>
            <div className="contact-4-block-text">Альбина Калимуллина</div>
            <div className="contact-4-block-tel">+998 93 183 60 80 </div>
          </div>
        </div>

      </div>
      <div className="contact-5-all">
        <div className="contoct-5-block">
          <h1>ЗВЕЗДЫ РЕКОМЕНДУЮТ TRAVELSYSTEM</h1>
          <div className="contact-5-img-block-all">
            <div className="contact-5-img-block">
              <img src={box__1} alt="" />
            </div>
            <div className="contact-5-img-block">
              <img src={box__2} alt="" />
            </div>
            <div className="contact-5-img-block">
              <img src={box__3} alt="" />
            </div>
            <div className="contact-5-img-block">
              <img src={box__4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-6-all">
        <div className="contact-6-block">
          <h1>НАШИ КОРПОРАТИВНЫЕ КЛИЕНТЫ</h1>
          <hr />
          <div className="contact-block-6">
            <button> <div className="imgg"><img src={block_1} alt="" /></div></button>
            <button><div className="imgg"><img src={block_2} alt="" /></div></button>
            <button><div className="imgg"><img src={block_3} alt="" /></div></button>
            <button><div className="imgg"><img src={block_4} alt="" /></div></button>
            <button><div className="imgg"><img src={block_5} alt="" /></div></button>
            <button><div className="imgg"><img src={block_6} alt="" /></div></button>
            <button><div className="imgg"><img src={block_7} alt="" /></div></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact