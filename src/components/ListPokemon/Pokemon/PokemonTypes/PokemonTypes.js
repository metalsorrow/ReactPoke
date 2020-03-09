import React from 'react'
import PokemonType from './PokemonType.js/PokemonType'
import classes from './PokemonTypes.module.css'

const PokemonTypes = (props) => {

    let Types = props.arrayTypes.map((typeMap,index) => 
        <PokemonType key={index} type={typeMap.type.name}/>
    );

    return (
        <div className={ classes.PokemonTypes }>
            {Types}
        </div>
    )
}

export default PokemonTypes
