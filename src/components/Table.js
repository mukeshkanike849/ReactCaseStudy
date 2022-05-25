import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chip } from '@mui/material';


function Table1() {
    const [first, setfirst] = useState(["React", "Angular", "Java+Spring Boot", "Node & Express JS"]);

    return (
        <div style={{maxWidth: "95vw", marginLeft: "1%"}}>
            <Table striped bordered hover style={{marginLeft: "5%", marginTop: "2%", border: "1px solid white"}} >
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox"></input>
                        </th>
                        <th>No.</th>
                        <th>Batch ID</th>
                        <th>Batch Name</th>
                        <th>Mentor Name</th>
                        <th>Technologies</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>01</td>
                        <td>#154234653</td>
                        <td>abcd</td>
                        <td>Chandan</td>

                        <td>{first.map((val, idx) => {
                            // return (<pre style={{backgroundColor: "#086288", color: "white", borderRadius: "8px", display: "inline-block"}}>{val  }</pre>)
                            return (<Chip label={val} style={{backgroundColor : "#086288", color: "white"}} />)
                        })}</td>
                        
                        <td>14 Mar 2022</td>
                        <td>14 Apr 2022</td>
                        <td>
                            <select>
                                <option style={{color: "yelow"}}>In progress</option>
                                <option style={{color: "green"}}>Completed</option>
                                <option style={{color: "blue"}}>To be started</option>
                            </select>
                        </td>
                        <td>
                        <i class="fa-solid fa-trash"></i>
                        </td>

                    </tr>
                    {/* <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
            </tbody>
            </Table > 

        </div >
    )
}

export default Table1;