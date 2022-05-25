/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './LoginPage25.css'


function LoginPage25() {
    return (

        <div className='mainDiv'>


            <div className='mainContainer'>
                <Row>

                    <Col md={7} className="column1">

                        <img className="middleImg" src={require("././images/scsh.png")} style={{borderRadius: "10px"}}/>
                    </Col>


                    <Col md={5} className="column2">

                        <Card style={{ width: '18rem' }} className="card">
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

                            <Card.Body>
                                <img className="logo" src={require('../Artboard/Artboard1.png')} />
                                <Card.Title className='loginLogo'>Login</Card.Title>
                                {/* <Card.Text> */}


                                <Form>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label className='labels'>Employee ID</Form.Label>
                                        <Form.Control type="email" />
                                        {/* <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text> */}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className='labels'>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group> */}
                                    {/* <Button variant="primary" type="submit">
                                            Submit
                                        </Button> */}
                                </Form>


                                {/* </Card.Text> */}
                                <div className='bottonDiv'>
                                    <Button variant="outline-warning" style={{color: "white", width: "50%", backgroundColor: "#FFAA17"}}>Login</Button>
                                    <Button variant="outline-warning" style={{color: "white", width: "50%"}}>Cancel</Button>
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>
            </div>

        </div>

    )
}

export default LoginPage25;