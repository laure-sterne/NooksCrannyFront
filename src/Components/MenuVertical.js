import React, { Component, useState } from 'react';
import { Nav, Form, FormControl, Button, Collapse, Card } from 'react-bootstrap';

    const MenuVertical = () => {

        const [open, setOpen] = useState(false)

        return (
            <Nav defaultActiveKey="/home" className="flex-column">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Chaise jaune"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Rechercher</Button>
                </Form>
                <>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        Choisis ta couleur
                    </Button>
                    <div style={{ minHeight: '150px' }}>
                        <Collapse in={open} dimension="width">
                            <div id="example-collapse-text">
                                <Card body style={{ width: '400px' }}>
                                    <Form>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Check this switch"
                                        />
                                    </Form>
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </>
            </Nav>
        );
    }

export default MenuVertical;
