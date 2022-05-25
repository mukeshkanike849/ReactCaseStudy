import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginAdmin() {
    return (

        <div>

            <div style={{ alignItems: "center", justifyContent: "center", display: "inline-block", transform: "translate(-70%, 15%)" }}>

                <Card style={{ width: '18rem', display: 'flex', flexDirection: 'row' }}>
                    <Card.Img variant="top" src={require("../images/techno-elevate-login-page-image-1.png")} style={{ width: "250%" }} />
                    <Card.Body>

                    <div style={{transform: "translate(-140%, 40%)", width: "300%", display:"inline-block"}}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{color: "#FFFFFF", width: "67px", height: "16px"}}>Employee ID</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{color: "#FFFFFF", width: "67px", height: "16px"}}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button variant="warning" type="submit">
                                LOGIN
                            </Button>

                            <Button variant="primary" type="submit">
                                CANCEL
                            </Button>
                        </Form>
                    </div>

                </Card.Body>
            </Card>

        </div>

        </div >

    )
}

export default LoginAdmin;