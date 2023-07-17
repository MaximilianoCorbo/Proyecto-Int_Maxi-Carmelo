import { useEffect, useState } from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name, url }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(data);

  return(
    data ? (
            <section className={`${data.types[0].type.name} seccion`}>
                <div className="top-section">
                    <h2>#{data.id}</h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt="" />
                    {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`} alt="" /> */}  
                </div>

                <div className="bottom-section">
                    <h2>{data.name}</h2>
                </div>
            </section>
            
            ) : (
            <h1> Loading {name} </h1>
            )
)
}

export default PokemonCard;