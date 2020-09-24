import React, { Component } from 'react'
import Aux from "../../hoc/Auxi"
import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummery/OrderSummary"

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
            purchaseable:false,
            purchasing: false
        }
        this.addIngredientHandler=this.addIngredientHandler.bind(this)
        this.removeIngredientHandler=this.removeIngredientHandler.bind(this)
        this.updatePurchase=this.updatePurchase.bind(this)
        this.purchaseHandler= this.purchaseHandler.bind(this)
        this.purchaseCancelHandler=this.purchaseCancelHandler.bind(this)
        this.purchaseContinueHandler=this.purchaseContinueHandler.bind(this)
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
    purchaseHandler=()=>{
        this.setState({
            purchasing : true
        })
    }
    purchaseCancelHandler=()=>{
        this.setState({
            purchasing: false
        })
    }
    purchaseContinueHandler=()=>{
        alert("You continue !!")
    }

    render() {
        return (
            <Aux>
                <Burger  ingredients={this.state.ingredients}/>
                <Modal  show={this.state.purchasing}    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    ordered ={this.props.purchaseable}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                   />
                </Modal>
                <BuildControls
                  ingredientAdded={this.addIngredientHandler}
                  ingredientRemove={this.removeIngredientHandler}
                  price={this.state.totalPrice}
                  ordered={this.purchaseHandler }
                  purchaseable={this.state.purchaseable}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
