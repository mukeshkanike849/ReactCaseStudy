/* eslint-disable no-undef */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { Button, Card, Form } from 'react-bootstrap';

function LoginMy() {
    return (
        <div>

            {/* card : */}
            <div>

                <Card style={{ width: '60%', display: "flex", flexDirection: "row", transform: "translate(35%, 5%)", border:"1px solid black" }}>
                    <Card.Img variant="top" src={require("../images1/techno-elevate-login-page-image-1.png")} />
                    {/* <Card.Body> */}
                    {/* <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card>

                {/* Form : */}
                <div style={{width:"20%", height:"500px", transform:"translate(300%, -130%)", backgroundColor:"black"}}>
                    <Form style={{width:"40%"}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>

                {/* </Card.Body> */}


            </div>

            <div>

            </div>
        </div>
    )
}

export default LoginMy;