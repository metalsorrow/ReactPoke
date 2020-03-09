import React from 'react'
import classes from './Pokemon.module.css'
import PokemonTypes from './PokemonTypes/PokemonTypes'


const Pokemon = (props) => {

    let abilities = props.abilities.map((abilityMap, index) => {
        return(
            <li key={index} >
                <p> {abilityMap.ability.name}</p> 
            </li> 
        );
    });

    return (
        <div className={classes.Pokemon} >
            <img src={props.imgURL} alt="Pokemon Img"/>

            <div className={classes.Description}>
                <h2>{props.name}</h2>
                <h4>Abilities</h4>
                <ul className={classes.Abilities}>
                    {abilities}
                </ul>
                <div>
                    <PokemonTypes arrayTypes = {props.types}/>                    
                </div>
            </div>
        </div>
    )
}

export default Pokemon;
