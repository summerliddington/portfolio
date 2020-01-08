// import { Route }  from "react-router-dom";
import React, { Component } from "react";
import Landing from "./landing/Landing"
import PortfolioList from "./work/PortfolioList"
import About from "./about/About"
import Contact from "./contact/Contact"
// import NavBar from "./navbar/NavBar";

export default class ApplicationViews extends Component {

    render() {
        return (
            <>
            <Landing />
            <About />
            <PortfolioList />
            <Contact />
        </>
        )
    }
}
{/* <Route
                    exact path="/" render={props => {
                        return <Landing {...props} />
                                <About {...props} />
                                <PortfolioList {...props} />
                                <Contact {...props} />
                    
                    }}
                />
                <Route
                    exact path="/work" render={props => {
                        return <PortfolioList {...props} />
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
                /> */}