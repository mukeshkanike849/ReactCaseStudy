/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';

function Drawer1() {
    return (
        <div>
            <div style={{ height: "100vh", border: "1px solid whitesmoke", display: "inline-block", background: "whitesmoke", }}>

                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home" style={{ background: "#086288", borderRadius: "10%"}}>
                        <img src={require("./Web 1920/group (2).png")}  />
                        <h6 style={{color: "white", fontSize:"12px"}}>Batch</h6>
                    </Nav.Link>

                    <Nav.Link eventKey="link-1">
                        <img src={require("./Web 1920/team (4).png")} />
                        <h6 style={{color: "#086288", fontSize:"12px"}}>Mentor</h6>
                    </Nav.Link>

                    <Nav.Link eventKey="link-2">
                        <img src={require("./Web 1920/add-user (2).png")} />
                        <h6 style={{color: "#086288", fontSize:"12px"}}>Request</h6>
                    </Nav.Link>
                    {/* <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link> */}
                </Nav>
            </div>
        </div>
    )
}

export default Drawer1