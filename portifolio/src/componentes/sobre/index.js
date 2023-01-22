import { FaRegUserCircle, FaUniversity, FaTv, FaSearch, FaMouse } from "react-icons/fa";
import Typical from 'react-typical';
import desenho from '../../assets/avatarNot.png'
import './sobre.scss'
import 'animate.css';

function animarAvatar() {
    const element = document.querySelector('.avatar');
    element.style.setProperty('--animate-duration', '0.5s');
    element.classList.add('animate__animated','animate__bounce', 'animate__slower	5s ,animate__infinite	infinite');
}

function Sobre (){
    return (
     <div className='sobre'>
        <Typical 
                steps={['Sobre mim...', 1000, 'Sobre mim', 1000]}
                loop={Infinity}
                wrapper="h1"
                className="titulo destaquePrimeiraLetra"
              />
         <div className="sobreBlocos">
            <div>
                <p className="texto paragrafoSobre textoNegrito"><FaRegUserCircle color="#00d2df" /> Meu nome é Bruno Moreira e adoro solucionar problemas através de códigos.</p>
                <p className="texto paragrafoSobre textoNegrito"><FaUniversity color="#00d2df"/> Atualmente, curso bacharelado em Sistemas de Informação na Universidade Federal de Pernambuco(UFPE).</p>
                <p className="texto paragrafoSobre textoNegrito"><FaTv color="#00d2df"/> Meu foco é poder ajudar a melhorar a vida das pessoas, por meio do desenvolvimento aplicações que sejam acessíveis e funcionais.</p>
                <p className="texto paragrafoSobre textoNegrito"><FaMouse color="#00d2df"/> Sou desenvolvedor front-end, estudando tecnologias back-end visando ser um desenvolvedor full-stack e com muito conhecimento em análise de dados, data science e machine learning.</p>
            </div>
            <img src={desenho} alt='Avatar' className="avatar ocultaMobile" onClick={animarAvatar}/>
            <a href='https://.pngtree.com/so/Boy'>.</a>
         </div>
     </div>
         )
 }
 
 export default Sobre;
