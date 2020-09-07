import React, { Component } from 'react'
import Aux from "../../hoc/Auxi"
import Burger from "../../components/Burger/Burger"

 class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
     
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
