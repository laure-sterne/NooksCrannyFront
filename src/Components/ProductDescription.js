import React, { Component } from 'react';
import ButtonBuy from './ButtonBuy';

class ProductDescription extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
                <ul>
                    <li><h3>Froggy Chair</h3></li>
                    <li>Type: Chaise</li>
                    <li>Prix: 1600 clochettes</li>
                    <li>Couleur: Vert</li>
                    <li>Matière: Bois</li>
                    <li>Dimension: </li>     
                </ul>
                <ButtonBuy />
            </div>
          );
    }
}
 
export default ProductDescription;