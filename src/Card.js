import React, { Component } from 'react'

class Card extends React.Component {


    render() {
        return (
            <div className="row">
                <div className="card m-4 col-3">
                    <img src="/PuzzleSlider.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 class="card-title">Puzzle Slider</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>



                <div className="card m-4 col-3">
                    <img src="/PuzzleSlider.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 class="card-title">Tic Tac Toe</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>


                <div className="card m-4 col-3">
                    <img src="/PuzzleSlider.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 class="card-title">Weather App</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>


                <div className="card m-4 col-3">
                    <img src="/PuzzleSlider.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 class="card-title">Laravel Library</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

        )

    }

}

export default Card