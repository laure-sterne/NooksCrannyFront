import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

const menuVertical = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link to="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav>
    );
}

export default menuVertical;
