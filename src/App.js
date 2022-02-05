import React from 'react';
import ScoreDashboard from './components/scoreDashboard';
import GameDashboard from './components/gameDashboard';
import Game from './components/game';
import Rules from './components/rules';
import Modal from './components/modal';

import Ciseau from './img/icon-scissors.svg'
import Papier from './img/icon-paper.svg'
import Pierre from './img/icon-rock.svg'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
       visible : false,
       couleur : "",
       valeur : "",
       score : 0,
       choixPlayer : "plop",
       bot : 0,
       iconRandom : "",
       colorRandom : "",
       marre : "tets"
    }
  }

  onChoixParent = (valeur,couleur,visible,yourChoose) => {
    this.setState({
      valeur : valeur,
      couleur : couleur,
      visible : visible,
      choixPlayer : yourChoose,
    })
    let plop = Math.floor(Math.random() * 3)
    let x = {...this.state}
    x.bot = plop
    if ( x.bot === 0 ) {
      x.colorRandom = "border-primary"
      x.iconRandom = Papier
    }
    if ( x.bot === 1 ) {
      x.colorRandom = "border-warning"
      x.iconRandom = Ciseau
    }
    if ( x.bot === 2 ) {
      x.colorRandom = "border-danger"
      x.iconRandom = Pierre
    }
    if (yourChoose === x.bot) {
      x.score = x.score + 0
      x.marre = "PLOP"
    }
    if (( x.bot === yourChoose + 1) || (yourChoose === 2 && x.bot === 0)) {
      x.score = x.score - 1
      x.marre = "YOU LOSE"
    }
    if (( yourChoose === x.bot + 1) || (x.bot === 2 && yourChoose === 0)) {
      x.score = x.score + 1
      x.marre ="YOU WIN"
    }
    this.setState({
      iconRandom : x.iconRandom,
      colorRandom : x.colorRandom,
      score : x.score,
      choixPlayer : x.choixPlayer,
      bot : x.bot,
      marre : x.marre,
    })
  }

  onPlayAgainParent = (play) => {
    this.setState({
      visible : play
    })
  }

  bot = () => {
    
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <ScoreDashboard 
          score = {this.state.score}
        />
        { this.state.visible === true &&
          <Game
            // Choix
            icon = {this.state.valeur}
            color = {this.state.couleur}
            // Bot
            iconRandom = {this.state.iconRandom}
            colorRandom = {this.state.colorRandom}
            // Recup
            onPlayAgain = {this.onPlayAgainParent}
            titleGame = {this.state.marre}
          />
        }
        { this.state.visible === false &&
          <GameDashboard 
            onChoix={this.onChoixParent}/>
        }
        <Rules/>
        <Modal />
      </div>
    )
  }
}

export default App;
