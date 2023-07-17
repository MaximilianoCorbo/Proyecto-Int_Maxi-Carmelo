import { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://pokeapi.co/api/v2/pokemon/", requestOptions)
      .then((response) => response.json())
      .then((result) => setPokemons(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(pokemons);
  return (
    <>
      {pokemons.length &&
        pokemons.map((pokemon) => (
          <PokemonCard name={pokemon.name} url={pokemon.url} />
        ))}
    </>
  );
}

export default App;
