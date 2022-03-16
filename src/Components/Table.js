import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

// data de test
// const students = [
//   {
//     'id': 1, 
//     'name': 'Hardik', 
//     'email': 'haridik@gmail.com'
//   },
//   {
//     'id': 2, 
//     'name': 'Paresh', 
//     'email': 'paresh@gmail.com'
//   },
//   {
//     'id': 2, 
//     'name': 'Karan', 
//     'email': 'karan@gmail.com'
//   },
// ];

class AdminTable extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    
    render() { 
        return ( 

          // exemple à ne pas supprimer pour quand on voudra boucler sur de la data
      //     <div className="container">
      //     <h1>React Map Loop Example - ItSolutionStuff.com</h1>
     
      //     <table className="table table-bordered height-auto">
      //         <tr>
      //             <th>ID</th>
      //             <th>Name</th>
      //             <th>Email</th>
      //         </tr>
    
      //         {students.map((student, index) => (
      //           <tr data-index={index}>
      //             <td>{student.id}</td>
      //             <td>{student.name}</td>
      //             <td>{student.email}</td>
      //           </tr>
      //         ))}
    
      //     </table>
    
      // </div>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Pseudo</th>
                <th>Nom de l'item</th>
                <th>Prix</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>Yaniss</td>
                <td>Banquette années 50</td>
                <td>3500</td>
                <td>Disponible</td>
              </tr>
              <tr>
                <td>Lit ancien</td>
                <td>28000</td>
                <td>Vendu</td>
              </tr>
              <tr>
                <td>Laureuh</td>
                <td>Fauteuil baseball nostalgie</td>
                <td>1400</td>
                <td>Vendu</td>
              </tr>
              <tr>
                <td>Céline L.</td>
                <td>Radio crâne nostalgie</td>
                <td>3200</td>
                <td>Disponible</td>
              </tr>
              <tr>
                <td rowSpan={2}>Isciane</td>
                <td>Double siège d'amphi</td>
                <td>3300</td>
                <td>Disponible</td>
              </tr>
              <tr>
                <td>Table à thé</td>
                <td>5760</td>
                <td>Vendu</td>
              </tr>
              <tr>
                <td>Victoire</td>
                <td>Tabouret feuille</td>
                <td>6240</td>
                <td>Vendu</td>
              </tr>
              <tr>
                <td>Céline B.</td>
                <td>Chaise au sol</td>
                <td>730</td>
                <td>Vendu</td>
              </tr>
              <tr>
                <td>Mathéo</td>
                <td>Lit poire</td>
                <td>10880</td>
                <td>Disponible</td>
              </tr>
              <tr>
                <td>Sonia</td>
                <td>Guéridon orange</td>
                <td>9920</td>
                <td>Disponible</td>
              </tr>
              <tr>
                <td>Camille</td>
                <td>Siège d'arcade</td>
                <td>1300</td>
                <td>Disponible</td>
              </tr>
              <tr>
                <td>Esther</td>
                <td>Chaise de jardin naturelle</td>
                <td>8880</td>
                <td>Vendu</td>
              </tr>
            </tbody>
          </Table> );
        }
}
 
export default AdminTable;









