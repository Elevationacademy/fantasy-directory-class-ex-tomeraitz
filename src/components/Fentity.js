import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom'
import '../styles/fentity.css'


class Fentity extends Component {
    
    handelData = () =>{
        let fentitiesCategory = this.props.match.params.fentities
        let fentityArr = this.props.state[fentitiesCategory]
        let i = fentityArr.findIndex( item => item.name == this.props.match.params.name)
        return fentityArr[i]
    }

    render() {
       let fentity = this.handelData()
       if(fentity){
        return (
            <div>
                <div id="creature-container">
                    <h1>{fentity.name}</h1>
                    <img src={fentity.imgUrl} alt=""/>
                    <div className="title">Power:</div>
                    <div className="power text"> {fentity.power}</div>
                    <div className="other text">{fentity.other}</div>
                </div>
                <Link to={`/directory/${this.props.match.params.fentities}`}>
                    <button>Back</button>
                </Link>
             </div>
        )}
        else{
           return <Redirect to="/" />
        }
    }
}

export default Fentity;
