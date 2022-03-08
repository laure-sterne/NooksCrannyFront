import React, { Component } from 'react';
import Header from './Components/Header'
import Buttonbuy from './Components/buttonBuy';
import Photos from './Components/carousel';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <Header />
            <Photos />
            <Buttonbuy />
            </div>
         );
    }
}

export default Main;