import React from 'react'
import PokemonTool from '../../controllers/pokemons.controllers';

class PokemonDetails extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            id: props.match.params.id,
            pokemonData : null
        } 
    }

    async componentDidMount(){
        const pokemonTool = new PokemonTool();
        this.setState({pokemonData: await pokemonTool.getPokemon(this.state.id)});
        console.log(this.state.pokemonData)
    }

    render(){
        const {pokemonData} = this.state
        let render  = 'loading . . . '

        if(pokemonData){
            let abilitiesRender = this.state.pokemonData.abilities.map( ({ability}, key) => <p key>{ability.name}</p>)
            
            render = 
                (<div className="info">
                    <h1>{this.state.pokemonData.name}</h1>
                    <h2>Abilities: </h2>
                    {abilitiesRender}
                </div>)
        }
        

        return(
            <div className="container">
                {render}
            </div>
        )
    }

}

export default PokemonDetails;