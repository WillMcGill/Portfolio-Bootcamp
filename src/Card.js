import React, { Component } from 'react'
import axios from 'axios'
import Game from './TTT'


class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data: [] }

        this.getData = this.getData.bind(this)
    }

    getData() {
        axios.get('./Projects.json')
            .then(res => {
                this.setState({ data: res.data })
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {

        const cards = this.state.data.map((item) => {
            return (
                
                
                <div className="card m-4 col-md-3">
                    <h5 class="card-title">{item.title}</h5>
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{item.desc}
                        </p>
                        <a href={item.url} class="btn btn-primary" target = "_blank">Check Me out!</a>
                    </div>
                </div>
            )
        })
        return (
            <>
                <div className="row mx-auto justify-content-center">
                    {cards}
                    <Game />
                </div>
            </>

        )
    }
}

export default Card