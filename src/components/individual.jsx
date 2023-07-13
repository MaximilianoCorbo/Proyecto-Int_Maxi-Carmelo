import { useEffect, useState } from "react";
import "./individual.css";
import flechaAtras from "../assets/img/svg/arrow_back.svg";
import anterior from "../assets/img/svg/chevron_left.svg";
import posterior from "../assets/img/svg/chevron_right.svg";
import sombra from "../assets/img/pokemons/Sombra.png";

import pokebola from "../assets/img/svg/pokeball.svg";

return (
  <div className="detalles">
    <div className="titulo">
      <button className="flecha-atras">
        <img src={flechaAtras} alt="" />
      </button>
      <span className="nombre"></span>
      <span className="numero"></span>
    </div>
    <header>
      <button className="anterior">
        <img src={anterior} alt="" />
      </button>
      <button className="posterior">
        <img src={posterior} alt="" />
      </button>
      <div>
        <img src={sombra} alt="" />
      </div>
    </header>
    <div className="tarjeta">
      <div className="tipo">
        <div className="acerca">About</div>
      </div>
      <div className="atributos">
        <p className="descripcion"></p>
        <span className="base">Base Stats</span>
      </div>      
      <div className="estadisticas">
        <div className="etiqueta">
            <span>HP</span>
            <span>ATK</span>
            <span>DEF</span>
            <span>SATK</span>
            <span>SDEF</span>
            <span>SPD</span>
        </div>
        {/* divider */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
      </div>
    </div>
    <img src={pokebola} alt="" />
  </div>
);

export default individual;
