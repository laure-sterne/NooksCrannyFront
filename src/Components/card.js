import React from 'react';
//import ButtonBuy from './Components/ButtonBuy';
import { Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import ButtonBuy from './ButtonBuy';

//template des cartes pour les articles
class Cards extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() { 
        const link = "/detailProduct/" + this.props.id
        return ( 
                 <Card className="customCard" style={{  width: '20rem' }}>
                    <Card.Img variant="top" src={this.props.cover} />
                    <Card.Body>
                        <NavLink to={link}> <Card.Title>{this.props.name}</Card.Title> </NavLink>
                        <Card.Text>
                            Type: {this.props.type}
                        </Card.Text>
                        <Card.Text>
                            Prix: {this.props.price} <img 
                            src='/images/cloclo.png' 
                            width="30"
                            height="30" />
                            
                        </Card.Text>
                    <ButtonBuy id={this.props.id} />
                        
                    </Card.Body>
                </Card> 
         );
    }
}
 
export default Cards;