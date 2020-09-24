import React from "react"
import  "./BuildControls.css"
import BuildControl from  "./BuildControl/BuildControl"

const controls=[
    {label: "Salad" ,type : 'salad'},
    {label: "Meat" ,type : 'meat'},
    {label: "Cheese" ,type : 'cheese'},
    {label: "Bacon" ,type : 'bacon'},
];

const BuildControls=(props)=>(
    <div className="BuildControls">
        <h3><i>Current Price : <strong>${props.price.toFixed(2)}</strong></i></h3>
        {controls.map(ctrl =>(
            <BuildControl  
                key={ctrl.label} 
                label={ctrl.label}
                added={()=>props.ingredientAdded(ctrl.type)} 
                remove={()=>props.ingredientRemove(ctrl.type)}
           />
        ))
        }
        <button className="OrderButton"
          onClick={props.ordered}
          disabled={ !props.purchaseable}
        >ORDER NOW!!</button>
    </div>
)

export default BuildControls