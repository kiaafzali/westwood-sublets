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
            price_decending: false,
        }

        this.handlePriceChange = this.handlePriceChange.bind(this)
        
    }

    handlePriceChange() {
        this.setState({
            price_decending: !this.state.price_decending,
            listings: this.state.listings.reverse(),
        })
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
                <Grid item xs={12} alignItems="center">
                    <Button onClick={this.handlePriceChange}>
                        <div>{this.state.price_decending ? <h1>decending</h1> : <h1>acending</h1>}</div>
                    </Button>
                </Grid>
                {this.state.listings.map(listing => {
                    return (
                        <Grid item xs={3} ><Listing address={listing.address} price={listing.price}/></Grid>
                    )
                })}
            </Grid>
        );
    }
}

//test