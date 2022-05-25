/* eslint-disable no-undef */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { TextField } from '@mui/material';
import { ButtonGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ImgMediaCard() {
    return (

            <Card sx={{ maxWidth: 1100, maxHeight: 1000, display: "flex", flexDirection: "row",  }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="500"
                    image={require("../images1/techno-elevate-login-page-image-1.png")}
                />



                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{ color: "#FFAA17", fontFamily: "Abril Fatface,Regular"}}>
                        Login
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Typography> */}
                </CardContent>

                <CardActions>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label sx={{ color: "white" }}>Employee ID</Form.Label>
                            <Form.Control type="text" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label sx={{ color: "white" }}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                        {/* <Button variant="primary" type="submit">
                        Login
                    </Button>

                    <Button variant="primary" type="submit">
                        Cancel
                    </Button> */}

                        <ButtonGroup disableElevation variant="contained">
                            <Button>Login</Button>
                            <Button>Cancel</Button>
                        </ButtonGroup>
                    </Form>

                    {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>

    
    );
}
