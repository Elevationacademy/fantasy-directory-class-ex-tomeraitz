import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Fentities from './components/Fentities';

class App extends Component {
  constructor() {
    super()
    this.state = {
      wizards: [
        { name: "Merlin", power: "Wisdom", other: "Helped King Arthur", imgUrl: "https://tinyurl.com/merlin-image" },
        { name: "Morgana Le Fay", power: "Forces of Nature", other: "Trapped Merlin in a cave for eternity", imgUrl: "https://tinyurl.com/morgana-image" },
        { name: "Gandalf", power: "Plot Convenience", other: "Once broke a bridge", imgUrl: "https://tinyurl.com/gandalf-img" }
      ],
      bestiary: [
        { name: "Smaug", power: "Fire and Flying", other: "Burned a city to with his mouth", imgUrl: "https://tinyurl.com/smaug-image" },
        { name: "Buckbeak", power: "Flying", other: "Knocked over Malfoy like a boss", imgUrl: "https://tinyurl.com/buckbeak-image" },
        { name: "Cerebrus", power: "Having three heads", other: "Holding back the dead since 100 BCE", imgUrl: "https://tinyurl.com/cerebrus-image" }
      ]
    }
  }
  
  render() {
    const state = this.state
    return (
      <Router> 
        <div className="App">
        <div id="home-background"></div>
        <div id="main-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </div>
        <Route path="/" exact  component={Home}/>

        <Route path="/directory/:fentities" exact render={({ match }) => 
        <Fentities match={match} state={this.state} />}/> 

        <Route path="/about" render={() => <About items={Object.keys(state)} />} />
      </div>
      </Router>


    );
  }
}

export default App;
