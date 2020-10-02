import React, { Component } from 'react'
import Aux from "../../hoc/Auxi"
import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummery/OrderSummary"
import axios from '../../../src/axios'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"

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
            ingredients : null,
            totalPrice: 4,
            purchaseable:false,
            purchasing: false,
            loading:false,
            error :false
        }
        this.addIngredientHandler=this.addIngredientHandler.bind(this)
        this.removeIngredientHandler=this.removeIngredientHandler.bind(this)
        this.updatePurchase=this.updatePurchase.bind(this)
        this.purchaseHandler= this.purchaseHandler.bind(this)
        this.purchaseCancelHandler=this.purchaseCancelHandler.bind(this)
        this.purchaseContinueHandler=this.purchaseContinueHandler.bind(this)
    }
    componentDidMount(){
        axios.get('/ingredients.json')
        .then(response=>{
            this.setState({ingredients :response.data})
        })
        .catch(error=>{
            this.setState({error : true})
        });
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
     //   alert("You continue !!")
     this.setState({loading : true})
     const order={
        ingredients :this.state.ingredients,
        price : this.state.totalPrice,
        customer:{
            name : 'Abraham Lugonzo',
            address:{
                street: 'Nairobi',
                zipcode : 3487,
                country :'Kenya'
            },
            email: 'mandoch@gmail.com'
        },
        deliveryMethod :'fastest'
     }
     axios.post('/orders.json',order)
     .then(response=>{
         this.setState({loading:false, purchasing : false})
        // console.log(response)
     })
     .catch(error=>{
        this.setState({loading:false, purchasing : false})
     //      console.log(error)
    });
    }

    render() {
        let orderSummery = null;
        let burger = this.state.error ?<p> Ingredients cant be loaded</p>  : <Spinner />;
        
        if(this.state.ingredients){ 
            burger= (
                <Aux>
                    <Burger  ingredients={this.state.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler }
                        purchaseable={this.state.purchaseable}
                    />
                </Aux>
            );
            orderSummery=    <OrderSummary 
               ingredients={this.state.ingredients}
               ordered ={this.props.purchaseable}
               purchaseCancelled={this.purchaseCancelHandler}
               purchaseContinued={this.purchaseContinueHandler}
               price ={this.state.totalPrice}
           />
        }
        if(this.state.loading){
            orderSummery= <Spinner />
        }
        return (
            <Aux>
                <Modal  show={this.state.purchasing}    modalClosed={this.purchaseCancelHandler}>
                    {orderSummery}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder,axios);
