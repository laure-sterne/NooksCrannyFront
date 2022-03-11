import react, { Component } from "react";
import Button from 'react-bootstrap/Button';

//composant pour le bouton Acheter
class ButtonBuy extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div>
                <Button variant="primary">Acheter</Button>{' '}
                <Button variant="outline-primary">Voir plus</Button>{' '}
            </div>
        );
    }
}

export default ButtonBuy;