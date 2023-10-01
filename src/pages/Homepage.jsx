import { Header } from "../components/header"

import Icon1 from '../img/1.svg'
import Icon2 from '../img/2.svg'
import Icon3 from '../img/3.svg'
import Icon4 from '../img/4.svg'
import Icon5 from '../img/5.svg'
import Img from '../img/image.png'
import Img1 from '../img/image1.png'
import gamecontrol from '../img/gamecontroller.svg'
const text = "[</>]"

const Homepage = () => {
    return (
        <>
        <Header />
        <div id="main">
            <div id="text-main"> 
            Онлайн-практика<br />
            <span>программирования в <br />игровой форме</span>
            </div>
            <div id="main-btn"><button>Начать играть</button></div>
            <div id="icons">
                {/* <img id="icon1" src={Icon1} />
                <img id="icon2" src={Icon2} />
                <img id="icon3" src={Icon3} />
                <img id="icon4" src={Icon4} />
                <img id="icon5" src={Icon5} /> */}
                <img src={Img} />
            </div>
        </div>
        <div id="skills">
            <div id="textSkill">
                <h1><span>Развиваем навыки</span> <br />для школы и карьеры</h1>
            </div>
            <div id="skilldiv">
                <div id="skill1">
                    <div id="logo">
                        <span><h1>{text}</h1></span>
                    </div>
                    <div id="title">
                        <h1>IT и Кодинг</h1>
                    </div>
                    <div id="desc">
                        <h1>Даём актуальные цифровые навыки</h1>
                    </div>
                    <div id="lang">
                        <div id="python">python</div>
                        <div id="java">java</div>
                        <div id="ruby">ruby</div>
                        <div id="c">C</div>
                    </div>
                </div>
                <div id="Line">-----</div>
                <div id="skill2">
                    <div id="logo">
                        <img src={gamecontrol} />
                    </div>
                    <div id="title">
                        <h1>IT и Кодинг</h1>
                    </div>
                    <div id="desc">
                        <h1>Даём актуальные цифровые навыки</h1>
                    </div>
                    <div id="lang">
                        <div id="dungeon">Подземелья</div>
                        <div id="snake">Змейка</div>
                    </div>
                </div>
            </div>
            <div id="coursesdiv">
                <div id="titlecourses">
                    <span><h1>Онлайн-курсы</h1></span>
                </div>
                <div id="desccourses">
                   <h1>Создаем персональный трек развития <br />ребенка на основе линейки курсов-модулей</h1>
                </div>
                
            </div>
        </div>
        </>
    )
}

export {  Homepage  }