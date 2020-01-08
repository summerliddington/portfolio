import React, { Component } from "react";
import { Link, withRouter} from "react-router-dom"
import './NavBar.css'


class NavBar extends Component {

    render() {
        return (
            <>
            <header>
                <nav className="navContainer">
                    <div className="navTitle">
                <ul className="navLinks">
                    <li className="navLink"><a href="#home">HOME</a></li>
                    <li className="navLink"><a href="#about">ABOUT</a></li>
                    <li className="navLink"><a href="#work">WORK</a></li>
                    <li className="navLink"><a href="#contact">CONTACT</a></li>
                </ul>
                </div>
                </nav>
                </header>
            </>

        );
    }
}

export default withRouter(NavBar);