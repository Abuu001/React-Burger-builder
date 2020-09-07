import React from 'react'
import "./Burger.css"
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient"

function Burger(props) {
return (
    <div className="Burger">
            <BurgerIngredient  type="bread-top"/>
            <BurgerIngredient  type="cheese"/>
            <BurgerIngredient  type="meat"/>
            <BurgerIngredient  type="bread-bottom"/>
    </div>
    )
}

export default Burger;