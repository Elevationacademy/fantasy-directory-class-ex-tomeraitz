import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect , Link} from 'react-router-dom'
import '../styles/home.css'
import ListInput from './ListInput';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            userInput : "",
            inputDiv : [],
            entered : false,
            classUl : ""
        }
    }

    getNames =() =>{
        let arr1 = this.props.state.wizards
        let arr2 = this.props.state.bestiary
        let namesArr = []
        arr1.forEach(element => {
            namesArr.push({name : element.name.toLowerCase(),
                                    fentities :"wizards",
                                    realName : element.name })
        });

        arr2.forEach(element => {
            namesArr.push({name : element.name.toLowerCase(),
                                    fentities :"bestiary",
                                    realName : element.name  })
        });

        return namesArr
    }

    handleChange = (event) =>{
        let nameArr = this.getNames()
        let input = []
        
        nameArr.map(i => {
            if(i.name.includes(event.target.value) && event.target.value !== ""){
                input.push({name : i.name.match(event.target.value),
                             fentities : i.fentities,
                             realName : i.realName})
            }
        })
        if(event.target.value !== ""){
            this.setState({inputDiv: input,
                            userInput :event.target.value,
                            classUl : "ulist" });
        }
        else{
            this.setState({inputDiv: input,
                userInput :event.target.value,
                classUl : "" });
        }
    }

    checkEnter = event =>{
        if(event.key === 'Enter'){
            this.setState({entered: true});
        }
    }

    render() {
        if(!this.state.entered){
        return (
            <div>
                <div id="u-input">
                    <input onKeyPress={this.checkEnter} type="text" value={this.state.userInput} placeholder="Ask and you shall receive" 
                    onChange={this.handleChange}/>
                    <div id="button">Seek</div>
                    <ul className={this.state.classUl}>{this.state.inputDiv.map(i =>{
                        if(this.state.userInput !== ""){
                            return <ListInput input={i.realName} fentities={i.fentities} key={i.name.input}/>
                        }
                       
                    })}</ul>
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
        )}
        else{
          return  <Redirect to={`/directory/${this.state.inputDiv[0].fentities}/${this.state.inputDiv[0].realName}`} />
        }
    }
}

export default Home;