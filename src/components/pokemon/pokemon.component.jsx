import React from 'react'

import './pokemon.styles.scss';
import Types from '../PokemonTypes/PokemonTypes';
import {withRouter} from 'react-router-dom';

const pokemon = ({types, sprites, name, id, history }) => (

    <div className="pokemon">
        <div className="pokemon-img" onClick={()=> history.push(`/pokedex/${id}`)}>
            <img src={`${sprites.front_default}`} alt="pokemon_img"/>
        </div>

        <div className="pokemon-description">
            <span className="pokemon-id">{`N° - ${id}`}</span>
            <h3>{name}</h3>
            <Types arrayTypes = {types} />
        </div>

    </div>
)

export default withRouter(pokemon);