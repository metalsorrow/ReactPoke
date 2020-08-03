import React from "react";
import { Carousel } from "react-responsive-carousel";

import "./home.styles.scss";
import "./../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => (
  <div className="container">
    <div className="intro">
      <h1>PokeReact</h1>
      <p>
        Welcome to PokeReact! this application is like a pokedex with
        information about the diferents kind of pokemons and theire stadistic in
        a grafic form. For other hand, we have information about diferents
        themes of nintendos, consoles and more!
      </p>
    </div>
    <div className="about">
      <h2>About Us</h2>
      <p>
        This project have the mission to practice react, react-router, sass and
        responsive Design, all in one project. In the grafic area, we use
        chart.js to integrate in a clear way the stats of pokemons and consuming
        the API from pokeapi.
      </p>
    </div>
    <Carousel className="carousel">
      <div>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="charmander" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
          <img src="https://vignette.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest/scale-to-width-down/340?cb=20150721225336&path-prefix=es" alt="bulbasour"/>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  </div>
);

export default Home;
