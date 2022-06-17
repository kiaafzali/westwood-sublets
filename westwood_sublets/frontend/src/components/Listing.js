import React, { Component} from "react";
import {render} from "react-dom";
import {
    Grid,
    Typography,
    Card,
    IconButton,
    LinearProgress,
  } from "@mui/material";

export default class Listing extends Component {
    constructor(props) {
        super(props);
    }
 
    render(){
        return (
            <Card>
                <Grid container spacing={3}>
                    <Grid item align="center" xs={12} color="Blue">
                        <h1>Picture Goes Here</h1>
                    </Grid>
                    <Grid item align="left" xs={4}>
                        <h3>Address</h3>
                    </Grid>
                    <Grid item align="right" xs={4}>
                        <h3>$$$</h3>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}
