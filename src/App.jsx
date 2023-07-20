import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import Pokeball from './assets/img/svg/pokeballwhite.svg'
import Search from './assets/img/svg/search.svg'
import Sort from './assets/img/svg/sort.svg'
import Individual from './components/individual'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [sortedPokemons, setSortedPokemons] = useState([]) // Estado para almacenar la lista de pokemons ordenados
  const [sortAscending, setSortAscending] = useState(true) // Estado para controlar el orden ascendente o descendente
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0", requestOptions)
      .then(response => response.json())
      .then(result => {
        setPokemons(result.results)
        setSortedPokemons(result.results) // Inicialmente, establecemos la lista de pokemons ordenada como la lista original
      })
      .catch(error => console.log('error', error));  
  }, [])

  
  // console.log(pokemons)
  

  const handleSort = () => {
    console.log(sortedPokemons);
    const sorted = [...pokemons] // Creamos una copia de la lista de pokemons ordenados


    if (sortAscending) {
      sorted.sort((a, b) => a.name.localeCompare(b.name)) // Ordenamos alfabéticamente en orden ascendente
    } else {
      // sorted.sort((a, b) => b.name.localeCompare(a.name)); // Ordenamos alfabéticamente en orden descendente
      sorted.sort((a, b) => {
          const idA = a.url.split("/")[a.url.split("/").length - 2]; // Obtener el ID de a
          const idB = b.url.split("/")[b.url.split("/").length - 2]; // Obtener el ID de b
          return idA - idB; // Ordenamos numéricamente en orden ascendente por ID
      })
    }

    const filtered = sorted.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); // Filtramos por el término de búsqueda, ignorando mayúsculas y minúsculas

    setSortedPokemons(filtered) // Actualizamos la lista de pokemons ordenados
    setSortAscending(!sortAscending) // Cambiamos el estado del orden ascendente/descendente
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='Estructura Primary'>
      <header className='buscador'>
        <div className='todo'>
          
          <div>
            <img src={Pokeball} alt="Logo"/>
            <h1>Pokédex</h1>
          </div>
          
          <button onClick={handleSort}>
            <img src={Sort} alt="" />
          </button>

        </div>

        <div className='search' >

          <button onClick={handleSort}>
            <img src={Search}/> 
          </button>
          
          <input type="text" 
          placeholder={`Buscar`}
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleSort}/>
          
        </div>

      </header>
      
      <div className='BodyWrapper'>
        { !!sortedPokemons.length && sortedPokemons.map((pokemon) => (
          <PokemonCard name={pokemon.name} url={pokemon.url} key={pokemon.name} />
        ))}

      </div>
    </div>
  )
}

export default App



