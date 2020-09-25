import React from "react"
import Aux from "../../hoc/Auxi"
import  "./Layout.css"
import ToolBar from  "../Navigation/ToolBar/ToolBar"

const Layout=(props)=>{
    return(
        <Aux >
           <ToolBar />
            <main  className="Content">
                {props.children}
            </main>
        </Aux>
    )
}
export default Layout