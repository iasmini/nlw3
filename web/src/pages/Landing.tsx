import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoImg from '../images/logo.svg'
import '../styles/pages/landing.css'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy"/>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças</p>
                </main>
                <div className="location">
                    <strong>Belo Horizonte</strong>
                    <span>Minas Gerais</span>
                </div>
                {/* ao inves de usar anchor tag usa o Link pra nao recarregar toda a pagina (tipo ajax)
                    e o Link exige a propriedade to ao inves de href */}
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
                </Link>
            </div>
        </div>
    );
}

export default Landing;