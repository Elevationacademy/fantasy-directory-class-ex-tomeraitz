import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'
import '../styles/home.css'

class Home extends Component {

    render() {
        return (
            <div>
                <div id="u-input">
                    <input type="text" placeholder="Ask and you shall receive" />
                    <div id="button">Seek</div>
                </div>

                <h1 id="home-title">Your Adventure</h1>

                <div id="home-container">
                    <div id="world"><Link to="/directory/world"><span className="main-directory-text">World</span></Link></div>
                    <div id="wizards"><Link to="/directory/wizards"><span className="main-directory-text">Wizards</span></Link></div>
                    <div id="bestiary"><Link to="/directory/bestiary"><span className="main-directory-text">Bestiary</span></Link></div>
                    <div id="potions"><Link to="/directory/potions"><span className="main-directory-text">Potions</span></Link></div>
                    <div id="deities"><Link to="/directory/deities"><span className="main-directory-text">Deities</span></Link></div>
                </div>
            </div>
        );
    }
}

export default Home;