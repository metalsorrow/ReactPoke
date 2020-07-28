import React from 'react'

import './pokemon.styles.scss';
import Types from '../PokemonTypes/PokemonTypes';

const pokemon = ({types,sprites, name }) => (

    <div className="pokemon">
        <div className="pokemon-img">
            <img src={`${sprites.front_default}`} alt="pokemon_img"/>
        </div>

        <div className="pokemon-description">
            <p>nombre: {name}</p>
        </div>

        <Types arrayTypes = {types} />

    </div>
)

export default pokemon;