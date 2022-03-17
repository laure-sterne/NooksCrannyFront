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
        this.state = {
            error: null,
            isLoaded: false,
            meubles: []
        }
    }
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
                <Container>
                    <Row>
                        <Col md="auto center"><MenuVertical /></Col>
                        <Col >
                        <ul className = "listeMeubles">
                            {meubles.map(({id, Nom, photo1, type, prix, statut}) => (
                                statut === "disponible" ?
                                <Cards 
                                key = {id}
                                id = {id}
                                cover = {photo1}
                                name = {Nom}
                                type = {type}
                                price = {prix}
                                /> : null
                            ))}
                        </ul>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
        }}
}

export default Products;