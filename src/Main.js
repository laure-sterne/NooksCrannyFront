import React, { Component } from 'react';
import Header from './Components/Header'
import Photos from './Components/carousel';
import chair from './images/chair.jpg';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <Header/ >
            <Photos/ >
            </div>
         );
    }
}

export default Main;