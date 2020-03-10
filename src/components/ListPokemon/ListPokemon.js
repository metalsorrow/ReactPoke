import React from 'react'
import classes  from './ListPokemon.module.css'

export const ListPokemon = (props) => {
    let renderListPokemon = props.pokemons.data.results.map( (poke, index) => {
        return (
          <tr>
            <td>
<<<<<<< HEAD
              <p>{index + 1}</p>
=======
              <p>{index}</p>
>>>>>>> d98ad471faadb71fe96f355a958796ad3b39c163
            </td>
  
            <td>
              <a href = {poke.url}>
                {poke.name}
              </a>
            </td>
          </tr>
        );
      })
  
      return(
        <div className={classes.tableContainer}>
            <table className={classes.table}>
            <tr> 
                <th>Id:</th>
                <th>Pokemon:</th>
            </tr>
            {renderListPokemon}
            </table>
        </div>
      )
}
