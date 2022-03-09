import React, { Component } from 'react';
import Header from './Components/Header';
import CarouselDetailProduct from './Components/CarouselDetailProduct';
import ProductDescription from './Components/ProductDescription';
import Card from './Components/Card';
import Footer from './Components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

class DetailProduct extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
                <Header />
                <CarouselDetailProduct />
                <ProductDescription />
                <Row>
                    <Card />
                    <Card />
                    <Card />
                </Row>
                <Footer />
            </div>
          );
    }
}
 
export default DetailProduct ;