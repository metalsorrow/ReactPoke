import React from 'react'
import { Switch, Route } from "react-router-dom";
import './App.styles.scss'

import Home from './containers/home/home.component'
import HeadMenu from "./components/head-menu/HeadMenu.component";
import Footer from "./components/footer/footer.component";
import PokeDex from "./containers/PockeDex/PokeDex.component"
import Nintendo from "./containers/nintendo/nintendo.component"

class App extends React.Component {
  constructor(){
    super()
    this.state = { ok: true}
  }

  render(){
    return(
        <div className="page-container">
          <div className="content-wrap">
            <HeadMenu/>
            <Switch >
              <Route path="/" exact component={Home}/>
              <Route path="/pokedex" component={PokeDex}/>
              <Route path="/nintendo" component={Nintendo}/>
            </Switch>

          </div>
          <Footer/>
        </div>

    )
  }
}

export default App;