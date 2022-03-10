import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class AdminTable extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <Table striped bordered hover>
            <thead>
              <tr>
                <th>Pseudo</th>
                <th>Type</th>
                <th>Prix</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>Yaniss</td>
                <td>Chaise</td>
                <td>200</td>
                <td>Disponible</td>
              </tr>
              <tr>
                <td>Lit</td>
                <td>400</td>
                <td>Vendu</td>
              </tr>
              <tr>
                <td>Lore</td>
                <td>Lit</td>
                <td>500000</td>
                <td>Vendu</td>
              </tr>
            </tbody>
          </Table> );
    }
}
 
export default AdminTable;









