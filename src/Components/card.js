import React from 'react';
import { Card, Button } from 'react-bootstrap';

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
                        <Card.Title>FROGGY CHAIR</Card.Title>
                        <Card.Text>
                            Type: Chaise
                        </Card.Text>
                        <Card.Text>
                            Prix: 1600 clochettes
                        </Card.Text>

                        <Button variant="primary">Acheter</Button>
                    </Card.Body>
                </Card> 
            </div>
         );
    }
}
 
export default Cards;