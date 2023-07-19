import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import Pokeball from './assets/img/svg/pokeballwhite.svg'
import Search from './assets/img/svg/search.svg'
import Sort from './assets/img/svg/sort.svg'
import Individual from './components/individual'



function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    }; 
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0", requestOptions)
      .then((response) => response.json())
      .then((result) => setPokemons(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(pokemons);
  return (
    <div className='Estructura Primary'>

      <header className='buscador'>
        <div className='todo'>
          <div>
            <img src={Pokeball} alt="Logo"/>
            <h1>Pokédex</h1>
          </div>
          
          <button><img src={Sort}/></button>
        </div>
        <div className='search'>
          {/* <img src={Search}/> */}
          <input type="text" placeholder={`Buscar`}/>
        </div>
      </header>
      
      <div className='BodyWrapper'>
        {
        !!pokemons.length 
        && 
        pokemons.map((pokemon)=>
        <PokemonCard name={pokemon.name} url={pokemon.url} key={pokemon.name}/>)
        } 
      </div>

    </div>
  )
}

export default App;
