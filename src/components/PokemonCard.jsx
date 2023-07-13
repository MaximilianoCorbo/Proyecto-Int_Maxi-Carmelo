import { useEffect, useState } from 'react';
import './PokemonCard.css'


const PokemonCard = ({name, url})=> {
    const [data, setData] = useState()
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error', error));  
  }, [])
  console.log(data)

    return(
        data ? (<section className={data.types[0].type.name}>
            <div className="top-section">
                <h1>{data.name}</h1>
            </div>
            <div className="bottom-section">
                <h2>{data.name}</h2>
            </div>
        </section>) : <h1> Loading {name} </h1>
    )
}

export default PokemonCard;