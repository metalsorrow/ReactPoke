import React from 'react'
import  './PokemonType.styles.scss'

const PokemonType = ({clickedFunction, type}) => (
    <div className= 'PokemonType' onClick={clickedFunction}>
        <p>
            {type}
        </p>
    </div>
)

export default PokemonType
