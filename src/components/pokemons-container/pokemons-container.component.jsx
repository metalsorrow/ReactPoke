import React from 'react'

import './pokemon-container.styles.scss';
import Pokemon from '../pokemon/pokemon.component'

const PokemonContainer = ({pokemons}) => {
    let pokemonsRendered = pokemons.map( (pokemon) => (
        <Pokemon key ={pokemon.id} {...pokemon}/>
    ))    
    
    return(
        <div className="pokemons-grid">
            {pokemonsRendered}
        </div>
    )
}

export default PokemonContainer;

