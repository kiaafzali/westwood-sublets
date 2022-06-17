import React, { Component} from "react";
import {render} from "react-dom";
import HomePage from "./HomePage.js"

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div className="center"><h1 align="center">This is Westwood Sublets</h1><HomePage /></div>;
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);