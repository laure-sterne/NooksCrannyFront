import React, { Component } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Buttonbuy from './Components/ButtonBuy';
import Photos from './Components/Carousel';
import Cards from './Components/Card';
import { Container, Row, Col } from 'react-bootstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       
        return ( 
            <div>
            <Header />
            <Photos />
            <Buttonbuy />
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