import React, { Component } from "react";
import './home.css'
import { Route } from "react-router-dom";

export default class Landing extends Component {
    render () {
        return (
            <>
            <section className="introSection">
                <div>THIS WILL BE AN IMAGE</div>
                <div>
                    <h1>QUICK ABOUT ME SECTION</h1>
                </div>
            </section>

            </>
        )
    }
}