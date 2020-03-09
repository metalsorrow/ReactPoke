import React from 'react'
import classes from './PokemonType.module.css'

const PokemonType = (props) => {
    return (
        <div className={classes.PokemonType} onClick={props.clickedFunction}>
            {props.type}
        </div>
    )
}

export default PokemonType
