import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import logoImg from './images/logo.svg';
import {FiArrowRight} from 'react-icons/fi';

function App() {
  return (
    <div id="landing-page">
      <div className="content-wrapper">
        <img src={logoImg} alt="" className="logo"/>
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
        <div className="location">
          <strong>Sofala</strong>
          <span>Cidade da Beira</span>
        </div>
        <a href="" className="enter-app">
          <FiArrowRight size={24} color='rgba(0,0,0,0.6)'/>
          
        </a>
      </div>
    </div>
  );
}

export default App;