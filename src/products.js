import React, { Component } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MenuVertical from "./Components/MenuVertical";


//page de catalogue avec tous les produits 
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
                <Header />
                <MenuVertical />
                <Footer />
            </div>
        );
    }
}

export default Products;