import React from 'react'
import classes  from './ListPokemon.module.css'

export const ListPokemon = (props) => {
    let renderListPokemon = props.pokemons.data.results.map( (poke, index) => {
        return (
          <tr>
            <td>
              <p>{index}</p>
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
