import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <header>
                <h1 className="center-align">New York Times</h1>
            </header>
        );
    }
}

export default Header;