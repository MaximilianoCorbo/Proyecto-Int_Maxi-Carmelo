import { useEffect, useState } from "react";
import "./individual.css";
import flechaAtras from "../assets/img/svg/arrow_back.svg";
import anterior from "../assets/img/svg/chevron_left.svg";
import posterior from "../assets/img/svg/chevron_right.svg";
import sombra from "../assets/img/pokemons/Sombra.png";
import pesa from "../assets/img/svg/weight.svg";
import regla from "../assets/img/svg/straighten.svg";
import pokebola from "../assets/img/svg/pokeball.svg";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Individual = () => {
  const [data, setData] = useState();
  let { id } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const fetching = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, requestOptions)
        .then((response) => response.json())
        // .then (result =>
        //   setData(result))
        //(async(result) => {
      //   const species= await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      //   const respuesta= species.json()
      //   console.log(respuesta);
      //   return {
      //     ...result, descripcion: respuesta
      //   }
      // })
      .catch((error) => console.log("error", error));
      const species= await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((response) => response.json())
      setData ({...fetching, descripcion:species.flavor_text_entries[26].flavor_text})
    };
    getPokemon ()
  }, []);
  console.log(data);
  return (
    <div className={`${data?.types[0].type.name} detalles`}>
      <div className="titulo">
        <button className="flecha-atras">
          <img src={flechaAtras} alt="" />
        </button>
        <span className="nombre">{data ? data.name : <Skeleton />}</span>
        <span className="numero">{data ? `# ${data.id}` : <Skeleton count={3} />}</span>
      </div>
      <header>
        <button className="anterior">
          <img src={anterior} alt="" />
        </button>
        <div className="Imagen">
          {<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`} alt="" />}
        </div>
        <button className="posterior">
          <img src={posterior} alt="" />
        </button>
      </header>
      <div className="tarjeta">
        <div className="fichas">
          {data?.types.map(
            type => <div className={`fichaTipo ${type.type.name}`}> {type.type.name}</div>
          )
          }
        </div>
        <div className="tipo"></div>
        <div className="acerca">
          <span className={`sobre`}>About</span>
        </div>
        <div className="atributos">
          <div className="peso">
            <div className="detallesPeso">
              <img className="pesasvg" src={pesa} alt="" />
              <span className="kilos">
                {data ? `${data.weight / 10} KG` : <Skeleton />}
              </span>
            </div>
            <span className="totalPeso">Weight</span>
          </div>
          <div className="divider"></div>
          <div className="altura">
            <div className="detalleAltura">
              <img className="reglasvg" src={regla} alt="" />
              <span className="metros">
                {data ? `${data.height / 10} m` : <Skeleton />}
              </span>
            </div>
            <span className="totalAltura">Height</span>
          </div>
          <div className="divider"></div>
          <div className="movimientos">
            <div className="tipoMovimientos">
              {data?.abilities.map(
                ability => 
                <span className="tipoMovimientos">
                {ability.ability.name} 
                </span>
              )}
             
            </div>
            
                  
            
            <span className="totalMovimientos">Moves</span>
          </div>
        </div>
        <div className="describe">
          <p className="descripcion">
            {data?data.descripcion : <Skeleton/>}
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
            <span className="numeroValores">{data?.stats[0].base_stat}</span>
            <span className="numeroValores">{data?.stats[1].base_stat}</span>
            <span className="numeroValores">{data?.stats[2].base_stat}</span>
            <span className="numeroValores">{data?.stats[3].base_stat}</span>
            <span className="numeroValores">{data?.stats[4].base_stat}</span>
            <span className="numeroValores">{data?.stats[5].base_stat}</span>
          </div>
          <div className="barras">

            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores" style={{width:`${data?.stats[0].base_stat}%`}}></div>
                <div className="fondoValores" ></div>
              </div>
            </div>

            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores" style={{width:`${data?.stats[1].base_stat}%`}}></div>
                <div className="fondoValores" ></div>
              </div>
            </div>

            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores" style={{width:`${data?.stats[2].base_stat}%`}}></div>
                <div className="fondoValores"></div>
              </div>
            </div>

            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores" style={{width:`${data?.stats[3].base_stat}%`}}></div>
                <div className="fondoValores"></div>
              </div>
            </div>

            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores" style={{width:`${data?.stats[4].base_stat}%`}}></div>
                <div className="fondoValores"></div>
              </div>
            </div>

            <div className="barraValores">
              <div className="marcaValores">
                <div className="contenidoValores" style={{width:`${data?.stats[5].base_stat}%`}}></div>
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
