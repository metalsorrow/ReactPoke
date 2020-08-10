import React from 'react'

import './PokeDex.styles.scss'
import PokemonTool  from '../../controllers/pokemons.controllers';
import PokemonContainer from '../../components/pokemons-container/pokemons-container.component';

class PokeDex extends React.Component {
    constructor(){
        super();

        this.state = {
            pokemons: [],
            error: ''
        }
        
    }

    async componentDidMount(){
        const pokemonTool = new PokemonTool();
        this.setState({pokemons :  await pokemonTool.fetchPokemons()})
    }

    
    render(){
        const {pokemons} = this.state;
        let pokemonsComponent = 'Loading . . .';

        if(pokemons){
            pokemonsComponent = <PokemonContainer pokemons = {pokemons}/>
        }

        return(
            <div>
                <h1>PokeDex</h1>
                
                {pokemonsComponent}
            </div>
        )
    }

}

export default PokeDex;