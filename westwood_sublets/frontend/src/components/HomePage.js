import React, { Component } from "react";
import { Button, ButtonGroup, Typography, Grid } from "@mui/material";
import Listing from "./Listing.js"
import { create } from "@mui/material/styles/createTransitions";



export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.createListing = this.createListing.bind(this);
    }

    createListing() {
        return (
            <Grid item xs={3}>
                <Listing />
            </Grid>
        );
    }

    

    render(){ 
        return(
            <Grid container spacing={5}>
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
                {this.createListing()}
            </Grid>
        );
    }
}

