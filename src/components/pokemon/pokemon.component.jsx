import React from 'react'

import './pokemon.styles.scss';
import Types from '../PokemonTypes/PokemonTypes';

const pokemon = ({types, sprites, name, id }) => (

    <div className="pokemon">
        <div className="pokemon-img">
            <img src={`${sprites.front_default}`} alt="pokemon_img"/>
        </div>

        <div className="pokemon-description">
            <span className="pokemon-id">{`N° - ${id}`}</span>
            <h3>{name}</h3>
            <Types arrayTypes = {types} />
        </div>

    </div>
)

export default pokemon;