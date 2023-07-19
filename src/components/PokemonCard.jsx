import { useEffect, useState } from "react";
import "./PokemonCard.css";
import { useNavigate, useParams } from "react-router-dom";
import Individual from "./individual";
import Skeleton from "react-loading-skeleton";

const PokemonCard = ({url}) => {
  const [data, setData] = useState();
  const navigate = useNavigate();

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

  return data ? (
    <section
      className={`${data.types[0].type.name} seccion`}
      onClick={() => {
        navigate(`/pokemons/${data.id}`);
      }}
    >
      <div className="top-section">
        <h2>#{data.id}</h2>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          alt=""
        />
      </div>

      <div className="bottom-section">
        <h2>{data.name}</h2>
      </div>
    </section>
  ) : (
    <Skeleton/>
  );
};

export default PokemonCard;
