import React, { Component } from 'react';
import { useEffect, useState, setState } from 'react';
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
        this.state = {
            error: null,
            isLoaded: false,
            meubles: []
          }
    };

    componentDidMount() {
    console.log("fetching") 
    fetch("http://localhost:4000/meubles")
      .then(res => res.json())
      .then(
        (res) => {
          console.log(res)
          this.setState({
              isLoaded : true,
              meubles : res
            })
          console.log("fetched")
        })
    }

    render() {
        const { error, isLoaded, meubles } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
          } else if (!isLoaded || !this.state.meubles[0]) {
            return <div>Chargement…</div>;
          } else {
        return ( 
            <div>
            <Header />
            <h2> </h2>
            <CarouselMain />
                <h2 className="affaires">Nos bonnes affaires du moment :</h2>
                <ul className = "listeMeubles">
             {meubles.map(({id, Nom, photo1, type, prix}) => (
                 <Cards 
                  key = {id}
                  cover = {photo1}
                  name = {Nom}
                  type = {type}
                  price = {prix}
                 />
             ))}
 {/*                <Container>
                        <Row className="customRow">
                            <p> il y a {meubles.length} meubles </p>
                            <p> les meubles : {meubles.map(meuble => meuble.Nom)} </p>
                            <Col><Cards /></Col>
                            <Col><Cards /></Col>  
                        </Row>
                        <Row>
                            <Col><Cards /></Col>
                            <Col><Cards /></Col> 

                        </Row>
                    </Container> */}
                </ul>
                <Footer />  
            </div>
         );
    }
}
}


export default Main;