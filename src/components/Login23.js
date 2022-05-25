/* eslint-disable no-undef */
import React from 'react'
import './Login23.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';

function Login23() {
  return (
    <div className= "backgroundimage container">


      <Card style={{ width: '80vw', display: "flex", flexDirection: 'row', margin: "auto", height: '80vh', marginTop: "2.5%", backgroundColor: "gray"}}>
        <Card.Img className='col-xl-4 col-lg-4 col-md-8 col-sm-8' variant="top" src={require("./images/techno-elevate-login-page-image-4.png")} style={{width:"60%"}} />
        <Card.Body>
          <Card.Title style={{textAlignLast:"center"}}>Login</Card.Title>

          <Card.Img  variant="top" src={require("../Artboard/Artboard1.png")} style={{maxWidth:"25%", textAlignLast:"center"}} />

          <Card.Text className='col-xl-4 col-lg-4 col-md-8 col-sm-8'>

            <Form>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
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
              
            </Form>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          <Button variant="primary" type="submit">
                Login
              </Button>

              <Button style={{backgroundColor: "black"}} variant="primary" type="submit">
                Cancel
              </Button>
        </Card.Body>
      </Card>


    </div>
  )
}

export default Login23;