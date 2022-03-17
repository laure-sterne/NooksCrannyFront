import React, { Component } from 'react';
import Header from './Components/Header';
import CarouselDetailProduct from './Components/CarouselDetailProduct';
import ProductDescription from './Components/ProductDescription';
import Card from './Components/Card';
import Footer from './Components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function DetailProduct() {
    const { id } = useParams()

    const [meuble, setMeuble] = useState()

    useEffect(() => {
        console.log("fetching un meuble") 
        console.log(id)
        const url = "http://localhost:4000/meubles/" + id 
        fetch(url)
          .then(res => res.json())
          .then(
            (res) => {
              console.log(res)
              setMeuble(res[0])
            })
        }, []
    )
        
    // to-do : afficher "indisponible si le meuble est vendu"
     return (
            <div>
                <Header />
                {meuble ? <>
                <CarouselDetailProduct 
                    photos = {[meuble.photo1, meuble.photo2, meuble.photo3]}
                    name = {meuble.nom}
                    description = {meuble.description}
                    />
                    <h1> </h1>
                 <ProductDescription
                    id = {meuble.id}
                    name = {meuble.nom}
                    description = {meuble.description}
                    type = {meuble.type}
                    prix = {meuble.prix}
                    couleur = {meuble.couleur}
                    matiere = {meuble.matière}
                    largeur = {meuble.largeur}
                    longueur = {meuble.longueur}
                    hauteur = {meuble.hauteur}
                    statut = {meuble.statut}
                /> </> : <p>Chargement...</p>}
                <Row className="mx-auto">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Row>
                <Footer />
            </div>
          );
    }
 
export default DetailProduct ;