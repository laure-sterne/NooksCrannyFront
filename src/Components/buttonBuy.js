import react, { Component } from "react";
import Button from 'react-bootstrap/Button';
class Buttonbuy extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div>
                <Button variant="primary">Acheter</Button>{' '}
                <Button variant="outline-primary">Acheter Plus</Button>{' '}
            </div>
        );
    }
}

export default Buttonbuy;