import React from "react"
import Aux from "../../hoc/Auxi"
import  "./Layout.css"

const Layout=(props)=>{
    return(
        <Aux >
            <div> TOolbar, siderawer ,backdrop</div>
            <main  className="Content">
                {props.children}
            </main>
        </Aux>
    )
}
export default Layout