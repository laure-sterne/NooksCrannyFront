import React, { Component } from "react";
import {Carousel} from "react-bootstrap";

//carousel de photos de la page Main
class CarouselMain extends Component {
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
              className="d-block w-50 mx-auto"
              src="../images/exemplesetup1.png"
              alt="Setup"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 mx-auto"
              src="../images/exemplesetup2.jpeg"
              alt="Setup"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 mx-auto"
              src="../images/setup4.jpeg"
              alt="Setup"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselMain;
