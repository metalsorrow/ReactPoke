import React, {useState} from 'react';
import classes from './App.module.css';
import Pokemon from './components/ListPokemon/Pokemon/Pokemon'
import {ListPokemon} from './components/ListPokemon/ListPokemon'

//TODO: Random Color pokemon
var randomColor 

function App() {
  const [pokemon, setPokemon] = useState(null);
  let renderPokemon;
  
  
  const searchPokemon = () => {
    randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    const search = document.getElementById("textSearch").value;
    let toFetch = "https://pokeapi.co/api/v2/pokemon/";
    if(search === ""){
      toFetch = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000";
    }else {
      toFetch += search;
      
    }
    
    fetch(toFetch)
    .then(res => res.json())
    .then((data)=> {
      setPokemon({data});
    })
    .catch(err => {
      console.log('error')
      setPokemon({err:`Pokemon ${search} doesn't exist.`})
    })
    
  }
  
  
  
  if(pokemon === null ){
    renderPokemon = <p>Pokemon App!</p>
  }else if (pokemon.err){
    renderPokemon = <p>{pokemon.err}</p>
  }else if(pokemon.data.results){
    renderPokemon = <ListPokemon pokemons={pokemon}/>
  }
  else{
    renderPokemon = <Pokemon style={{backgroundColor: randomColor}} name={pokemon.data.name} abilities = {pokemon.data.abilities} types={pokemon.data.types} imgURL={pokemon.data.sprites.front_default} />
  }
  



  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <div className={classes.AppHeader__title}>
          <h1>Find Your Pokemon!</h1>
        </div>
        <div className={classes.Nav}>
          <ul className={classes.Nav__list}>
            <li className={classes.Nav__item}>
              <a href="/" className={classes.Nav__link}>
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.search}>
          <label htmlFor="search">Search your Pokemon</label>
          <input id="textSearch" name="search" type="text" placeholder="Your Search..."/>
          <button onClick={searchPokemon}>Sneff""</button>
        </div>
      </header>
      
      <section className={classes.pokemonContainer}>
        {renderPokemon}
      </section>
    </div>
  );
}


export default App;
