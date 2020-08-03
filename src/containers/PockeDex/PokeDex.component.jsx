import React from 'react'

import './PokeDex.styles.scss'

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
        const pokemons = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json();
        
        const getData = async () => 
            Promise.all( pokemons.results.map( async pokemon => {
                    return await (await fetch(`${pokemon.url}`)).json();
            }))

        getData()
            .then( pokemonsDetails => {
                this.setState({pokemons: pokemonsDetails})
                console.log(pokemonsDetails)
            })
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