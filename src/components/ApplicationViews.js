import { Route }  from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home"
import WorkList from "./work/WorkList"
import About from "./about/About"
import Contact from "./contact/Contact"
// import NavBar from "./navbar/NavBar";

export default class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route
                    exact path="/" render={props => {
                        return <Home {...props} />

                    }}
                />
                <Route
                    exact path="/work" render={props => {
                        return <WorkList {...props} />
                    }}
                />
                <Route
                    exact path="/about" render={props => {
                        return <About {...props} />
                    }}
                />
                <Route
                    exact path="/contact" render={props => {
                        return <Contact {...props} />
                    }}
                />
                </>
        )
    }

}