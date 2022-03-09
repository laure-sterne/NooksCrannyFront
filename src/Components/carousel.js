import React, { Component } from "react";
import {Carousel} from "react-bootstrap";

//carousel de photos de la page Main
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
              src="../images/chair.jpg"
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
              src="../images/couch.jpg"
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
              src="../images/lamp.jpg"
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
