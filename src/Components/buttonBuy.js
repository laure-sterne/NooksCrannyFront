import react, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


//composant pour le bouton Acheter
class ButtonBuy extends Component {
    constructor(props) {
        super(props);
    
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        const url = 'http://localhost:4000/meubles/status/' + this.props.id
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
          }
        
          fetch(url, requestOptions)
          .then(response => response.json())
          .catch(error => console.error("Error: " + error )) 
          .then(response => {
            console.log(response)
          })
          .then(() => window.location.reload(false)) 
         event.preventDefault();
         event.stopPropagation()
    }

    render() {
        const link = "/detailProduct/" + this.props.id
        return (
            <div>
                <Button variant="primary" onClick={this.handleClick}>Acheter</Button>{' '}
                {this.props.type === "buyOnly" ? 
                null : 
                <Button variant="outline-primary">
                    <Link to={link}>Voir plus</Link>
                </Button>}
            </div>
        );
    }
}

export default ButtonBuy;