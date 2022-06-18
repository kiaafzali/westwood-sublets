import React, { Component } from "react";
import { Button, ButtonGroup, Typography, Grid } from "@mui/material";
import Listing from "./Listing.js";
import { create } from "@mui/material/styles/createTransitions";
import { useResolvedPath } from "react-router-dom";



export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            listings : [],
        }
        
    }

    async componentDidMount() {
        var temp_listings = await (await fetch("/api/get-listings")).json()
        console.log(temp_listings)
        this.setState({listings:temp_listings})
        console.log(this.state.listings)
        // fetch("/api/get-listings")
        //   .then((response) => response.json())
        //   .then((data) => console.log(data))
        //   .then(console.log(listings))
        
        // console.log("start")
        // console.log(this.state.listings)
        // this.setState({
        //     listings: [...this.state.listings, '5']
        // }
        // );
        // console.log(this.state.listings)

        
    };

    

    render(){ 
        return(
            <Grid container spacing={5}>
            {this.state.listings.map(listing => {
                return (
                    <Grid item xs={3} ><Listing address={listing.address} price={listing.price}/></Grid>
                )
            })}
            </Grid>
        );
    }
}

