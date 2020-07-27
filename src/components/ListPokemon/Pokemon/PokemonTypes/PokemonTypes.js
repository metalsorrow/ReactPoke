import React from 'react'
import PokemonType from './PokemonType.js/PokemonType'
import'./PokemonTypes.styles.css'

const PokemonTypes = ({arrayTypes}) => {

    let Types = arrayTypes.map((typeMap,index) => 
        <PokemonType key={index} type={typeMap.type.name}/>
    );

    return (
        <div className= 'container-types'>
            {Types}
        </div>
    )
}

export default PokemonTypes
