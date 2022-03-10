import React, { Component } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MenuVertical from "./Components/MenuVertical";
import Cards from './Components/Card';
import { Row, Col, Container } from 'react-bootstrap';
import { Collapse } from 'bootstrap';


//page de catalogue avec tous les produits 
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
                <Header />
                <Container>
                    <Row>
                        <Col md="auto"><MenuVertical /></Col>
                        <Col className="customCard" >
                            <Row>
                                <Col>
                                    <Cards />
                                    <Cards />
                                    <Cards />
                                    <Cards />
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col>
                                    <Cards />
                                    <Cards />
                                    <Cards />
                                    <Cards />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Products;