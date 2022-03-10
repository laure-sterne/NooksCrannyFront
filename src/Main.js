import React, { Component } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Buttonbuy from './Components/ButtonBuy';
import CarouselMain from './Components/CarouselMain';
import Cards from './Components/Card';
//Import des composants de react bootstrap utilisés dans cette page (layout grid)
import { Container, Row, Col } from 'react-bootstrap';

//page d'accueil
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       
        return ( 
            <div>
            {/* appel des composants de la page*/}
            <Header />
            <CarouselMain />
                <div>
                    <Container>
                        <Row className="customRow">
                            <Col><Cards /></Col>
                            <Col><Cards /></Col>  
                        </Row>
                        <Row>
                            <Col><Cards /></Col>
                            <Col><Cards /></Col> 

                        </Row>
                    </Container>
                </div>
                <Footer />  
            </div>
         );
    }
}

export default Main;