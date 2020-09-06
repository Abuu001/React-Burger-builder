import React, { Component } from 'react'
import Aux from "../../hoc/Auxi"

 class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
     
    render() {
        return (
            <Aux>
             <div>Burger</div>
             <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder
