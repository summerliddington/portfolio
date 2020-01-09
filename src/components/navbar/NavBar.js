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
                    <li><Link className="navLink" to="/">SUMMER LIDDINGTON</Link></li>
                    </div>
                    <ul className="navLinks">
                        <li><Link className="navLink" to="/about">ABOUT</Link></li>
                        <li><Link className="navLink" to="/work">WORK</Link></li>
                        <li><Link className="navLink" to="/contact">CONTACT</Link></li>
                    </ul>
                </nav>
            </header>
            </>

        );
    }
}

export default withRouter(NavBar);