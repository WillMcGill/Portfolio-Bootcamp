import React, { Component } from 'react'
import Typing from 'react-typing-animation'

class Hero extends Component {

    render() {

        console.log(this.state)
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Hello World!</h1>
                    <Typing>
                    <h2>My name is Will.</h2>
                    </Typing>
                </div>
            </div>
        )
    }

}

export default Hero