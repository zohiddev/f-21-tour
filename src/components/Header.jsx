import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Travel-system-TM-2.png'
import tel from '../assets/tel.svg'

export default function Header() {
    return (
        <div className="Header">
            <div className="conteainerHeader">

                <div className="Img">
                    < NavLink to="/" ><img src={logo} alt="" /></ NavLink>
                </div>
                < NavLink to="/">ГЛАВНАЯ</ NavLink>
                < NavLink to="/Home"> ВСЕ ТУРЫ</ NavLink>
                < NavLink to="/Contact" >О НАС</ NavLink>
                <button className='img-tell'>
                    <div className="img-tel">
                        <img src={tel} alt="" />
                        <p>+(998) 78 120-77-22</p>
                    </div>
                    <div className="text">
                        <p>ЗАКАЗАТЬ ЗВОНОК?</p>
                    </div>
                </button>
                <select>
                    <option>
                        UZ
                    </option>
                </select>
            </div>
        </div>

    )
}

