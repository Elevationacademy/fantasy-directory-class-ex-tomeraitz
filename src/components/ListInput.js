import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom'
import '../styles/fentity.css'


class ListInput extends Component {

    render() {
           return <Link to={`/directory/${this.props.fentities}/${this.props.input}`}><li>{this.props.input}</li></Link>
        
    }
}

export default ListInput;
