import React, { Component } from 'react';
import ButtonBuy from './ButtonBuy';

class ProductDescription extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className="d-block w-50 mx-auto">
                <ul>
                    <li><h3>{this.props.name}</h3></li>
                    <li> Description : {this.props.description}</li>
                    <li>Type: {this.props.type}</li>
                    <li>Prix: {this.props.prix} clochettes</li>
                    <li>Couleur: {this.props.couleur}</li>
                    <li>Matière: {this.props.matiere}</li>
                    <li>Dimension: longueur = {this.props.longueur ? this.props.longueur + " cm" : " inconnue"},  
                    largeur = {this.props.largeur ? this.props.largeur + " cm" : " inconnue"},  
                    hauteur = {this.props.hauteur ? this.props.hauteur + " cm" : " inconnue"}  
                    </li>     
                </ul>
                <ButtonBuy type="buyOnly"/>
            </div>
          );
    }
}
 
export default ProductDescription;