import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import chair from '../images/chair.jpg';
import couch from '../images/couch.jpg';
import lamp from '../images/lamp.jpg';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={chair}
              alt="Chair"
            />
            <Carousel.Caption>
              <h3>Chaise Scandinave</h3>
              <p>Le blanc, chic et incontournable</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={couch}
              alt="Couch"
            />

            <Carousel.Caption>
              <h3>Canapé vert canard</h3>
              <p>Le velours, la matière parfaite qui mélange confort et élégance</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={lamp}
              alt="Lamp"
            />

            <Carousel.Caption>
              <h3>Lustre blanc</h3>
              <p>Simple mais efficace pour éclairer vos intérieurs</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Photos;
