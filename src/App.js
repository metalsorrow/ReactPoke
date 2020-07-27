import React from 'react'
import HeadMenu from "./components/head-menu/HeadMenu.component";
import Footer from "./components/footer/footer.component";

class App extends React.Component {
  constructor(){
    super()
    this.state = { ok: true}
  }

  render(){
    return(
      <div>
        <HeadMenu/>
        <Footer/>
      </div>
    )
  }
}

export default App;