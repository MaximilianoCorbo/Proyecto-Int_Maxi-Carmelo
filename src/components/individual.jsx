import { useEffect, useState } from "react";
import "./individual.css";
import flechaAtras from "../assets/img/svg/arrow_back.svg";
import anterior from "../assets/img/svg/chevron_left.svg";
import posterior from "../assets/img/svg/chevron_right.svg";
import sombra from "../assets/img/pokemons/Sombra.png";
import pesa from "../assets/img/svg/weight.svg";
import regla from "../assets/img/svg/straighten.svg";
import pokebola from "../assets/img/svg/pokeball.svg";

const Individual = () => {
  return (
    <div className="detalles">
      <div className="titulo">
        <button className="flecha-atras">
          <img src={flechaAtras} alt="" />
        </button>
        <span className="nombre">Pokémon Name</span>
        <span className="numero">#999</span>
      </div>
      <header>
        <button className="anterior">
          <img src={anterior} alt="" />
        </button>
        <div className="sombraImagen">
          <img src={sombra} alt="" />
        </div>
        <button className="posterior">
          <img src={posterior} alt="" />
        </button>
      </header>
      <div className="tarjeta">
        <div className="fichas">
          <div className="fichaTipo">Type</div>
          <div className="fichaTipo">Type</div>
        </div>
        <div className="tipo"></div>
        <div className="acerca">
          <span className="sobre">About</span>
        </div>
        <div className="atributos">
          <div className="peso">
            <div className="detallesPeso">
              <img className="pesasvg" src={pesa} alt="" />
              <span className="kilos">9,9 Kg</span>
            </div>
            <span className="totalPeso">Weight</span>
          </div>
          <div className="divider"></div>
          <div className="altura">
            <div className="detalleAltura">
              <img className="reglasvg" src={regla} alt="" />
              <span className="metros">9,9 m</span>
            </div>
            <span className="totalAltura">Height</span>
          </div>
          <div className="divider"></div>
          <div className="movimientos">
            <div className="tipoMovimientos"></div>
            <span className="tipoMovimientos1">Ability 1</span>
            <span className="tipoMovimientos2">Ability 2</span>
            <span className="totalMovimientos">Moves</span>
          </div>
        </div>
        <div className="describe">
          <p className="descripcion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            enim recusandae nemo dolorem accusamus, dolor, quod ad in qui minima
            maiores atque, veritatis dolore quae ea excepturi ut obcaecati
            laborum.
          </p>
        </div>
        <div className="baseEstadisticas">
          <span className="base">Base Stats</span>
        </div>
        <div className="estadisticas">
          <div className="etiqueta">
            <span className="nombreValores">HP</span>
            <span className="nombreValores">ATK</span>
            <span className="nombreValores">DEF</span>
            <span className="nombreValores">SATK</span>
            <span className="nombreValores">SDEF</span>
            <span className="nombreValores">SPD</span>
          </div>
          <div className="divider"></div>
          <div className="numerosEstadisticas">
            <span className="numeroValores">999</span>
            <span className="numeroValores">999</span>
            <span className="numeroValores">999</span>
            <span className="numeroValores">999</span>
            <span className="numeroValores">999</span>
            <span className="numeroValores">999</span>
          </div>
          <div className="barras">
            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores"></div>
                <div className="fondoValores"></div>
              </div>
            </div>
            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores"></div>
                <div className="fondoValores"></div>
              </div>
            </div>
            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores"></div>
                <div className="fondoValores"></div>
              </div>
            </div>
            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores"></div>
                <div className="fondoValores"></div>
              </div>
            </div>
            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores"></div>
                <div className="fondoValores"></div>
              </div>
            </div>
            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores"></div>
                <div className="fondoValores"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="pokebola" src={pokebola} alt="" />
    </div>
  );
};
export default Individual;
