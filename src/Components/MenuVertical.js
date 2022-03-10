import React, { Component, useState } from 'react';
import { Nav, Form, FormControl, Button, Collapse, Card } from 'react-bootstrap';

const MenuVertical = () => {

    const [open, setOpen] = useState(false)
    const [openType, setOpenType] = useState(false)
    const [openMatiere, setOpenMatiere] = useState(false)


    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Form className="d-flex" style={{ margin: '20px' }}>
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
                    className="color-button-filter"
                >
                    Choisis ta couleur
                </Button>
                <div style={{ minHeight: '100px' }}>
                    <Collapse in={open} dimension="width">
                        <div id="example-collapse-text">
                            <Card body style={{ width: '400px' }}>
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Jaune"
                                    />
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Rouge"
                                    />
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Bleu"
                                    />
                                </Form>
                            </Card>
                        </div>
                    </Collapse>
                </div>

                <Button
                    onClick={() => setOpenType(!openType)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openType}
                    className="color-button-filter"
                >
                    Choisis ton type
                </Button>
                <div style={{ minHeight: '100px' }}>
                    <Collapse in={openType} dimension="width">
                        <div id="example-collapse-text">
                            <Card body style={{ width: '400px' }}>
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Lit"
                                    />

                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Chaise"
                                    />

                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Bureau"
                                    />
                                </Form>
                            </Card>
                        </div>
                    </Collapse>
                </div>

                <Button
                    onClick={() => setOpenMatiere(!openMatiere)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openMatiere}
                    className="color-button-filter"
                >
                    Choisis ta matière
                </Button>
                <div style={{ minHeight: '100px' }}>
                    <Collapse in={openMatiere} dimension="width">
                        <div id="example-collapse-text">
                            <Card body style={{ width: '400px' }}>
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Bois"
                                    />

                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Feuille"
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
