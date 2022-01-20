import React, { useEffect, useState } from 'react';

const PokeList = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);
 
    return (
        <div>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<ul><li key={index}>{pokemon.name}</li></ul>)
            })}
        </div>
    );
}
export default PokeList;

