import React from "react";

class Jeton extends React.Component {
    
    render() {
        return (
            <div className={`rounded-circle d-flex justify-content-center align-items-center border-6 ${this.props.color}`} id="jeton">
                <img src={this.props.icon} alt="" />
            </div>
        )
    }
}

export default Jeton