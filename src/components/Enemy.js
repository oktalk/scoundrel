import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Enemy extends Component {
  static propTypes = {
    potionDrank: PropTypes.bool.isRequired,
    hp: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    updatePlayer: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    shield: PropTypes.number.isRequired,
    shieldRank: PropTypes.number.isRequired,
    suit: PropTypes.string.isRequired
  };

  onClick = () => {
    let effect = this.props.hp;
    let setShield = this.props.shield;
    let setShieldRank = this.props.shieldRank;

    if(this.props.shield === 0) {
      effect = this.props.hp - this.props.number;
    } else if (this.props.shield < this.props.number) {
      effect = this.props.hp - (Math.abs( this.props.shield - this.props.number ));
    }

    if (this.props.shield > 0 && this.props.shieldRank === 0) {
      setShieldRank = this.props.number;
    } else if (this.props.shieldRank >= this.props.number) {
      setShieldRank = this.props.number;
    } else {
      setShield = 0;
      setShieldRank = 0;
    }
    const setGameState = (effect < 0) ? 'Game over' : '';
    this.props.updatePlayer({ hp: effect, shield: setShield, shieldRank: setShieldRank, gameState: setGameState });
    this.props.handleClick({ suit: this.props.suit, number: this.props.number });
  }

  render() {
    return (
      <Card suit={this.props.suit}
            number={this.props.number}
            onClick={this.onClick} />
    );
  }
}

export default Enemy;