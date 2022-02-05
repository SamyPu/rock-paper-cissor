import React from "react";
// Image
import Jeton from './jeton';

class Game extends React.Component {

    playAgain = (play) => {
        this.props.onPlayAgain(play);
    }

    render() {
        return (
            <div className="container my-5 my-lg-4 my-xl-5" id="game">
                <div className="row justify-content-center">
                    <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center flex-column text-center">
                        <Jeton
                            icon={this.props.icon}
                            color={this.props.color}
                        />
                        <p>YOU PICKED</p>
                    </div>
                    <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center flex-column text-center">
                        <Jeton 
                            icon={this.props.iconRandom}
                            color={this.props.colorRandom}
                        />
                        <p>THE HOUSE PICKED</p>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12">
                        <div className="text-center" id="playAgain">
                            <h2>{this.props.titleGame}</h2>
                            <button type="button" className="btn btn-light mt-2 py-2 px-5 rounded-4" onClick={() => this.playAgain(false)}>PLAY AGAIN</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Game