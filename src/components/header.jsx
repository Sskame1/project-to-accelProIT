import '../css/header.css'

import {  Link  } from 'react-router-dom'
import Logo from '../img/Logo.svg'
import Whatsapp from '../img/whatsapp.svg'
import Telegram from '../img/Telegram.svg'

const Header = () => {
    return (
        <>
            <div id="Header">
                <div id='Logo'>
                    <img src={Logo}/>
                    <h1>Improve IT</h1>
                </div>
                <div id='nav-header'>
                    <div id='social'>
                        <img src={Whatsapp}/>
                        <img src={Telegram}/>
                    </div>
                    <div id='phone'>+88005553535</div>
                    <div id='nav'>
                        <Link >Курсы</Link>
                        <Link >О нас</Link>
                        <Link >Личный кабинет</Link>
                        <Link >Вход/Регистрация</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export {  Header  }