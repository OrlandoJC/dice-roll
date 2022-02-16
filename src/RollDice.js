import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides : ["one","two","three","four","five", "six"]
    }

    constructor(props){
        super(props)
        this.state = {
            isRolling : false,
            firstDice : "one",
            secondDice : "three"
        }
        this.rollDice = this.rollDice.bind(this)
    }

    random(){
        return Math.round(Math.random() * 5)
    }

    rollDice(event) {
        this.setState( {
            isRolling : true,
            firstDice : this.props.sides[this.random()],
            secondDice :this.props.sides[this.random()]
        })

        setTimeout(()=> {
               this.setState({
                   isRolling : false
               }) 
        }, 1000)

    }

    render() {
        return (
            <div className='RollDice' >
                <div className='RollDice-dice'>
                    <Dice 
                        number = {this.state.firstDice} 
                        isRolling = {this.state.isRolling} />    
                    <Dice 
                        number = {this.state.secondDice} 
                        isRolling = {this.state.isRolling} />
                </div>
                <button 
                    className ='RollDice-button'
                    onClick   = {this.rollDice} 
                    disabled  = {this.state.isRolling}> { this.state.isRolling ? 'Rolling...' : 'Roll Dice!' }</button>
            </div>
        )
    }
}



export default RollDice