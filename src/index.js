import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Login from './login';
import Footer from './Components/Footer';
import Products from './products';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);