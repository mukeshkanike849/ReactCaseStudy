/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navbar1() {
    return (
        <div>
            <Navbar className="col" bg="light" expand="lg">
                <Container fluid>

                    {/* <img src={require("./logo1/logo1.png")} style={{ maxWidth: "100%" }}></img> */}
                    <Navbar.Brand>
                        <img src={require("./logo1/logo1.png")}  style={{ maxWidth: "70%" }}></img>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>

                        </Nav>
                        <Form className="d-flex">
                            {/* <Navbar.Text> */}


                            <input type="search" placeholder='Search Mentor / Employee' style={{ width: "40 em", marginRight: "10em" }}>

                            </input>
                            <Button variant="outline-primary" style={{ color: "#075575" }}>Logout</Button>
                            {/* </Navbar.Text> */}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    )
}

export default Navbar1;