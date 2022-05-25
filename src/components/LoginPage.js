/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage() {

  const mainMiddleDiv = {
    width: "80%",
    height: "35rem",
    border: "1px solid black",
    transform: "translate(15%, 3%)",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "row",
    borderRadius: "4%", 
    // zIndex : 100,
  }

  const imageDiv = {
    width: "60%",
    height: "100%",
    border: "2px solid blue",
    display: "inline-block"
  }

  const img = {
    width: "100%",
    height: "100%",
    transform: "translate(2.5%, 0%)"
  }

  const besideImgDiv = {
    width: "40%", 
    height: "100%", 
    border: "2px solid red", 
    display: "inline-block" 
  }

  const technoElevateLogoDiv = { 
    display: "inline-block", 
    border: "1px solid black", 
    transform: "translate(70%, 100%)" 
  }

  const technoElevateLogo = { 
    width: "70%" 
  }

  const loginHeading = { 
    border: "1px solid black", 
    display: "inline-block", 
    color: "#FFAA17", 
    fontFamily: "Abril Fatface", 
    transform: "translate(-60%, 400%)" 
  }

  const loginFormDiv = { 
    border: "2px solid yellow", 
    display: "inline-block", 
    transform: "translate(25%, 70%)", 
    width: "70%" 
  }

  const buttonsDiv = { 
    border: "1px solid green", 
    backgroundColor: "yellow", 
    borderRadius: "5px" 
  }

  const button1 = { 
    width: "50%", 
    borderRadius: "15%", 
    color: "white" 
  }

  const button2 = { 
    width: "50%", 
    borderRadius: "15%", 
    backgroundColor: "gray" 
  }

  return (

    <div>

      <div className='loginDiv'>

      </div>

      {/* Main Middle div : */}
      <div style={mainMiddleDiv}>


        {/* image Div : */}
        <div style={imageDiv}>
          <img src={require('../images1/techno-elevate-login-page-image-1.png')} style={img}>
          </img>
        </div>

        {/* beside image div tag :  */}
        <div style={besideImgDiv}>
          {/* Techno elevate logo : */}
          <div style={technoElevateLogoDiv}>
            <img src={require('../Artboard/Artboard1.png')} style={technoElevateLogo}></img>
          </div>

          {/* Login Heading :  */}
          <div style={loginHeading}>
            <h1 style={{ fontSize: "150%" }}>
              Log in</h1>
          </div>

          {/* Login Form :  */}
          <div style={loginFormDiv}>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: "white" }}>Employee ID</Form.Label>
                <Form.Control type="text" style={{ borderRadius: "10px" }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ color: "white" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" style={{ borderRadius: "10px" }} />
              </Form.Group>

              <div style={buttonsDiv}>

                <Button variant="warning" type="submit" style={button1}>
                  Login
                </Button>

                <Button type="submit" style={button2}>
                  Cancel
                </Button>

              </div>

            </Form>

            {/* Footer :  */}
            <div>

              <hr></hr>
            </div>


          </div>

        </div>



      </div>

      <div style={{ transform: "translate(70%, -100%)", border: "1px solid blue", display: "inline-block", color: "white" }}>
        <h1>Good things on
          <br></br>
          your way!</h1>
      </div>


    </div >
  )
}

export default LoginPage;