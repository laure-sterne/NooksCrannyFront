import React, { Component, useEffect,useState} from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Buttonbuy from './Components/ButtonBuy';
import CarouselMain from './Components/CarouselMain';
import Cards from './Components/Card';
//Import des composants de react bootstrap utilisés dans cette page (layout grid)
import { Container, Row, Col } from 'react-bootstrap';



//page d'accueil
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            meubles: []
          };
    }
    componentDidMount(){
        fetch("http://localhost:4000/meubles")
        .then(res => res.json())
        .then(
        (result) => {
        console.log(result);
        const meubles = result.data;
        this.setState({isLoaded:true,meubles})
        });
    }
    render() {
        console.log('bonjour')
        const { error, isLoaded, meubles } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Chargement…</div>;
          } else {
        return (
            <div>
            {/* appel des composants de la page*/}
            <Header />
            <CarouselMain />
                <div>
                    <Container>
                        <Row className="customRow">
                            <ul> { meubles.map(meuble => <li>{meuble}</li>)}</ul> 
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







//page d'accueil
// class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }

    //     fetch("http://localhost:4000/meubles")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             meubles: result.meubles
    //           });
    //         },
    //         // Remarque : il est important de traiter les erreurs ici
    //         // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
    //         // des exceptions provenant de réels bugs du composant.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }
    
    //   render() {
    //     const { error, isLoaded, meubles } = this.state;
    //     if (error) {
    //       return <div>Erreur : {error.message}</div>;
    //     } else if (!isLoaded) {
    //       return <div>Chargement…</div>;
    //     } else {
    //       return (
    //         <ul>
    //           {meubles.map(meuble => (
    //             <li key={meuble.nom}>
    //               {meuble.nom}
    //             </li>
    //           ))}
    //         </ul>
    //       );
    //     }
    //   }
    
    // render() { 
        
       
    //     return ( 
    //         <div>
    //         { /* appel des composants de la page*/}
//             <Header />
//             <CarouselMain />
//                 <div>
//                     <Container>
//                         <Row className="customRow">
//                             <Col><Cards /></Col>
//                             <Col><Cards /></Col>  
//                         </Row>
//                         <Row>
//                             <Col><Cards /></Col>
//                             <Col><Cards /></Col> 

//                         </Row>
//                     </Container>
//                 </div>
//                 <Footer />  
//             </div>
//          );
//     }
// }
}
export default Main;