import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from '../../assets/pokemon_logo.svg'

import "./HeadMenu.styles.scss";

const HeadMenu = () => (

    <div className="page-menu">
      <div className="container">
        <div className="img-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
            alt=""
          />
        </div>
        <ul className="menu-items">
          <li className="menu-item">
            <Link className="link" to="/">
            <div className="icon-container">
              <img className="icon" src="https://image.flaticon.com/icons/svg/188/188935.svg" alt="homeIcon"/>
            </div>

              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link className="link" to="/pokedex">
              <div className="icon-container">
                <img className="icon" src="https://image.flaticon.com/icons/svg/188/188987.svg" alt="pikaIcon"/>
              </div>
              PokeDex
            </Link>
          </li>
          <li className="menu-item">
            <Link className="link" to="/nintendo">
              <div className="icon-container">
                <img className="icon" src="https://image.flaticon.com/icons/svg/871/871380.svg" alt="nintendo"/>
              </div>
              Nintendo
            </Link>
          </li>
        </ul>
      </div>
    </div>
);

export default HeadMenu;
