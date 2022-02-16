import React, {Component} from 'react';
import "./Dice.css"

class Dice extends Component {
    render(){
        const { number, isRolling } = this.props;

        return <i className = {`fas fa-dice-${number} ${ isRolling && "roll" }`}  ></i>
    }
}

export default Dice;