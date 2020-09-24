import React from "react"
import Aux from "../../../hoc/Auxi"
import Button from "../../UI/Button/Button"

const OrderSummary=(props)=>{
    const ingredientSummary =  Object.keys(props.ingredients)
        .map(igKey=>{
        return (
        <li key={igKey}>
            <span style={{textTransform:"capitalize"}} >{igKey}</span> : {props.ingredients[igKey]}
        </li>)      
        })
                                                                                                                                 
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious  burger with the following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ? </p>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
        </Aux>
    )
}

export default OrderSummary