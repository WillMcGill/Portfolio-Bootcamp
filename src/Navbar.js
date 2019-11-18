import React, { Component } from 'react'


class Navbar extends Component {

    render() {
        const aTags = this.props.NavbarItems.map((item, idx) => {
            console.log(this.props);
            return (
                <a key={idx} target={item.target} className="nav-item nav-link" href="#" onClick={() => this.props.pageChange(idx+1)}>{item.name} </a>
            )
        })
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Will McGill</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <ul className="navbar-nav mr-auto">

                            {this.props.NavbarItems ? aTags : ""}
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;

