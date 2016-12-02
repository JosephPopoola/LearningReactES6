import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component{
    render(){
        return (
            <div className="jumbotron">
                <h1> Welcome! </h1>
                <p>We about to do some stuff my g</p>
                <Link to="about" className=""> Learn More... </Link>             
            </div>
        );
    }
}

export default HomePage;