import React from "react"
import "./Button.css"

const Button =(props)=>(
        <div>
            <button
            className="Button "
            onClick={props.clicked}
            >{props.children}</button>
        </div>
)

export default Button ;