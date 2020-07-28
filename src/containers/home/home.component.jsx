import React from 'react'

import "./home.styles.scss"

const Home = () => (
    <div className="container">
        <div className="intro">
            <h1>PokeReact</h1>
            <p>Welcome to PokeReact! this application is like a pokedex with information about the diferents kind of pokemons and there stadistic in a grafic form. For other hand, we have information about diferents themes of nintendos, consoles and more!</p>
        </div>
        <div className="about">
            <h2>About</h2>
            <p>This project have the mission to practice react, react-router, sass and responsive device, all in one project. In the grafic area, we use chart.js to integrate in a clear way and consuming the API from pokeapi.</p>
        </div>
        <div className="carousel">
            <div className="pokemon">
                
            </div>
            <div className="pokemon">

            </div>
            <div className="pokemon">

            </div>
        </div>
    
    </div>
)

export default Home;