import React, { Component } from 'react';
import Header from './Components/header'
import Footer from './Components/footer'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>     
            <Header/ >   
            <Footer/ >
            </div>      
         );
    }
}
 
export default Main;