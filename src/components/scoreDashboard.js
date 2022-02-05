import React from "react";

class ScoreDashboard extends React.Component {
    render() {
        return (
            <div className="row justify-content-center" id="scoreDashboard">
                <div className="col-11 col-md-8 col-lg-7 border border-3 m-4 m-lg-5 p-3 border-secondary rounded-4">
                    <div className="row justify-content-between">
                        <div className="col">
                            <h1 className='lh-1'>ROCK</h1>
                            <h1 className='lh-1'>PAPER</h1>
                            <h1 className='lh-1'>SCISSORS</h1>
                        </div>
                        <div className="col-5 col-sm-3">
                            <div className="col score text-center d-flex flex-column justify-content-center rounded-4">
                                <p className="mb-1 mb-sm-2 ">SCORE</p>
                                <span className="lh-1">{this.props.score}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScoreDashboard