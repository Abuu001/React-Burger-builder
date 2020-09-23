import React, { Component } from 'react'
import Aux from "../../hoc/Auxi"
import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE={
    salad: 0.5,
    bacon : 0.8,
    cheese : 0.99 ,
    meat : 0.21 
}
 class BurgerBuilder extends Component {
    constructor(props) {
        super()
        this.state = {
            ingredients : {
                salad: 0,
                bacon : 0,
                cheese : 0 ,
                meat : 0 
            },
            totalPrice: 4
        }
        this.addIngredientHandler=this.addIngredientHandler.bind(this)
        this.removeIngredientHandler=this.removeIngredientHandler.bind(this)
    }

    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients
        const updatedCount= oldCount + 1
        const updatedIngredients ={
            ...this.state.ingredients
        } 

        updatedIngredients[type] = updatedCount
        const priceAddition= INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
    }
    removeIngredientHandler=(type)=>{

    }
    render() {
        return (
            <Aux>
                <Burger  ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;
