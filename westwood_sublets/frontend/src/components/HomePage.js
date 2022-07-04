import React, { Component } from "react";
import { Button, ButtonGroup, Typography, Grid, TextField, FormControl, Input } from "@mui/material";
import Listing from "./Listing.js";
import { create } from "@mui/material/styles/createTransitions";
import { useResolvedPath } from "react-router-dom";
import { style, textAlign } from "@mui/system";
// import NumberFormat from 'react-number-format';
// import NumericInput from 'react-numeric-input';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            listings : [],
            price_decending: false,
            minPrice: 0,
            maxPrice: Infinity,
        }
        
        this.handlePriceChange = this.handlePriceChange.bind(this),
        this.handleMinChange = this.handleMinChange.bind(this),
        this.handleMaxChange = this.handleMaxChange.bind(this)
    }

    handlePriceChange() {
        this.setState({
            price_decending: !this.state.price_decending,
            listings: this.state.listings.reverse(),
        })
    }

    handleMaxChange(e){
        this.setState({
            maxPrice: e.target.value
        })
        this.componentDidMount()
    }

    handleMinChange(e){
        this.setState({
            minPrice: e.target.value
        })
        this.componentDidMount()

    }



    async componentDidMount() {
        var temp_listings = await (await fetch("/api/get-listings")).json()
        console.log(temp_listings)
        this.setState({listings:temp_listings})
        
        
        // *** min and max function ***

        for (var i = 0; i < this.state.listings.length; i++ ){
            if (this.state.listings[i]["price"] < this.state.minPrice || this.state.listings[i]["price"] > this.state.maxPrice) {
                delete temp_listings[i]
            }
        }       
        this.setState({listings:temp_listings})
        if (this.state.price_decending === true){
            temp_listings.reverse()
        } 
        this.setState({listings:temp_listings})

        // *** end of min max function ***



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

    // list(){
    //     console.log("works")
    //     {this.state.listings.map(listing => {
    //         return (
    //             <Grid item xs={3} ><Listing address={listing.address} price={listing.price}/></Grid>
    //         );
    //     })}
    // }
   
    render(){ 
        return(
            <Grid container spacing={5}>
                <Grid item xs={12} alignItems="center">
                    <Button onClick={this.handlePriceChange}>
                        <div>{this.state.price_decending ? <h1>decending</h1> : <h1>acending</h1>}</div>
                    </Button>
                </Grid>
                <Grid item xs={12} alignItems="center">
                    <FormControl>
                        <TextField
                            // required = {false}
                            defaultValue={0}
                            label = "Minimum Price"
                            onInput = {this.handleMinChange}
                            inputProps ={{
                                inputMode: 'numeric',
                                style: {textAlign: "center"},
                                
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} alignItems="center">
                    <FormControl>
                        <TextField
                            // required = {false}
                            label = "Max Price"
                            onInput = {this.handleMaxChange}
                            inputProps ={{
                                inputMode: 'numeric',
                                style: {textAlign:  "center"},
                                
                            }}
                        />
                    </FormControl>
                </Grid>
                {this.state.listings.map(listing => {
                    return (
                        <Grid item xs={3} ><Listing address={listing.address} price={listing.price}/></Grid>
                    )
                })}
                {/* <div>
                    {this.list()}
                </div> */}
            </Grid>
        );
    }
}

