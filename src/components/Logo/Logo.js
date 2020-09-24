import React from "react"
import BurgerLogo from "../../assets/images/burger-logo.png"
import "./Logo.css"

const Logo =props=>(
    <div className="Logo">
        <img  src={BurgerLogo} alt="Burger logo"/>
    </div>
)
export default Logo;