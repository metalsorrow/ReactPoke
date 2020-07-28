import React from 'react'

import './pokemon-container.styles.scss';
import Pokemon from '../pokemon/pokemon.component'

const PokemonContainer = ({pokemons}) => {
    let pokemonsRendered = pokemons.map( (pokemon, id) => (
        <Pokemon key = {id} types = {pokemon.types} name = {pokemon.name} sprites = {pokemon.sprites}/>
    ))    
    
    return(
        <div className="pokemons-grid">
            {pokemonsRendered}
        </div>
    )
}

export default PokemonContainer;

