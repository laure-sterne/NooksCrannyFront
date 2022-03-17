import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => (
    <Container fluid className="footer-dark sticky-bottom">
        <Row>
            <Col>
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">En savoir plus sur nous</a></li>
                                    <li><a href="http://localhost:3000/equipe">L'équipe</a></li>
                                    <li><a href="#">Nous recrutons</a></li>
                                </ul>
                            </div>
                            <div class="col">
                                <h3>Nook's Cranny</h3>
                                <p>Compagnie créée en 2001 par l'honorable Tom Nook afin de donner une nouvelle vie à vos anciens meubles que vous n'utilisez plus.</p> 
                                <p>Revendez, récupérez des clochettes et rachetez de nouveaux meubles qui colleront mieux à vos envies!</p>
                            </div>
                        </div>
                        <p class="copyright">Nook's Cranny© 2001</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
);
export default Footer;













