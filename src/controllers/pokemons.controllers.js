class PokemonTool{
    
    
    async fetchPokemons (){
        const pokemons = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json();
        const getData = async () => 
            Promise.all( pokemons.results.map( async pokemon => {
                    return await (await fetch(`${pokemon.url}`)).json();
            }))     
        return getData();   
    }
            
    async getPokemon (id){
        // return fetch('https://pokeapi.co/api/v2/pokemon/'+id)
        //     .then( (data) => data.json())
        //     .then( (pokemon) => pokemon)
        //     .catch( err => 
        //         console.log(err)    
        //     )
        return await(await fetch('https://pokeapi.co/api/v2/pokemon/'+id)).json()
    }
    
}

export default PokemonTool;
