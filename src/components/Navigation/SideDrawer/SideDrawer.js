import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import "./SideDrawer.css"
import BackDrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../hoc/Auxi"

const SideDrawer=(props)=>{
    let attatchedClasses=["SideDrawer" ,"Close"];

    if(props.open){
        attatchedClasses=["SideDrawer" ,"Open"];
    }
return(
    <Aux>
        <BackDrop clicked={props.closed}  show={props.open}/>   
        <div  className={attatchedClasses.join(' ')} >
            <Logo  height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </Aux>
)
}

export default  SideDrawer;