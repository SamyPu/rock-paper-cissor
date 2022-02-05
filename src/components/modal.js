import React from "react";
import ImgRules from "../img/image-rules.svg"

class Modal extends React.Component {
    render() {
        return (

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered justify-content-center">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">RULES</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <img src={ImgRules} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Modal