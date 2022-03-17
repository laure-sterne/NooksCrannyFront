import react, { Component } from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Carousel} from "react-bootstrap";

class Equipe extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    render() {
        return (
            <>
                <Header />
                <h1 className="equipe">L'équipe de Tom Nook</h1>
                <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/Laureuh.jpeg"
                    alt="Laureuh"
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/laure-sterne">Laureuh</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/Camille.jpeg"
                    alt="Camille"
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/Ekhinox">Camille</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/CélineB.jpeg"
                    alt="Céline B."
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/CelineBarbe">Céline B.</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/Victoire.jpeg"
                    alt="Victoire."
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/Vico4">Victoire</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/Yaniss.jpeg"
                    alt="Yaniss"
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/YanissB">Yaniss</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/Sonia.jpeg"
                    alt="Sonia"
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/Soso-M">Sonia</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/Mathéo.jpeg"
                    alt="Mathéo"
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/Marchand-Matheo">Mathéo</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/Isciane.jpeg"
                    alt="Isciane"
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/IscianeN">Isciane</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/CélineL.jpeg"
                    alt="Céline L."
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/celinelouaintier">Céline L.</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-25 mx-auto"
                    src="../images/photosequipe/EstherL.jpeg"
                    alt="Esther L."
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/EstherL6">Esther L.</a>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <h1></h1>
                <Footer />
            </>
            
        )
    }
}

export default Equipe;