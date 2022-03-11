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
        return ( 
            <div>
                 <Card className="customCard" style={{  width: '20rem' }}>
                    <Card.Img variant="top" src={"../images/froggyChair.jpg"} />
                    <Card.Body>
                        <NavLink to="/detailProduct"><Card.Title>FROGGY CHAIR</Card.Title></NavLink>
                        <Card.Text>
                            Type: Chaise
                        </Card.Text>
                        <Card.Text>
                            Prix: 1600 clochettes
                        </Card.Text>
                    <ButtonBuy />
                        
                    </Card.Body>
                </Card> 
            </div>
         );
    }
}
 
export default Cards;