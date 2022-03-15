import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AdminTable from './Components/Table';

class Admin extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
            <Header />
           <AdminTable />
           <Footer />
           </div>
         );
    }
}
 
export default Admin;