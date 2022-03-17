import react, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


//composant pour le bouton Acheter
class ButtonBuy extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    render() {
        const link = "/detailProduct/" + this.props.id
        return (
            <div>
                <Button variant="primary">Acheter</Button>{' '}
                {this.props.type === "buyOnly" ? null : <Button variant="outline-primary"><Link to={link}>Voir plus</Link></Button>}
            </div>
        );
    }
}

export default ButtonBuy;