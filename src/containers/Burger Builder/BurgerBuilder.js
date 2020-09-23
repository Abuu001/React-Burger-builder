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
            totalPrice: 4,
            purchaseable:false
        }
        this.addIngredientHandler=this.addIngredientHandler.bind(this)
        this.removeIngredientHandler=this.removeIngredientHandler.bind(this)
        this.updatePurchase=this.updatePurchase.bind(this)
    }
    updatePurchase=(ingredients)=>{
 
        const sum =Object.keys(ingredients)
        .map(igKey=>{
            return ingredients[igKey]
        })
        .reduce((sum,el) =>{
            return sum + el
        },0);
        this.setState({
            purchaseable : sum> 0
        });
        console.log(sum);
    }
    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type]
        const updatedCount= oldCount + 1
        const updatedIngredients ={
            ...this.state.ingredients
        } 

        updatedIngredients[type] = updatedCount
        const priceAddition= INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({
            totalPrice : newPrice,
            ingredients : updatedIngredients
        })
        this.updatePurchase(updatedIngredients)
    }
    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type]
            if(oldCount<=0){
                return  ;
            }
        const updatedCount= oldCount - 1
        const updatedIngredients ={
            ...this.state.ingredients
        } 

        updatedIngredients[type] = updatedCount
        const priceDeduction= INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({
            totalPrice : newPrice,
            ingredients : updatedIngredients
        })
        this.updatePurchase(updatedIngredients)
    }
    render() {
        return (
            <Aux>
                <Burger  ingredients={this.state.ingredients}/>
                <BuildControls
                  ingredientAdded={this.addIngredientHandler}
                  ingredientRemove={this.removeIngredientHandler}
                  price={this.state.totalPrice}
                  purchaseable={this.state.purchaseable }
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
