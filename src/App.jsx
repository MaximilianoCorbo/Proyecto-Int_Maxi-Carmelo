import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import Pokeball from './assets/img/svg/pokeballwhite.svg'
import Search from './assets/img/svg/search.svg'
import Sort from './assets/img/svg/sort.svg'



function App() {
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    //Para todos lo pokemons usar en el fetch el link: https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
    fetch("https://pokeapi.co/api/v2/pokemon/", requestOptions)
      .then(response => response.json())
      .then(result => setPokemons(result.results))
      .catch(error => console.log('error', error));  
  }, [])
  
  return (
    <div className='Estructura .Primary'>

      <header className='buscador'>
        <div className='todo'>
          <div>
            <img src={Pokeball} alt="Logo"/>
            <h1>Pokédex</h1>
          </div>
          
          <button><img src={Sort} alt="" srcset="" /></button>
        </div>
        <div className='search'>
          <img src={Search}/>
          <input type="text" placeholder={`Buscar`}/>
        </div>
      </header>
      
      <div className='BodyWrapper'>
        {
        pokemons.length 
        && 
        pokemons.map((pokemon)=>
        <PokemonCard name={pokemon.name} url={pokemon.url}/>)
        }
      </div>

    </div>
  )
}

export default App
