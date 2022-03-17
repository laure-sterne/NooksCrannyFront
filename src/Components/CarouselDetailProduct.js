import React, { Component } from "react";
import {Carousel} from "react-bootstrap";

//carousel de photos de la page Detail Product 
//ajouter plusieurs photos dans BDD pour tester 
//réduire taille image 

class CarouselDetailProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Carousel fade>
         {this.props.photos.map(
          photo => photo ? <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={photo}
            alt={this.props.name}
          />
          </Carousel.Item> : null
       )}
        </Carousel>
      </div>
    );
  }
}

export default CarouselDetailProduct;
