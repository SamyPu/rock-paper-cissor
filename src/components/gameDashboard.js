import React from "react";
// Image
import Ciseau from '../img/icon-scissors.svg'
import Papier from '../img/icon-paper.svg'
import Pierre from '../img/icon-rock.svg'
import Triangle from "../img/bg-triangle.svg"
// Components
import Jeton from './jeton';

class GameDashboard extends React.Component {

    choix = (valeur,couleur,visible,yourChoose) => {
        this.props.onChoix(valeur,couleur,visible,yourChoose);
    }

    render() {
        return (
            <div className="col my-5 my-lg-4 my-xl-5 d-flex justify-content-center" id="gameDashboard">
                <div className="position-relative plopparent d-flex justify-content-center align-items-center">
                    <img src={Triangle} alt=""/>
                    <div className="position-absolute plopenfant">
                        <div className="row justify-content-center">
                            <div className="jetonBoutton mx-3" onClick={() => this.choix(Papier,"border-primary",true,0)}>
                                <Jeton
                                    icon={Papier}
                                    color="border-primary"
                                />
                            </div>
                            <div className="jetonBoutton mx-3" onClick={() => this.choix(Ciseau,"border-warning",true,1)}>
                                <Jeton
                                    icon={Ciseau}
                                    color="border-warning"
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="jetonBoutton" onClick={() => this.choix(Pierre,"border-danger",true,2)}>
                                <Jeton
                                    icon={Pierre}
                                    color="border-danger"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameDashboard