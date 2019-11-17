import React, { Component } from 'react'

class Card extends React.Component {


    render() {
        return (
            <div className="row mx-auto">
                <div className="card m-4 col-3">
                <h5 class="card-title">Puzzle Slider</h5>
                    <img src="/PuzzleSlider.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>



                <div className="card m-4 col-3">
                <h5 class="card-title">Tic Tac Toe</h5>
                    <img src="/TicTacToe.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>


                <div className="card m-4 col-3">
                <h5 class="card-title">Weather App</h5>
                    <img src="/Weather.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>


                <div className="card m-4 col-3">
                <h5 class="card-title">Calculator</h5>
                    <img src="/Calculator.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

        )

    }

}

export default Card